# Woodex Interior — Content-Ready Page Specification

**Version:** 1.0
**Status:** Draft — for review and sign-off before copy production
**Derived from:** "Woodex Interior — Professional Custom Website Redesign Master Plan" (provided in chat, 2026-09-08)
**Grounded in verified facts:** `docs/CONTENT_BRAND.md`, `content/site.json`, `docs/SEO_PLAN.md`
**Scope of this document:** the four launch-critical templates the master plan names as the next deliverable:
1. Homepage (`/`)
2. Service detail template (`/services/[slug]/`) — covering all seven standard services
3. 3D Studio (`/3d-studio/`)
4. Project case study template (`/projects/[slug]/`)

Everything here is **stack-agnostic**: it can be written into the current HTML pages, or consumed as page briefs for a Next.js + Sanity build. The stack decision is a Phase 0 item and does not change this content spec.

---

## 0. Read this first

### 0.1 Locked facts (use exactly as written — never "soften" or invent around these)

| Fact | Value |
|---|---|
| Brand master line | **DRAWN. THEN BUILT.** |
| Foundation line | **DESIGN IS NOT DECORATION. DESIGN IS THE FOUNDATION OF A SUCCESSFUL PROJECT.** |
| Promise | **WE TURN IDEAS INTO SPACES.** |
| Proposition | **ONE PARTNER. FROM CONCEPT TO COMPLETION.** |
| 3D line | **SEE IT. UNDERSTAND IT. BUILD IT.** |
| 3D proof chain | **3D DESIGN → APPROVED VISUAL → BUILT REALITY** |
| Process (7 gates) | **Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver** |
| Proof block | **500+ projects · founder ~20 years · execution 10+ years · ISO 9001** |
| Named client | **Wellstar only** (Pharmacy → Cosmetics → Mini Hospital, DHA Lahore). All other portfolio work is labelled a **study**. |
| WhatsApp | `+92 322 4000768` → `https://wa.me/923224000768` |
| Call | `+92 336 2259477` |
| Email | `studio@woodex.interior` |
| Studio desk | LG 90 Link Road, Model Town, Lahore, Pakistan — 10:00–8:30 |
| Studios | Gulberg III, Lahore · Clifton, Karachi · F-7, Islamabad |
| Furniture | **Woodex Furniture** = the mill connected to the studio |

### 0.2 Forbidden copy (kill on sight)

- "Most awarded", "award-winning", 320+, 15 years / 12 years, ISO 45001, any certification beyond **ISO 9001**
- Any named client other than **Wellstar**
- "Unlimited free design"
- Presenting a 3D layout as if it were architectural design
- Reusing the 3D Studio exclusive line *"You are not approving a plan. You are approving a room."* on any other page — it lives on `/3d-studio/` only

### 0.3 Open Phase 0 decisions that affect this spec

These are placeholders until confirmed. They are marked `[TBD — Phase 0]` wherever they appear.

1. **Primary domain** — `mavric.pk` vs a Woodex-branded domain. Working canonical in this spec: `https://woodex.interior` (matches the current site). Final decision is required before metadata, schema, canonicals and redirects are frozen.
2. **Verified office locations** — studios confirmed (Lahore / Karachi / Islamabad). Any additional *physical* addresses are TBD.
3. **Official WhatsApp number** — confirmed `+92 322 4000768` (from `content/site.json`); re-confirm in Phase 0.
4. **Consultation scheduling method** — Calendly / Cal.com / custom form. Treat "Book a consultation" as a scheduling intent until the tool is chosen.
5. **Analytics / Search Console access** — needed before GA4/GTM IDs are embedded.
6. **Verified statistics** — square footage delivered, per-service completion counts, timeline medians: **do not publish until supplied.** The only verified numbers today are `500+ / ~20 / 10+ / ISO 9001`.
7. **Photography / renders / drawings / video inventory** — determine which real assets exist per case study before writing alt text or galleries.
8. **CRM** — lead routing for form + WhatsApp + consultation.

### 0.4 How each page spec is structured

Every template below uses the same block layout:

- **URL & purpose** — from the master plan URL-to-template map (§5)
- **SEO package** — title, meta description, canonical, breadcrumb, H1, schema, OG, indexability
- **Section-by-section content** — `#` / purpose / headline / copy direction (with draft copy where it matters) / media + alt / motion / CTAs / internal links / CMS field reference
- **AEO block** — answer-first intro + question-based headings
- **FAQ** — final Q&A (exact text; visible content only)
- **QA checklist** — the ten questions every major page must answer

---

## 1. Global content conventions

### 1.1 Voice

Architectural, precise, restrained. Short declarative sentences. Never "we create beautiful spaces"; say what is drawn, approved, and built. Use the locked lines above; do not paraphrase them.

### 1.2 Proof rules

- Numbers only from the proof block in §0.1.
- Any additional metric (`m² delivered`, `avg. fit-out time`, etc.) is `[TBD — Phase 0]` and must be supplied and verified before it appears on a live page.
- Portfolio items are **studies** unless the client has approved a name. Wellstar is the only named completed path.

### 1.3 CTA system (labels are the spec — do not vary them ad hoc)

**Primary CTA labels (per page, from master plan §5 and §15):**

| Page | Primary CTA | Secondary CTA |
|---|---|---|
| Home | Book a consultation | Explore our projects (text link) |
| Service detail | Book [service] consultation (see §3 table) | Ask on WhatsApp |
| 3D Studio | Start a 3D brief | WhatsApp |
| Case study | Start a similar project | WhatsApp |
| Header (global) | Start your project | — |

**WhatsApp prefilled message template (auto-populate `[service]`, `[city]`, `[area]` where the page knows them):**

> Hello Woodex Interior, I'm interested in your [service] service. My project is in [city], and the approximate area is [area]. I would like to discuss the next steps.

**Consultation labels (contextual variants):** "Book a consultation", "Schedule a project discussion", "Talk to a designer", "Discuss your project", "Plan the next step".

### 1.4 Global shell (applies to every page)

- **Header:** Woodex logo → nav (About · Services [mega] · 3D Studio · Projects · Insights · Contact) → "Start your project" CTA. Transparent over hero imagery; solid after first viewport. Mobile: logo + consultation CTA + menu trigger → full-screen menu with services, contact info, WhatsApp.
- **Services mega menu:** *Design* (Interior Design, Architecture, Drawings and BOQ) · *Build* (Fit-Out, Turnkey Execution, Renovation, Custom Furniture and Joinery) · *Visualize* (3D Studio) + one featured case study + consultation CTA.
- **Footer:** closing conversion statement → Book consultation CTA + WhatsApp CTA → services links → projects & insights links → verified addresses → email/phone → social links → legal links → copyright/business identity.
- **Mobile floating WhatsApp:** label visible initially ("WhatsApp"), collapses to icon on scroll; never covers forms, cookie controls, or nav.

### 1.5 On-page SEO rules (every indexable page)

One H1 · direct intro answer · logical H2/H3 · unique title + meta description · self-referencing canonical · breadcrumbs where appropriate · Open Graph · meaningful alt text · contextual internal links · visible last-updated date on informational content.

**Title patterns (master plan §8.3):**

- Homepage — `Woodex Interior | Interior Design, Fit-Out & Turnkey Execution`
- Service — `[Service] in [Primary Market] | Woodex Interior`
- Project — `[Project Name]: [Sector] [Service] in [City] | Woodex`
- 3D Studio — `Woodex 3D Studio | See It. Understand It. Build It.`

### 1.6 Schema map (only for these templates)

| Template | Schema |
|---|---|
| Homepage | `Organization` (LocalBusiness subtype where address is verified) + `WebSite` |
| Service detail | `Service` + `BreadcrumbList` |
| 3D Studio | `Service` + `VideoObject`/`ImageObject` where real media exists |
| Case study | `Article` or `CreativeWork` + `ImageObject` + `BreadcrumbList` |
| FAQ sections | `FAQPage` only where the Q&A is visible on-page and eligible |

### 1.7 Measurement events mapped to these templates

- Homepage: `service_selector_use`, `service_view`, `cta_click`, `faq_open`, `before_after_use`, `video_start`/`video_complete`, `whatsapp_click`, `consultation_start`.
- Service detail: `service_view`, `cta_click`, `faq_open`, `project_view`, `whatsapp_click`, `consultation_start`, `consultation_booked`.
- 3D Studio: `video_start`/`video_complete`, `before_after_use`, `file_upload`, `cta_click`, `whatsapp_click`.
- Case study: `project_view`, `case_study_50_percent`, `case_study_complete`, `before_after_use`, `cta_click`, `whatsapp_click`, `consultation_start`.

Event parameters where relevant: page type, page title, service, sector, project, city, CTA position, CTA label, device, source, campaign.

---

## 2. Homepage — `/`

**Search purpose:** Brand and broad commercial discovery.
**Primary CTA:** Book a consultation · **Secondary:** Explore our projects (text link).

### 2.1 SEO package

- **Title:** `Woodex Interior | Interior Design, Fit-Out & Turnkey Execution`
- **Meta description (draft):** `Woodex Interior designs, visualizes and builds residential and commercial interiors — one team from first brief to handover, with 3D approval before construction. Book a consultation.`
- **Canonical:** `https://woodex.interior/`
- **H1:** **"Approved in design. Delivered in reality."** (master plan §6.2). Keep **DRAWN. THEN BUILT.** as the eyebrow/master line above it.
- **Schema:** `Organization` + `WebSite`.
- **OG image:** strongest completed-project hero image, 1200×630.

### 2.2 Sections

**1 · Full-screen visual hero**
- Purpose: explain the offer in one sentence and open two routes (consult, explore).
- H1: "Approved in design. Delivered in reality."
- Supporting copy: design → visualization → BOQ → execution in one accountable team.
- CTAs: **Book a consultation** (primary) · **Explore our projects** (secondary) · text link **Open 3D Studio**.
- Media: one strong completed-project image or short optimized video (autoplay muted only). Alt: describe the room + material, e.g. "Completed residential living space with built-in walnut joinery and concealed lighting."
- Motion: split-line H1 reveal, slow image scale (1 → 1.03), manual hero-slide controls with restrained autoplay.

**2 · Service marquee**
- Purpose: visual navigation, not keyword stuffing.
- Text (exact): `Interior Design · Architecture · Fit-Out · Turnkey · Joinery · 3D Studio`
- Motion: slow horizontal marquee; pause on `prefers-reduced-motion`.

**3 · Positioning statement**
- Headline: "Designed clearly. Visualized before commitment. Built by one accountable team." (master plan §3)
- Sub-blocks: **What we do** · **Who we work with** (residential, offices, retail, hospitality, developers, clients with existing drawings, visualization-only) · **Where we operate** (Lahore, Karachi, Islamabad — nationwide).
- CTA: link to About.

**4 · Service selector**
- Left: large active project image (changes per selection). Right: numbered list — Interior Design, Architecture, Fit-Out, Turnkey Execution, Renovation, Custom Furniture and Joinery, Drawings and BOQ, 3D Studio.
- On interaction: image, one-line description, and destination change.
- Each item links to its service page.
- Motion: image cross-fade; stagger on list reveal.

**5 · Entry-point selector**
- Headline: **"Where are you in the project?"**
- Options → destination (exact mapping):
  - I have an empty space → Interior Design / Architecture
  - I already have a design → Fit-Out / Turnkey Execution
  - I need renovation → Renovation
  - I need 3D visualization → 3D Studio
  - I need drawings or a BOQ → Drawings and BOQ
  - I need complete turnkey delivery → Turnkey Execution

**6 · 3D Studio feature**
- Copy direction: stills, walkthrough, 360° outputs; render-to-reality example; the role of 3D in approvals and material decisions (not a substitute for planning).
- CTA: **Open 3D Studio**.
- Media: one render + its built reality side by side (render-to-reality slider).

**7 · Process overview**
- Five stages (each states **Input · Output · Client approval point**):

| Stage | Input | Output | Approval point |
|---|---|---|---|
| 1 Discover | Brief, site, existing drawings | Requirement summary + route | Kickoff alignment |
| 2 Design | Approved direction | Space plan, concept, mood | Concept sign-off |
| 3 Visualize | Approved concept | 3D stills / walkthrough | Visual sign-off |
| 4 Cost and document | Approved visual | Budget, working drawings, BOQ | Scope + commercial sign-off |
| 5 Build and hand over | Approved documents | Built, snagged, handed-over space | Handover |

- Link to `/process/` for the full six-stage version.
- Motion: stages highlight sequentially on scroll.

**8 · Credibility block**
- Only verified numbers: **500+ projects · founder ~20 years · execution 10+ years · ISO 9001 · 3 studios** (Lahore / Karachi / Islamabad).
- Square footage delivered, project counts by sector, etc. = `[TBD — Phase 0]` — omit until supplied.
- Motion: metrics count up once (static if reduced motion).

**9 · Featured case studies**
- 4–6 projects in a mixed editorial grid. Filter labels for **sector / service / city**.
- Each card: short challenge or result line. CTA: **View all projects**.

**10 · Design-to-build proof**
- Render vs completed-space slider · drawings · BOQ · workshop · completed site.
- Copy: accountability across every stage, one team.

**11 · Sectors served**
- Residential · Offices · Retail · Hospitality · Restaurants and cafés.
- Initially these **filter projects** (client-side, canonical to `/projects/`); dedicated landing pages only after enough unique content exists.

**12 · Testimonials**
- Client name + project + verified quotation. Video optional. Link to the corresponding project where possible.
- Only verified/approved quotes; none → omit the section until supplied. `[TBD — Phase 0]`

**13 · FAQ** (see §2.3 below).

**14 · Insights preview**
- Three high-value articles (see §13.3 of the master plan for the topic list).

**15 · Final conversion section**
- Full-bleed project image. Headline: **"Tell us about your space."**
- Actions: **Book a consultation** · **Start on WhatsApp** · **Send a project brief**.

### 2.3 FAQ (exact Q&A)

1. **Can I hire Woodex for design only?** — Yes. Woodex can be engaged for design only — space planning, concept and 3D visualization — without execution. Design and build are separate engagements; you are never required to commit to construction before approving the design direction.
2. **Can Woodex execute drawings created by another architect?** — Yes. Woodex can review approved drawings and specifications and take them into execution, subject to scope, documentation and site conditions.
3. **Does Woodex provide a BOQ before execution?** — Yes. Where documentation is in scope, Woodex prepares working drawings and a bill of quantities before execution so quotations, procurement and site work reference the same buildable scope.
4. **Can I purchase only 3D visualization?** — Yes. Woodex 3D Studio can be engaged on its own — stills, walkthroughs, 360° views and material visualization — from your floor plan, references or existing design.
5. **Which cities does Woodex serve?** — Woodex operates studios in Lahore (Gulberg III), Karachi (Clifton) and Islamabad (F-7), and serves projects across Pakistan from those studios.
6. **How does a project begin?** — With a consultation and a brief: tell Woodex what the space is today, what it needs to become, and what matters most. Woodex then defines the route — design, 3D, documentation, execution, or a combination.
7. **What affects fit-out cost and timeline?** — Area, scope, materials and finishes, custom joinery, existing site conditions and MEP, and the approvals required. Woodex documents the scope and prepares a BOQ so cost and timeline are based on the same buildable scope rather than a rough guess.

### 2.4 Homepage QA checklist

The homepage must answer: who is this for · what problem it solves · what Woodex does · what the visitor receives · what happens next · why trust Woodex · which project proves it · which service helps · how to start.

---

## 3. Service detail template — `/services/[slug]/`

Used for all seven standard services. One template, **no cloned sections** — each page's hero, definition, approval sentence, process and proof must differ.

### 3.1 URL & purpose

| Service | Slug | Search purpose | Primary CTA |
|---|---|---|---|
| Interior Design | `/services/interior-design/` | Interior design intent | Book design consultation |
| Architecture | `/services/architecture/` | Architecture intent | Discuss your site |
| Fit-Out | `/services/fit-out/` | Fit-out intent | Request fit-out consultation |
| Turnkey Execution | `/services/turnkey-execution/` | Turnkey contractor intent | Start a turnkey project |
| Renovation | `/services/renovation/` | Renovation intent | Discuss your renovation |
| Custom Furniture and Joinery | `/services/custom-furniture-joinery/` | Joinery/furniture intent | Send requirements |
| Drawings and BOQ | `/services/drawings-boq/` | Drawing and BOQ intent | Request documentation |

### 3.2 SEO package (per service)

- **Title:** `[Service] in Lahore | Woodex Interior` — use the primary market actually serviced (Lahore / Karachi / Islamabad). Do not insert every city on every page.
- **Meta description pattern:** `Woodex's [service] service — [one-line definition]. [Scope/proof clause]. Book a [service] consultation or discuss your project on WhatsApp.`
- **H1:** from the master plan §6.6 (see table in §3.6 — use verbatim).
- **Canonical:** self-referencing.
- **Breadcrumb:** Home › Services › [Service].
- **Schema:** `Service` + `BreadcrumbList` (+ `FAQPage` where the FAQ is visible).

### 3.3 Section-by-section content

**1 · Service hero** — specific H1 · one-sentence definition · service-specific visual · **Book [service] consultation** + WhatsApp.

**2 · Answer-first overview** — three parts: *what the service is* (the definition from §3.6, verbatim) · *who it is for* · *what problem it solves*. This is the AEO opening; keep it to 2–3 sentences.

**3 · Scope and deliverables** — three lists: **Included** · **Available add-ons** · **Not included / dependent** (e.g. items requiring a separate engagement or external scope).

**4 · Ideal client scenarios** — reuse the "what you have" routes that apply: empty property · existing drawings · renovation · commercial rollout (where relevant). Each routes to the relevant engagement.

**5 · Service process** — Inputs → Deliverables → Approval gates. Numbered steps. Unique per service (no two services may share the same sequence).

**6 · Visual/document proof** — plans · material schedules · BOQ excerpts · site execution · finished project. Alt text: "Interior fit-out working drawing — ceiling and lighting layout" (not "image1").

**7 · Related case studies** — automatically filtered by service. Minimum three.

**8 · Why Woodex** — evidence-based differentiators only (one team, 3D before build, BOQ clarity, in-house joinery, ISO 9001). No invented claims.

**9 · Cost and timeline factors** — explain the variables; **no "starting at" pricing.** Use: area, scope, materials/finishes, custom joinery, existing conditions/MEP, approvals.

**10 · FAQ** — service-specific (see §3.7 for the question bank).

**11 · Related services** — two, from §3.6.

**12 · Final conversion block** — **Book [service] consultation** + WhatsApp prefilled message.

### 3.4 Service-page interactions (master plan §7.4)

Sticky section nav (desktop) · deliverables reveal in sequence · process stage changes active image · case-study cards filtered automatically · FAQ accordion · sticky consultation bar after ~40% scroll depth.

### 3.5 WhatsApp prefilled message (per service)

Auto-populate the `[service]` token from the page:

> Hello Woodex Interior, I'm interested in your **[service]** service. My project is in **[city]**, and the approximate area is **[area]**. I would like to discuss the next steps.

### 3.6 Per-service content table

| Service | H1 (verbatim) | Answer-first definition (draft) | Related services (2) | Related sectors |
|---|---|---|---|---|
| Interior Design | Interior Design Services for Functional, Buildable Spaces | Woodex's interior design service turns a space's requirements into an approved plan, concept and direction — space planning, mood, materials, lighting and furniture relationships — ready to visualize and, where required, build. | Architecture · Drawings and BOQ | Residential · Offices · Retail · Hospitality |
| Architecture | Architecture from Site Planning to Construction Documentation | Woodex's architecture service covers site planning through construction documentation — layouts, elevations, sections and coordination — so a project moves into approvals, BOQ and execution without reworking. | Interior Design · Drawings and BOQ | Residential · Offices · Retail |
| Fit-Out | Interior Fit-Out Planned for Cost, Quality and Handover | Woodex's interior fit-out service converts approved designs and technical drawings into a completed, usable interior. Depending on scope, it may include procurement, civil work, MEP coordination, ceilings, finishes, lighting, joinery, installation, and handover. *(verbatim from master plan §9)* | Turnkey Execution · Drawings and BOQ | Offices · Retail · Hospitality |
| Turnkey Execution | Turnkey Interior Execution with One Accountable Team | Woodex's turnkey execution service carries a project from approved design through procurement, construction, joinery and installation to handover under one accountable team, with a single point of responsibility for scope, cost and quality. | Fit-Out · Custom Furniture and Joinery | Offices · Retail · Hospitality |
| Renovation | Interior Renovation Planned Around the Existing Space | Woodex's renovation service re-plans and rebuilds an existing interior around its current structure and MEP — assessment, redesign, documentation and execution — so the finished space works for how it is used now. | Fit-Out · Interior Design | Residential · Hospitality |
| Custom Furniture and Joinery | Custom Furniture and Joinery Designed for the Project | Woodex's custom furniture and joinery service designs, documents and manufactures built-in and freestanding pieces — kitchens, wardrobes, counters, panelling and bespoke furniture — made to the project's dimensions, materials and finishes. | Interior Design · Turnkey Execution | Residential · Retail · Hospitality |
| Drawings and BOQ | Technical Drawings and BOQ for Clearer Project Execution | Woodex's drawings and BOQ service produces the technical documentation a project needs before execution — working drawings, specifications and a bill of quantities — so quotations, procurement and site work are based on the same buildable scope. | Fit-Out · Turnkey Execution | Cross-sector |

### 3.7 Service FAQ question bank (pick the 5–7 that fit each service)

- What does an interior fit-out include?
- What is the difference between fit-out and turnkey execution?
- Can Woodex execute an existing design?
- When is a BOQ prepared?
- What information is required for a 3D visualization?
- How is renovation cost determined?
- How long does a commercial fit-out take?
- Do I need to commit to execution before I see the design?
- Can I buy [service] on its own?

Every answer must be visible on-page (FAQ schema mirrors visible content only).

### 3.8 Service page QA checklist

Who is this for · what problem · what do they already have · what Woodex does · what they receive · what happens next · why trust Woodex · which project proves it · which related service helps · how to start.

---

## 4. 3D Studio — `/3d-studio/`

**Search purpose:** Visualization and walkthrough intent.
**Primary CTA:** Start a 3D brief · **Secondary:** WhatsApp.
**Title:** `Woodex 3D Studio | See It. Understand It. Build It.`
**Schema:** `Service` + `VideoObject`/`ImageObject` where real media exists.

### 4.1 Positioning (hard rule)

Do **not** present 3D as a substitute for planning or technical design. Position it as the layer where the client **sees, approves and decides** before construction: approvals, material decisions, communication. Preserve the exclusive H2 — *"You are not approving a plan. You are approving a room."* — once, on this page only.

### 4.2 Sections

1. **Video/render hero** — full-screen reel, user-controlled playback, no sound autoplay.
2. **What Woodex 3D Studio provides** — in-house visualization team working beside the design team; plans, references and ideas → visual experiences before build.
3. **Service options** — Interior stills · Exterior stills · Walkthrough animation · 360° views · Material visualization · Render-to-BOQ support where applicable.
4. **Interactive portfolio** — stills / walkthrough tabs; drag-enabled carousel.
5. **Render-to-reality comparison** — slider, "3D DESIGN → APPROVED VISUAL → BUILT REALITY".
6. **Required client inputs** — floor plan / references / existing design / dimensions / material direction.
7. **Production process** — PLAN → MODEL → MATERIAL → LIGHT → VISUAL → APPROVAL → REALITY.
8. **Revision and approval framework** — number of revision rounds and approval gates; `[TBD — Phase 0]` for the exact commercial terms.
9. **Deliverable formats** — stills (resolutions), walkthrough (length/format), 360°, file types.
10. **Who the service is for** — designers needing visuals, clients with plans, clients with references, clients with an existing design, design+build clients.
11. **3D case studies** — labelled studies.
12. **FAQs** (below).
13. **Upload brief / WhatsApp CTA** — file-upload drop zone + WhatsApp.

### 4.3 FAQ (draft)

- **What information do I need to start a 3D render?** — A floor plan or dimensions, plus references or a design direction where available. Woodex confirms the exact input list at brief stage.
- **Can a 3D render be used to prepare a BOQ?** — A render helps agree the visual direction; the BOQ is prepared from drawings and specifications. Where the project includes documentation, Woodex carries the approved visual into drawings and a bill of quantities.
- **3D still vs walkthrough — which do I need?** — Stills are for reviewing and approving spaces and materials; a walkthrough adds movement and sequence for circulation, flow and presentation. The brief decides which is worth the extra production time.
- **Is 3D visualization the same as design?** — No. 3D shows an approved or proposed direction so decisions can be made before build; it does not replace space planning, technical design or documentation.

### 4.4 Measurement events

`video_start` / `video_complete` · `before_after_use` · `file_upload` · `cta_click` · `whatsapp_click`.

---

## 5. Project case study template — `/projects/[slug]/`

**Search purpose:** Proof and long-tail discovery.
**Primary CTA:** Start a similar project · **Secondary:** WhatsApp.
**Title:** `[Project Name]: [Sector] [Service] in [City] | Woodex`
**Schema:** `Article`/`CreativeWork` + `ImageObject` + `BreadcrumbList`.

### 5.1 Narrative formula (master plan §6.9)

> **Context → Constraint → Decision → Design response → Execution → Result**

A case study is a problem-solving story, not an image gallery.

### 5.2 Sections (18 blocks)

1. Full-width hero image/video
2. **Project summary** — name, sector, location, size, scope, services, status, year
3. Short result statement
4. Client brief
5. Existing conditions / challenge
6. Woodex's response
7. Planning and concept
8. 3D visualization and approvals
9. Drawings, BOQ, and material decisions
10. Execution and joinery
11. Before/after or render/reality comparison
12. Project gallery (lightbox + captions)
13. Outcomes and verified metrics (`[TBD — Phase 0]` unless supplied)
14. Client testimonial (only if approved)
15. Services used (link each)
16. Related insights (1–2)
17. Related projects (2)
18. CTA: **Start a similar project** + WhatsApp

Interactions: scroll progress indicator · sticky project facts · gallery lightbox · before/after slider · next/previous case study navigation.

### 5.3 Minimum viable case study (MVS) vs Premium

**MVS:** project name, city, sector, completion year, services provided, cover image, 6+ supporting images, short summary, challenge, solution, result, CTA.

**Premium (add):** area, timeline, client brief, existing-condition images, plans/drawings, 3D renders, BOQ/documentation excerpt, material decisions, joinery details, site-progress images, render-to-reality comparison, client testimonial, measurable outcome.

### 5.4 Launch mix (8–12 studies, from master plan §13.2)

3 residential · 2 office/workplace · 1 retail · 1 hospitality/restaurant · 1 renovation · 1 custom joinery-led · 1 3D-only visualization · 1 complete turnkey.

**Alt-text convention:** describe room + material + stage, e.g. "Render of a DHA Lahore pharmacy reception, oak counter and concealed ceiling lighting — pre-construction visualization."

**Labelling rule:** every project without a named client is labelled a **study**. Wellstar is the only named completed path.

### 5.5 Case study QA checklist

Same ten questions, answered through narrative: who it was for · what problem · what they had · what Woodex did · what was delivered · what happened next · why trust · which proof · which related service · how to start a similar project.

---

## 6. Internal linking matrix (these four templates)

| Template | Must link to |
|---|---|
| Homepage | all core services · featured sectors · featured projects · process · 3D Studio · latest insights · contact · consultation |
| Service page | 3 relevant case studies · 2 related services · process · 2 relevant articles · consultation |
| 3D Studio | interior design · drawings & BOQ · 3D case studies · 2 relevant articles · consultation |
| Case study | every service used · relevant sector · relevant city (if valid) · 1–2 related insights · 2 related projects |

Anchor text must be descriptive ("office fit-out services", "render-to-reality study"), never "click here".

---

## 7. Open decisions log (carry into Phase 0)

1. Domain: `mavric.pk` → Woodex-branded domain, or parent/division structure. Freezes canonical, schema, redirects.
2. Consultation scheduler: Calendly / Cal.com / custom.
3. Verified stats beyond `500+ / ~20 / 10+ / ISO 9001` (square footage, timelines).
4. Testimonials: which quotes are approved for publication.
5. Named clients beyond Wellstar: none until approved.
6. Per-service BOQ / revision terms: exact commercial language.
7. CRM + analytics IDs.

---

## Appendix A — Verified facts (single source of truth)

Copied from `docs/CONTENT_BRAND.md` and `content/site.json`; if any conflict arises, these win:

- **Lines:** DRAWN. THEN BUILT. · DESIGN IS NOT DECORATION. DESIGN IS THE FOUNDATION OF A SUCCESSFUL PROJECT. · WE TURN IDEAS INTO SPACES. · ONE PARTNER. FROM CONCEPT TO COMPLETION. · SEE IT. UNDERSTAND IT. BUILD IT. · 3D DESIGN → APPROVED VISUAL → BUILT REALITY
- **Process:** Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver
- **Proof:** 500+ projects · founder ~20 years · execution 10+ years · ISO 9001
- **Named client:** Wellstar (Pharmacy → Cosmetics → Mini Hospital, DHA Lahore)
- **WhatsApp:** +92 322 4000768 (`https://wa.me/923224000768`) · **Call:** +92 336 2259477
- **Email:** studio@woodex.interior
- **Studio desk:** LG 90 Link Road, Model Town, Lahore · 10:00–8:30
- **Studios:** Gulberg III Lahore · Clifton Karachi · F-7 Islamabad
- **Furniture:** Woodex Furniture — mill connected to the studio

## Appendix B — [TBD — Phase 0] placeholders in this document

Any stat, testimonial, address, timeline, revision count, or pricing clause not present in Appendix A must be supplied and verified before it goes live. It is intentionally written here as `[TBD — Phase 0]`.
