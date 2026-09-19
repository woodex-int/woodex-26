# Pharmacy Fit-Out — Page Master Plan (Parts 1–8)

`services/` · Group: **Specialist** · Pillar: **Fit-Out & Turnkey** · BM priority: 2 — niche specialization, chain potential
Source briefs: pharmacy-fit-out.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert the studio's #2 niche: clinical instrument positioning + named proof (Wellstar).

| Field | Value |
|---|---|
| URL | `/services/pharmacy` (existing slug — unchanged) |
| Title (≤60) | `Pharmacy Fit-Out in Lahore | Woodex Interior` |
| H1 | `Rooms a pharmacy can dispense from` |
| Primary keyword | pharmacy fit-out Lahore |
| Secondary | pharmacy interior, DGDA compliance |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Independent pharmacist | What's included + timeline |
| Chain operator | Prototype rollout FAQ |
| Licensing worry | Compliance section — design-stage review |
| Wants proof | Wellstar named work block |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | brief §HERO (PKR stripped) |
| 02 | **WHAT PHARMACY FIT-OUT INCLUDES** | `includes-checks` | brief §2 |
| 03 | **WHO THIS IS FOR** | `who-grid` | brief §3 |
| 04 | **LICENSING COMPLIANCE — DESIGNED IN** | `includes-checks` | brief §3/Q3: storage, dimensions, hygiene, signage, security |
| 05 | **COST FACTORS** | `cost-lock` | brief §4 → no PKR |
| 06 | **OUR PROCESS — 6 STEPS** | `process-steps` | brief §5 |
| 07 | **PHARMACY vs RENOVATION vs HEALTHCARE** | `comparison-table` | brief §6 |
| 08 | **WHY CHOOSE WOODEX** | `why-grid` | brief §7 |
| 09 | **NAMED WORK — WELLSTAR** | `featured-cards` | Wellstar Pharmacy, Cosmetics & Mini Hospital, DHA Lahore (fact lock: only named client) |
| 10 | **FAQ** | `faq-accordion` | brief §8 (8 Q&As) |
| 11 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Compliance language stays design-stage honest ("we design to the licensing standards; the licence is yours"). Wellstar appears as named work — never as a generic portfolio claim.`
- Unique CTA variant: **"Rooms a pharmacy can dispense from."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Specialist group) · commercial-fit-out (parent)
- **Outbound (this page links to):** commercial-fit-out · retail · joinery · projects (Wellstar named band) · client-stories

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Pharmacy Fit-Out.

## Part 6 — Image & Media Brief

Hero: studio-pharmacy.jpg (named work) · includes: project-minimal.jpg. [CONFIRM: more pharmacy photography]
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
