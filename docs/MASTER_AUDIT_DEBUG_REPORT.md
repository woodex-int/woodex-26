# Woodex Interior — Master audit & debug report

**Date:** 20 August 2026  
**Site:** `/home/user/WOODEX-26/` · **66 HTML** · served from port **8080**  
**Plans not deleted:** `WOODEX_PENDING_AND_MASTER_PLAN.md`, `docs/NEXT_PHASE_PLAN.md`, `docs/DESIGN.md`, `docs/PENDING_TODO_LIVE.md`

**Locks used for this audit**
- Linoxa as visual base. Home **3-slide hero composition** not restyled. **3D Studio** page not redesigned.
- Backgrounds: **white + navy `#0c1628`**. 3rd colour **in sections only:** cream `#f4efe7`. Accent wood `#b8956a`. Plus Jakarta Sans only.
- Proof: **500+ / ~20 founder / 10+ execution / ISO 9001**. Named client **Wellstar only**. No awards, no 15/12 years, no ISO 45001, no unlimited free design.
- Exclusive H2 *“You are not approving a plan. You are approving a room.”* **once**, on 3D Studio only.
- WhatsApp `923224000768`. Call `+923362259477`. Desk LG 90 Link Road, Model Town. Hours 10:00–8:30.
- Stack: HTML5 + Tailwind CDN + `css/` + `js/app.js`. Do not delete pages.

---

## Scorecard

| Gate | Result | Notes |
|---|---|---|
| HTML well-formed (66) | **PASS** | 0 unclosed tags |
| Broken internal hrefs | **PASS** | 0 |
| Missing image/src | **PASS** | 0 |
| Unique `<title>` + H1 + canonical | **PASS** | Home has 3 H1s *inside the 3-slide hero* (allowed) |
| `app.js` + `mega.css` on all pages | **PASS** | |
| Sitemap = 66 files | **PASS** | See SEO caveat: **404 is in sitemap** |
| WhatsApp site-wide | **PASS** | 66/66 `923224000768`. No placeholder `9242111…` |
| Fake awards / 320+ / 15 years / ISO 45001 | **PASS** | “Unlimited free design” only appears as a **denial** |
| Exclusive 3D H2 | **PASS** | `3d-studio.html` only |
| Home 3-slide + `#studio-highlight` lx-pin | **PASS** | 3 slides. Exclusive line not on Home |
| Theme body = white | **PASS** | `theme.css` / `home.css` |
| Cream as **page fill** | **PASS (CSS)** | Cards/forms still cream (correct 3rd colour) |
| Contact-three + map | **PASS** | `c3-hero` + full-width map |
| Forms frontend | **PASS** | `#contact-form` / `#project-form` prevented + note |

**Overall:** site is structurally clean. Remaining issues are **copy drift**, **SEO hygiene**, **header contrast**, and **QA at 375–1440** — not a broken build.

---

## P0 — Fix now (real bugs / lock violations)

### 1. Home JSON-LD FAQ ≠ visible FAQ
Visible accordion was rewritten (start / 3D-only / drawings / money / proof).  
JSON-LD in `<head>` still asks *“How do we approach complex design challenges?”* etc.

**File:** `index.html` (~line 67 vs ~line 757)  
**Fix:** Replace `@graph` FAQPage `mainEntity` with the five visible questions.

### 2. Home final CTA leftover Linoxa line
Hero/story were rewritten. Bottom CTA **H2 still reads:**

> Ready to transform your vision into reality

**File:** `index.html` ~line 828  
**Fix:** Match master: *Tell us about your space* (already used once; this second CTA drifted).

### 3. `404.html` is in `sitemap.xml`
Crawlers should not index an error page.

**Fix:** Remove from sitemap; add `<meta name="robots" content="noindex">` on `404.html` (verify).

### 4. Call number not in footer
`tel:+923362259477` appears on **About, Contact, Projects** (and a few others), **not** in the global footer (footer is WhatsApp + email + desk).  
Not a crash. Inconsistent CRO vs Contact page.

**Fix (if commanded):** add Call under footer “Get in touch”.

---

## P1 — Theme / chrome (locked colour)

| Item | Status | Debug |
|---|---|---|
| Body background white | OK | |
| Section fills white / navy | OK | `.bg-cream { background:#fff }` in `theme.css` |
| Cream **inside** sections | OK | cards, `lx-split-card`, form fills, nationwide city tiles, `stat-card` |
| Leftover **class name** `bg-cream` | Cosmetic | 6 case studies still use the class; CSS maps it to white. Rename when touching those files. |
| Header on white after cine | Open | Cine pages: transparent header over photo, then `.scrolled` navy. Insights uses `light-page` navy bar. About/Projects/Contact do **not** use `light-page`. Logo can fail if a white band sits under a non-scrolled header. |
| Mega CTA pill | OK | `.mega .mega-col a` no longer paints `.mega-cta .btn` |
| Mega 5-col | OK | `.mega-wrap:has(.is-5) .mega-media { display:none }` |
| Inner cine-short | OK | All inner pages except Home + 3D Studio. Crumbs top-left; 820px left:20px |
| `assets/icons.svg` unused on nested services | Open | 0 of 20 service pages link the sprite; icons are **inline SVG**. Not broken. |

**CSS load (Home):** `home.css` → `chrome.css` → `theme.css` → `studio.css` → `mega.css` → `lx.css`  
`chrome.css` still contains old `.mega` block; `mega.css` loads last and wins for `.site-header .mega`. Watch specificity if chrome is edited.

---

## P2 — Motion / debug

| Item | Status |
|---|---|
| `[data-anim]` / `.reveal` observer + first-paint fallback | Wired in `app.js` |
| Home partner cards + indicator | Wired |
| `lx-pin` sticky About + Home 3D | Wired; `prefers-reduced-motion` → static |
| Folio `data-tilt` | Added on projects + category hubs |
| Case `lb-src` | Galleries + related thumbs |
| Insight article `data-tilt` on `.bp-hero` | Added |
| Real background video | **Not supplied** — Ken Burns remains |
| 404 motion | Cine-short only; no `[data-anim]` (acceptable) |

**Stall risk:** sticky pin on short viewports (`top: 88px` + `100svh - 88px`). Reduced-motion and `max-width:1100px` already disable pin. Test 375 height.

---

## P3 — Content vs master MD

### Done (this phase)
- Home: *Drawn. Then built.* / routes empty · existing design · 3D-only / FAQ rewritten  
- About: Wellstar as beginning; vision/mission; one team · process · result  
- Services hub: six **What you have** cream cards  
- 3D Studio: situations including **3D-only** (page not redesigned; exclusive H2 once)  
- Service heroes: Residential, Office, Retail, Fit-out aligned to master lines  
- Restaurant / Café / Renovation already matched  
- Start form: have, need, **area, stage, timeline, optional budget**  
- Locations: studio vs nationwide  
- Visualization: exclusive line **removed** from cine paragraph  
- Pharmacy: Wellstar named  

### Drift / leftovers
| Location | Issue |
|---|---|
| Home hero CTAs | Still labelled **Get started** (Linoxa). Master prefers **Start your project**. Composition must stay; label only. |
| Home JSON-LD FAQ | Out of date (P0) |
| Home bottom CTA H2 | *Ready to transform…* (P0) |
| Specialist pages | Unique and on-voice; not fully expanded to 10-block system (**intentionally** — you locked “keep unique sections, tighten copy”) |
| Insights | 7 articles. No extra clusters until commanded |
| Industrial / Institutional | **Not claimed** |

### Proof scan
- Wellstar only named client  
- “Unlimited free design” only as **we do not promise**  
- No Garden Town / AenZay paste  

---

## P4 — SEO / deploy hygiene

| Item | Status |
|---|---|
| Canonical + OG + Twitter on all 66 | Pass |
| `robots.txt` Allow + sitemap | Pass |
| `sitemap.xml` 66 URLs = 66 HTML | Pass, but **includes 404.html** |
| JSON-LD InteriorDesignStudio | Home + About |
| JSON-LD FAQPage | Home **stale** |
| `vercel.json` / `netlify.toml` / `.htaccess` | Present |
| Tailwind **CDN** | Fine for this phase; not for a hardened production CSP |
| `content/*.json` | Stubs only — forms do not POST `/api/brief` |

---

## P5 — QA 375 / 768 / 1024 / 1440 (incomplete)

Not visually clicked in this audit. Known watch list:

1. Home 3-slide + side labels (`Layout / Design / Create`) hidden &lt;1100px — by design.  
2. `lx-pin` 280vh — heavy on mobile (already `position:static` &lt;1100).  
3. Services mega 5 columns — Specialist list is long; CTA at bottom. Test 1280.  
4. Cine-short 560px / 480px mobile — crumbs vs logo overlap at 375 if header not scrolled.  
5. Contact-three form: underline inputs; `phone` required in HTML, JS only requires name/email/message.  
6. Nested `../projects/residential.html` — hash leftovers **0**.  

---

## What is *not* a bug

- Three H1s on Home (one per hero slide).  
- Cream on cards, split panel, form fields, nationwide tiles.  
- Class name `bg-cream` if CSS forces white.  
- Inline SVGs instead of `assets/icons.svg`.  
- Ken Burns instead of video.  
- Footer without tel (WhatsApp is the primary float).  
- Unique service section sequences (locked).  

---

## Recommended next START (priority)

1. **Patch P0** — Home JSON-LD FAQ, leftover CTA H2, 404 noindex + drop from sitemap.  
2. Hero button labels *Get started* → *Start your project* (composition untouched).  
3. Optional: footer Call line.  
4. Visual QA 375–1440 (mega, cine crumbs, contact form, lx-pin).  
5. Stop. Conversion (React/WP) remains a **new plan**.

---

## File index for this report

| Path | Role |
|---|---|
| `docs/MASTER_AUDIT_DEBUG_REPORT.md` | This file |
| `docs/PENDING_TODO_LIVE.md` | Live checklist (do not delete theme plans) |
| `docs/CONTENT_MASTER_AGENT.md` | Master content source |
| `WOODEX_PENDING_AND_MASTER_PLAN.md` | Original theme improvement plan |

**Auditor note:** 66 pages parse, link, and render. Debug remaining is **copy/SEO/QA**, not a crashed theme.
