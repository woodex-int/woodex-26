# Phase 4/5 — Migration & Technical SEO (complete)

**Date:** 2026-09-08
**App:** `apps/web/` (Next.js, served on port 3000)

## Done this phase

- **Redirect map** (`apps/web/redirects.ts`, wired into `next.config.ts`)
  - 66 old HTML URLs → new routes, `permanent: true` (308)
  - Root pages, 20 services → 8 lines, 8 projects → 7, 11 insights → 7,
    12 city pages → `/contact` (P1 upgrade path documented inline)
  - Verified: all 66 return 308 with correct destination
- **Broken-link + redirect audit** (`apps/web/scripts/audit-links.mjs`)
  - Crawls `/sitemap.xml`, follows every internal `href`/`src`, checks status
  - Result: 58 paths checked · 0 broken links · 66/66 redirects OK
- **`/api/health`** — uptime endpoint
- **`/llms.txt`** — AI-crawler discovery file (brand facts + canonical URLs)
- **LCP preload** — `/images/hero-1.jpg` preloaded with `fetchPriority="high"` on the homepage
- **Content QA sweep** — no forbidden copy (`award-winning`, `320+`, `15/12 years`, `ISO 45001`, industrial, early-learning) anywhere in `apps/web`

## Verified facts used (unchanged)

`500+ projects · founder ~20 years · execution 10+ years · ISO 9001` · Wellstar-only naming ·
WhatsApp `+92 322 4000768` · Call `+92 336 2259477` · `studio@woodex.interior` · LG 90 Link Road, Model Town, Lahore

## Remaining (next candidates)

- **P1:** `/locations` hub + 3 verified studio city pages (Lahore / Karachi / Islamabad)
- **P1:** `/sectors` hub + sector pages (residential, offices, retail, hospitality, restaurants-cafés)
- **Phase 3 leftover:** GSAP motion (currently CSS + IntersectionObserver), Sanity Studio + live preview (needs Sanity project ID + network access to sanity.io)
- **Phase 5 remainder:** full QA matrix (cross-browser, keyboard/SR, CWV measurement), GA4/GTM/Clarity wiring (needs IDs), Resend/CRM lead delivery (needs env vars)
