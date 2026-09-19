# WOODEX — Experience Map
### Home · About · Content — from the first second of loading to the final CTA

> Architect's blueprint for the site's three core journeys. Every section is defined by
> **message → layout → composition → interaction → motion → hand-off** to the next section.
> Built on the incumbent visual world (docs/DESIGN.md): Plus Jakarta Sans · navy `#0c1628` ·
> cream `#f4efe7` · wood `#b8956a` (deep `#7d5f3a` for small text) · radius 24/16/12 ·
> ease `cubic-bezier(0.22,1,0.36,1)`.
>
> Companion to the impeccable critique run of 2026-09-19. Director's notes at each journey's end.

---

## 0 · Shared system — the grammar every page speaks

**Tone.** First-person, opinionated, build-focused. "Drawn. Then built." is the thesis;
every headline answers *what you get*, never *what we are*. Em-dashes are the house voice.

**Chrome.** Persistent header (navy, blur on scroll) · footer with giant INTERIORS watermark ·
WhatsApp float on mobile. Inner pages open with the compact `cine-hero` (560px): crumbs →
eyebrow → H1 (67px) → one-line promise → single CTA over a cinematic still. Home alone gets
the full 900px three-slide hero — the site's overture.

**Motion grammar.**
- Reveals: word-mask / rise / dolly, staggered 60–90ms, expo-out.
- Signature moments: pinned scenes (`lx-pin` 1800px on Home/About, `m-stick` steps + horizontal
  gallery on 3D Studio) — one authored spectacle per page, never identical entrances.
- Micro: wood hover shifts, translateX row nudges, counter ease-out 1600ms.
- `prefers-reduced-motion` → instant, no pin. Mobile ≤980px → stacked fallbacks, no pin.

**Conversion law.** Every journey ends in a **concrete action band** — a brief form, or
WhatsApp + phone with real numbers. The CTA is never "Learn more"; it is
*"Tell us about your space"* / *"Start your project"* / *"Message on WhatsApp +92 322 4000768"*.

**Rhythm law.** Navy (spectacle/proof) ↔ cream/white (explanation) alternation. Short bands
(300–600px) reset attention between long ones (900–1500px). A marquee strip (114px) is the
palate cleanser before every finale.

---

## 1 · HOME — the promise journey (`index.html` · ~9,700px · Persuade)

**Arc:** spectacle → catalogue → proof → method → invitation.

| # | Section (px) | Message | Layout & composition | Interaction & motion | Hand-off |
|---|---|---|---|---|---|
| 0 | Hero 3-slide (900) | "We turn ideas into spaces / Concept to completion / Approved visual. Buildable." | Full-bleed cinematic stills; H1 92px; two CTAs (primary *Start your project*, ghost *Explore interiors*); pip indicators 01–03 | Auto-advance with progress tracks; pips clickable (35px hit); slow dolly on art; crossfade 800ms | Slide 3 "Approved visual" plants the 3D seed → next section cashes it |
| 1 | Six services (957) | "Six services you can actually buy" — honesty as positioning | Cream; 6 numbered rows/cards (01–06, wood-deep numerals), each with output promise ("plan, stills, BOQ if you want") | Row hover: lift + arrow slide; numbers are wayfinding, not decoration | "3D visualization" row points forward → |
| 2 | **Pinned 3D scene** (1800) | "See it. Understand it. Build it." | Signature moment: sticky panel, scroll-driven still→render→plan transitions, 2× *Open 3D Studio* | Scroll-scrubbed frame morph; counter; rail dots on wide screens | Exits on "Build it" → the story of building |
| 3 | Story (918) | "Drawn. Then built." — the practice's creed | White; editorial split, large type | Word-mask reveal | Creed → how it's documented |
| 4 | Documentation (765) | "How a room is documented" | Cream; drawing → BOQ artifacts, annotated | Dolly + caption reveals | Documentation → scale of practice |
| 5 | Stats band (609) | 500+ projects · ~20 yrs · ISO 9001 | Navy; four figures, tabular numerals | Count-up on enter | Proof → who does it |
| 6 | Split (780) | "One team. One process. One result." | White; image + copy split | Parallax-lite | Team → the studies |
| 7 | Studies (970) | "Rooms drawn so they can be built" | Gallery of room studies | Hover zoom + captions | Studies → method |
| 8 | Approach (854) | "First we understand the space. Then we design it." | Cream; numbered method | Staggered rise | Method → featured proof |
| 9 | Marquee (114) | Brand words ticker | Navy strip, aria-hidden | Infinite loop, ±3° skew on velocity | Cleanser → finale |
| 10 | Featured (780) | "From approved still to BOQ and site" | White; case feature + CTA | Reveal | → |
| 11 | CTA band (460) | "Tell us about your space" | Navy; brief form / WhatsApp | Button magnet, focus rings (wood) | **Conversion** |

**Director's notes (Home).**
- ⚠️ Three `h1` elements (one per slide). Recommend: slide 1 keeps `h1`, slides 2–3 become
  `p.hero-title`. Not changed — the 3-slide hero is protected chrome (docs/DESIGN.md); needs your sign-off.
- Stats band uses the stat string as an `h2` — recommend a real heading ("Practice at a glance")
  with the numbers as a list.
- Studies (970) + Approach (854) run back-to-back with similar texture — consider merging or
  inserting a navy reset between them.

---

## 2 · ABOUT — the trust journey (`about.html` · ~6,700px · Trust)

**Arc:** conviction → craft → evidence → contact.

| # | Section (px) | Message | Layout & composition | Interaction & motion | Hand-off |
|---|---|---|---|---|---|
| 0 | cine-hero (560) | "Design should be built, not presented" | Compact cinematic opener, single CTA | Dolly ≤1.2vh | Conviction → shown, not told |
| 1 | **Pinned spatial scene** (1800) | "Focused on spatial excellence" | Signature: sticky scroll-scrub through spatial studies | Frame morph + counter | Spectacle → documented practice |
| 2 | Documentation (720) | "Designing spaces with purpose" | Drawings, annotations | Caption reveals | → values |
| 3 | Values / services / vision / mission (691) | The four-quadrant block | Cream; 4 cards | Hover lift | **Weakest block — see notes** |
| 4 | Authority (847) | "Design is not decoration. It is the foundation." | Navy; thesis + evidence | Word-mask | Thesis → craft extensions |
| 5 | Furniture (752) | "Custom furniture, connected to the interior" | White; mill imagery + *Open Woodex Craft* | Reveal | Cross-sell → people |
| 6 | Team (709) | "One studio. Four crafts." | Cream; four craft cards | Stagger | People → named proof |
| 7 | Wellstar case (1022) | "Wellstar, DHA Lahore — the beginning we can name" | White; full case feature + *Client stories* | Dolly | Proof → close |
| 8 | Navy manifesto (300) | "Design is not decoration" (repeat) | Short band | — | → CTA |
| 9 | CTA band (603) | "Tell us about your space" | Navy; WhatsApp + Call buttons (real numbers), studio address, timing | Button magnet | **Conversion** |

**Director's notes (About).**
- ⚠️ "Design is not decoration" appears twice (Authority §4 AND manifesto §8). The 300px band
  adds no new information and dilutes the thesis. Recommend removing §8 or re-writing it as
  a different close (e.g. a quote). Needs your call — it's content.
- The values/services/vision/mission quadrant is generic-agency boilerplate — the page's
  specificity valley. Recommend replacing with "What the studio guarantees" (concrete
  promises: named gates, ISO trail, in-house mill) in the same four-card layout.
- `h4` contact labels upgraded to `h3` (heading order fixed, rendered identically).

---

## 3 · CONTENT — the proof journey (`process.html` · ~7,600px · Read/Trust)

The archetype for long-form content pages (insights, careers, client-stories inherit this pattern).

**Arc:** contract of the page → money → gate → gates → honesty → places → proof → close.

| # | Section (px) | Message | Layout & composition | Interaction & motion | Hand-off |
|---|---|---|---|---|---|
| 0 | cine-hero (560) | "Drawn. Then built." + "Seven gates. Two places." | Compact opener, single CTA | Dolly | Promise → money first |
| 1 | Ticker (86) | Gate words marquee | Navy strip, aria-hidden | Loop + skew | Cleanser |
| 2 | Budget & BOQ (1488) | "Budget and BOQ live inside Plan and Build" | Cream; dense editorial — the money conversation up front | Reveal on scroll | Money → the visualize gate |
| 3 | Visualize gate (942) | "Visualize is a gate, not a thumbnail" | Navy; render feature + *Open 3D Studio* | Reveal | Gate → where you enter |
| 4 | Where you are (541) | "What you walk in with" — entry states | White; checklist grid | Hover | Entry → the gates |
| 5 | Seven gates (541) | "What the seven gates actually are" | Cream; named gate list | Row hover nudge | Gates → objections |
| 6 | Direct answers (753) | "Questions the process page must answer" | White; definition-list Q&A | Static (linear read) | Objections → geography |
| 7 | Geography (553) | "The path travels. The desk does not franchise." | Cream; address + three studio cards (29px targets) | Card hover | Places → why believe |
| 8 | Proof (549) | "Proof that belongs here" — 7 gates · stop rule · ISO · no fake rate | White; four proof chips | Hover | Trust → editorial close |
| 9 | Studio note (319) | "Design vs turnkey execution" | Cream; note card linking the insight | Reveal | → |
| 10 | CTA (460) | "Tell us what you have" | Navy; CTA + WhatsApp | — | **Conversion** |

**Director's notes (Content).**
- ✅ FIXED (this pass): back-half rhythm — "Where you are" + "Seven gates" merged into one
  two-column section (entry states | named gates, 820px); cadence now 820/753/563/549/319.
- ✅ FIXED (this pass): chapter rail added (see Wayfinding above); verified: scrollspy,
  tone flips, click-landing at exactly the 96px scroll margin, hidden <1340px, mobile stacks.
- §2 (1488px) is the densest block on the site — consider internal sub-heads every ~3 paragraphs.
- Fixed earlier this pass: sub-11px labels ("Stop rule", "Studio") raised to 11.2px with AA color;
  city link targets 19→29px; placeholder `img` src; tailwind guard.

---

## 4 · The cross-page narrative law

One site, one story, three depths:

```
HOME      "We turn ideas into spaces"        → what you can buy      (spectacle)
ABOUT     "Design should be built"           → who builds it         (conviction)
PROCESS   "Seven gates. Two places."         → how it will go        (contract)
3D STUDIO "See it. Understand it. Build it." → the tool of proof     (the showroom)
```

Every page opens with the creed ("Drawn. Then built." or its translation), carries exactly
one pinned signature moment, alternates navy proof with cream explanation, and closes with
a named human action — never a dead end. The visitor can enter at any depth and be handed
the next one: Home → 3D Studio → Process → About → Start your project.

---

## 5 · Verification (this pass, 2026-09-19)

- `tailwind is not defined` PAGEERROR on load (CDN stall) — **guarded** on all three pages.
- Contrast: 0 real violations in computed-style audit (Home 6→0 real, Process 3→0, About clean).
- Tap targets: process city links 19→29px; hero pips 15→35px hit area (no visual change).
- Heading order on About fixed (h2→h3, was h2→h4). Broken placeholder images fixed.
- Detector: 62→54 findings; all 54 residual classified (full-bleed layouts, aria-hidden
  marquees, incumbent eyebrow/tile vocabulary, static-scanner gradient false positives).
- Pinned scenes, forms, and console verified in real Chromium at desktop + 390px.
