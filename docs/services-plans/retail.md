# Retail & Showroom Fit-Out — Page Master Plan (Parts 1–8)

`services/` · Group: **Interior Design** · Pillar: **Fit-Out & Turnkey** · BM priority: 3 — brand rollouts
Source briefs: retail-fit-out.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert single-store and rollout retail intent: customer-flow planning as the hero idea.

| Field | Value |
|---|---|
| URL | `/services/retail` (existing slug — unchanged) |
| Title (≤60) | `Retail & Showroom Fit-Out in Lahore | Woodex Interior` |
| H1 | `Shops that sell the room` |
| Primary keyword | retail fit-out Lahore |
| Secondary | showroom fit-out, shop interior |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Opening a shop | What it includes + process |
| Chain rollout | Prototype FAQ + multi-location |
| Brand compliance | Brand guidelines FAQ |
| Comparing fitters | vs renovation vs office comparison |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | brief §HERO (PKR stripped) |
| 02 | **WHAT RETAIL FIT-OUT INCLUDES** | `includes-checks` | brief §2 |
| 03 | **WHO THIS IS FOR** | `who-grid` | brief §3 |
| 04 | **COST FACTORS** | `cost-lock` | brief §4 → no PKR |
| 05 | **OUR PROCESS — 6 STEPS** | `process-steps` | brief §5 |
| 06 | **RETAIL vs RENOVATION vs OFFICE FIT-OUT** | `comparison-table` | brief §6 |
| 07 | **WHY CHOOSE WOODEX** | `why-grid` | brief §7 |
| 08 | **FAQ** | `faq-accordion` | brief §8 (8 Q&As) |
| 09 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Customer-flow planning leads every section — the brief's differentiator. Keep brand-guidelines FAQ verbatim.`
- Unique CTA variant: **"Shops that sell the room."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Interior Design group) · commercial-fit-out (parent) · shops (sibling)
- **Outbound (this page links to):** shops · commercial-fit-out · joinery · projects/commercial · insights/retail-shop-interior

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Retail & Showroom Fit-Out.

## Part 6 — Image & Media Brief

Hero: project-minimal.jpg · includes: split-night.jpg. [CONFIRM: real store photography]
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
