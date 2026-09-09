# WOODEX-WEB-V1 · MASTER SYSTEM PROMPT & PROJECT PACKAGE

**Project:** Woodex Interior — complete website • full-stack • Hostinger-ready  
**Version:** V1.0  
**Date:** September 9, 2026  
**Audience:** AI build agents (Claude / Claude Codex / Cursor / Copilot) and any developer reading this repo.  
**Purpose:** This single document rules the entire build — frontend, backend, content, pages, SEO, deployment. Read it top to bottom before touching code.

---

## HOW TO USE THIS DOCUMENT (SYSTEM PROMPT LOCK)

> **You are now the build agent for WOODEX-WEB-V1. The master document is your constitution.**
> 1. Read this file fully before any tool use, code, or file creation.
> 2. Follow design tokens, brand voice, and content specs exactly. Do not invent facts, clients, numbers, or addresses.
> 3. When a fact is not locked, mark it `[CONFIRM]` and continue with the stated placeholder — never fabricate.
> 4. All copy must pass the brand gate (Section 5). All pages must pass the SEO gate (Section 7).
> 5. When a section says Locked, do not restyle or change copy without explicit instruction.
> 6. Do not start Phase 2 until Phase 0 (data lock) signatures exist in `docs/DATA-LOCK.md`.

---

## 1 · PROJECT IDENTITY

| Field | Value |
|---|---|
| Project name | WOODEX-WEB-V1 |
| Brand | Woodex Interior |
| Agency/Studio | Lahore-based design-build studio (architecture · interiors · fit-outs · 3D · furniture) |
| Domain | `woodex.com.pk` (live target — `[CONFIRM] domain final`) |
| Hosting | Hostinger shared hosting (PHP 8.2+, MySQL) |
| Primary CTA | WhatsApp to `+92 322 4000768` |
| Master line | `DRAWN. THEN BUILT.` |
| Promise line | "We don't say it. We build it." |
| Suite of record | `00-README-INDEX.md` + 7-doc suite in workspace root (superseded/corrected by this doc where marked) |

### Non-negotiables
- Runs on **Hostinger shared** (no Node.js server runtime — static frontend + PHP backend). Locked.
- **One GitHub repo**, downloadable, customizable, deployable in minutes. Locked.
- **Admin dashboard** to manage content + leads without code. Locked.
- **WhatsApp automation** for lead intake and replies. Locked.
- No invented proof. No "award-winning". No unverified clients. Locked.

---

## 2 · MASTER PRD (PRODUCT REQUIREMENTS)

### 2.1 Goals
1. Rank on Google for "interior design Lahore", "architects Lahore", "3D visualization Pakistan", and city long-tails.
2. Convert visitors to WhatsApp consultations and lead-form submissions.
3. Demonstrate certainty: fixed-price Cost-Lock + 7-Gate process + Stop-Gate privilege.
4. Show proof: 500+ projects, 10+ years founder-led, ISO 9001-grade process, real portfolio.
5. Give marke full control: dashboard, GitHub package, editable frontend.

### 2.2 Non-goals (V1)
- No e-commerce, no online payments, no client login portal, no multi-language, no appointments calendar SaaS (WhatsApp + form drives intake in V1; Cal.com can slot in later).

### 2.3 User personas
| Persona | Need | Conversion path |
|---|---|---|
| Homeowner (Lahore) | Walk-in-worthy interiors, fixed price, zero surprises | Services → Portfolio → 7-Gate → WhatsApp |
| Commercial/Hospitality | One accountable partner, deadline-critical | Fit-out page → case study → Consultation form |
| Developer/Builder | Design certainty before construction | 3D Studio → Stop-Gate → WhatsApp |
| Remote/International | Approve space online, build anywhere in PK corridor | 3D Studio → consultation form |

### 2.4 Conversion hierarchy (every page in this order)
1. Prove (proof band, portfolio, ISO)
2. Guide (service → process → cost certainty)
3. Convert (WhatsApp float + contextual CTA + contact band on every page end)

### 2.5 Success metrics (KPI baseline)
| Metric | V1 Target | Source |
|---|---|---|
| GMB interactions/mo | 239 → 500+ | GMB Insights |
| WhatsApp lead conversation rate | baseline → 30% | Meta / manual |
| Form → response within | < 1 business hour | LeadService |
| Core Web Vitals (mobile) | LCP < 2.5s · CLS < 0.1 · INP < 200ms | PageSpeed/CRUX |
| Pages indexed | sitemap fully indexed ≤ 30 days | GSC |

---

## 3 · ARCHITECTURE (LOCKED)

One Laravel 11 app on Hostinger shared, static marketing frontend inside `public/`.

```
woodex.com.pk
├── public/                      ← THE FRONTEND (static, editable HTML/CSS/JS)
│   ├── index.html              Home
│   ├── about.html               About
│   ├── services.html            Services hub
│   ├── service/<slug>.html      8 service pages
│   ├── 3d-studio.html           3D Studio
│   ├── portfolio.html           Projects hub
│   ├── project/<slug>.html      Case studies
│   ├── insights.html            Blog hub
│   ├── insight/<slug>.html      Articles
│   ├── locations.html           Locations hub
│   ├── location/<city>.html     Lahore (+ ISB/KHI roadmap)
│   ├── contact.html            Contact
│   ├── consultation.html        Consultation
│   ├── faq.html                FAQ
│   ├── thank-you.html           Lead success
│   ├── assets/  css/ js/ img/ icons/
│   └── .htaccess               URL rules, caching, security
├── app/
│   ├── Http/Controllers/Api/    REST API v1
│   ├── Models/                  Lead, Project, Service, Sector, Insight, Location, Faq, Message
│   ├── Filament/                Admin dashboard resources
│   └── Services/                LeadService, WhatsAppService, ResendService
├── routes/
│   ├── web.php                  Serves static pages + webhooks
│   └── api.php                  /api/v1/*
├── database/migrations/ seeders/
├── docs/                        This package (see Section 11)
└── README.md                    Clone → run → customize → deploy in 5 min
```

### API surface (REST v1)
```
GET  /api/v1/health
GET  /api/v1/projects?service=architectural&city=lahore
GET  /api/v1/projects/{slug}
GET  /api/v1/services            GET /api/v1/services/{slug}
GET  /api/v1/sectors             GET /api/v1/sectors/{slug}
GET  /api/v1/insights            GET /api/v1/insights/{slug}
GET  /api/v1/locations           GET /api/v1/locations/{city}
GET  /api/v1/faqs?page=contact
POST /api/v1/leads               {formType: brief|contact|consultation, ...}
POST /api/v1/leads/{id}/status   {status: contacted|visit|quoted|won|lost}
POST /api/v1/whatsapp/webhook    Meta Cloud API (verify signature)
```
All POST endpoints: CSRF token (web) or Sanctum (API), honeypot `company` field, Laravel `throttle:6,1`.

---

## 4 · TECH STACK (LOCKED)

| Layer | Choice |
|---|---|
| Backend | Laravel 11 · PHP 8.2+ |
| Admin | Filament v3 (stable) |
| Frontend | Hand-authored static HTML5 + Tailwind CSS v4 (compiled) + vanilla JS (GSAP-compatible) |
| Design system | Ported from WOODEX-WEB `app/globals.css` tokens + DESIGN.md |
| Fonts | Plus Jakarta Sans (self-hosted `@fontsource` woff2) |
| Motion | IntersectionObserver reveal + CSS Ken Burns/cubics (GSAP optional, tree-shaken) |
| Forms | Native HTML validation + Laravel server validation (Zod patterns ported) |
| Email | Resend (SMTP fallback) |
| WhatsApp | Meta Cloud API (WhatsApp Business Platform) |
| Analytics | GA4 + GTM + Microsoft Clarity |
| Cache | Hostinger LiteSpeed + Redis (optional) |
| Deploy | Git (Hostinger) or FTP → `php artisan migrate --force` |

---

## 5 · BRAND + DESIGN SYSTEM (LOCKED — PORT FROM WOODEX-WEB/DESIGN.md)

### 5.1 Tokens
| Token | Value |
|---|---|
| Font | Plus Jakarta Sans 300–700 (single typeface) |
| Navy | `#0c1628` | Navy-2 `#121e34` | Card `#152033` |
| Cream | `#f4efe7` | Ink `#12151c` | Muted `#6a6560` | Wood `#b8956a` |
| Radius | 24 / 16 / 12 / pill |
| Ease | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Shadows | large soft · medium · small none (no sketchy shadow) |
| Container | max-w-7xl, px-6 (mobile) → px-12 (desktop) |

### 5.2 Components (port all from WOODEX-WEB)
`SiteHeader` (fixed, mega on Services, hide-on-scroll ≥820px, cream pages use navy bar) · `SiteFooter` (Stay connected + giant wordmark + NAP + WhatsApp float) · `HeroSlides` (3-slide cine on Home; 3D Studio cine; inner heroes 520px) · `SixServices` grid · `ServiceSelector` · `ProjectFilters` · cards (Project/Article/Service) · `FAQAccordion` · `CTASection` variants (split/statement/compact) · `CountUp` · `Reveal` · `FloatingWhatsApp` · `ContactForm` · `ProjectForm` · `JsonLd` anchor.

### 5.3 Motion hooks (port from WOODEX-WEB + DESIGN.md)
`[data-anim]`, `[data-tilt]`, `.cine-slide` (Ken Burns + 7.2s crossfade), `.hero-slide`, `[data-lb-src]`, `.st-acc`/`.faq-q`, `prefers-reduced-motion` kill switch.

### 5.4 Voice gate (all copy MUST pass)
Archetype: **Quiet Authority — The Master Builder.** Precise verbs. One idea per sentence. The wood tone reserved for accents. **Banned:** "best in class", "top-rated", "award-winning", invented numbers, second typeface, emoji, generic template copy.

| Locked line | Copy |
|---|---|
| Hero lockup | `DRAWN. THEN BUILT.` |
| Promise | "We don't say it. We build it." |
| Studio exclusive | "You are not approving a plan. You are approving a room." |
| Foundation line | "Design is not decoration. Design is the foundation of a successful project." |
| One-liner (meta) | "A Lahore-based design-build studio — architecture, interiors, fit-outs, 3D — with absolute certainty on cost, quality, and delivery." |
| Audit note | "Quality, Determinant and Expertise" = About-page pillars only, never hero headline. Always pair "since 2015" with "Lahore" + "10+ years founder-led". |

### 5.5 Proof language (locked, no inflation)
500+ projects · 10+ years founder-led execution · ISO 9001-grade process (do NOT publish cert number without document) · Named client `[CONFIRM: Wellstar]` — withhold until verified.

---

## 6 · CONTENT MASTER — PAGE BY PAGE (improved from 7-doc suite)

> Content pattern per page: **PageHero → proof/body sections → process/cost certainty → CTA band.** Each page ends with a unique CTA variant. No copy-paste.

### 6.1 Home (`/`)
1. **Cine hero (3 slides)** — H1 `DRAWN. THEN BUILT.` · Slide 1 "We do not build a guess." · Slide 2 "Approve your space before it is built." · Slide 3 "One partner. From concept to completion." · primary CTA → `/consultation`, secondary → WhatsApp.
2. **Structural statement** — "Design is not decoration..." + studio exclusive line.
3. **4 service pillars** (cards → service pages): Architectural Design · Interior Design · Construction Fit-Outs · Furniture Design & Manufacturing (→ Woodex Furniture™).
4. **Entry points** — "I have an empty space", "I need to renovate", "I'm building from scratch", "I want 3D renders first" → mapped to consultation/brief forms.
5. **7-Gate process strip** — Discover → Design → Visualize → Plan (budget + BOQ, Cost-Lock) → Build → Install → Deliver; each gate expandable.
6. **Cost-Lock band** — "If the numbers don't work, you walk away with your design files." (Stop-Gate after Gate 3.)
7. **Proof band** — 500+ projects · 10+ yrs · ISO-grade · count-up anim.
8. **Featured portfolio** — 3–6 case studies, filter-able.
9. **Sectors** — Residential · Commercial · Hospitality · Healthcare · Retail.
10. **Testimonials** — 2–3, only real: `[CONFIRM]` or withhold and use works-quote style proof ("Render → room" pairing).
11. **FAQ (6)** — top-6 questions, accordion.
12. **CTA band + NAP footer.**

**H1/Title (SEO):** `Woodex Interior | Interior Design, Architecture & Turnkey Fit-Outs in Lahore`

### 6.2 About (`/about`)
1. Trust hero (520px) — architect-to-fit-out authority since 2015.
2. Structural statement — one accountable studio, drawing to delivery.
3. Brand story — founded over a decade ago in Lahore; sister brand Woodex Furniture™.
4. Values — Quality · Determinant · Expertise (pillars, with explanations).
5. Ecosystem — design wing + construction wing + furniture manufacturing + 3D studio.
6. 7-Gate lifecycle table (expanded).
7. Stop-Gate privilege block.
8. Team placeholders: founder `[CONFIRM: name, photo]`, principals (architect, interior lead, site director).
9. Proof metrics band.
10. NAP + studios `[CONFIRM: Lahore HQ; ISB/KHI roadmap status]`.
11. CTA statement variant.

**H1/Title:** `About Us | Woodex Interior — Architects & Interior Designers in Lahore`

### 6.3 Services
**Hub `/services`:**
1. PageHero "One partner. From concept to completion."
2. Pillar grid (4) + sub-services for each.
3. Process → Cost-Lock → CTA.

**Service pages `/service/<slug>` (8 — full content each ~600–900 words on page, with headings, FAQ, CTA):**

| Slug | Service | Focus keywords |
|---|---|---|
| architectural-design | Architectural Design & Space Planning | architects Lahore, house design |
| interior-design | Interior Design Services | interior designer Lahore, modern interior |
| construction-fitouts | Construction Fit-Outs & Turnkey | office fitout Lahore, retail fitout |
| furniture-manufacturing | Furniture Design & Manufacturing (→ Woodex Furniture™) | bespoke furniture Lahore, wardrobes |
| residential-interiors | Residential Interiors | house interior design, bedroom interior |
| commercial-interiors | Commercial & Office Interiors | office interior design Lahore |
| hospitality-retail | Hospitality & Retail Design | restaurant interior design, retail |
| 3d-visualization | 3D Visualization & Rendering | 3D interior design, 3D rendering (bridges to 3D Studio) |

Each service page: PageHero → what we deliver → how we work (gates) → proof (projects filter by service) → pricing anchor (below) → FAQs (3) → CTA split.

**Pricing anchor (transparent, keeps Cost-Lock authority):**
| Project | Anchor (PKR) | Note |
|---|---|---|
| 3D visualization / renders | 25k – 75k | per space, stop-gate |
| Interior design + plan (per sq ft) | 150 – 400 | depends on scope |
| Turnkey fit-out (per sq ft) | 3,500 – 6,500 | materials class A/B |
| Furniture (bespoke piece) | 60k – 400k+ | per unit |
`[All anchors: improve, then CONFIRM by marke before publish]`

### 6.4 3D Studio (`/3d-studio`)
1. Cine hero — locked H2 **"You are not approving a plan. You are approving a room."**
2. Studio proposition — "See it. Understand it. Build it."
3. Deliverables grid (6): interior renders, exterior renders, 360 tours, material boards, lighting studies, walkthroughs.
4. Situations (5): buy before build · approve design · same-day decisions · remote approvals · marketing materials.
5. 7-step studio pipeline.
6. Stop-Gate block — renders belong to client, construction optional.
7. Package/pricing line.
8. FAQs (4).
9. Related project + CTA statement.

**H1/Title:** `3D Studio | Woodex Interior — Architectural Visualization & Modeling`

### 6.5 Portfolio (`/portfolio`, `/project/<slug>`)
Hub — filter chips (All · Residential · Commercial · Hospitality · Healthcare · Retail) + 10–12 case studies.
Each case: hero image, scope, timeline, outcome metrics, client quote `[CONFIRM real]`, gallery, related project, CTA.
Seed from WOODEX-WEB `lib/content/projects.ts`; replace inventory with real projects as delivered.

### 6.6 Insights / Blog (`/insights`, `/insight/<slug>`, category)
Two cadence patterns: (a) portfolio/process posts, (b) authored opinion. SEO long-tail focused.
Initial 6 titles (improved calendar):
1. "How the 7-Gate Process Keeps Your Interior Project on Budget" (Cost-Lock explainer)
2. "3D Visualization vs On-Site Approvals: Why Remote Clients Decide Faster"
3. "Fit-Out Guide: What a Turnkey Contractor Actually Handles"
4. "Lahore Interior Design Cost Guide (2026): Per Sq Ft Realities"
5. "Resale Value & Good Architecture: What Buyers Actually Pay For"
6. "How to Brief an Interior Designer: The 10 Questions We Ask"

### 6.7 Locations (`/locations`, `/location/<city>`)
Lahore live: hero + neighborhoods (Model Town, Gulberg, DHA, Bahria, Johar Town) + corridor line "Rawalpindi → Multan" + proof + map + CTA.
Karachi / Islamabad: same template, `[CONFIRM]` real status or keep as "serving from Lahore across Pakistan" sections with roadmap.

### 6.8 Contact (`/contact`)
Working hours (10:00 – 8:30) · phone(s) `[CONFIRM canonical]` · WhatsApp big-CTA · email · ContactForm (name/email/phone/message + honeypot) · Google Map embed (NAP-verified) · JsonLd ContactPage.

### 6.9 Consultation (`/consultation`)
Scheduler fallback (Cal.com optional) + ProjectForm: name/phone/email/city/service/stage/area/budget/preferred/message + honeypot → leads pipeline.
"Before you book" + "How to prepare" lists (2 × 5 items).

### 6.10 FAQ (`/faq`)
12+ questions grouped: Process & cost (5) · Design (3) · Construction (3) · Furniture (3). Accordion + JsonLd FAQPage.

### 6.11 Legal + utility
`/privacy-policy` · `/terms` · `/cookie-policy` (hostinger-compliant) · `/thank-you` · `/not-found` (design-led 404) · sitemap.xml · robots.txt · llms.txt.

---

## 7 · SEO BASE (LOCKED METHODOLOGY)

### 7.1 Technical SEO
- Clean URLs (no `.html` visible; served via routed Laravel web.php + `.htaccess`).
- 66 legacy `.html` → 308 mappings (port from WOODEX-WEB `redirects.ts`).
- Canonical + OG/Twitter metadata per page (helper: one meta component).
- Sitemap.xml auto-generated (Laravel route) + robots.txt + llms.txt.
- Schema.org: Organization (global), LocalBusiness/HomeAndConstructionBusiness (NAP), Service per service page, FAQPage, Article (insights), Project (case studies), ContactPage, BreadcrumbList.
- Images: AVIF/WebP, descriptive alt, width/height set (CLS).
- Performance budgets (Section 2.5 KPIs).

### 7.2 On-page pattern (every page)
`Title ≤ 60` · `Meta description 150–160, CTA-flavored` · `H1 unique + target keyword` · semantic H2/h3 · internal links (each page links 2–3 sibling pages) · image alt natural.

### 7.3 Keyword map (V1 core)
| Cluster | Primary | Secondary |
|---|---|---|
| Brand | woodex interior | woodex furniture pakistan |
| Home | interior design Lahore | best interior designers Lahore |
| Architecture | architects Lahore | house design Lahore |
| Fit-out | office interior design Lahore | retail fitout, turnkey contractor |
| 3D | 3D visualization Pakistan | 3D interior rendering |
| Locations | interior design in Model Town/Gulberg/DHA | city long-tails |

### 7.4 Local SEO (GMB)
Sync NAP exactly → embed verified map · categories: Interior Designer + Construction Company · posts weekly (before/after + 3D stills) · review loop (reply < 48h, QR at delivery) · track GMB monthly (currently 239 interactions).

### 7.5 Post-launch (Week 3+)
GA4 + GTM + Clarity events (CTA clicks, form starts, WhatsApp taps) · GSC coverage watch · CRUX/PageSpeed monthly · link building: furniture/builders directories, local biz listings, sister brand cross-links.

---

## 8 · BACKEND SPEC (LARAVEL + FILAMENT)

### 8.1 Models → Filament Resources
| Model | Filament | Fields (key) |
|---|---|---|
| Lead | resource + pipeline | name, phone, email, city, service, stage, area, budget, preferred, message, formType, status (new/contacted/visit/quoted/won/lost), source, ip, notes |
| Project | resource | title, slug, service, sector, city, status, images (gallery), stats, timeline, quote, client (hidden until confirmed) |
| Service | resource | slug, pillar, title, summary, body, faqs, image, order, seo fields |
| Sector | resource | slug, title, icon, body, seo |
| Insight | resource | slug, title, excerpt, body, author, category, image, published_at, seo |
| Location | resource | city, slug, copy, neighborhoods, map, live_flag |
| Faq | resource | group, question, answer, page slug, order |
| Message | resource | whatsapp id, direction, text, status, lead_id |

### 8.2 Lead pipeline (locked flow)
Form (web/API) → validate (honeypot + throttle) → store in `leads` → **Resend email** to studio → **WhatsApp alert** to studio number → dashboard badge → marke/team work status column → status update webhook to CRM `[CONFIRM: CRM_WEBHOOK_URL or build in-dashboard]`.

### 8.3 WhatsAppService (Meta Cloud API)
- Template messages (pre-approved): welcome-reply, lead-alert, follow-up.
- Inbound webhook: verify signature, upsert `messages`, auto-reply template per working hours.
- Outbound: manual send + quick-reply from Filament (reply inside dashboard).
- **Start Meta Business verification EARLY (days can pass).**

### 8.4 Security
Honeypot + throttle · CSRF/Sanctum · signed webhook · role/permission (admin only) · `.env` secrets off-repo · security headers (port WOODEX-WEB next.config.ts list) · file upload validation + storage link.

---

## 9 · DATA LOCK (PHASE 0 — BLOCKING, MUST BE SIGNED AT `docs/DATA-LOCK.md`)

| # | Fact | Current A | Current B | Decision (marke) |
|---|---|---|---|---|
| 1 | Address | LG 90 Link Road, Model Town | M-71 Zainab Tower, Model Town Link Rd | ? |
| 2 | Phone canonical | +92 336 2259477 | +92 322 4000768 | ? |
| 3 | Domain | woodex.interior | woodex.com.pk | ? |
| 4 | Email | studio@woodex.interior | woodexinterior.pk@gmail.com | ? |
| 5 | Named client | "Wellstar" | ? | ? |
| 6 | Studios | Gulberg III · Clifton · F-7 | Lahore only | ? |
| 7 | Founder/team | name? photo? | ? | ? |
| 8 | Proof stats | 500+ / 10+ / ~20 | ISO cert number? | ? |
| 9 | Testimonials | real? | ? | ? |
| 10 | Portfolio | 10–12 real projects | images? | ? |
| 11 | Pricing anchors | improve + confirm | | ? |
| 12 | CRM webhook | ? | in-dashboard pipeline | ? |

Until signed: use locked placeholders, mark `[CONFIRM]`, never publish invented facts.

---

## 10 · ROADMAP (from 10-TECHNICAL-MASTER-PLAN.md)

| Phase | Milestone | Output | Est. |
|---|---|---|---|
| 0 | Data lock | `docs/DATA-LOCK.md` signed | Today |
| 1 | Laravel 11 + Filament skeleton | repo boots, `/admin` login | 2–3 d |
| 2 | Data model + admin CRUD + seed | dashboard edits all content | 3–5 d |
| 3 | REST API v1 | `/api/v1/*` live + docs | 4–6 d |
| 4 | Static frontend build (this package §6) | full site in `public/`, forms→API | 6–10 d |
| 5 | WhatsApp + lead pipeline | leads→dashboard+WhatsApp+email | 8–12 d |
| 6 | Hostinger deploy | live domain, SSL, redirects, sitemap | 12–14 d |
| 7 | Launch + SEO + GMB | GA4/GTM/Clarity, GSC, content cadence | Week 3+ |

See `10-TECHNICAL-MASTER-PLAN.md` (workspace root) for expanded per-day detail.

---

## 11 · PACKAGE CONTENTS (this repo `docs/`)

| File | Purpose |
|---|---|
| `MASTER.md` | **This document — read first** |
| `DATA-LOCK.md` | Phase 0 decisions (sign before build) |
| `CONTENT-REFRESH.md` | Improved copy sections queued for pages (from 7-doc suite diffs) |
| `SEOMAP.md` | Full keyword/URL/meta table |
| `API-SPEC.md` | OpenAPI-style route + payload contract |
| `BUILD-CHECKLIST.md` | Definition-of-done gates per phase |
| Root `README.md` | Clone → run → customize → deploy (5 min) |

---

## 12 · DEFINITION OF DONE (build gates)

**Phase 2 (dashboard):** Every model editable in Filament for a non-technical user. Seed data imported from WOODEX-WEB `lib/content/*` + this doc.
**Phase 3 (API):** All endpoints return 2xx + JSON contract; POST endpoints pass honeypot/throttle/validation tests.
**Phase 4 (frontend):** All 20+ pages render; design matches DESIGN.md tokens; voice passes Section 5.4; every page ends with unique CTA; Lighthouse ≥ 90 perf/SEO (desktop), mobile LCP budget met.
**Phase 5 (WhatsApp):** New lead → WhatsApp alert + email + dashboard within 10s. Inbound auto-reply works within working hours.
**Phase 6 (deploy):** Live on Hostinger HTTPS; forms working; sitemap/robots live; 66 redirects verified; GSC submitted.
**Phase 7 (launch):** KPI baseline recorded; GMB synced; content schedule running.

---

*WOODEX-WEB-V1 · Master system prompt v1.0 · Supersedes conflicting sections of earlier docs where marked. End.*