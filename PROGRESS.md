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
