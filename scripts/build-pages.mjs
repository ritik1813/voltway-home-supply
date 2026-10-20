// Pre-renders the SEO pages (blog, service pages, service-area pages) into dist/
// after `vite build`, and writes sitemap.xml + llms.txt.
// These pages link TO the main site; the React app never links to them.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { marked } from 'marked';
import { business, faqs as homeFaqs } from '../site/data/business.mjs';
import { services } from '../site/data/services.mjs';
import { areas, areasIntro } from '../site/data/areas.mjs';
import { layout, esc, ctaBand, faqBlock, breadcrumbHtml, breadcrumbLd, sidebar } from '../site/templates/layout.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const blogDir = path.join(root, 'site/content/blog');
const TODAY = new Date().toISOString().slice(0, 10);
const SITE = business.siteUrl;

const slugify = (s) => s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

marked.use({
  gfm: true,
  renderer: {
    heading({ tokens, depth }) {
      const text = this.parser.parseInline(tokens);
      const plain = tokens.map((t) => t.raw).join('');
      return depth === 1 ? `<h1>${text}</h1>\n` : `<h${depth} id="${slugify(plain)}">${text}</h${depth}>\n`;
    },
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      const ext = /^https?:/.test(href) && !href.startsWith(SITE);
      return `<a href="${href}"${title ? ` title="${esc(title)}"` : ''}${ext ? ' rel="noopener"' : ''}>${text}</a>`;
    },
  },
});

function write(relPath, html) {
  const file = path.join(dist, relPath, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return { data: {}, content: raw };
  const data = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let val = line.slice(i + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) val = val.slice(1, -1);
    data[key] = val;
  }
  return { data, content: m[2] };
}

// Pull "## Frequently asked questions" + "### Q" / paragraph pairs out of markdown
// so the same text feeds the visible FAQ and the FAQPage JSON-LD.
function extractFaqs(markdown) {
  const tokens = marked.lexer(markdown);
  const out = [];
  let inFaq = false;
  let current = null;
  for (const t of tokens) {
    if (t.type === 'heading' && t.depth === 2) {
      inFaq = /frequently asked|faq/i.test(t.text);
      continue;
    }
    if (!inFaq) continue;
    if (t.type === 'heading' && t.depth === 3) {
      current = { q: t.text.trim(), a: '' };
      out.push(current);
    } else if (t.type === 'paragraph' && current) {
      current.a += (current.a ? ' ' : '') + t.text.replace(/\s+/g, ' ').trim();
    }
  }
  return out.filter((f) => f.a);
}

const orgRef = { '@id': `${SITE}/#organization` };
const bizRef = { '@id': `${SITE}/#localbusiness` };

function faqLd(faqs, id) {
  if (!faqs.length) return [];
  return [{
    '@type': 'FAQPage',
    '@id': `${SITE}${id}#faq`,
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }];
}

function webPageLd(pathname, name, description, extra = {}) {
  return {
    '@type': 'WebPage',
    '@id': `${SITE}${pathname}#webpage`,
    url: `${SITE}${pathname}`,
    name,
    description,
    isPartOf: { '@id': `${SITE}/#website` },
    about: bizRef,
    inLanguage: 'en-IN',
    ...extra,
  };
}

// ---------- Pre-render the home page ----------
// `vite build --ssr src/entry-server.tsx --outDir dist-ssr` runs before this script and
// emits dist-ssr/entry-server.js. Render <App/> to HTML and place it inside #root so the
// first paint needs no JavaScript; main.tsx hydrates on top of it.
{
  const { render } = await import(path.join(root, 'dist-ssr/entry-server.js'));
  const indexFile = path.join(dist, 'index.html');
  const html = fs.readFileSync(indexFile, 'utf8');
  const shell = '<div id="root"></div>';
  if (!html.includes(shell)) throw new Error('dist/index.html: #root placeholder not found');
  fs.writeFileSync(indexFile, html.replace(shell, `<div id="root">${render()}</div>`));
}

// ---------- Blog ----------
const posts = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md')).map((file) => {
  const raw = fs.readFileSync(path.join(blogDir, file), 'utf8');
  const { data, content } = parseFrontmatter(raw);
  const slug = data.slug || file.replace(/\.md$/, '');
  if (!data.title || !data.description || !data.date) throw new Error(`Blog post ${file} needs title, description and date in frontmatter`);
  return {
    slug,
    path: `/blog/${slug}/`,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated || data.date,
    category: data.category || 'Guides',
    keywords: (data.keywords || '').split(',').map((s) => s.trim()).filter(Boolean),
    related: (data.related || '').split(',').map((s) => s.trim()).filter(Boolean),
    readingTime: Math.max(2, Math.round(content.split(/\s+/).length / 220)),
    faqs: extractFaqs(content),
    html: marked.parse(content),
  };
}).sort((a, b) => (a.date < b.date ? 1 : -1));

const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
const postBySlug = Object.fromEntries(posts.map((p) => [p.slug, p]));

function relatedLinks(slugs = [], limit = 5) {
  return slugs
    .map((s) => serviceBySlug[s] ? { url: `/${s}/`, title: serviceBySlug[s].navTitle } : postBySlug[s] ? { url: postBySlug[s].path, title: postBySlug[s].title } : null)
    .filter(Boolean)
    .slice(0, limit);
}

for (const post of posts) {
  const crumbs = [{ name: 'Home', url: `${SITE}/` }, { name: 'Blog', url: '/blog/' }, { name: post.title, url: post.path }];
  const related = relatedLinks(post.related);
  const otherPosts = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)
    .map((p) => ({ url: p.path, title: p.title }));
  const body = `
${breadcrumbHtml(crumbs)}
<div class="grid">
  <article class="article">
    <span class="kicker">${esc(post.category)}</span>
    <h1>${esc(post.title)}</h1>
    <p class="lede">${esc(post.description)}</p>
    <p class="meta">By ${esc(business.name)} · Published ${post.date}${post.updated !== post.date ? ` · Updated ${post.updated}` : ''} · ${post.readingTime} min read · Gurgaon &amp; NCR</p>
    ${post.html}
    ${ctaBand(post.title)}
  </article>
  ${sidebar({ related: [...related, ...otherPosts], context: post.title })}
</div>`;
  const jsonLd = [
    {
      '@type': 'BlogPosting',
      '@id': `${SITE}${post.path}#article`,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated,
      author: { '@type': 'Organization', name: business.name, url: `${SITE}/` },
      publisher: orgRef,
      mainEntityOfPage: `${SITE}${post.path}`,
      image: business.ogImage,
      articleSection: post.category,
      keywords: post.keywords.join(', '),
      inLanguage: 'en-IN',
      about: bizRef,
      isPartOf: { '@id': `${SITE}/blog/#blog` },
    },
    breadcrumbLd(crumbs),
    ...faqLd(post.faqs, post.path),
  ];
  write(post.path, layout({
    title: `${post.title} | JP Pro Supply Blog`,
    description: post.description,
    path: post.path,
    ogType: 'article',
    publishedTime: post.date,
    modifiedTime: post.updated,
    jsonLd,
    body,
  }));
}

// Blog index
{
  const crumbs = [{ name: 'Home', url: `${SITE}/` }, { name: 'Blog', url: '/blog/' }];
  const cats = [...new Set(posts.map((p) => p.category))];
  const body = `
${breadcrumbHtml(crumbs)}
<span class="kicker">JP Pro Supply blog</span>
<h1>Buying guides for electrical, plumbing &amp; home automation material in Gurgaon &amp; NCR</h1>
<p class="lede">Plain-language checklists and comparisons written by a material dealer, for flat owners, contractors and builders planning work in Gurgaon, Delhi, Noida, Faridabad and Ghaziabad.</p>
<div class="chips">${cats.map((c) => `<a href="#${slugify(c)}">${esc(c)}</a>`).join('')}<a href="/service-areas/">Service areas</a></div>
${cats.map((c) => `
<h2 id="${slugify(c)}">${esc(c)}</h2>
<ul class="list">${posts.filter((p) => p.category === c).map((p) => `
  <li><span class="tag">${p.date} · ${p.readingTime} min</span><a class="title" href="${p.path}">${esc(p.title)}</a><p>${esc(p.description)}</p></li>`).join('')}
</ul>`).join('')}
${ctaBand('the JP Pro Supply blog')}`;
  const jsonLd = [
    {
      '@type': 'Blog',
      '@id': `${SITE}/blog/#blog`,
      url: `${SITE}/blog/`,
      name: 'JP Pro Supply Blog',
      description: 'Buying guides for electrical, plumbing and home automation material in Gurgaon and NCR.',
      publisher: orgRef,
      inLanguage: 'en-IN',
      blogPost: posts.map((p) => ({ '@id': `${SITE}${p.path}#article` })),
    },
    webPageLd('/blog/', 'JP Pro Supply Blog', 'Buying guides for electrical, plumbing and home automation material in Gurgaon and NCR.', { '@type': 'CollectionPage' }),
    breadcrumbLd(crumbs),
  ];
  write('/blog/', layout({
    title: 'Blog: Electrical, Plumbing & Home Automation Buying Guides for Gurgaon & NCR | JP Pro Supply',
    description: 'Material checklists, brand comparisons and BOQ guides for flats, sites and projects in Gurgaon and Delhi NCR, from the team at JP Pro Supply.',
    path: '/blog/',
    jsonLd,
    body,
  }));
}

// ---------- Service pages ----------
for (const svc of services) {
  const p = `/${svc.slug}/`;
  const crumbs = [{ name: 'Home', url: `${SITE}/` }, { name: svc.navTitle, url: p }];
  const related = relatedLinks(svc.related, 6);
  const body = `
${breadcrumbHtml(crumbs)}
<div class="grid">
  <article class="article">
    <span class="kicker">${esc(svc.kicker)}</span>
    <h1>${esc(svc.title)}</h1>
    <p class="lede">${esc(svc.lede)}</p>
    ${marked.parse(svc.body)}
    ${faqBlock(svc.faqs)}
    ${ctaBand(svc.navTitle)}
    <h2>Areas we deliver to</h2>
    <div class="chips">${areas.map((a) => `<a href="/service-areas/${a.slug}/">${esc(a.name)}</a>`).join('')}</div>
  </article>
  ${sidebar({ related, context: svc.navTitle })}
</div>`;
  const jsonLd = [
    {
      '@type': 'Service',
      '@id': `${SITE}${p}#service`,
      name: svc.title,
      serviceType: svc.serviceType,
      description: svc.description,
      provider: bizRef,
      areaServed: business.areaServed.map((n) => ({ '@type': 'Place', name: n })),
      url: `${SITE}${p}`,
      brand: svc.brands.map((b) => ({ '@type': 'Brand', name: b })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: svc.navTitle,
        itemListElement: svc.catalog.map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name } })),
      },
    },
    webPageLd(p, svc.title, svc.description, { mainEntity: { '@id': `${SITE}${p}#service` } }),
    breadcrumbLd(crumbs),
    ...faqLd(svc.faqs, p),
  ];
  write(p, layout({ title: svc.metaTitle, description: svc.description, path: p, jsonLd, body }));
}

// ---------- Service areas ----------
for (const area of areas) {
  const p = `/service-areas/${area.slug}/`;
  const crumbs = [{ name: 'Home', url: `${SITE}/` }, { name: 'Service areas', url: '/service-areas/' }, { name: area.name, url: p }];
  const related = [
    ...services.map((s) => ({ url: `/${s.slug}/`, title: s.navTitle })),
    ...relatedLinks(area.related || [], 3),
  ];
  const title = `Electrical, Plumbing & Home Automation Material Supplier in ${area.name} | JP Pro Supply`;
  const description = area.description;
  const body = `
${breadcrumbHtml(crumbs)}
<div class="grid">
  <article class="article">
    <span class="kicker">Service area · ${esc(area.region)}</span>
    <h1>Electrical, plumbing &amp; home automation material supply in ${esc(area.name)}</h1>
    <p class="lede">${esc(area.lede)}</p>
    ${marked.parse(area.body)}
    <h2>Localities we cover around ${esc(area.name)}</h2>
    <p>${area.localities.map(esc).join(' · ')}</p>
    <h2>What we supply to ${esc(area.name)}</h2>
    <ul>
      <li><a href="/electrical-material-supplier-gurgaon/">Electrical material</a>: Polycab, Havells and Finolex wire, Legrand, Schneider, Anchor and GM Modular switches, MCBs and DBs, LED lighting, fans, conduits.</li>
      <li><a href="/plumbing-material-supplier-gurgaon/">Plumbing and sanitary material</a>: Astral, Ashirvad and Supreme CPVC/UPVC, Jaquar, Kohler and Grohe CP fittings, Hindware and Cera sanitaryware, tanks and drainage.</li>
      <li><a href="/home-automation-supplier-gurgaon/">Home automation material</a>: smart switches, smart locks, video door phones, sensors and smart lighting.</li>
      <li><a href="/boq-material-supply-contractors-builders-ncr/">BOQ-matched project supply</a> for contractors, MEP teams and builders with phase-wise dispatch and one running account.</li>
    </ul>
    ${faqBlock(area.faqs)}
    ${ctaBand(`material supply in ${area.name}`)}
    <h2>Other areas</h2>
    <div class="chips">${areas.filter((a) => a.slug !== area.slug).map((a) => `<a href="/service-areas/${a.slug}/">${esc(a.name)}</a>`).join('')}</div>
  </article>
  ${sidebar({ related, context: `material supply in ${area.name}` })}
</div>`;
  const jsonLd = [
    {
      '@type': 'Service',
      '@id': `${SITE}${p}#service`,
      name: `Electrical, plumbing and home automation material supply in ${area.name}`,
      serviceType: 'Building material supply',
      description,
      provider: bizRef,
      areaServed: { '@type': 'Place', name: area.name, containedInPlace: { '@type': 'AdministrativeArea', name: area.region } },
      url: `${SITE}${p}`,
    },
    webPageLd(p, title, description, { mainEntity: { '@id': `${SITE}${p}#service` } }),
    breadcrumbLd(crumbs),
    ...faqLd(area.faqs, p),
  ];
  write(p, layout({ title, description, path: p, jsonLd, body }));
}

// Areas index
{
  const crumbs = [{ name: 'Home', url: `${SITE}/` }, { name: 'Service areas', url: '/service-areas/' }];
  const regions = [...new Set(areas.map((a) => a.region))];
  const body = `
${breadcrumbHtml(crumbs)}
<span class="kicker">Where we deliver</span>
<h1>Electrical, plumbing &amp; home automation material delivery across Gurgaon &amp; Delhi NCR</h1>
<p class="lede">${esc(areasIntro.lede)}</p>
${marked.parse(areasIntro.body)}
${regions.map((r) => `
<h2 id="${slugify(r)}">${esc(r)}</h2>
<ul class="list">${areas.filter((a) => a.region === r).map((a) => `
  <li><a class="title" href="/service-areas/${a.slug}/">${esc(a.name)}</a><p>${esc(a.lede)}</p></li>`).join('')}
</ul>`).join('')}
${ctaBand('service areas')}`;
  const jsonLd = [
    webPageLd('/service-areas/', 'Service areas', areasIntro.description, { '@type': 'CollectionPage' }),
    {
      '@type': 'ItemList',
      itemListElement: areas.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.name, url: `${SITE}/service-areas/${a.slug}/` })),
    },
    breadcrumbLd(crumbs),
  ];
  write('/service-areas/', layout({
    title: 'Service Areas: Material Delivery Across Gurgaon & Delhi NCR | JP Pro Supply',
    description: areasIntro.description,
    path: '/service-areas/',
    jsonLd,
    body,
  }));
}

// ---------- sitemap.xml ----------
{
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly', lastmod: TODAY },
    ...services.map((s) => ({ loc: `/${s.slug}/`, priority: '0.9', changefreq: 'monthly', lastmod: TODAY })),
    { loc: '/service-areas/', priority: '0.7', changefreq: 'monthly', lastmod: TODAY },
    ...areas.map((a) => ({ loc: `/service-areas/${a.slug}/`, priority: '0.7', changefreq: 'monthly', lastmod: TODAY })),
    { loc: '/blog/', priority: '0.8', changefreq: 'weekly', lastmod: posts[0]?.updated || TODAY },
    ...posts.map((p) => ({ loc: p.path, priority: '0.7', changefreq: 'monthly', lastmod: p.updated })),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`).join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
}

// ---------- llms.txt ----------
{
  const txt = `# ${business.name}

Also written as: ${business.alternateNames.join(', ')}. Website: ${SITE}

> ${business.description}

Contact: ${business.phoneDisplay} (call / WhatsApp), ${business.email}. Address: ${business.address.streetAddress}, ${business.address.addressLocality}, ${business.address.addressRegion} ${business.address.postalCode}, India. Hours: ${business.hours}. GSTIN ${business.gstin}.

Social profiles: LinkedIn ${business.social.linkedin} · Facebook ${business.social.facebook}

Why customers choose us: ${business.usp}

Pricing model: no fixed retail catalogue. Customers send a BOQ or material list (WhatsApp, email or the quote form at ${SITE}/#quote) and receive a brand-wise quote at current trade rates, usually within one day. No minimum order. Delivery to flats and construction sites across Gurgaon and Delhi NCR (Delhi, Noida, Greater Noida, Faridabad, Ghaziabad, Manesar, Sohna).

Brands supplied: ${business.brands.join(', ')}.

## Main site
- [Home](${SITE}/): overview, product categories, supply models, quote form
- [Products](${SITE}/#products): electrical, plumbing & sanitary, home automation item lists
- [FAQ](${SITE}/#faq)

## Services
${services.map((s) => `- [${s.navTitle}](${SITE}/${s.slug}/): ${s.description}`).join('\n')}

## Service areas
- [All service areas](${SITE}/service-areas/)
${areas.map((a) => `- [${a.name}](${SITE}/service-areas/${a.slug}/)`).join('\n')}

## Blog (buying guides)
${posts.map((p) => `- [${p.title}](${SITE}${p.path}): ${p.description}`).join('\n')}

## Frequently asked questions
${homeFaqs.map((f) => `- Q: ${f.q}\n  A: ${f.a}`).join('\n')}
`;
  fs.writeFileSync(path.join(dist, 'llms.txt'), txt);
}

console.log(`pages: ${posts.length} blog posts, ${services.length} service pages, ${areas.length} area pages, blog index, areas index, sitemap.xml, llms.txt`);
