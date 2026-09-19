# WOODEX 3D STUDIO — Scroll & Motion System

**Scope:** `3d-studio.html` (3D Studio Hub) · **Files:** `css/motion.css`, `js/motion.js`, `css/studio-hub.css`
**Law:** the theme is untouched; motion is page-scoped and additive.

---

## 1 · Philosophy — motion serves the story

The page is a **camera move through a studio**: approach (hero) → understand (definition) → meet the rooms (audiences/services) → watch it being made (process) → see the results (work) → act (brief).

1. **One idea per scene.** Each scroll chapter expresses exactly one message.
2. **The scroll is a dolly.** You move *through* the page like through a building — push-ins, pans, reveals.
3. **Physics, not decoration.** One easing family, one timing scale. Distance ∝ emotional weight.
4. **Depth via layers.** Three planes everywhere: background (slow, dim) · content (mid) · foreground (fast, large).
5. **Silence between movements.** Long rest zones (checklists, pricing, FAQ) so the moving moments read.

---

## 2 · Easing curves (motion tokens)

| Token | Curve | Use |
|---|---|---|
| `--m-ez-out` | `cubic-bezier(0.16, 1, 0.3, 1)` — expo-out | Reveals, text masks, UI. Nothing arrives slowly. |
| `--m-ez-io` | `cubic-bezier(0.83, 0, 0.17, 1)` — inOutExpo | Scene changes, clip wipes, image crossfades. Symmetric = cinematic. |
| `--m-ez-soft` | `cubic-bezier(0.22, 1, 0.36, 1)` | Micro-interactions: hovers, arrows, lifts (matches brand `--ease`). |
| `--m-ez-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overshoot — dots, step numbers, icons only. Never on text. |
| scrub | linear in scroll, eased *per frame* by the lerp | Pinned scenes (the glide comes from the engine, not the curve). |

## 3 · Timing scale

| Token | Duration | Applies to |
|---|---|---|
| `--m-t1` | 0.45s | Hover, arrow slides, dots |
| `--m-t2` | 0.8s | Standard elements, group children |
| `--m-t3` | 1.1s | Headlines, line masks, hero content |
| `--m-t4` | 1.4s | Scene-level wipes, clip reveals |

**Staggers:** 48ms per masked line · 70ms per card in a group · 90ms per checklist check.
**Parallax glide:** virtual scroll lerps at `0.09/frame` → ≈180ms perceived catch-up — the "smooth scroll" feel without hijacking the native scrollbar.
**Counters:** 1.6s, power4-out.

---

## 4 · Architecture (js/motion.js)

```
native scroll (untouched — a11y, mobile, SEO)
        │  read scrollY once per frame
        ▼
  rAF loop ──► vy = lerp(vy, y, 0.09)   ← the virtual camera
        │
        ├─► parallax layers  [data-m-px]      transform: translate3d(vy·speed)
        ├─► pinned scrubs    [data-scene]     progress 0→1 over track height
        ├─► hero dolly-out                    content recedes, bg lags (depth)
        ├─► ticker skew                       velocity → skewX ±3°
        └─► progress rail                     active chapter + tone flip
```

- **Reveal system:** IntersectionObserver adds `.m-in` (threshold 0.08, −7% bottom margin). Initial hidden states are gated on `html.m-js` — crawlers and no-JS see everything instantly.
- **Perf:** transform/opacity only · parallax elements activate via a 30%-margin IO · scenes and parallax re-measure on resize + body ResizeObserver (image loads).
- **Accessibility:** `prefers-reduced-motion` → no split, no pins, no parallax, all reveals resolve instantly. Under 1100px wide → pins release (scroll-snap / stacked fallbacks), parallax off, rail hidden.

---

## 5 · Scene-by-scene storyboard

| # | Scene | Chapter | Motion | CTA |
|---|---|---|---|---|
| S0 | **Hero — the approach shot** | Studio (dark) | H1 line-mask rise (48ms stagger, +180ms hold); trust bar staggers in at +440ms; Ken Burns cine slides; on scroll: content dollies out (scale 1→0.94, y −22vh, fade) while bg lags +12vh → depth; scroll-cue dot loop 2.3s | *Start a 3D brief* (magnetic) · *View 3D work* ↓ |
| S1 | Ticker | — | Marquee + velocity-reactive skewX (±3°, lerped) — the page acknowledges your scroll speed | — |
| S2 | **What is 3D visualization** | Definition | Paragraphs rise 120ms apart; **difference box dollies in from z −150px** (depth entrance); media clip-reveals (shutter wipe, 1.4s inOutExpo) then drifts at 0.05 | Two explore links → design services |
| S3 | Who uses the studio | Audiences | 5 cards stagger 70ms; hover lift −6px + icon tilt (spring) | (feeds S4) |
| S4 | **Services — the six** | Services | Cards rise staggered; ghost numbers warm on hover; note box + CTA | *Start a 3D brief* + per-card *Get a quote* |
| S5 | What you get | Deliverables | Two-column checklist; each row rises 70ms apart and its **check-mark draws itself** (stroke-dash 20→0, 90ms apart) | *Start a 3D brief* |
| S6 | **Process — PINNED steps** | Process | Desktop pin ≈535vh. Sticky panel: left = render stack **crossfading as an image sequence** (opacity + scale 1.08→1, inOutExpo 1.3s) + ghost counter 01→05; right = step cards ignite in sequence (opacity 0.38→1, lift, wood border). Mobile: stacked cards with inline visuals | Turnaround callout (2–5 days, dolly-in) + *Start a 3D brief* |
| S7 | **Featured work — PINNED pan** | 3D Work (dark) | Desktop pin: horizontal **camera pan** through 5 project cards, lerped glide; progress bar fills in wood; hover: image scale 1.06 + view-chip rotates −45°. Mobile: native scroll-snap | *View all 3D work* → projects |
| S8 | Marketing & pre-sales | Marketing | 3 columns stagger; **layered parallax filmstrip** — five stills at speeds 0.055→0.11 with staggered margins: the depth wave | *Request a marketing-render quote* |
| S9 | Cost | Cost | Pricing rows rise 70ms apart; hover: row warms + indents 8px | *Request a 3D quote* |
| S10 | Why Woodex | Why Woodex | 6 reason cards stagger; hover lift + icon nudge | (feeds S11) |
| S11 | **Proof band** | Proof (dark) | Counters power4-out: 500+ · 10+ · ISO 9001 · 2; named-client line (Wellstar) rises after | *Read the Wellstar story* |
| S12 | FAQ | FAQ | Items stagger 70ms; accordion per theme pattern | (feeds S13) |
| S13 | **Brief + form** | Brief (dark) | Left column slides from left; **form dollies in from z −150px**; magnetic submit; WhatsApp handoff (existing engine) | *Submit 3D brief* |
| S14 | Related services | Next | 4 cards stagger; arrow slides on hover | Explore links ×4 |
| S15 | Closing CTA | — | Static rest zone (theme component) — the quiet ending | *Start your project* |

**Progress rail** (desktop): fixed right edge — 14 chapter dots, wood-colored active state, labels on hover, tone flips to white over dark scenes. It is the page's camera map.

---

## 6 · Depth grammar

| Signal | Near | Far |
|---|---|---|
| Parallax speed | 0.11–0.2 (fast) | 0.05–0.07 (slow) |
| Entrance | rise 44px / dolly from z −150px | clip wipe, scale 1.05 |
| During scroll | moves with you | lags, slightly blurred/dimmed by shade layers |

**Scene changes** are tonal: white → cream → **navy** at Work and Proof/Brief (the "descend into the studio" moments). Backgrounds never animate themselves — sections are rest zones; only their content moves.

## 7 · What deliberately does NOT move

- Checklist text after arrival (only the check draws).
- Pricing numbers (static — money shouldn't jitter).
- FAQ answers (instant open, per theme).
- The closing CTA (one quiet frame at the end).
- Anything, if the user prefers reduced motion.
