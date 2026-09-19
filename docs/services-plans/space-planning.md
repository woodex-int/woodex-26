# Space Planning — Page Master Plan (Parts 1–8)

`services/` · Group: **Specialist** · Pillar: **Architecture** · BM priority: 10 (assembled)
Source briefs: master-planning.md + architecture-services.md §2 · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert layout-first intent: planning as a standalone gate that carries into design.

| Field | Value |
|---|---|
| URL | `/services/space-planning` (existing slug — unchanged) |
| Title (≤60) | `Space Planning | Woodex Interior — Lahore` |
| H1 | `The plan before the picture` |
| Primary keyword | space planning Lahore |
| Secondary | layout design, zoning |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Room doesn't work | What planning fixes — definition |
| Office densifying | Density planning section |
| Stop at the plan? | Standalone FAQ + fee carry-forward |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | assembled — studio voice |
| 02 | **WHAT SPACE PLANNING COVERS** | `what-is` | adapted master-planning §2 to interiors |
| 03 | **PLANNING SERVICES WE DELIVER** | `includes-checks` | zoning/flow/furniture/circulation/density |
| 04 | **THE PLANNING PROCESS** | `process-steps` | adapted master-planning §5 (8 steps → planning gates) |
| 05 | **SPACE PLANNING vs ARCHITECTURE vs DESIGN** | `comparison-table` | master-planning §6 pattern |
| 06 | **COST FACTORS** | `cost-lock` | no PKR |
| 07 | **WHY CHOOSE WOODEX** | `why-grid` |  |
| 08 | **FAQ** | `faq-accordion` | assembled (stop-at-plan, fee carry-forward) |
| 09 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Interiors-scope page (NOT land master-planning — that stays architecture's bridge). Fee-carry-forward FAQ from corpus.`
- Unique CTA variant: **"The plan before the picture."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Specialist group) · architecture (parent)
- **Outbound (this page links to):** office · architecture · drawings · 3d-studio · projects

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Space Planning.

## Part 6 — Image & Media Brief

Hero: project-spatial.jpg · planning: project-urban.jpg. [CONFIRM: plan/drawing photography]
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
