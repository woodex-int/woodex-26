# Working Drawings & Elevations — Page Master Plan (Parts 1–8)

`services/` · Group: **Specialist** · Pillar: **Architecture** · BM priority: 10 (assembled)
Source briefs: architecture-services.md (drawings scope) + front-elevation-design.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert documentation intent: BOQ-able drawing sets + fast elevations.

| Field | Value |
|---|---|
| URL | `/services/drawings` (existing slug — unchanged) |
| Title (≤60) | `Working Drawings & Elevations | Woodex Interior` |
| H1 | `Drawings a contractor can build from` |
| Primary keyword | working drawings Lahore |
| Secondary | elevation design, construction drawings |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Needs a buildable set | What the set includes |
| Facade refresh | Front elevation fast-track (3-day concepts) |
| Has own design | Draw-from-your-design FAQ |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | assembled — studio voice |
| 02 | **WHAT THE SET INCLUDES** | `includes-checks` | plans/sections/details/schedules |
| 03 | **DRAWING TYPES** | `types-cards` | as-built · working · shop drawings · submission sets — unique spine |
| 04 | **FRONT ELEVATION FAST-TRACK** | `process-steps` | front-elevation brief: concepts in 3 working days + 2 revision rounds |
| 05 | **FROM DRAWINGS TO BUILD** | `sector-map` | bridge strip: drawings → BOQ → fit-out/turnkey |
| 06 | **COST FACTORS** | `cost-lock` | no PKR |
| 07 | **WHY WOODEX** | `why-grid` |  |
| 08 | **FAQ** | `faq-accordion` | fee contents · speed · draw-from-design |
| 09 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Elevation fast-track (3-day concepts) from the front-elevation brief is the unique spine.`
- Unique CTA variant: **"Drawings you can price a build from."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Specialist group) · architecture (parent)
- **Outbound (this page links to):** architecture · space-planning · visualization · turnkey

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Working Drawings & Elevations.

## Part 6 — Image & Media Brief

Hero: project-facade.jpg · types: project-spatial.jpg. [CONFIRM: drawing set photography]
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
