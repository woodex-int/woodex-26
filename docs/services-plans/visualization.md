# 3D Visualization & Rendering — Page Master Plan (Parts 1–8)

`services/` · Group: **Studio** · Pillar: **Studio (bridge)** · BM priority: 11 — high-margin add-on
Source briefs: 3d-studio-hub.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert visualization intent and BRIDGE to the full 3D Studio page (the family's only Studio-group page).

| Field | Value |
|---|---|
| URL | `/services/visualization` (existing slug — unchanged) |
| Title (≤60) | `3D Visualization & Rendering | Woodex Interior` |
| H1 | `See it before it's built` |
| Primary keyword | 3D rendering Lahore |
| Secondary | 3D interior design, architectural visualization |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Approve before build | Situations + stop-gate |
| Architect/designer commission | Standalone FAQ |
| Developer pre-sales | Marketing section → studio |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | studio brief §HERO |
| 02 | **SEE IT. UNDERSTAND IT. BUILD IT.** | `what-is` | studio proposition |
| 03 | **THE SIX DELIVERABLES** | `types-cards` | interior · exterior · 360° · material boards · lighting studies · walkthroughs |
| 04 | **WHO COMMISSIONS RENDERS** | `who-grid` | clients · architects/designers · developers |
| 05 | **THE STUDIO PIPELINE** | `process-steps` | studio 7-step |
| 06 | **STOP-GATE PRIVILEGE** | `includes-checks` | renders belong to the client; construction optional |
| 07 | **PACKAGE & TIMELINE** | `cost-lock` | 2–5 day delivery; no PKR here (indicative table lives on 3d-studio + insights/3d only) |
| 08 | **WHY WOODEX 3D STUDIO** | `why-grid` |  |
| 09 | **FAQ** | `faq-accordion` | speed · files · standalone |
| 10 | **CTA + BRIEF FORM** | `cta-form` | unique variant |
| 11 | **VISIT THE FULL STUDIO** | `related-strip` | → 3d-studio.html (primary bridge) |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `This page INTRODUCES visualization; the deep dive (pricing table, 8 FAQs) stays on 3d-studio.html — bridge prominently.`
- Unique CTA variant: **"See it before it's built."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Studio group) · 3d-studio (bridge target)
- **Outbound (this page links to):** 3d-studio (primary) · drawings · lighting · insights/3d

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → 3D Visualization & Rendering.

## Part 6 — Image & Media Brief

Hero: studio-hero.jpg · deliverables: project-spatial.jpg. [CONFIRM: render gallery]
All decorative imgs get width/height + natural alt. Real project photography: `[CONFIRM: shoot list queued — office + 2 sites per business model 30-day plan]`.

## Part 7 — Quality Checklist

- [ ] Unique section layout (no shared skeleton with sibling pages)
- [ ] Voice gate: no "best in class / top-rated / award-winning", no invented numbers, one idea per sentence
- [ ] Fact lock: 200–500 projects · 10+ yrs · Wellstar only named client · no PKR · founder/warranty [CONFIRM]
- [ ] Title/keyword per Part 1; H2s follow brief section names
- [ ] 2–3 sibling links + hub + 1 cross-family link present
- [ ] JSON-LD parses; FAQ accordion works; nav active state works
- [ ] 1440 + 390: zero overflow, reveals fire, contrast ≥4.5, links 200, no page errors

## Part 8 — Execution Summary + Updated Queue

- Blocked on: owner reference answer (visual system for the v2 rebuild).
- Build wave per `docs/SERVICES_ARCHITECTURE.md` §4; page builds only after its plan is confirmed.
- Estimate: ~1 page per build slot (unique sections = bespoke layout + copy pass each).
