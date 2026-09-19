# Fit-Out Services — Page Master Plan (Parts 1–8)

`services/` · Group: **Fit-Out** · Pillar: **Fit-Out & Turnkey** · BM priority: — (family umbrella)
Source briefs: turnkey-solutions.md (scope definition) + phases 3–4 · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert generic "fit-out" search intent and route it down to the sector pages (office/commercial/residential).

| Field | Value |
|---|---|
| URL | `/services/fit-out` (existing slug — unchanged) |
| Title (≤60) | `Fit-Out Services in Lahore | Woodex Interior` |
| H1 | `From shell to open` |
| Primary keyword | fit-out company Lahore |
| Secondary | shell completion, Cat A Cat B |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| Generic fit-out search | Definition + types + route to sector pages |
| Landlord Cat A | Types section |
| Tenant Cat B | Route to office-fit-out |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | assembled — studio voice |
| 02 | **WHAT IS FIT-OUT?** | `what-is` | turnkey-solutions §definitions |
| 03 | **CAT A vs CAT B vs CAT C** | `types-cards` | phase 3 §6 — unique spine |
| 04 | **WHAT FIT-OUT INCLUDES** | `includes-checks` | phase 3 §5 |
| 05 | **THE BUILD SEQUENCE** | `process-steps` | phases 3–4 §7 |
| 06 | **FIT-OUT BY SECTOR** | `sector-map` | routes: office · commercial · residential children |
| 07 | **COST FACTORS** | `cost-lock` | no PKR |
| 08 | **WHY WOODEX** | `why-grid` | shared differentiators |
| 09 | **FAQ** | `faq-accordion` | phase 3 FAQ |
| 10 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Umbrella page: wins the generic keyword then hands off to sector children — by-sector section is a router, not a duplicator.`
- Unique CTA variant: **"Shell in. Business out."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Fit-Out group)
- **Outbound (this page links to):** office-fit-out · commercial-fit-out · residential-fit-out · turnkey

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Fit-Out Services.

## Part 6 — Image & Media Brief

Hero: project-concrete.jpg · what-is: split-night.jpg. [CONFIRM: shell-to-open progress photography]
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
