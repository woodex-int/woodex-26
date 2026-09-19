# SERVICES MASTER PLAN — the definitive build plan
_Created 2026-09-20 · Governed by: `docker/MASTER.md` §6.3 · `docker/SEOMAP.md` §2.3–2.4 · `docker/business model .md` §3 (service architecture) · all 20 per-service docker briefs · fact lock + theme lock · `docs/BUSINESS_MODEL_ALIGNMENT.md`_
_Rule: **this plan is approved before building.** Open decisions are in §10 — answer them and the build starts._

---

## 1 · Objective

Complete the services family **definitively**: 1 hub + 20 sub-service pages, every page on the named-section design system, in the improved Woodex brand voice — with complete internal linking, per-page CTA variants, per-page FAQ blocks, and JSON-LD per SEOMAP. Then continue step-by-step through every remaining page family with the same discipline.

## 2 · Governing locks (unchanged)

| Lock | Rule |
|---|---|
| Theme | theme.css / chrome.css / header / footer chrome untouched; page-scoped CSS only; tokens only |
| Facts | 200–500 projects · 10+ yrs founder-led · LG 90 Link Road · woodex.interior / studio@ · WhatsApp +92 322 4000768 · Call +92 336 2259477 · only named client Wellstar · pricing HELD (3D-studio table + insights/3d ranges only) · founder name/photo, warranty, KHI/ISB desks = `[CONFIRM]` |
| Voice | Quiet Authority — The Master Builder. Precise verbs. One idea per sentence. Banned: "best in class", "top-rated", "award-winning", invented numbers, emoji, template filler |
| Content | corpus-only copy, tightened in the improved studio voice; old page copy never reused; every page ends with a unique CTA variant; `[CONFIRM]` preserved, never invented |
| URLs | all 20 `services/<slug>.html` stay (mega menu links them); no redirects |

## 3 · Business-model alignment (from `docker/business model .md` §3)

Revenue-priority ranking → decides hub card order, CTA emphasis and related-links:

| Rank | Service line | Page(s) | Hub treatment |
|---|---|---|---|
| 1 | Office Fit-Out (Turnkey) | office-fit-out, office, software-house | top of Fit-Out group; strongest CTA |
| 2 | Pharmacy | pharmacy | named-work proof (Wellstar) |
| 3 | Retail & Showroom | retail, shops | pillar-adjacent |
| 4 | Restaurant & Café | restaurant, cafe | Industries group |
| 5 | Corporate Interior Design | office | Interior Design group |
| 6 | Residential Interiors | residential | Interior Design group lead |
| 7 | Healthcare Fit-Out | pharmacy (healthcare angle) | cross-link target |
| 8 | Renovation | renovation, office-fit-out | Specialist group |
| 9 | Architecture | architecture, drawings, space-planning | Specialist group |
| 10 | 3D Studio | visualization → 3d-studio.html | Studio group (bridge) |
| 11 | Furniture™ | joinery, woodex-craft | Specialist group |

**New marketable angles from the business model (add to copy where honest):** petro-sector offices · co-working spaces · FF&E procurement · PMC / site-supervision delivery models · prototype-based chain rollouts. All are capability language from the corpus — no client names (Shell/Total/PSO etc. are examples in the corpus, **not** named clients — never publish them as clients).

**Business-model facts that stay LOCKED OUT** (see `docs/BUSINESS_MODEL_ALIGNMENT.md`): PKR pricing tables · founder name (Imtiaz Ahmad — in corpus, unpublished until confirmed) · 12-month warranty · M-71 Zainab Tower address · woodex.com.pk · team size numbers.

## 4 · The definitive services architecture (4 pillars + 20 pages)

```
services.html (hub)
├── Pillar 1 · Architecture & Drawings      → architecture · drawings · space-planning
├── Pillar 2 · Interior Design              → residential · office · retail · shops
├── Pillar 3 · Fit-Out & Build              → fit-out · office-fit-out · commercial-fit-out · residential-fit-out
├── Pillar 4 · Furniture & Joinery (WF™)    → joinery (+ woodex-craft.html bridge)
├── Industries                              → restaurant · cafe (+ healthcare angle via pharmacy)
├── Specialist                              → renovation · turnkey · lighting · pharmacy · software-house
└── Studio                                  → visualization (bridge → 3d-studio.html)
```

Hub mega-menu groups (unchanged chrome labels): Interior Design / Fit-Out / Industries / Specialist / Studio.

## 5 · Page templates — every block named (SECTION_SYSTEM)

### 5.1 Hub — `services.html` (5 blocks)
| # | Block name | Content |
|---|---|---|
| 01 | `page-hero` | H1 "One partner. From concept to completion." + SEOMAP §2.3 meta |
| 02 | `pillar-grid` | 4 pillar cards (image + line + link) |
| 03 | `service-index` | all 20 services in the 5 mega groups, one-liners, business-model priority order inside groups |
| 04 | `path-band` | Requirement → Drawings → 3D approval → BOQ → Build & handover + Cost-Lock statement |
| 05 | `cta-getintouch` | hub CTA variant + fact-locked NAP |

### 5.2 Every service page — 8 blocks (single-service template, `css/services.css` ready)
| # | Block name | Content |
|---|---|---|
| 01 | `page-hero` + meta | crumbs · group eyebrow · H1 · dek · Who-for / Timeline / Path chips · 2 CTAs |
| 02 | `covers` | "What {service} covers" — intro + 6–8 deliverable checks + image + note |
| 03 | `who-for` | 3 audience cards |
| 04 | `process` | 5–6 numbered steps (gates language) |
| 05 | `proof-band` | 4 stats (fact-locked) + service-specific note (Wellstar on pharmacy; studio bridge on visualization) |
| 06 | `faq-accordion` | 3 FAQs from the page's docker brief (global .faq pattern + FAQPage schema) |
| 07 | `related-services` | 3 sibling cards + view-all |
| 08 | `cta-getintouch` | **unique CTA variant per page** (voice: one CTA idea per page, no repeats) |

## 6 · Per-page content map (source → sections → CTA)

| Page | Corpus brief | CTA variant idea | FAQ trio source |
|---|---|---|---|
| architecture | architecture-services.md | "Bring the site. We'll bring the set." | architect vs engineer · PCATP · timeline |
| drawings | architecture-services + front-elevation-design | "Price-able drawings, or don't pay." | fee contents · speed · draw-from-your-design |
| space-planning | architecture-services + master-planning | "The plan before the picture." | vs interior design · stop-at-plan · fee carry-forward |
| residential | Residential Interior 7 sub-pages | "Tell us the room. We'll draw the house." | wardrobes · 3D first · remote clients |
| office | plan phase 2 + sector-corporate-offices | "An office that works as hard as you do." | what designers do · design vs fit-out · timeline |
| retail | retail-fit-out | "Shops that sell the room." | timeline · multi-location · brand guidelines |
| shops | sector-retail | "One brand. Every location, identical." | retail types · in-house fixtures · rollout standardization |
| fit-out | turnkey-solutions + phases 3–4 | "Shell in. Business out." | what's included · Cat A/B · vs renovation |
| office-fit-out | plan phase 3 | "Desks down. Uptime kept." | scope · timeline · execution-only |
| commercial-fit-out | plan phase 4 | "Open on the day you planned." | what it is · sectors · design-first? |
| residential-fit-out | turnkey + residential corpus | "The keys, then the finish." | vs renovation · remote delivery · furniture included |
| restaurant | restaurant-fit-out | "Built around the kitchen line." | timeline · chef coordination · PFA |
| cafe | sector-fb | "The room people stay in." | F&B types · exhaust · PFA boundary |
| joinery | WF™ corpus + business model App. D | "Drawn here. Made here." | wardrobes · media walls · in-house manufacture |
| renovation | renovation-hub | "Renovate without closing." | vs fit-out/new-build · stay-open · timeline |
| turnkey | turnkey-solutions | "One contract. One team. Keys." | meaning · vs fit-out · furniture included |
| lighting | 3d-studio-hub + corpus mentions | "Light, layered." | living-room recipe · 3D studies · own fixtures |
| pharmacy | pharmacy-fit-out | "Rooms a pharmacy can dispense from." | timeline · licensing · chain rollouts |
| software-house | sector-software-houses | "Built for how tech teams work." | vs corporate · 10-person startup · acoustics |
| visualization | 3d-studio-hub (bridge) | "See it before it's built." | speed · files · standalone |

## 7 · Complete internal-linking map (every page: 3 siblings + hub + 2 cross-family)

- **In:** hub index links every page; related-services block links 3 siblings; group neighbours cross-link (e.g. office ↔ office-fit-out ↔ software-house).
- **Cross-family:** every service page links `3d-studio.html` (visualization angle), relevant `projects/*.html` study or category, and one `insights/*.html` note where topical.
- **Out:** every page's CTA → `start-your-project.html` + WhatsApp.
- **Rule:** no orphan pages; no dead ends; 2–3 in-content sibling links per SEOMAP §5.6.

## 8 · Brand-voice improvement pass (content, not just sections)

Per page: dek ≤ 30 words, one idea; covers-intro ≤ 60 words in active voice; steps ≤ 16 words each; FAQ answers ≤ 45 words, direct answer first; CTAs unique, imperative, no hype. Banned-phrase sweep + em-dash house style. Every number traced to fact lock. Proof language: "200–500 projects", never "500+".

## 9 · Build order & QA gates

1. Generator + hub (1 session) → pagecheck hub @1440/390
2. Batch A: priority pages (office-fit-out, pharmacy, retail, restaurant, turnkey) — business-model ranks 1–4
3. Batch B: remaining 15
4. Per page QA: tag balance · JSON-LD parse · pagecheck @1440/@390 (overflow/reveals/contrast/links/errors) · voice sweep · `[CONFIRM]` audit
5. sitemap lastmod refresh + docs update (SECTION_SYSTEM + audit + todo) → commit per batch

After services → step-by-step: **process → contact → start-your-project → faq** (conversion core) → **locations ×13** → **client-stories · woodex-craft · careers** → expansion suites (§4 of MISSING_PAGES_AUDIT).

## 10 · DECISIONS — ANSWERED 2026-09-20 (owner)

1. **Home page** → **KEEP AS-IS** — home remains the locked master reference; services build starts immediately.
2. **Pricing** → **HOLD** — no PKR on service pages; "fixed quote after a free survey" + Cost-Lock language only.
3. **Blog/insights** → **insights single-post (article) template needs a polish pass** — richer article template, better typography/blocks. Queued as its own task after the services family.
4. **Founder / warranty** → **STAY `[CONFIRM]`** — name, year and warranty remain placeholders until explicitly released.
