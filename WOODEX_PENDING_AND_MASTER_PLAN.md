# WOODEX — Pending tasks + master plan

**Date:** 20 August 2026  
**Site of record:** `/home/user/WOODEX-26/` (55 HTML pages, Tailwind + theme.css + app.js)  
**Old root site:** kept, not deleted  
**This document:** pending list, architecture, content/SEO, motion, stack, estimate  
**Status:** Plan only until you answer the questions and say **START**.

---

## 0. What is already done (do not rebuild)

| Area | Status |
|---|---|
| Home 3-slide hero composition | Done. Services card 06 = Craft. 3D Studio highlight band. Stats 500+ / ~20 / 10+ / ISO. Linoxa leftover headings replaced. |
| 3D Studio | Approved cine page. “You are not approving a plan…” **once**. |
| 16 service pages | Unique layouts + unique approval lines. |
| Services hub | Defined groups, not 16 identical cards. |
| Process | 7 gates. BOQ inside Plan + Build. |
| About / Craft / Start / Contact / Projects / Wellstar / 404 / Careers | Cine theme pages. |
| Insights listing | **Linoxa Blog Three** (alternating rows, Discover more, motion). |
| 7 insight articles | Have → 3D → BOQ + blog-post layout. |
| 12 cities + hub | Studio vs nationwide. |
| 6 studies | Requirement → 3D → BOQ. Labelled studies. |
| Tokens | Plus Jakarta Sans, navy `#0c1628`, cream `#f4efe7`, wood `#b8956a`, ink `#12151c`. |
| WhatsApp float | `wa.me/9242111800800` (placeholder). Forms frontend-only. |

**Hard rules that stay**

- Home hero composition not redesigned unless you command it.  
- 3D Studio not redesigned.  
- No fake awards. Named client: **Wellstar only**. Studies labelled studies.  
- No unlimited free design.  
- Approval line for 3D Studio never copied as an H2 elsewhere.

---

## 1. ALL PENDING TASKS

### A — Design system & chrome (high)

- [ ] **Header / mega / footer motion** — dropdown animation closer to Linoxa (fade + rise, not snap). Mega on mobile accordion already exists; polish timing.  
- [ ] **Header on cream pages** — `light-page` navy bar exists on Insights; apply consistently to About, Projects, Contact, cities, articles if logo contrast fails.  
- [ ] **Unique SVG icons** — Linoxa-style line icons for services, process gates, craft. Not generic emoji.  
- [ ] **Inner-page hero height 450–600px** — cine heroes are currently full-viewport. Plan: **inner** heroes (not Home, not 3D Studio) become 520px cine bands with the same overlay type.  
- [ ] **Home hero** — optional: keep / tighten copy / or leave. Not locked for copy; composition stays unless commanded.

### B — Motion (Linoxa-complete)

- [ ] Scroll: every remaining page uses `[data-anim]` (some copied pages still use `.reveal` only).  
- [ ] Mouse: tilt already on `[data-tilt]`; extend to project cards + blog images.  
- [ ] Slider: Home 3-slide already; cine crossfade already.  
- [ ] Background video: Ken Burns is the stand-in; real video only if you supply a file.  
- [ ] Lightbox: exists; wire on project/case images that still lack `.lb-src`.  
- [ ] Reduced-motion: already partly in theme.css; audit.

### C — Linoxa inner templates not yet matched

- [ ] **Projects hub → Portfolio Two** (image grid + hover caption), not only cine + mosaic.  
- [ ] **About → Linoxa About** (stat split, two icon cards, large photo). Content stays Woodex.  
- [ ] **Contact → Contact Two** (already existed on root; WOODEX-26 contact is cine — restyle).  
- [ ] **Case studies → Linoxa project** (large gallery, facts row). Keep Requirement → 3D → BOQ.  
- [ ] **Blog post** — Insights articles have a first pass; polish to Linoxa blog-post spacing.

### D — Content, brand, SEO (real Woodex)

- [ ] **Brand guideline MD** — voice, do/don’t, tokens, proof facts, Wellstar rule.  
- [ ] **Master content plan** — page-by-page H1, meta, approval line, rooms, outputs.  
- [ ] **SEO plan** — titles, descriptions, canonical, sitemap, robots, schema (InteriorDesignStudio + Article + FAQ). Kill leftover “most awarded / 320+ / 15 years” if any remain on root.  
- [ ] **Image alt + linking** — every img has real alt; internal links Home → 3D Studio → service → start.  
- [ ] **Insights remap leftover** — listing is Blog Three; confirm each article still has Have / 3D / BOQ (done) and unique titles for SEO.

### E — Documents you asked for (agent + live support)

- [ ] `DESIGN.md` — tokens, type, buttons, heroes, icons.  
- [ ] `PAGE_MAP.md` — complete architecture / every URL.  
- [ ] `CONTENT_BRAND.md` — voice + proof.  
- [ ] `SEO_PLAN.md` — keywords Pakistan / Lahore / Karachi / Islamabad / 3D / BOQ.  
- [ ] `ESTIMATE.md` — hours by phase.  
- [ ] `AGENT_HANDOFF.md` — how a later agent continues (folder map, do-not-touch, START order).  
- [ ] Live-support notes — WhatsApp widget spec (already floated); optional chat later.

### F — Folder, deploy, stack conversion

- [ ] **Clean folder structure** — `WOODEX-26/` is the site; document vs `scripts/` vs `content/`. Optionally stop serving old root.  
- [ ] **GitHub / Vercel / Hostinger ready** — `sitemap.xml`, `robots.txt`, no secrets, relative links.  
- [ ] **API-ready forms** — POST `/api/brief` stub in JSON; still frontend until backend.  
- [ ] **Next conversion (later):** React + Node **or** WordPress. Not this frontend phase unless you choose it.  
- [ ] Backend / CMS — deferred unless commanded.

### G — QA

- [ ] Mobile 375 / 768 / 1024 / 1440.  
- [ ] Forms validate + success note.  
- [ ] Project filters.  
- [ ] No `page-hero` leftovers (already 0).  
- [ ] Preloader never blocks Home (removed).  
- [ ] Server: `python3 -m http.server 8080 --bind 0.0.0.0` from `WOODEX-26/`.

---

## 2. Page map (architecture)

```
/                         Home (keep composition)
/3d-studio.html           3D Studio (canonical inner)
/services.html            Hub — defined groups
/services/{16}.html       Unique service pages
/process.html             7 gates
/woodex-craft.html        Mill
/about.html               Proof + Wellstar
/projects.html            Studies index
/projects/{6}.html        Requirement → 3D → BOQ
/client-stories.html      Wellstar only
/insights.html            Blog Three listing
/insights/{7}.html        Blog-post + gates
/locations.html           12 cities
/locations/{city}.html
/start-your-project.html  Have / need form
/contact.html
/careers.html
/404.html
```

Skip: Changelog, Style guide (already chosen).

---

## 3. Content + SEO (real Woodex)

**Voice:** DRAWN. THEN BUILT. Design is not decoration.  
**Path:** Discover → Design → Visualize → Plan (budget+BOQ) → Build → Install → Deliver.  
**Proof:** 500+ projects · founder ~20 years · execution 10+ years · ISO 9001 · studios Gulberg III / Clifton / F-7.  
**Named client:** Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore.  
**3D:** See it. Understand it. Build it. Approve a room, not a plan.

**SEO clusters**

| Cluster | Primary pages |
|---|---|
| Interior design Pakistan | Home, About, Locations |
| 3D visualization | 3D Studio, visualization, insight |
| Residential / office / restaurant / café / retail | Service pages |
| Renovation / fit-out / BOQ | Service + process + cost insight |
| Lahore / Karachi / Islamabad | City pages |

Every page: unique `<title>`, meta description, one H1, breadcrumb, internal CTA to Start or 3D Studio.

---

## 4. Theme features (Linoxa checklist)

| Feature | Now | Pending |
|---|---|---|
| 3D transforms | Tilt on some media | All cards / blog images |
| Background video | Ken Burns cine | Real file only if supplied |
| CSS Grid | Yes | Keep |
| Components | Header, btn, cine, b3, footer | Icon set, mega motion |
| CMS | `content/*.json` stubs | Expand + renderer |
| Custom 404 | Yes | — |
| Forms | Frontend | API stub |
| Interactions | Accordion, cine, filters | Mega animation |
| Lightbox | Yes | Wire remaining images |
| Responsive + nav + slider | Yes | QA |
| Retina / web fonts | Yes | — |

---

## 5. Stack decision (not coded until you choose)

| Option | When |
|---|---|
| **Stay HTML5 + Tailwind + JS** (recommended until design is locked) | Finish motion, Linoxa match, docs, deploy static. |
| **React + Node** | After design lock. Next.js + API for briefs. |
| **WordPress** | If they need WP admin, not a custom CMS. |

Do not convert mid-polish.

---

## 6. Estimate (after answers)

| Phase | What | Effort |
|---|---|---|
| **P0 Docs** | DESIGN / PAGE_MAP / BRAND / SEO / ESTIMATE / AGENT_HANDOFF | 0.5 day |
| **P1 Chrome + motion** | Mega, icons, inner hero 520px, tilt/lightbox audit | 1–1.5 days |
| **P2 Linoxa remaining** | Portfolio Two, About, Contact Two, case gallery | 1.5–2 days |
| **P3 SEO + sitemap + folder clean** | Meta, schema, robots, GitHub-ready | 0.5 day |
| **P4 QA** | Breakpoints, forms, links | 0.5 day |
| **P5 Convert** | React+Node or WP | Separate project (1–3 weeks) |

---

## 7. START order (after you answer)

1. Write the six MD docs into `WOODEX-26/docs/`.  
2. Chrome + mega animation + icons + inner hero height.  
3. Remaining Linoxa templates (Projects / About / Contact / cases).  
4. SEO files + folder tidy.  
5. QA.  
6. Stop. Conversion is a new plan.

Home composition and 3D Studio stay unless you change the answers below.

---

## 8. Questions (must answer before START)

See the question card. They lock: stack, inner heroes, and which block we build first.
