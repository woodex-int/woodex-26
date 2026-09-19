# MISSING PAGES + SECTIONS — FULL AUDIT

_Audit date: 2026-09-19 · Sources of truth: `docker/MASTER.md` (§3 architecture, §6 content master), `docker/SEOMAP.md` (§2 per-page table), `docker/MASTER-WEBSITE-ROADMAP.md` (deliverables matrix), `docker/site-architecture-gap-report.md`._
_Working rule: static-now / SEO-first / frontend-to-launch (D1–D5 decisions). Fact lock and theme lock apply everywhere._

---

## 1 · Scoreboard

| Status | Count | Pages |
|---|---|---|
| ✅ Rebuilt on the section system | **50** | home, about, 3d-studio, insights hub + 11 posts, projects hub + 6 studies + 2 category pages, **services hub + 20 service pages**, privacy-policy, terms, cookie-policy, thank-you, 404 |
| 🟡 Old system — rebuild pending | **20** | locations hub + 12 city pages, process, contact, faq, careers, client-stories, start-your-project, woodex-craft |
| ❌ Missing entirely (planned) | **0** | ~~privacy-policy, terms, cookie-policy, thank-you, llms.txt~~ — **all built 2026-09-19** on the legal/utility template (css/legal.css); thank-you + 404 noindex; legal pages in sitemap |
| ➕ Corpus-briefed, not yet built | **~28** | architecture suite (14), renovation suite (8), residential room pages (6), healthcare-fit-out, complete-home-redesign, interior-home-refurbishment |

Total live today: **71 HTML pages** — all families now on the section system except locations ×13 + conversion/brand ×7 (sitemap lists 68 indexable — thank-you + 404 noindex — current ✓, regenerate after every launch).

### 2.3b Built this pass ✅ (was §2.3 missing)
| Page | Template | Notes |
|---|---|---|
| `privacy-policy.html` | lg-hero · legal-body · cta | canonical only; `[CONFIRM: owner legal review before launch]` |
| `terms.html` | lg-hero · legal-body · cta | Cost-Lock / BOQ / IP language aligned to corpus (renders delivered to client; named clients only by written agreement) |
| `cookie-policy.html` | lg-hero · legal-body · cta | honest: no tracking cookies today; update-before-analytics clause |
| `thank-you.html` | lg-hero · next-steps · cta | noindex; 3-step "what happens next" |
| `404.html` | lg-hero + outlined 404 · link-grid · cta | noindex; design-led per MASTER §6.11 |
| `llms.txt` | — | AI-crawler manifest (NAP + page inventory) |

Footer upgraded sitewide: "Privacy · Terms · Cookies" links in footer-bottom on all 70 pages (root + sub-page paths).

---

## 2 · Page-by-page status

### 2.1 Rebuilt — done ✅ (24)
| Page | Sections (data-section order) | Verified |
|---|---|---|
| `index.html` | pillars-swap · statement-intro · service-split · big-feature · doc-collage · icon-trio · marquee-line · proof-band · blog-grid · cta-getintouch (+ locked 3-slide cine hero) | overflow/contrast/links ✓ |
| `about.html` | page-hero · statement-intro · brand-story · values-grid · ecosystem-swap · gates-table · stop-gate · team-grid · proof-band · studios-band · cta-getintouch | ✓ |
| `3d-studio.html` | page-hero · statement-intro · what-is · who-uses · services-swap · deliverables · process-steps · featured-work · marketing-presales · cost-band · why-grid · proof-band · faq-accordion · cta-brief · related-services | ✓ |
| `insights.html` + 11 posts | page-hero · featured-note · blog-grid · cta-getintouch | ✓ |
| `projects.html` + 8 sub-pages | hub: page-hero · named-work · folio-grid · cta-getintouch · study: study-hero · study-overview · study-challenge · study-solution · study-gallery · study-result · study-related · cta-getintouch | ✓ |

### 2.2 Old system — rebuild queue 🟡 (42)
| Family | Files | Corpus brief |
|---|---|---|
| **Services hub** | `services.html` | MASTER.md §6.3, SEOMAP §2.3 |
| **Service pages ×20** | `services/{architecture, residential, office, retail, shops, fit-out, office-fit-out, commercial-fit-out, residential-fit-out, restaurant, cafe, joinery, renovation, turnkey, space-planning, lighting, drawings, pharmacy, software-house, visualization}.html` | per-page briefs in docker/ (architecture-services, retail-fit-out, pharmacy-fit-out, restaurant-fit-out, turnkey-solutions, plan phases 2–4, sector-*, Residential Interior 7 sub-pages, master-planning, 3d-studio-hub…) — **css/services.css already written; generator next** |
| **Locations ×13** | `locations.html` + {lahore, karachi, islamabad, rawalpindi, faisalabad, multan, gujranwala, sialkot, bahawalpur, hyderabad, peshawar, quta}.html | lahore-location.md + MASTER §6.7 (KHI/ISB `[CONFIRM]` status) |
| **Conversion pages ×5** | `contact.html`, `start-your-project.html` (plan name: consultation), `faq.html`, `process.html`, `404.html` | MASTER §6.8 / §6.9 / §6.10 / §6.11 |
| **Brand pages ×3** | `client-stories.html` (Wellstar named work — fact-locked), `woodex-craft.html` (Woodex Furniture™ bridge), `careers.html` | roadmap Phase-2 "Company & Brand" |

### 2.3 Missing entirely ❌ (planned, no file)
| Planned URL | Actual file to create | Notes |
|---|---|---|
| `/privacy-policy` | `privacy-policy.html` | hostinger-compliant, canonical only |
| `/terms` | `terms.html` | " |
| `/cookie-policy` | `cookie-policy.html` | " |
| `/thank-you` | `thank-you.html` | lead-success page (form target) |
| `llms.txt` | `llms.txt` | AI-crawler manifest (SEOMAP §1) |

### 2.4 Plan-vs-actual URL deviations (locked decisions — keep, don't "fix")
| MASTER.md/SEOMAP plan | Actual | Reason |
|---|---|---|
| `/portfolio`, `/project/<slug>` | `projects.html`, `projects/<slug>.html` | site-wide links + mega menu use projects/ |
| `/insight/<slug>` | `insights/<slug>.html` | same |
| `/service/<slug>` ×8 | `services/<slug>.html` ×20 | header mega menu (uneditable chrome) links all 20 slugs; corpus has a brief per page — 8-page plan superseded by the live 20-page family |
| `/consultation` | `start-your-project.html` | existing URL, linked from every header CTA |
| `/location/<city>` | `locations/<city>.html` | same |
| `/not-found` | `404.html` | same |

---

## 3 · Section gaps — rebuilt pages vs MASTER §6

**Home (§6.1, 12 items).** Present: cine hero (locked) ✓ · structural statement ✓ · 4 pillars ✓ · entry points (icon-trio) ✓ · Cost-Lock (inside doc-collage "Locked numbers") ✓ · proof band ✓ · sectors (big-feature) ✓ · CTA+NAP ✓.
Deviations (deliberate — home is locked to the Linoxa home-two reference): 7-Gate strip condensed into doc-collage (full gates table lives on about + process) · featured portfolio folded into service-split/big-feature · **FAQ (6) section absent on home** — optional add, faq.html carries it · testimonials withheld (fact lock — `[CONFIRM]` only).

**About (§6.2, 11 items).** All 11 present ✓. Founder name/photo remain `[CONFIRM]` placeholders (correct).

**3D Studio (§6.4, 9 items).** All 9 present ✓ + pricing indicative table allowed per fact lock.

**Insights (§6.6).** Hub + 11 posts ✓. Gap: no category pages (posts carry group tags instead) — acceptable; note if categories wanted later.

**Projects (§6.5).** Hub + 6 studies + 2 categories ✓. Plan wanted filter chips + 10–12 cases + Hospitality/Healthcare/Retail categories — not possible until real named/briefed work exists (studies stay honest). Revisit when inventory grows.

**Services (§6.3).** Pending rebuild (this week): hub 4-block + 20 service pages on the single-service template; pricing anchors stay OUT of copy (fact lock) except the 3D-studio/insights-3d tables.

---

## 4 · Corpus-briefed pages not yet built (expansion backlog ~28)

**Architecture suite (roadmap: 15 pages — 1 is services/architecture.html):**
`5-marla` · `10-marla` · `1-kanal` · `2-kanal` houses · farmhouses · front-elevation · master-planning · educational · healthcare-facilities · office-buildings · retail-buildings · restaurants-cafes (arch-*.md briefs) · residential-architecture hub · commercial-architecture hub.

**Renovation suite (roadmap: 7+):** commercial · retail · healthcare · restaurant · residential · specialized · office renovation (+ apartment-renovation brief).

**Residential room pages (7-sub-pages brief):** bedroom · kitchen · living room · dining · home office · kids room (hub = services/residential.html).

**Standalone briefs:** healthcare-fit-out (only pharmacy exists in services today) · complete-home-redesign · interior-home-refurbishment.

_Sector briefs (corporate-offices, F&B, healthcare, retail, software-houses) are covered by the existing services pages — do not build duplicates (cannibalisation risk)._

---

## 5 · Chrome / nav / footer — state after this audit (2026-09-19)

- Header mega + dropdowns: hover-intent open (70 ms) / close delay (170 ms), first-tap-open → second-tap-navigate on touch, Escape + outside-click close, `aria-expanded` synced (`js/app.js` Nav UX module).
- Active page highlight: `.is-current` on top nav, mega items (dot marker), drop links, mobile nav, footer links (`css/mega.css`).
- Footer: "Client stories" → `client-stories.html` added to Explore column on all 65 pages; all footer/nav targets return 200 ✓.
- Locked: theme.css / chrome.css untouched; visual tokens unchanged.

---

## 6 · SEO utilities

| Item | Status |
|---|---|
| sitemap.xml | ✅ current (65 URLs) — regenerate on every page launch |
| robots.txt | ✅ present — verify disallow list before backend phase |
| llms.txt | ✅ built (NAP + core/service/policy URLs) |
| Schema per page | ✓ on rebuilt pages (legal/utility pages: WebPage + BreadcrumbList; thank-you/404 noindex) (Service/Article/BreadcrumbList/FAQPage, fact-locked provider); re-audit after services/locations rebuilds |
| GA4/GTM/Clarity | ⏸ backend/later phase (D4) |

---

## 7 · Per-page rebuild map — every pending page (2026-09-19)

Current word counts measured from `<main>` bodies. Every rebuild replaces the old body with the named template + its docker brief; chrome, URLs and mega-menu slugs stay unchanged.

### Services family (21) — ✅ REBUILT 2026-09-20 (per docs/SERVICES_MASTER_PLAN.md; unique CTA + FAQ trio per page)
| Page | Now | Rebuild source |
|---|---|---|
| services.html (hub) | 393w | MASTER §6.3 + SEOMAP §2.3 — pillar grid + 5-group index + path/Cost-Lock band |
| services/architecture.html | 603w | architecture-services.md |
| services/residential.html | 805w | Residential Interior 7 sub-pages.md (hub of the room family) |
| services/office.html | 605w | plan phase 2.md + sector-corporate-offices.md |
| services/retail.html | 579w | retail-fit-out.md |
| services/shops.html | 539w | sector-retail.md (brand outlets + rollout) |
| services/fit-out.html | 571w | turnkey-solutions.md (fit-out scope) + plan phases 3–4 |
| services/office-fit-out.html | 482w | plan phase 3.md |
| services/commercial-fit-out.html | 488w | plan phase 4.md |
| services/residential-fit-out.html | 458w | turnkey + residential corpus (new-home completion) |
| services/restaurant.html | 596w | restaurant-fit-out.md |
| services/cafe.html | 547w | sector-fb.md |
| services/joinery.html | 628w | Woodex Furniture™ corpus (business model + joinery mentions) |
| services/renovation.html | 641w | renovation-hub.md |
| services/turnkey.html | 493w | turnkey-solutions.md |
| services/space-planning.html | 585w | architecture-services (space-planning scope) + master-planning.md |
| services/lighting.html | 550w | 3d-studio-hub.md (lighting studies) + lighting corpus mentions |
| services/drawings.html | 591w | architecture-services.md (working drawings) + front-elevation-design.md |
| services/pharmacy.html | 652w | pharmacy-fit-out.md (named work: Wellstar DHA Lahore) |
| services/software-house.html | 523w | sector-software-houses.md |
| services/visualization.html | 589w | 3d-studio-hub.md (bridge page → 3d-studio.html) |

### Conversion core (4) — after services
| Page | Now | Rebuild source |
|---|---|---|
| process.html | 613w | 7-Gate lifecycle (MASTER §6 + about gates-table as reference) |
| contact.html | **79w** (thinnest page on the site) | MASTER §6.8 — ContactForm, map embed, ContactPage schema |
| start-your-project.html | 211w | MASTER §6.9 — ProjectForm (consultation), "before you book / how to prepare" |
| faq.html | 382w | MASTER §6.10 — 12+ Q in 4 groups + FAQPage schema |

### Locations family (13)
| Page | Now | Rebuild source |
|---|---|---|
| locations.html (hub) | 387w | MASTER §6.7 |
| locations/lahore.html | 312w | lahore-location.md (flagship — neighborhoods, corridor, LocalBusiness schema) |
| 11 city desks (karachi, islamabad, rawalpindi, faisalabad, multan, gujranwala, sialkot, bahawalpur, hyderabad, peshawar, quetta) | 264–301w each | Lahore template + city facts only; KHI/ISB `[CONFIRM]` studio status |

### Brand pages (3)
| Page | Now | Rebuild source |
|---|---|---|
| client-stories.html | 396w | Wellstar named-work (fact lock: only named client) + [CONFIRM: further stories] |
| woodex-craft.html | 462w | Woodex Furniture™ corpus (business model) |
| careers.html | 302w | no corpus brief — `[CONFIRM: open roles, write with marke]` |

### Section-level gaps still open on rebuilt pages
- home: FAQ (6) section absent (MASTER §6.1 item 11) — optional add while home is otherwise locked to the Linoxa reference
- projects: filter chips + Hospitality/Healthcare/Retail categories — blocked on real project inventory (studies stay honest)
- insights: category archive pages — posts carry group tags instead (acceptable)
