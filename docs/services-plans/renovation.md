# Interior Renovation — Page Master Plan (Parts 1–8)

`services/` · Group: **Specialist** · Pillar: **Fit-Out & Turnkey** · BM priority: 8 — recurring clients
Source briefs: plan phase 5.md (P8) + renovation-hub.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert occupied-space intent: phased work that keeps homes livable and businesses trading.

| Field | Value |
|---|---|
| URL | `/services/renovation` (existing slug — unchanged) |
| Title (≤60) | `Interior Renovation in Lahore | Woodex Interior` |
| H1 | `Renovation, without closing` |
| Primary keyword | interior renovation Lahore |
| Secondary | office renovation, home renovation |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Occupied home | Phasing plan section |
| Business that can't close | Out-of-hours / zoned phasing |
| Kitchen/bath first | Highest-value FAQ |
| Renovation vs fit-out confusion | Definition + comparison |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | brief §HERO |
| 02 | **BEFORE / AFTER STRIP** | `before-after` | brief §2 — honest drew/detail pairs, [CONFIRM] for real ones |
| 03 | **WHAT IS RENOVATION?** | `what-is` | brief §3 |
| 04 | **RENOVATION SECTORS WE COVER** | `sector-map` | brief §4 |
| 05 | **WHAT THE SERVICE INCLUDES** | `includes-checks` | brief §5 |
| 06 | **RENOVATION TYPES** | `types-cards` | brief §6 |
| 07 | **THE PHASING PLAN** | `process-steps` | brief §7 — phased sequence, unique spine |
| 08 | **FEATURED WORK** | `featured-cards` | studies + [CONFIRM] |
| 09 | **RENOVATION BY SECTOR** | `sector-map` | brief §9 |
| 10 | **COST FACTORS** | `cost-lock` | no PKR |
| 11 | **WHY WOODEX** | `why-grid` | brief |
| 12 | **FAQ** | `faq-accordion` | brief FAQ |
| 13 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `The PHASING PLAN section is the differentiator — document-in-writing promise from the brief. Boundary links to fit-out for shells.`
- Unique CTA variant: **"Renovate without closing."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Specialist group) · renovation-family corpus
- **Outbound (this page links to):** office-fit-out · residential-fit-out · turnkey · insights/home-renovation-checklist

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Interior Renovation.

## Part 6 — Image & Media Brief

Hero: project-concrete.jpg · before/after: drew-detail pairs from projects studies. [CONFIRM: real before/after photography]
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
