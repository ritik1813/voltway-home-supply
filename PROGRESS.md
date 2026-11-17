# Progress Log

Append-only record of every change made in this project. New entries go at the bottom. Never edit or delete earlier entries.

Entry format:

```
## YYYY-MM-DD HH:MM — Short title
- **What:** what was done
- **Files:** files added / changed / removed
- **Why:** the reason or request behind it
- **Status:** done | in progress | blocked (+ notes)
```

---

## Backfilled from git history (project-init)

## 2026-06-22 — Initial commit: Voltway Home Supply website
- **What:** Scaffolded the site from the Vite React + TypeScript template with the first set of section components and global CSS.
- **Files:** `index.html`, `src/`, `package.json`, Vite / TS / ESLint config
- **Why:** Start of the marketing site (commit d6e251f).
- **Status:** done

## 2026-06-22 — Ignore .vercel project link directory
- **What:** Added `.vercel` to `.gitignore`.
- **Files:** `.gitignore`
- **Why:** Keep the Vercel project link out of the repo (commit 16b08d3).
- **Status:** done

## 2026-06-23 — Rebrand to JP Pro Supply and reposition as bulk B2B dealer
- **What:** Replaced Voltway branding with JP Pro Supply; rewrote copy toward contractors, builders and bulk supply.
- **Files:** section components, `index.html`, `src/index.css`
- **Why:** Reflect the real business name and its trade customers (commit 6ee6a6b).
- **Status:** done

## 2026-06-23 — Restore home automation and shift to plain, genuine-business copy
- **What:** Brought home automation back as a third category; toned copy down to a plain local-business voice.
- **Files:** section components
- **Why:** Owner feedback on tone and category coverage (commit 6d8089b).
- **Status:** done

## 2026-06-23 — Add video hero and material estimator, refine site-wide copy
- **What:** Added looping hero video, a `MaterialEstimator` component, and large CSS rework.
- **Files:** `public/hero-supply.mp4`, `src/components/Hero.tsx`, `src/components/MaterialEstimator.tsx`, `src/index.css`, other sections
- **Why:** Stronger first impression and an interactive hook (commit 7801e83).
- **Status:** done

## 2026-06-23 — Center hero copy, organize spacing, lighten video overlay
- **What:** Hero layout and overlay tuning.
- **Files:** `src/components/Hero.tsx`, `src/index.css`
- **Why:** Readability over the video (commit 850e4f0).
- **Status:** done

## 2026-06-23 — Remove hero video watermark, tune overlay contrast, drop estimator
- **What:** Replaced the hero video with a watermark-free cut; removed `MaterialEstimator` and its CSS.
- **Files:** `public/hero-supply.mp4`, `src/App.tsx`, `src/components/MaterialEstimator.tsx` (removed), `src/index.css`
- **Why:** Estimator judged out of scope; cleaner hero (commit ccc9a8c).
- **Status:** done

## 2026-06-24 — Add real brand logos to the dealer network strip
- **What:** Added Havells, Jaquar, Legrand, Polycab, Wipro logos and wired them into `TrustStrip`.
- **Files:** `public/brands/*`, `src/components/TrustStrip.tsx`, `src/index.css`
- **Why:** Credibility with trade buyers (commit 8bc31dd).
- **Status:** done

## 2026-06-24 — Floating WhatsApp widget, more brand logos, footer trim
- **What:** Expanded `FloatingWhatsApp` into a chat-bubble with a pre-chat form; added Cera, Finolex, Schneider logos; trimmed footer; header tweaks.
- **Files:** `src/components/FloatingWhatsApp.tsx`, `src/components/Footer.tsx`, `src/components/Header.tsx`, `src/components/TrustStrip.tsx`, `src/components/icons.tsx`, `public/brands/*`, `src/index.css`
- **Why:** Make WhatsApp the always-available conversion path (commit 1ed632f, message "mm").
- **Status:** done

## 2026-06-30 — Update WhatsApp and contact number to +91 79828 27516
- **What:** Replaced the contact / WhatsApp number everywhere it appears.
- **Files:** `TopBar`, `Header`, `Hero`, `CtaBand`, `Footer`, `QuoteForm`, `FloatingWhatsApp`, `Products`
- **Why:** Owner's business number (commit 3629c92).
- **Status:** done

## 2026-07-01 — Logo, favicon and header / footer branding
- **What:** Added `jp-logo.png` and PNG favicon; reworked header and footer to show the logo lockup; updated `index.html` head.
- **Files:** `public/brands/jp-logo.png`, `public/favicon.png`, `index.html`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/index.css`
- **Why:** Real brand assets replaced the text logo (commit 97fc9fa, message "mm").
- **Status:** done

## 2026-07-07 — Products section, stats bar, reviews, quote-form prefill flow
- **What:** New expandable `Products` category cards with photos, new `StatsBar` and `Reviews` sections, `QuoteForm` rebuilt with category chips and drag-and-drop file attach, `App.tsx` now routes prefill from Products / Packages into the form; `Capabilities` section removed; `WhyUs` and `Packages` rewritten.
- **Files:** `public/categories/*`, `src/App.tsx`, `src/components/{Products,StatsBar,Reviews,QuoteForm,Packages,WhyUs,Footer,Header,icons}.tsx`, `src/components/Capabilities.tsx` (removed), `src/index.css`
- **Why:** Let visitors browse what is supplied and land on a half-filled quote form (commit 0705a35, message ",,,").
- **Status:** done

## 2026-07-07 — Local avatars for placeholder reviews
- **What:** Added six avatar images and pointed `Reviews` at them.
- **Files:** `public/avatars/*`, `src/components/Reviews.tsx`, `src/index.css`
- **Why:** Avoid hot-linked stock avatars (commit ea40008, message "hgh").
- **Status:** done

## 2026-09-28 — (unmerged branch `claude/quirky-goodall-ekkrgd`) New contact details and GSTIN
- **What:** Two commits on a remote-only branch: phone changed to +91 93107 65871, email to contact@jpprosupply.com, GSTIN set to 06CJAPS4363K1ZX, and a GSTIN row added to the quote-form contact block.
- **Files:** `TopBar`, `Header`, `Hero`, `CtaBand`, `Footer`, `QuoteForm`, `FloatingWhatsApp`, `Products`
- **Why:** Made in a Claude Code web session; never merged to `main` (commits 15cf268, cc99674).
- **Status:** blocked — owner must confirm which contact details are correct before merging.

---

## 2026-10-19 14:55 — Project files initialized (project-init)
- **What:** Created `PROJECT.md` (built from the codebase) and `PROGRESS.md` (backfilled from git history). Ran the site locally with `npm run dev`, confirmed it renders at http://localhost:5173 with no console errors. Checked repo status: `main` clean and in sync with `origin/main`; found the unmerged remote branch noted above.
- **Files:** `PROJECT.md`, `PROGRESS.md`
- **Why:** Global rule: every real project carries these two files.
- **Status:** done — files are untracked until committed.

## 2026-10-19 15:05 — Fast-forward main to the contact-details branch
- **What:** Verified on Vercel that production (www.jpprosupply.com) was serving branch `claude/quirky-goodall-ekkrgd`, promoted to Production on 2026-09-28, while `main` still had the old contact details. Fast-forwarded `main` to that branch (ea40008 → cc99674), committed the new project files, pushed.
- **Files:** `src/components/{CtaBand,FloatingWhatsApp,Footer,Header,Hero,Products,QuoteForm,TopBar}.tsx` (via merge), `PROJECT.md`, `PROGRESS.md`
- **Why:** Owner confirmed the new details (+91 93107 65871, contact@jpprosupply.com, GSTIN 06CJAPS4363K1ZX) are correct; without this, the next push to `main` would have redeployed the old details.
- **Status:** done

## 2026-10-19 06:50 — SEO layer: meta tags, structured data, pre-rendered service / area / blog pages
- **What:** Rewrote `index.html` head (title, description, keywords, canonical, robots, geo, Open Graph, Twitter, theme-color) and added JSON-LD (Organization, HardwareStore/LocalBusiness with Sector 52 address and NCR areaServed, WebSite, WebPage, FAQPage from the existing FAQ copy) plus a `noscript` business summary. Added `public/robots.txt` (AI crawlers allowed, sitemap pointer), `public/og-image.png` (rendered with `scripts/make-og-image.mjs`), `public/static/pages.css`, `vercel.json` (trailing slash). Built `scripts/build-pages.mjs`, which runs after `vite build` and pre-renders 4 service pages, `/service-areas/` + 16 Gurgaon/NCR area pages, `/blog/` + 9 posts, `sitemap.xml` (32 URLs) and `llms.txt`. Added `marked` as a dev dependency; `scripts/` and `site/` excluded from ESLint. No change to any React component or `src/index.css`; the main site does not link to the new pages.
- **Files:** `index.html`, `package.json`, `package-lock.json`, `eslint.config.js`, `vercel.json`, `public/robots.txt`, `public/og-image.png`, `public/static/pages.css`, `scripts/build-pages.mjs`, `scripts/make-og-image.mjs`, `site/data/{business,services,areas}.mjs`, `site/templates/layout.mjs`, `site/content/blog/*.md` (9), `PROJECT.md`
- **Why:** Owner wants organic and AI-search leads across all of Gurgaon and NCR without touching the front end; the live site was a single client-rendered URL with no canonical, OG, sitemap, robots or structured data.
- **Status:** done — `npm run build` produces 32 pages, 0 broken internal links, all JSON-LD parses, 107 FAQ Q&As in schema. Pre-existing lint error in `QuoteForm.tsx` (`react-hooks/set-state-in-effect`) untouched. Pending owner: Google Business Profile URL for `sameAs`, Search Console sitemap submission, postal code confirmation.

## 2026-10-19 07:30 — Live: merged to main, Search Console and Bing verified
- **What:** Fast-forwarded `main` to the SEO branch (532ea8a → 6d9759f); Vercel production deploy succeeded at 06:56 UTC. Owner verified `https://www.jpprosupply.com/` in Google Search Console with the HTML file (`public/google45e0cd6a5abab51b.html`, must stay in place), submitted `sitemap.xml`, and set up Bing Webmaster Tools. A first attempt failed because the property had been created as `https://www.jpprosupply.com/sitemap.xml/`; it was re-created with the site root.
- **Files:** `PROJECT.md`
- **Why:** Close out the SEO rollout and record the verified search-engine properties.
- **Status:** done. Remaining owner items: create a Google Business Profile for Sector 52 and send the URL for `sameAs`; decide on wiring the quote form; keep publishing blog posts.

## 2026-10-19 08:10 — Front-end tidy-ups and quote form to WhatsApp
- **What:** Removed the hero eyebrow line ("GURGAON & NCR • ELECTRICAL • PLUMBING • HOME AUTOMATION"); removed the `// ` prefix the `.kicker::before` rule added to every section label; removed the coloured left strip (`::before`) on the three dark stat cards (24 hr, 3-in-1, PAN India) in Why Us; made the quote form fields controlled and changed submit to open WhatsApp with name, phone, role, materials, scope, locality, requirement and a note about any attached file; added a "Blog" link to the footer Company column.
- **Files:** `src/components/Hero.tsx`, `src/components/QuoteForm.tsx`, `src/components/Footer.tsx`, `src/index.css`, `PROJECT.md`
- **Why:** Owner requests after the SEO rollout.
- **Status:** done — verified with a headless browser: eyebrow absent, no `::before` content on kickers or stat cards, footer link present, form submit opens `wa.me/919310765871` with the composed text and does nothing when required fields are empty. Pre-existing lint error in `QuoteForm.tsx` (`react-hooks/set-state-in-effect`, prefill effect) left as is.

## 2026-10-20 03:00 — Performance: pre-rendered home page, hero poster + compressed video, self-hosted fonts, image diet
- **What:** Owner's Lighthouse mobile read FCP 2.7 s, LCP 5.0 s, Speed Index 4.6 s. Changes: (1) home page is now pre-rendered at build time (`src/entry-server.tsx`, `vite build --ssr`, injected into `dist/index.html` by `scripts/build-pages.mjs`; `src/main.tsx` hydrates) and the `noscript` block was removed as redundant; (2) hero shows a responsive poster `<img>` (640/1024/1280 px JPEG, preloaded with `fetchpriority=high` at the top of `<head>`), and the video is attached only after `load`, only on screens over 900 px, and never on data-saver, 2G/3G or reduced-motion; (3) `hero-supply.mp4` re-encoded 1920p 12.4 MB → 1280p 1.7 MB, no audio; (4) Google Fonts replaced by self-hosted latin woff2 (Inter, Space Grotesk, JetBrains Mono) with `@font-face` in `src/index.css` and `public/static/pages.css`, two font preloads, unused weights dropped; (5) review avatars 1024 px PNG (~700 KB each) → 128 px JPEG (~5 KB), `jp-logo.png` 434 KB → 10 KB, Jaquar/Cera logos resized; (6) QuoteForm prefill moved from a `useEffect` to render-time state adjustment, clearing the long-standing `react-hooks/set-state-in-effect` lint error. `dist-ssr/` added to `.gitignore`.
- **Files:** `index.html`, `src/main.tsx`, `src/entry-server.tsx` (new), `src/components/Hero.tsx`, `src/components/QuoteForm.tsx`, `src/components/Reviews.tsx`, `src/index.css`, `public/static/pages.css`, `public/hero-supply.mp4`, `public/hero-poster*.jpg` (new), `public/fonts/*` (new), `public/avatars/*.jpg` (replace .png), `public/brands/{jp-logo,jaquar,cera}.png`, `site/templates/layout.mjs`, `scripts/build-pages.mjs`, `package.json`, `.gitignore`, `PROJECT.md`
- **Why:** Mobile LCP is a Google ranking signal and the hero video was the LCP element; fonts were render-blocking; images were 10–100× their display size.
- **Status:** done — Lighthouse (local, lighthouse@12): mobile simulated 96 (FCP 1.6 s, LCP 2.7 s, SI 1.6 s, TBT 10 ms, CLS 0), mobile observed with devtools throttling 98 (FCP 1.8 s, LCP 2.0 s, SI 1.9 s), desktop 100 (LCP 0.6 s). Page weight 17 MB → 3.6 MB (447 KB transferred on mobile). Headless checks: no hydration warnings, no-JS render shows full page, products/packages prefill, FAQ, WhatsApp widget, header scroll effect and form-to-WhatsApp all work; phones request no video and no Google Fonts. Lint clean. Note: the sandbox Chromium lacks H.264, so video playback itself was verified only as far as `src` being set and `play()` called.

## 2026-10-20 03:40 — "One supplier, one quote" positioning added to SEO surfaces
- **What:** Owner's stated reason customers come to the site is that electrical, plumbing and automation material come from one place on one quote. That message existed in body copy (Why Us 3-in-1 card, service pages, two blog posts) but not in the ranking surfaces. Added it to the home page meta description, keywords and Open Graph description; to the Organization and LocalBusiness descriptions, `knowsAbout` and the BOQ offer in the JSON-LD; to `business.description`, `shortDescription` and a new `usp` field (rendered in `llms.txt` as "Why customers choose us"); to the BOQ service page title, kicker and description and the electrical and plumbing page descriptions; and wrote a new blog post `one-supplier-electrical-plumbing-material-gurgaon` targeting "one stop electrical and plumbing shop gurgaon" and "electrical and plumbing material from one supplier", linked from the three service pages. No visible change to the React UI.
- **Files:** `index.html`, `site/data/business.mjs`, `site/data/services.mjs`, `scripts/build-pages.mjs`, `site/content/blog/one-supplier-electrical-plumbing-material-gurgaon.md` (new)
- **Why:** Rank for the query that matches the actual buying reason, and give AI engines an explicit answer to "why this supplier".
- **Status:** done — build passes, 33 URLs in sitemap, JSON-LD parses, 0 broken internal links.

## 2026-10-20 04:10 — Reviews rewritten in Hinglish / Hindi, fewer face photos, social profiles linked
- **What:** Rewrote the six placeholder testimonials in a natural Hinglish / Hindi / English mix (one in Devanagari); made the avatar optional and show an initials badge for Suresh Yadav, Imran Khan and Vikram Singh, deleting their photo files; added LinkedIn (`linkedin.com/company/144014607`) and Facebook (`facebook.com/profile.php?id=61595050932583`) as `sameAs` on the Organization and LocalBusiness JSON-LD, as icon links in the main-site footer, as text links in the generated-page footers, in `business.mjs` and in `llms.txt`.
- **Files:** `src/components/Reviews.tsx`, `src/components/Footer.tsx`, `src/index.css`, `index.html`, `site/data/business.mjs`, `site/templates/layout.mjs`, `scripts/build-pages.mjs`, `public/avatars/{suresh,imran,vikram}.jpg` (removed), `PROJECT.md`
- **Why:** Owner request; AI tools could not connect the social pages to the business because nothing linked them.
- **Status:** done — build and lint pass, no hydration warnings. Reviews remain placeholders; owner advised to replace with real feedback.

## 2026-11-02 — Repositioned home page copy from "get a quote" to "one trusted supplier for every project"
- **What:** Owner reported many leads only collecting quotes. Rewrote the copy (no layout or structural change) so every section leads with the one-stop, trusted, best-trade-rate, any-project-size message instead of the quotation: hero lead and trust items, hero / header / top-bar CTAs ("Start Your Project With Us", "Start Your Project", "Small Flats to Large Projects"), Products intro and panel buttons, Packages heading, descriptions, bullets and CTA labels, Process step titles and text, How We Operate heading and three cards, Why Us intro, CTA band heading / text / buttons, quote-form kicker, heading, intro, two labels, button default ("Start My Project") and note, footer tagline. Hero headline and FAQ untouched.
- **Files:** `src/components/{TopBar,Header,Hero,Products,Packages,Process,HowWeOperate,WhyUs,CtaBand,QuoteForm,Footer}.tsx`
- **Why:** Position as a long-standing supply partner rather than a quote desk, to attract customers who want one supplier for the whole project.
- **Status:** done — build, lint and hydration checks pass; package and category prefill still work with the new CTA labels.

## 2026-11-02 — Vercel Analytics
- **What:** Added `@vercel/analytics` (2.0.1). `<Analytics />` from `@vercel/analytics/react` is rendered next to `<App />` in `src/main.tsx` for the home page; the pre-rendered pages (`site/templates/layout.mjs`) include Vercel's `window.va` shim and `<script defer src="/_vercel/insights/script.js">` directly, since they are not React. Owner enabled Web Analytics in the Vercel dashboard.
- **Files:** `package.json`, `package-lock.json`, `src/main.tsx`, `site/templates/layout.mjs`
- **Why:** Count visitors and page views across the home page and all SEO pages.
- **Status:** done — build and lint pass; script tag confirmed on home (after hydration) and on static pages. The script 404s on local preview by design; it is served only on Vercel.

## 2026-11-09 — Instagram profile linked
- **What:** Added the Instagram profile (`instagram.com/jpprosupply`, handle confirmed by owner) everywhere LinkedIn and Facebook already appear: icon link in the main-site footer, text link in the generated-page footers, `business.sameAs` / `business.social`, the JSON-LD `sameAs` on Organization and LocalBusiness, and `llms.txt`.
- **Files:** `src/components/Footer.tsx`, `index.html`, `site/data/business.mjs`, `site/templates/layout.mjs`, `scripts/build-pages.mjs`, `PROJECT.md`
- **Why:** Owner request; the business now has an Instagram account.
- **Status:** done — build and lint pass, JSON-LD parses, footer checked in a headless browser (three icons, all open in a new tab).

## 2026-11-13 — Backlink audit: LinkedIn URL fixed, Medium profile linked, Windows build fixes
- **What:** Owner asked to get all external profiles connected to the site and to each other after Google AI Mode reported no indexed backlinks, Facebook and LinkedIn not indexed. Findings: (1) the LinkedIn URL used across the site, `linkedin.com/company/144014607`, redirects every logged-out visitor and crawler to the LinkedIn login page; the public URL of the same page (ID 144014607 confirmed in its HTML) is `linkedin.com/company/jp-pro-supply`. (2) LinkedIn itself serves that page with `<meta name="robots" content="noindex">`; it has 1 follower and an empty overview, so Google cannot index it until LinkedIn lifts the tag. (3) A Medium profile exists at `jpprosupply.medium.com` with one post (published 2026-11-11); the post mentions `jpprosupply.com` as plain text only, so it passes no link. (4) No Google Business Profile or JustDial listing could be found by search. Changes: swapped the LinkedIn URL to the named form and added Medium everywhere the other profiles appear (JSON-LD `sameAs` on Organization and LocalBusiness, `business.sameAs` / `business.social`, main-site footer icon, generated-page footers, `llms.txt`). Also made `scripts/build-pages.mjs` run on Windows: the SSR bundle is imported through `pathToFileURL`, and frontmatter parsing normalises CRLF.
- **Files:** `index.html`, `site/data/business.mjs`, `site/templates/layout.mjs`, `scripts/build-pages.mjs`, `src/components/Footer.tsx`, `PROJECT.md`
- **Why:** A profile only counts as connected when a crawler can follow the link in both directions; the numeric LinkedIn URL was a dead end and Medium was not linked at all.
- **Status:** done locally, not yet committed or pushed — build (33 URLs) and lint pass on Windows; 4 `sameAs` entries on both schema nodes; Medium link present on all 34 generated HTML/llms files. Pending owner: Google Business Profile and JustDial URLs (or confirmation they do not exist yet), a Facebook username, LinkedIn overview and followers, hyperlinking the site inside the Medium post.

## 2026-11-13 — Facebook username URL, Google Business Profile linked
- **What:** Owner set the Facebook page username, so every Facebook link changed from `facebook.com/profile.php?id=61595050932583` to `facebook.com/jpprosupply`. Owner supplied the Google Business Profile share link `https://share.google/wSZoDKyqGNLn5m9LR`; it redirects to the Knowledge Graph entity `kgmid=/g/11p2rpj1yb` ("JP Pro Supply"). Added the profile everywhere the other profiles appear: the entity URL `https://www.google.com/search?kgmid=/g/11p2rpj1yb` in JSON-LD `sameAs` (Organization and LocalBusiness) and `business.sameAs`; the share link as `business.social.google`, a fifth icon in the main-site footer, a "Google" link in the generated-page footers and a line in `llms.txt`. `.footer-social` now wraps so five icons fit a narrow column. JustDial: the owner's short link `https://jsdl.in/DT-233SGD2XWBE` redirects to `justdial.com/DT-233SGD2XWBE`, but JustDial blocks automated requests, so the listing page could not be opened or confirmed; not added.
- **Files:** `index.html`, `site/data/business.mjs`, `site/templates/layout.mjs`, `scripts/build-pages.mjs`, `src/components/Footer.tsx`, `src/index.css`, `PROJECT.md`
- **Why:** Owner request: connect every external profile to the site.
- **Status:** done locally, not yet committed or pushed — build (33 URLs) and lint pass; 5 `sameAs` entries on both schema nodes; 5 footer icons. The Facebook username URL could not be checked from here (Facebook blocks automated requests); owner to confirm it opens in a logged-out browser. Pending owner: the full JustDial listing URL from the browser address bar.

## 2026-11-15 — Search Console connected; five comparison blog posts; wire-grade corrections
- **What:** (1) Profile-link changes from 2026-11-13 committed and pushed to `main` (1f9c1cd). (2) Search Console connected to Claude Code through a local MCP server (`mcp-search-console` 0.4.2, source read and matched to its GitHub release before use) with a read-only service account, `gsc-reader@jpprosupply-search-console.iam.gserviceaccount.com`, added by the owner as a Full user on the domain property `sc-domain:jpprosupply.com`. First read, 16 Oct to 13 Nov: 19 clicks, 668 impressions, average position 9.2; all 33 sitemap URLs indexed; home page last crawled 28 Oct; no referring pages recorded. The two brand-comparison posts drew the most impressions (Polycab vs Havells vs Finolex 273, CPVC vs UPVC vs composite 104), while local buyer queries barely appear. (3) On that evidence, wrote five more comparison posts: FR vs FRLS vs HRFR vs HFFR wire; Legrand vs Schneider vs Anchor vs GM modular switches; Havells vs Legrand vs Schneider MCBs; Astral vs Ashirvad vs Supreme CPVC; Jaquar vs Cera vs Hindware vs Kohler bath fittings. Each has a comparison table, a "which is cheaper" section, a "which to choose" section and four FAQs, with no printed prices. (4) Linked the new posts from five existing posts (in-body link, `related`, `updated: 2026-11-15`). (5) Corrections to existing posts found while checking facts: Polycab Green Wire is HR FR-LSH (heat-resistant low-smoke), not halogen-free, and Havells' halogen-free wire is Life Shield, not Life Guard (which is FR-LSH); the 3BHK list had Anchor Penta at the designer end and Crabtree at the value end, now Penta and Ziva at the value end.
- **Files:** `site/content/blog/{fr-vs-frls-vs-hrfr-vs-hffr-house-wire,legrand-vs-schneider-vs-anchor-vs-gm-modular-switches,havells-vs-legrand-vs-schneider-mcb,astral-vs-ashirvad-vs-supreme-cpvc-pipes,jaquar-vs-cera-vs-hindware-vs-kohler-bathroom-fittings}.md` (new), `site/content/blog/{polycab-vs-havells-vs-finolex-house-wire,cpvc-vs-upvc-vs-composite-pipes-gurgaon-flats,mcb-rccb-distribution-board-sizing-flat,electrical-material-list-3bhk-flat-gurgaon,bathroom-renovation-plumbing-material-checklist}.md`, `PROJECT.md`
- **Why:** Owner request: publish more of the post type that Search Console shows people are searching for.
- **Status:** done — build produces 15 posts and 38 sitemap URLs, 0 broken internal links, all JSON-LD parses, 131 FAQ Q&As, lint clean. Wire-grade names were checked against Havells and Polycab product pages. Switch range tiers and the relative price order of brands are from general trade knowledge and could not be confirmed against current price lists; owner to review those against the lists he quotes from. Not yet done: JustDial URL, request re-crawl of the home page in Search Console.

## 2026-11-17 — Lead tracking layer built (not yet deployed)
- **What:** Owner reported fewer leads since the October and November changes and no way to tell where leads come from. Checked first: Search Console shows about 20 clicks a month from Google, steady since 19 Oct, so search was never the lead source and the SEO work did not remove traffic; the live page, scripts and contact links all work. Likeliest on-page cause is the 2 Nov rewording of every button from quote language ("Request a BOQ Quote", "Get a Quote") to commitment language ("Start Your Project With Us"), made deliberately to cut quote-only leads; also flagged the 28 Sep phone number change and unknown off-site sources. Also found that the header, hero and CTA-band WhatsApp buttons opened an empty chat, which is why leads arrive with their own message. Built a tracking layer, `public/static/track.js`, loaded on the home page (injected by `scripts/build-pages.mjs`) and on every generated page (`layout.mjs`): (1) works out the visit's source from UTM tags, ad click IDs or the referrer and remembers it for the visit and as first-touch; (2) records `contact_whatsapp`, `contact_call`, `contact_email`, `quote_button_click`, `quote_form_seen`, `quote_form_submit`, `copy_contact`, each with page, button place and source; (3) appends a reference code to every WhatsApp message started from the site, `(Ref <source>-<place>)`, and gives the three blank buttons a starter message; (4) sends events to Google Analytics 4 and Microsoft Clarity when `business.analytics.ga4Id` / `clarityId` are filled, and to Vercel Analytics. No name, phone or message text goes to analytics; the quote form is marked `data-clarity-mask`. The footer and quote-section phone and email are now `tel:` / `mailto:` links so taps can be counted.
- **Files:** `public/static/track.js` (new), `src/track.d.ts` (new), `site/data/business.mjs`, `site/templates/layout.mjs`, `scripts/build-pages.mjs`, `src/components/{QuoteForm,FloatingWhatsApp,Footer}.tsx`, `PROJECT.md`
- **Why:** Measure which channel and which button produce leads before changing copy again or spending on ads.
- **Status:** built and tested locally, not committed or pushed — build and lint pass; 29 of 29 browser checks pass in headless Edge (codes for hero, header, band, product, form, chat, sidebar; sources GBP, Google search, Instagram, Facebook, JustDial, ads, AI, Bing, direct; source kept across pages; no duplicate code on repeat clicks; no hydration warnings; GA4 and Clarity queues and library requests with test IDs). Pending owner: GA4 measurement ID and Clarity project ID, approval to push, tagged links placed in each profile, decision on restoring a "get a quote" button.

## 2026-11-17 — Lead tracking deployed; quote wording restored on three buttons
- **What:** Owner approved the push and asked for the "get a quote" button back with no other copy changes. Restored quote wording on the three buttons that lead to the form: header "Start Your Project" to "Get a Quote", hero "Start Your Project With Us" to "Get a Quote", form submit default "Start My Project" to "Get My Quote". All other 2 Nov copy (headings, band, top bar, packages, product and package prefill labels) is unchanged. Deployed together with the lead tracking layer described in the previous entry.
- **Files:** `src/components/{Header,Hero,QuoteForm}.tsx`, plus the tracking files listed in the previous entry
- **Why:** The 2 Nov commitment wording is the likeliest on-page reason for fewer enquiries; a low-commitment quote button is back while the "one supplier" positioning stays in the headings, and the tracking will show whether enquiries recover.
- **Status:** done — build and lint pass; 29 of 29 browser checks pass on the final build. GA4 and Clarity IDs are still empty, so until the owner supplies them only the WhatsApp reference codes and Vercel Analytics events are active.
