# Office Fit-Out — Page Master Plan (Parts 1–8)

`services/` · Group: **Fit-Out** · Pillar: **Fit-Out & Turnkey** · BM priority: 1 — #1 revenue driver
Source briefs: plan phase 3.md (P6) + office-renovation.md (boundary) · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert the #1 revenue intent: shell-to-working-office with one fixed BOQ and a dated programme.

| Field | Value |
|---|---|
| URL | `/services/office-fit-out` (existing slug — unchanged) |
| Title (≤60) | `Office Fit-Out in Lahore | Woodex Interior` |
| H1 | `The office, built` |
| Primary keyword | office fitout Lahore |
| Secondary | office fit-out company, Cat A Cat B |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Has a shell + lease | What is included + process |
| Cat A vs Cat B question | Fit-out types cards |
| Already has drawings | Execution-only FAQ |
| Fears downtime | Programme + mobilization steps |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | brief §HERO |
| 02 | **SOCIAL PROOF STRIP** | `strip-proof` | fact-locked stats |
| 03 | **WHAT IS OFFICE FIT-OUT?** | `what-is` | brief §3 |
| 04 | **WHO THIS IS FOR** | `who-grid` | brief §4 |
| 05 | **WHAT THE FIT-OUT INCLUDES** | `includes-checks` | brief §5 |
| 06 | **FIT-OUT TYPES (Cat A / Cat B)** | `types-cards` | brief §6 |
| 07 | **STEP-BY-STEP PROCESS** | `process-steps` | brief §7 |
| 08 | **FEATURED WORK** | `featured-cards` | studies + [CONFIRM] |
| 09 | **MATERIALS & SYSTEMS** | `materials-grid` | brief §9 |
| 10 | **COST FACTORS** | `cost-lock` | brief §10 → no PKR |
| 11 | **WHY WOODEX** | `why-grid` | brief §11 |
| 12 | **TESTIMONIAL** | `testimonial` | [CONFIRM: real quote] — omit if none |
| 13 | **FAQ** | `faq-accordion` | brief FAQ |
| 14 | **CTA + BRIEF FORM** | `cta-form` | unique variant |
| 15 | **RELATED SERVICES** | `related-strip` | office · commercial-fit-out · software-house |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Cat A/B section is the differentiator — keep the brief's exact definitions. Boundary note to renovation when the office is occupied.`
- Unique CTA variant: **"Desks down. Uptime kept."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Fit-Out group) · office (cross) · visualization
- **Outbound (this page links to):** office · commercial-fit-out · software-house · turnkey · projects/commercial

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Office Fit-Out.

## Part 6 — Image & Media Brief

Hero: split-night.jpg · what-is: project-urban.jpg · materials: project-minimal.jpg. [CONFIRM: real fit-out photography]
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
