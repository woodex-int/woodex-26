# Architecture Services — Page Master Plan (Parts 1–8)

`services/` · Group: **Specialist** · Pillar: **Architecture** · BM priority: 10 — authority submissions
Source briefs: architecture-services.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert architect-intent: the building itself — plans, elevations, submissions, PCATP.

| Field | Value |
|---|---|
| URL | `/services/architecture` (existing slug — unchanged) |
| Title (≤60) | `Architecture Services in Lahore | Woodex Interior` |
| H1 | `Architecture, drawn to be built` |
| Primary keyword | architects Lahore |
| Secondary | house design Lahore, PCATP |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| New house | Residential architecture + timeline FAQ |
| Commercial building | Commercial section + authority |
| Facade only | Front elevation section |
| Architect vs engineer confusion | FAQ 1 + comparison |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | brief §HERO |
| 02 | **WHAT ARCHITECTURE COVERS** | `what-is` | brief §2 |
| 03 | **RESIDENTIAL ARCHITECTURE** | `types-cards` | brief §3 (5 Marla–2 Kanal) |
| 04 | **COMMERCIAL ARCHITECTURE** | `types-cards` | brief §4 |
| 05 | **FRONT ELEVATION DESIGN** | `featured-cards` | brief §5 — bridge to drawings page |
| 06 | **MASTER PLANNING** | `types-cards` | brief §6 — bridge to space-planning |
| 07 | **THE ARCHITECTURE PROCESS — 8 STEPS** | `process-steps` | brief §7 |
| 08 | **COST FACTORS** | `cost-lock` | brief §8 → no PKR |
| 09 | **WHY CHOOSE WOODEX** | `why-grid` | brief §9 |
| 10 | **ARCHITECTURE vs INTERIOR vs FIT-OUT** | `comparison-table` | brief §10 |
| 11 | **FAQ** | `faq-accordion` | brief §11 |
| 12 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `The building-type sections (residential/commercial/elevation/master-planning) are the unique spine; each bridges to its child page.`
- Unique CTA variant: **"Bring the site. We'll bring the set."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Specialist group) · drawings/space-planning (children)
- **Outbound (this page links to):** drawings · space-planning · turnkey · 3d-studio · projects

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Architecture Services.

## Part 6 — Image & Media Brief

Hero: project-facade.jpg · sections: project-spatial.jpg. [CONFIRM: real project photography]
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
