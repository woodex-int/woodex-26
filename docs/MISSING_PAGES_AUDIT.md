# MISSING PAGES + SECTIONS — FULL AUDIT

_Audit date: 2026-09-19 · Sources of truth: `docker/MASTER.md` (§3 architecture, §6 content master), `docker/SEOMAP.md` (§2 per-page table), `docker/MASTER-WEBSITE-ROADMAP.md` (deliverables matrix), `docker/site-architecture-gap-report.md`._
_Working rule: static-now / SEO-first / frontend-to-launch (D1–D5 decisions). Fact lock and theme lock apply everywhere._

---

## 1 · Scoreboard

| Status | Count | Pages |
|---|---|---|
| ✅ Rebuilt on the section system | **24** | home, about, 3d-studio, insights hub + 11 posts, projects hub + 6 studies + 2 category pages |
| 🟡 Old system — rebuild pending | **42** | services hub + 20 service pages, locations hub + 12 city pages, process, contact, faq, careers, client-stories, start-your-project, woodex-craft, 404 |
| ❌ Missing entirely (planned) | **4 + 1** | privacy-policy, terms, cookie-policy, thank-you (+ llms.txt) |
| ➕ Corpus-briefed, not yet built | **~28** | architecture suite (14), renovation suite (8), residential room pages (6), healthcare-fit-out, complete-home-redesign, interior-home-refurbishment |

Total live today: **66 HTML pages** (sitemap.xml lists all 65 indexable — current ✓, regenerate after every launch).

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
| llms.txt | ❌ missing |
| Schema per page | ✓ on rebuilt pages (Service/Article/BreadcrumbList/FAQPage, fact-locked provider); re-audit after services/locations rebuilds |
| GA4/GTM/Clarity | ⏸ backend/later phase (D4) |
