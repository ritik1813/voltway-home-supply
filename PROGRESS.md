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
