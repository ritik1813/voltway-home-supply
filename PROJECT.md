# JP Pro Supply — Website

> One-page, high-conversion marketing site for JP Pro Supply, an electrical, plumbing and home-automation material dealer serving Gurgaon and NCR.

## Overview
Single-page React site that sells JP Pro Supply's trade-supply service to three audiences: flat owners doing a renovation or fit-out, contractors / MEP teams running sites, and builders / developers buying phase-wise. Every section funnels the visitor to one of two actions: send a BOQ / material list over WhatsApp, or submit the on-page quote form. The repo folder is still named `voltway-home-supply` (the original brand before the 2026-06-23 rebrand); the Vercel project keeps that name too.

Deployed on Vercel (project `voltway-home-supply`, linked via the git-ignored `.vercel/` folder). Source of truth is `origin/main` on GitHub (`ritik1813/voltway-home-supply`).

## Soul & Vision
A plain, genuine local-business page — not a startup landing page. Copy stays concrete and trade-oriented (BOQ, brand-wise quote, site delivery, authorised sourcing), aimed at beating Bhagirath-market dealers and local Google Business listings on trust and responsiveness. WhatsApp is the primary conversion channel; everything else supports it.

## Main Features
- **Top bar + sticky header** — phone, service area, hours, and a WhatsApp CTA always visible.
- **Video hero** — `public/hero-poster*.jpg` (640 / 1024 / 1280 px, responsive `<img>`) paints first; on screens wider than 900 px that are not on data-saver, 2G/3G or reduced-motion, `public/hero-supply.mp4` (1280 px, 1.7 MB, no audio) is attached after the `load` event and plays over the poster. Phones get the still image only. Headline and two CTAs (quote form / WhatsApp).
- **Trust strip** — authorised-brand logos (Polycab, Havells, Finolex, Legrand, Schneider, Wipro, Jaquar, Cera).
- **Stats bar** — headline numbers (customers / projects / brands). Figures are the owner's estimates, not verified.
- **Products** — three expandable category cards (Electrical, Plumbing, Home Automation) with grouped item lists, brand lines, and per-category WhatsApp + "get quote" buttons that prefill the quote form.
- **Packages** — three audience-specific supply models (flat owner, contractor, builder); selecting one prefills role + categories in the quote form.
- **Process / Why Us / How We Operate** — static explainer sections.
- **Reviews** — six placeholder testimonials with local avatars in `public/avatars/`.
- **CTA band** — "WhatsApp your BOQ" strip.
- **Quote form** — role, category chips, free-text requirement, drag-and-drop file attach with image preview. Submit opens WhatsApp (`wa.me/919310765871`) in a new tab with the filled-in details as the message; files cannot be passed through `wa.me`, so the message asks the customer to attach it in the chat. No backend.
- **FAQ, Footer** — footer carries contact details and GSTIN.
- **Floating WhatsApp widget** — bottom-right chat bubble with a mini pre-chat form that opens `wa.me` with the composed message.
- **SEO layer (back-end only, added 2026-10-19)** — `index.html` carries canonical, Open Graph / Twitter tags, geo meta, preloads and JSON-LD (Organization, HardwareStore/LocalBusiness, WebSite, WebPage, FAQPage). `public/` adds `robots.txt`, `og-image.png` and `static/pages.css`. `scripts/build-pages.mjs` runs after `vite build` and pre-renders static HTML into `dist/`: 4 service pages, `/service-areas/` with 16 area pages, `/blog/` with markdown posts from `site/content/blog/`, plus `sitemap.xml` and `llms.txt`. **Linking rule:** these pages link to the main site; the React app links to them only through the footer "Blog" link (added 2026-10-19 at the owner's request), nothing else in the UI.

## Fundamentals & Constraints
- Static front-end only; no server, no database, no auth. Any lead capture must go through WhatsApp deep links or a future form backend.
- Must look right on phones first — most traffic will come from Google / WhatsApp on mobile.
- Performance budget (Lighthouse mobile, 2026-10-20): score 96–98, FCP ≈ 1.6 s, LCP ≈ 2.0–2.7 s, Speed Index ≈ 1.6 s, CLS 0. Keep the hero poster small, keep fonts self-hosted, and keep images sized to their display size (avatars 128 px, logo 256 px tall).
- Contact details (phone, email, GSTIN) are hard-coded in several components; a change must be applied everywhere (see Key Decisions).

## Architecture
- `index.html` → `src/main.tsx` hydrates `<App />` (React StrictMode) onto the pre-rendered markup in `#root`, or mounts fresh in `vite dev` where the root is empty; it loads the single global stylesheet `src/index.css`. `src/entry-server.tsx` exports `render()` (react-dom/server `renderToString`); `vite build --ssr` compiles it to `dist-ssr/entry-server.js`, which `scripts/build-pages.mjs` runs to inject the home page HTML into `dist/index.html`. Components must stay SSR-safe: browser APIs only inside effects and handlers.
- `src/App.tsx` composes the page top-to-bottom as a flat list of section components and owns the only cross-section state: a `quotePrefill` object (role, categories, CTA text, timestamp). `Products` and `Packages` call back into `App`, which pushes the prefill into `QuoteForm` via props; `QuoteForm` applies it in an effect keyed on the timestamp.
- `src/components/*.tsx` — one file per page section plus `icons.tsx` (inline SVG icon components). Content (category lists, packages, reviews, FAQs) lives as const arrays at the top of each component; there is no CMS or data layer.
- `public/` — static assets served as-is: brand logos, category photos, review avatars, hero video, favicon, `robots.txt`, `og-image.png`, `static/pages.css` (stylesheet for the pre-rendered pages).
- `site/data/business.mjs` — single source of business facts (name, phone, email, GSTIN, address, geo, hours, brands) for the generated pages and `llms.txt`. `site/data/services.mjs` and `site/data/areas.mjs` hold the service and area page content; `site/content/blog/*.md` are blog posts with frontmatter (`title`, `description`, `date`, `category`, `keywords`, `related`) and a `## Frequently asked questions` section that also feeds FAQPage schema. `site/templates/layout.mjs` is the shared HTML shell.
- `scripts/build-pages.mjs` — generator (uses `marked`); `scripts/make-og-image.mjs` — one-off OG image renderer using the preinstalled Playwright Chromium.
- External services: WhatsApp `wa.me` deep links only. Fonts are self-hosted (`public/fonts/*.woff2`, latin subset, variable weight; `@font-face` at the top of `src/index.css` and `public/static/pages.css`).

## Tech Stack
| Layer | Choice | Why |
|---|---|---|
| UI | React 19 + TypeScript | Vite React-TS template; component-per-section keeps a one-pager manageable |
| Build / dev | Vite 8 (`@vitejs/plugin-react`) | Fast HMR, zero-config static output in `dist/` |
| Styling | Hand-written CSS in `src/index.css` (~2.5k lines) | No framework; class-based sections with CSS variables for brand colours |
| Lint | ESLint 10 + typescript-eslint, react-hooks, react-refresh | Template defaults |
| Hosting | Vercel | Static deploy from `main` |
| Lead channel | WhatsApp deep links | Owner runs the business over WhatsApp |

## Design Patterns & Conventions
- One component per section, named for the section (`Hero`, `Packages`, `QuoteForm`…), exported as a named function.
- Static content lives in `const` arrays at the top of the component that renders it.
- Cross-section communication only through `App.tsx` callbacks + props; no context or store.
- Global CSS with section-scoped class names (`.hero`, `.pkg-section`, `.quote-section`…) and shared utilities (`.wrap`, `.btn`, `.btn-primary`, `.kicker`, `.section-head`).
- Icons are inline SVG components in `icons.tsx`; no icon library.
- Scripts: `npm run dev` (local, port 5173), `npm run build` (tsc + vite build + vite SSR build + `build-pages`), `npm run pages` (regenerate SEO pages into an existing `dist/`), `npm run og-image`, `npm run lint`, `npm run preview`.
- Adding a blog post: drop a `.md` file in `site/content/blog/` with the frontmatter above; it is picked up on the next build and added to the blog index, sitemap and `llms.txt`. The pre-rendered pages are not served by `vite dev`; use `npm run build && npm run preview`.

## Plans / Roadmap
- [x] Merge remote branch `claude/quirky-goodall-ekkrgd` into `main` so the repo matches production (done 2026-10-19).
- [x] Quote form submits to WhatsApp with the form contents (done 2026-10-19). A stored-lead backend (email / Sheets) is still open if needed.
- [ ] Replace placeholder reviews and stats with real customer feedback and verified numbers.
- [ ] Swap generic category stock photos for real shop / site photos.
- [ ] Centralise contact details (phone, email, GSTIN) into one constants module so they are edited in one place.
- [ ] Rewrite README.md (still the Vite template text).
- [x] Technical SEO on the home page, pre-rendered service / area / blog pages, sitemap, robots, llms.txt (done 2026-10-19).
- [ ] Add Google Business Profile URL (and any directory listings) to `business.sameAs` in `site/data/business.mjs` and to the Organization JSON-LD in `index.html`.
- [x] Google Search Console property `https://www.jpprosupply.com/` verified by HTML file and `sitemap.xml` submitted; Bing Webmaster Tools set up (owner, 2026-10-19).
- [x] Postal code 122003 confirmed by owner (2026-10-19). No Google Business Profile exists yet; create one, then add its URL to `sameAs`.
- [ ] Keep adding blog posts (target 2 to 4 per month; 10 published as of 2026-10-20) and area pages for new NCR pockets.

## Key Decisions
| Date | Decision | Why |
|---|---|---|
| 2026-06-22 | Start from Vite React-TS template, static site on Vercel | Simple one-pager, no backend needed |
| 2026-06-23 | Rebrand from Voltway Home Supply to JP Pro Supply; position as bulk B2B material dealer | Reflect the real business and its trade customers |
| 2026-06-23 | Keep home automation as a third category; use plain, genuine-business copy | Owner feedback — avoid startup-style marketing tone |
| 2026-06-23 | Add video hero; add then remove a material estimator | Estimator dropped same day as out of scope / distracting |
| 2026-06-24 | Real brand logos in the trust strip | Credibility with contractors who know the brands |
| 2026-06-30 | Single WhatsApp / phone number across the site (then +91 79828 27516) | One contact channel for all CTAs |
| 2026-07-07 | Expandable product category cards + prefill flow into quote form; drop `Capabilities` section | Let visitors pick what they need and land on a half-filled form |
| 2026-07-07 | Local avatar images for placeholder reviews | Avoid hot-linked stock avatars |
| 2026-09-28 | Contact details changed to +91 93107 65871 / contact@jpprosupply.com, real GSTIN 06CJAPS4363K1ZX; GSTIN row added to quote form | Owner's current business details; deployed to production by promoting the branch preview on Vercel |
| 2026-10-19 | Fast-forward `main` to that branch | `main` had fallen behind production; a push to `main` would have rolled the live site back |
| 2026-10-19 | SEO pages are pre-rendered static HTML generated post-build, not React routes | Keeps the React app untouched, gives crawlers and AI engines full HTML without JS, no router or SSR dependency |
| 2026-10-19 | Blog / service / area pages link to the main site; the main site links back only via a footer "Blog" link | Owner's instruction: keep the main UI unchanged apart from that one footer link |
| 2026-10-19 | Quote form opens WhatsApp with the form contents instead of the demo alert | WhatsApp is the owner's working channel; no server needed |
| 2026-10-19 | FAQPage schema on the home page reuses the existing FAQ copy; no Review / AggregateRating schema | Reviews are placeholders; marking them up would risk a manual action |
| 2026-10-19 | `vercel.json` with `trailingSlash: true` | Canonicals and sitemap use trailing-slash URLs for the directory-index pages |
| 2026-10-20 | Pre-render the home page at build time (`vite build --ssr` + inject into `dist/index.html`) and hydrate | First paint without waiting for JS; crawlers and AI engines get full HTML. Replaced the `noscript` summary |
| 2026-10-20 | Hero: responsive poster `<img>` first, video attached after `load` on desktop only; no video on phones, data-saver, slow connections or reduced motion | Chrome counts an autoplaying video's first frame as LCP, which pushed mobile LCP to 5 s |
| 2026-10-20 | Self-host fonts (latin woff2) instead of Google Fonts | The Google Fonts stylesheet was render-blocking for ~0.9 s on mobile; also removes a third-party dependency |
| 2026-10-20 | Hero video re-encoded 1920p/12.4 MB → 1280p/1.7 MB, audio track dropped; avatars 1024 px PNG → 128 px JPEG; logo and brand PNGs resized | Page weight 17 MB → 3.6 MB with no visible change under the hero overlay |
