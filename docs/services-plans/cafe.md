# Café Interior Design — Page Master Plan (Parts 1–8)

`services/` · Group: **Industries** · Pillar: **Fit-Out & Turnkey** · BM priority: 4 — F&B share
Source briefs: sector-fb.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert café-specific intent: atmosphere + throughput designed together.

| Field | Value |
|---|---|
| URL | `/services/cafe` (existing slug — unchanged) |
| Title (≤60) | `Café Interior Design | Woodex Interior — Lahore` |
| H1 | `The room people stay in` |
| Primary keyword | café interior design Lahore |
| Secondary | coffee shop design, bakery interior |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Coffee house / bakery | Counter flow + seating mix |
| Food-court outlet | Small-footprint volume |
| Dessert brand | Photogenic + fast line |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | sector brief §HERO |
| 02 | **WHAT WE DO FOR CAFÉS** | `what-is` | brief §2 |
| 03 | **CAFÉ SERVICES** | `includes-checks` | brief §3 (counter, seating, finishes, exhaust, cold room) |
| 04 | **CAFÉ PROCESS** | `process-steps` | brief §4 |
| 05 | **ATMOSPHERE × THROUGHPUT** | `types-cards` | seating mix / queue design / linger zones — unique section |
| 06 | **WHY CHOOSE WOODEX** | `why-grid` | brief §5 |
| 07 | **FAQ** | `faq-accordion` | brief §6 |
| 08 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Atmosphere × throughput section is unique to this page.`
- Unique CTA variant: **"The room people stay in."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Industries group) · restaurant (sibling)
- **Outbound (this page links to):** restaurant · retail · visualization · insights

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Café Interior Design.

## Part 6 — Image & Media Brief

Hero: studio-kitchen.jpg · atmosphere: project-minimal.jpg. [CONFIRM: café photography]
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
