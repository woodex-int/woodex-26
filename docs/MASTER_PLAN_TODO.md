# WOODEX-26 · MASTER PLAN — COMPLETE PROJECT EXECUTION
### The one TODO list that governs the full rebuild → launch → post-launch
*Created 2026-09-19 · Supersedes `docker/MASTER TO-DO LIST.md` for execution · Content source: `docker/` corpus (67 briefs)*

---

## DECISION RECORD (signed off 2026-09-19)

| # | Decision | Choice |
|---|---|---|
| D1 | Platform track | **Static site on the current system.** Backend is a post-launch phase. |
| D2 | Build order | **SEO-value first:** Architecture → Renovation → Fit-out + Sectors → Turnkey → Residential interior. |
| D3 | Content | **Complete new content, written from the `docker/` corpus only.** Old page content is NOT reused. Old `.py` build-agent scripts **deleted** (done — 11 files, `scripts/` removed). |
| D4 | Scope | **Frontend to launch first.** Admin/API/WhatsApp/CRM = post-launch track. |
| D5 | Theme | **LOCKED — do not change.** Colors (`#0c1628` navy · `#f4efe7` cream · `#b8956a` wood), Plus Jakarta Sans, radii, ease, buttons, header/footer/mega-nav, `theme.css` / `chrome.css` / `js/app.js` untouched. New pages reuse the proven components: cine-hero (inner 520–560px), `wx-*` content sections, chapter rail, blog-two listing, st-acc FAQ. |

**Content law (every page):** copy comes from its `docker/` brief; facts not in a brief are marked `[CONFIRM]` and never invented; brand voice gate applies (no "award-winning", no invented numbers, one idea per sentence); every page ends with a unique CTA variant; every page gets its brief's JSON-LD schema + SEO title/meta.

---

## FACT GOVERNANCE (resolve during Phase 0, one pass)

The corpus contradicts itself on a few facts. This table is the arbiter — fill the **USE** column once, then it locks the whole build:

| Fact | docker variants | USE (LOCKED 2026-09-19) |
|---|---|---|
| Projects proof | "500+" vs "200–500" vs "200+" | **"200–500 projects"** (roadmap wording) |
| Founder tenure | "~20 years" vs "10+ founder-led" | **"10+ years founder-led"** (MASTER §5.5) |
| Address | LG 90 vs M-71 Zainab Tower | **LG 90 Link Road, Model Town, Lahore** |
| Domain canonical | woodex.interior vs woodex.com.pk | **woodex.interior** |
| Email | studio@woodex.interior vs gmail | **studio@woodex.interior** |
| 12-month warranty | roadmap says publish · MASTER omits | **[CONFIRM]** — not published until confirmed |
| Real testimonials | none exist — 3 needed | **[CONFIRM]** — placeholders only |
| Founder name/photo | never provided | **[CONFIRM]** — placeholders only |
| Pricing tables | PKR tiers "improve + CONFIRM" | **HOLD** — "quoted after survey" wording everywhere |

---

## PAGE INVENTORY — the complete new website (~79 pages)

| Wave | Family | Pages | Brief source |
|---|---|---|---|
| W1 | Core shell | index · services hub · process (7-Gate) · 3d-studio (rebuild) · about · contact · start-your-project · faq · thank-you · 404 · legal ×3 · locations hub · projects hub · insights hub | MASTER §6 + CONTENT-REFRESH + 3d-studio-hub.md |
| W2 | **Architecture (15)** | hub · residential hub · commercial hub · 5-marla · 10-marla · 1-kanal · 2-kanal · farmhouses · office buildings · retail buildings · restaurants-cafes · healthcare facilities · educational buildings · front-elevation · master-planning | architecture-services.md + arch-*.md ×11 + residential/commercial-architecture.md |
| W3 | **Renovation (13)** | hub · office · commercial · retail · healthcare · restaurant · residential · specialized · master guide · apartment · complete-home-redesign · interior-home-refurbishment · home-renovation hub | renovation-hub.md + *-renovation.md ×6 + master renovation.md + 4 home docs |
| W4 | **Fit-out (4) + Sectors (5)** | pharmacy · retail · restaurant · healthcare fit-out · + corporate-offices · software-houses · retail · F&B · healthcare sectors | *-fit-out.md ×4 + sector-*.md ×5 |
| W5 | Turnkey + Residential interior (9) | turnkey · residential-interior hub · kitchen · bedroom · living room · dining · home office · kids room · basement | turnkey-solutions.md + Residential Interior 7 sub-pages.md |
| W6 | Locations (13) | Lahore (full brief) + 11 city desks (Lahore template + city facts) | lahore-location.md |
| W7 | Insights (6 articles) + Projects case studies | 6 SEO articles (SEOMAP calendar) · case studies from template — **blocked on real project data** | SEOMAP §insights + project-case-study-template.md |

**URL structure (static, current conventions):** flat top-level + family folders — `architecture/*.html`, `renovation/*.html`, `fit-out/*.html`, `sectors/*.html`, `residential/*.html`, `locations/*.html` (exists), `insights/*.html` (exists). Clean URLs via `.htaccess` = backend phase.

---

# THE TODO LIST

## PHASE 0 — Cleanup & Lock ✅ STARTED
- [x] Delete all old `.py` build-agent scripts (`scripts/` removed — 11 files)
- [x] Pull the `docker/` corpus into the working branch (it currently exists only on `main`) ✓ 67 files
- [x] Fill the FACT GOVERNANCE table above — LOCKED 2026-09-19 (200–500 projects · LG 90 + woodex.interior · pricing HELD) ✓
- [x] Rename docker corpus housekeeping: `complete-home-redesign.md` → fixed ✓
- [ ] Freeze theme: tag the locked CSS/JS files in the plan as read-only for this project

**DoD:** fact table filled · corpus in branch · theme files untouched (verified by diff).

## PHASE 1 — Universal inner template & system prep
- [ ] Extract the proven content-page pattern into `template-inner.html`: cine-hero (520–560px) → wx-sections → chapter rail (Money/Gates pattern from process.html) → CTA band
- [ ] Componentize the repeated brief patterns: service menu grid, process steps (7/10-gate), pricing tier table, difference box (X vs Y vs Z), compliance note strip (PCATP/PEC · DRAP · PFA), FAQ accordion, CTA variants
- [ ] Build the internal-linking map (each page links 2–3 siblings, per briefs' linking sections)
- [ ] Sitemap.xml + robots.txt + llms.txt regenerated for the full ~79-page structure

**DoD:** template renders a fictional brief perfectly at 1440/768/390 · Lighthouse ≥ 90 · rail works · reduced-motion respected.

## PHASE 2 — W1 · Core shell (14 pages)
- [x] **index.html — HOME v3: Linoxa home-two section match (master reference).** Replaces v2. 10 named `sec-*` blocks mirroring the Linoxa home-two reference (see `docs/SECTION_SYSTEM.md`): pillars-swap (4 pillars, interactive image swap on the existing `.st-space` app.js hook) · statement-intro · service-split (Turnkey/Renovation/3D rows) · big-feature (sector fit-outs, Wellstar named) · doc-collage (approved drawings → locked numbers → process) · icon-trio (gate icons) · marquee-line ("Drawn. Then built.") · proof-band (4 locked numbers + float image) · blog-grid (3 real insight posts) · cta-getintouch (WhatsApp + NAP). Hero kept. Placeholder testimonials dropped (reference has none — removes the [CONFIRM] risk until real quotes arrive). home.css `?v=5`.
- [ ] services.html — hub with the full new service architecture (4 core + suites)
- [ ] process.html — 7-Gate page rewritten from MASTER/turnkey briefs
- [ ] 3d-studio.html — **rebuild** per 3d-studio-hub.md 14 sections (new copy; keep the motion system)
- [x] **about.html — rebuilt on the section system** (11 named blocks per docs/SECTION_SYSTEM.md): page-hero (brief H1/H2) · statement-intro · brand-story (corpus verbatim + stat rail) · values-grid · ecosystem-swap (4 wings, .st-space hook) · gates-table (7 gates, Gate 4 locked) · stop-gate · team-grid (3 × [CONFIRM: name, photo]) · proof-band · studios-band ([CONFIRM: HQ/roadmap]; Lahore hours only) · cta-getintouch (about variant). Head fact-locked (200–500, purged 500+/~20 incl. JSON-LD), AboutPage schema added, dead Tailwind CDN + studio/service-theme/lx links removed, css/about.css?v=1.
- [ ] contact.html + start-your-project.html (consultation form per MASTER §6.9, honeypot, WhatsApp routing)
- [ ] faq.html (12+ Q, 4 groups, FAQPage schema) · thank-you.html · 404.html · legal ×3
- [ ] locations.html hub · projects.html hub · insights.html hub (new listing copy)

**DoD:** every core page live in preview · voice gate pass · unique CTA each · schema valid.

## PHASE 3 — W2 · Architecture suite (15 pages) ← highest SEO value
- [ ] architecture.html hub (architecture-services.md)
- [ ] residential-architecture.html + commercial-architecture.html hubs
- [ ] 11 sub-pages: 5-marla · 10-marla · 1-kanal · 2-kanal · farmhouses · office · retail · restaurants-cafes · healthcare · educational · front-elevation + master-planning
- [ ] PCATP/PEC compliance-status note on all 15 (exact brief wording)
- [ ] Internal links: hub ↔ sub-pages ↔ 3d-studio (visualization cross-sell)

**DoD:** 15 pages from briefs 1:1 · schema per brief · cross-linked · all viewports clean.

## PHASE 4 — W3 · Renovation suite (13 pages)
- [ ] renovation.html hub + 6 sector renovations + specialized + master guide
- [ ] apartment · complete-home-redesign · interior-home-refurbishment · home-renovation hub
- [ ] Renovation vs Fit-out vs New-Build difference boxes (brief §4)

**DoD:** 13 pages · no duplicate copy between sector pages (briefs are pre-differentiated) · CTAs unique.

## PHASE 5 — W4 · Fit-out (4) + Sectors (5)
- [ ] pharmacy (DRAP) · retail · restaurant (PFA) · healthcare fit-out — pricing tiers per brief `[CONFIRM publish]`
- [ ] 5 sector pages (corporate/software/retail/F&B/healthcare) — design + renovation + fit-out + turnkey overview per page

**DoD:** 9 pages · compliance notes verbatim · pricing held or published per fact table.

## PHASE 6 — W5 · Turnkey + Residential interior (9 pages)
- [ ] turnkey.html (turnkey-solutions.md — comparison strategy section included)
- [ ] residential-interior hub + 7 rooms: kitchen · bedroom · living · dining · home office · kids · basement
- [ ] Residential internal-linking map implemented (brief PART 9)

**DoD:** 9 pages · room pages cross-link horizontally per the map.

## PHASE 7 — W6/W7 · Locations + Insights + Projects
- [ ] locations/lahore.html from lahore-location.md (full local-SEO treatment, LocalBusiness schema)
- [ ] 11 city pages rebuilt from the Lahore template (city facts only — no invented details)
- [ ] 6 insight articles from the SEOMAP calendar (titles locked there)
- [ ] Case studies: template ready; real projects `[CONFIRM]` — build as data arrives

**DoD:** NAP consistent everywhere · articles pass voice gate · sitemap final.

## PHASE 8 — Sitewide SEO & QA
- [ ] Unique title/meta/H1 audit across all ~79 pages (SEOMAP as baseline, extended for new pages)
- [ ] JSON-LD validation sitewide (Organization · LocalBusiness · Service · FAQPage · Article · BreadcrumbList)
- [ ] Image pass: alt text, width/height, AVIF/WebP where possible
- [ ] Internal link audit (no orphans, no dead ends)
- [ ] Cross-device QA: 390 / 768 / 1024 / 1440 / 4K · keyboard · reduced-motion
- [ ] Lighthouse ≥ 90 perf/SEO desktop · mobile LCP < 2.5s budget check
- [ ] Fact audit: zero uninvented facts, all `[CONFIRM]`s listed in one report for final review
- [ ] Voice gate sweep (banned phrases, em-dash house style, one idea per sentence)

**DoD:** BUILD-CHECKLIST Phase-4 gates all green (adapted to static).

## PHASE 9 — Deploy & launch
- [ ] Deploy to production hosting (per fact-table domain decision) · HTTPS
- [ ] Redirect map: any retired old URLs → new pages (no 404s from search)
- [ ] sitemap.xml + robots.txt + llms.txt live · GSC submitted
- [ ] GA4 + GTM + Clarity wired (CTA clicks, form starts, WhatsApp taps)
- [ ] GMB synced to locked NAP
- [ ] Launch baseline: KPI snapshot recorded (GMB, WhatsApp rate, CWV)

## PHASE 10 — Post-launch backend track (decide after launch)
- [ ] Decision: WhatsApp lead routing + form backend (serverless / PHP mailer / WP kit / Laravel V1 per MASTER.md)
- [ ] Lead pipeline (form → email + WhatsApp alert + dashboard)
- [ ] CMS for projects & insights (Decap/Strapi) — optional
- [ ] Online BOQ/quotation calculator — optional, later
- [ ] `master-social-media-plan.md` — still missing from corpus, produce in this phase
- [ ] Content cadence: 2 insights/month · GMB posts weekly

---

## RISK REGISTER

| Risk | Mitigation |
|---|---|
| Fact drift (500+ vs 200–500 etc.) | FACT GOVERNANCE table locks values before Phase 2; `[CONFIRM]` preserved |
| Unconfirmed pricing going live | Pricing tables publish only if fact table approves; else "quoted after survey" fallback (already in briefs) |
| Theme creep during mass production | Template-first (Phase 1); theme files read-only; per-page CSS only in page-scoped files |
| Content sameness across 40+ similar pages | Briefs are pre-differentiated; QA gate checks no copy-paste between siblings |
| Old URLs breaking | Redirect map in Phase 9; current live pages stay until their replacement ships |
| About/founder content blocked | Ships with elegant `[CONFIRM]` placeholders; swap-in pass when data arrives |

## SEQUENCING & ESTIMATES (agent execution)

| Phase | Pages | Est. sessions |
|---|---|---|
| 0–1 Cleanup + template | 1 template | 1–2 |
| 2 Core shell | 14 | 3–4 |
| 3 Architecture | 15 | 3–4 |
| 4 Renovation | 13 | 2–3 |
| 5 Fit-out + sectors | 9 | 2 |
| 6 Turnkey + residential | 9 | 2 |
| 7 Locations + insights | 19 | 2–3 |
| 8–9 QA + launch | — | 2 |

**Total: ~17–22 working sessions from GO to launch-ready.**

---

## READY TO START

Phase 0 has begun (`.py` deletion done). **Next action on GO:** pull the corpus into the branch, present the FACT GOVERNANCE table for your one-pass sign-off, then build `template-inner.html` and the first architecture pages.
