import { business, waLink } from '../data/business.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 12 12 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z"/></svg>';

const nav = [
  ['/electrical-material-supplier-gurgaon/', 'Electrical'],
  ['/plumbing-material-supplier-gurgaon/', 'Plumbing'],
  ['/home-automation-supplier-gurgaon/', 'Home Automation'],
  ['/service-areas/', 'Areas'],
  ['/blog/', 'Blog'],
];

export function ctaBand(context) {
  const msg = `Hi JP Pro Supply, I'm reading your page on ${context}. I'd like a quote for my material list.`;
  return `
<section class="cta" aria-label="Get a quote">
  <div>
    <h2>Send your BOQ or material list. Get a brand-wise quote.</h2>
    <p>Flat, site or full project. We quote against your actual list at current trade rates and deliver across Gurgaon and NCR, usually within a day.</p>
  </div>
  <div class="actions">
    <a class="btn btn-wa" href="${waLink(msg)}" rel="noopener">${WA_ICON} WhatsApp ${esc(business.phoneDisplay)}</a>
    <a class="btn btn-primary" href="${business.siteUrl}/#quote">Request a quote on jpprosupply.com</a>
  </div>
</section>`;
}

export function faqBlock(faqs = []) {
  if (!faqs.length) return '';
  return `
<section class="faq" id="faq">
  <h2>Frequently asked questions</h2>
  ${faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('\n')}
</section>`;
}

export function breadcrumbHtml(crumbs) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol>${crumbs
    .map((c, i) => (i === crumbs.length - 1 ? `<li aria-current="page">${esc(c.name)}</li>` : `<li><a href="${c.url}">${esc(c.name)}</a></li>`))
    .join('')}</ol></nav>`;
}

export function breadcrumbLd(crumbs) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.url.startsWith('http') ? c.url : business.siteUrl + c.url,
    })),
  };
}

export function sidebar({ related = [], context }) {
  const msg = `Hi JP Pro Supply, I'm reading your page on ${context}. I'd like a quote for my material list.`;
  return `
<aside class="sidebar">
  <div class="card">
    <h3>Get a quote</h3>
    <p class="nap">Send your material list or BOQ. Brand-wise quote at trade rates, delivery across Gurgaon &amp; NCR.</p>
    <a class="btn btn-wa" href="${waLink(msg)}" rel="noopener">${WA_ICON} WhatsApp us</a>
    <a class="btn btn-ghost" href="${business.siteUrl}/#quote">Quote form on jpprosupply.com</a>
  </div>
  <div class="card nap">
    <strong>${esc(business.name)}</strong>
    ${esc(business.address.streetAddress)}, ${esc(business.address.addressLocality)}, ${esc(business.address.addressRegion)} ${esc(business.address.postalCode)}<br>
    <a href="tel:${business.phoneE164}">${esc(business.phoneDisplay)}</a><br>
    <a href="mailto:${business.email}">${esc(business.email)}</a><br>
    ${esc(business.hours)}<br>
    GSTIN ${esc(business.gstin)}
  </div>
  ${related.length ? `<div class="card"><h3>Related</h3><ul>${related.map((r) => `<li><a href="${r.url}">${esc(r.title)}</a></li>`).join('')}</ul></div>` : ''}
</aside>`;
}

export function layout({ title, description, path, ogType = 'website', jsonLd = [], body, publishedTime, modifiedTime, ogImage }) {
  const url = business.siteUrl + path;
  const image = ogImage || business.ogImage;
  const ld = { '@context': 'https://schema.org', '@graph': jsonLd };
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta name="theme-color" content="#0B1B2B">
<meta name="geo.region" content="IN-HR"><meta name="geo.placename" content="Gurugram">
<link rel="icon" type="image/png" href="/favicon.png">
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(business.name)}">
<meta property="og:locale" content="en_IN">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
${publishedTime ? `<meta property="article:published_time" content="${publishedTime}">` : ''}
${modifiedTime ? `<meta property="article:modified_time" content="${modifiedTime}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${image}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/static/pages.css">
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head>
<body>
<header class="site-header">
  <div class="wrap">
    <a class="logo" href="${business.siteUrl}/" title="JP Pro Supply home">
      <img src="/brands/jp-logo.png" alt="JP Pro Supply logo" width="42" height="42">
      <span><span class="brand-name"><span class="b">JP</span> <span class="o">PRO</span> <span class="b">SUPPLY</span></span><span class="brand-cats">ELECTRICAL | PLUMBING | HOME AUTOMATION</span></span>
    </a>
    <nav class="site-nav" aria-label="Pages">${nav.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</nav>
    <div class="header-cta">
      <a class="btn btn-ghost btn-sm" href="${business.siteUrl}/#quote">Get a Quote</a>
      <a class="btn btn-wa btn-sm" href="${waLink()}" rel="noopener">${WA_ICON} WhatsApp</a>
    </div>
  </div>
</header>
<main class="page"><div class="wrap">
${body}
</div></main>
<footer class="site-footer">
  <div class="wrap">
    <div class="cols">
      <div>
        <h5>JP Pro Supply</h5>
        <p>${esc(business.shortDescription)}</p>
        <p><a href="${business.siteUrl}/">www.jpprosupply.com</a></p>
      </div>
      <div>
        <h5>Supply</h5>
        <ul>
          <li><a href="/electrical-material-supplier-gurgaon/">Electrical material, Gurgaon &amp; NCR</a></li>
          <li><a href="/plumbing-material-supplier-gurgaon/">Plumbing &amp; sanitary material</a></li>
          <li><a href="/home-automation-supplier-gurgaon/">Home automation material</a></li>
          <li><a href="/boq-material-supply-contractors-builders-ncr/">BOQ supply for contractors &amp; builders</a></li>
        </ul>
      </div>
      <div>
        <h5>Read</h5>
        <ul>
          <li><a href="/blog/">Blog: buying guides &amp; checklists</a></li>
          <li><a href="/service-areas/">Service areas in Gurgaon &amp; NCR</a></li>
          <li><a href="${business.siteUrl}/#products">Products on jpprosupply.com</a></li>
          <li><a href="${business.siteUrl}/#faq">FAQ on jpprosupply.com</a></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul>
          <li><a href="tel:${business.phoneE164}">${esc(business.phoneDisplay)}</a></li>
          <li><a href="mailto:${business.email}">${esc(business.email)}</a></li>
          <li>${esc(business.address.streetAddress)}, ${esc(business.address.addressLocality)}, ${esc(business.address.addressRegion)} ${esc(business.address.postalCode)}</li>
          <li>${esc(business.hours)}</li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <span>© ${new Date().getFullYear()} ${esc(business.name)}. All rights reserved.</span>
      <span>GSTIN: ${esc(business.gstin)}</span>
    </div>
  </div>
</footer>
</body>
</html>`;
}
