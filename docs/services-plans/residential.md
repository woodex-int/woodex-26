# Residential Interior Design — Page Master Plan (Parts 1–8)

`services/` · Group: **Interior Design** · Pillar: **Interior Design** · BM priority: 6 — brand building
Source briefs: Residential Interior 7 sub-pages.md · Plan v1 2026-09-20 · Status: **planned (v2 unique-section rebuild)**

---

## Part 1 — Page Strategy & SEO Specifications

**Purpose:** Convert homeowner intent: hub of the room family (bedroom/kitchen/living/dining/home-office/kids) — rooms as the unique spine.

| Field | Value |
|---|---|
| URL | `/services/residential` (existing slug — unchanged) |
| Title (≤60) | `Residential Interior Design | Woodex Interior — Lahore` |
| H1 | `Homes, room by room` |
| Primary keyword | house interior design Lahore |
| Secondary | bedroom interior, kitchen design |
| Schema | Service + FAQPage + BreadcrumbList (fact-locked provider) |

**Page Intent Map**

| Visitor intent | Page answer |
|---|---|
| One room first | Room-by-room grid + "start with the room that bothers you" |
| Whole home | Full-home scheme section |
| Overseas client | Remote approvals FAQ |

## Part 2 — UI/UX Section-by-Section Layout Plan (UNIQUE to this page)

| # | Section | Pattern | Copy source |
|---|---|---|---|
| 01 | **HERO** | `hero-cine` | hub copy — studio voice |
| 02 | **THE SIX ROOMS** | `types-cards` | bedroom · kitchen · living · dining · home office · kids — unique spine |
| 03 | **WHAT RESIDENTIAL DESIGN INCLUDES** | `includes-checks` | planning/joinery/lighting/finishes per room |
| 04 | **ROOM HIGHLIGHTS** | `featured-cards` | 3 room spotlights (bedroom wardrobe · media wall · kitchen) with WF™ cross-links |
| 05 | **THE PROCESS** | `process-steps` | measure → 3D → BOQ → manufacture → install |
| 06 | **MATERIALS & FINISHES** | `materials-grid` | corpus flooring/finish options |
| 07 | **COST FACTORS** | `cost-lock` | no PKR |
| 08 | **WHY WOODEX** | `why-grid` |  |
| 09 | **FAQ** | `faq-accordion` | corpus 7-sub-page FAQs |
| 10 | **CTA + BRIEF FORM** | `cta-form` | unique variant |

*This sequence is this page's own — no other services page shares it. Cost sections render as `cost-lock` (factors that move the number + Cost-Lock statement). NO PKR (owner decision 2026-09-20). Testimonial rows render only with `[CONFIRM: real quote]`, else omitted.*

## Part 3 — Complete Page Copy (notes)

- Copy source: the page's docker brief Part 3 (complete page copy), tightened in the Woodex voice (one idea per sentence; banned phrases out).
- Hero: H1 + dek from brief hero block, PKR stripped from subheadline.
- Body: every brief section carried over; comparison tables and includes lists kept verbatim-then-tightened; `Rooms-as-sections is the unique spine; each room card carries its corpus FAQ one-liner. (Room sub-pages themselves are a later expansion decision.)`
- Unique CTA variant: **"Tell us the room. We'll draw the house."**
- Word target: 600–900 (MASTER §6.3).

## Part 4 — Internal Linking Map

- **Inbound (who links here):** services hub (Interior Design group) · joinery (WF™)
- **Outbound (this page links to):** joinery · residential-fit-out · renovation · projects/residential · insights/rooms

## Part 5 — On-Page Schema

`@graph`: Service (name/serviceType/description/url/provider=LG 90 Link Road fact-lock/areaServed) · FAQPage (from this page's FAQ section, all Q&As) · BreadcrumbList Home → Services → Residential Interior Design.

## Part 6 — Image & Media Brief

Hero: project-retreat.jpg · rooms: studio-kitchen.jpg + project-urban.jpg. [CONFIRM: room photography]
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
