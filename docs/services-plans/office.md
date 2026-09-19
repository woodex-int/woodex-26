# Office Interior Design — Page Master Plan (Parts 1–8)

`services/` · Group: **Interior Design** · Pillar: **Interior Design** · BM priority: 5 — high-margin, leads to execution
Source briefs: plan phase 2.md (P5) + sector-corporate-offices.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert "design-only" intent: prove the studio thinks before it draws, and hand over a BOQ-able package.

| Field | Value |
|---|---|
| URL | `/services/office` (existing slug — unchanged) |
| Title (≤60) | `Office Interior Design in Lahore | Woodex Interior` |
| H1 | `Offices designed around the work` |
| Primary keyword | office interior design Lahore |
| Secondary | workspace design, corporate office interior |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Wants a designed office | What design covers + package inclusions table |
| Comparing designers | Process + why-Woodex grid |
| Price-shopper | Cost factors → Cost-Lock, no PKR |
| Wants to see work | Featured office work (honest studies) |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | brief §HERO (PKR stripped) |
| 02 | **SOCIAL PROOF STRIP** | `strip-proof` | fact-locked stats |
| 03 | **WHAT IS OFFICE INTERIOR DESIGN?** | `what-is` | brief §3 |
| 04 | **WHO THIS SERVICE IS FOR** | `who-grid` | brief §4 |
| 05 | **WHAT WOODEX DELIVERS** | `includes-checks` | brief §5 |
| 06 | **OFFICE DESIGN STYLES** | `types-cards` | brief §6 |
| 07 | **THE DESIGN PROCESS** | `process-steps` | brief §7 |
| 08 | **DESIGN PACKAGE INCLUSIONS** | `comparison-table` | brief §8 table |
| 09 | **FEATURED OFFICE WORK** | `featured-cards` | projects studies + [CONFIRM] |
| 10 | **MATERIALS & FINISHES** | `materials-grid` | brief §10 |
| 11 | **COST FACTORS** | `cost-lock` | brief §11 → no PKR |
| 12 | **WHY WOODEX** | `why-grid` | brief §12 |
| 13 | **DESIGN vs FIT-OUT** | `comparison-table` | brief FAQ 2 |
| 14 | **FAQ** | `faq-accordion` | brief FAQ (6–8) |
| 15 | **CTA + BRIEF FORM** | `cta-form` | unique variant |
| 16 | **RELATED SERVICES** | `related-strip` | office-fit-out · software-house · space-planning |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Styles section keeps the brief's named styles; package table differentiates design-only vs design+execution fees WITHOUT PKR numbers.`
- Unique CTA variant: **"An office that works as hard as you do."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Interior Design group) · office-fit-out (cross) · home service-split
- **Outbound (this page links to):** office-fit-out · software-house · space-planning · 3d-studio · projects/commercial

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Office Interior Design.

## Part 6 — Image & Media Brief

Hero: split-night.jpg · what-is: project-urban.jpg · materials: studio-kitchen.jpg · featured: projects/* studies. [CONFIRM: real office photography]
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
