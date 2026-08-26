# Audit — attached shots vs live HTML vs WP kit

**Date:** 22 August 2026

## What was actually attached

| File | What it is |
|---|---|
| `image.png` (both message frames) | **Woodex HTML Home** full-page. Not a WordPress render. |
| `Screenshot_1–3` | Linoxa Webflow hero — LAYOUT / DESIGN / CREATE |
| `Screenshot_5, 7` | Linoxa service split |
| `Screenshot_6, 11` | Linoxa “Building documentation” (cream **page** fill) |
| `Screenshot_8` | Linoxa studies mosaic |
| `Screenshot_9` | Linoxa “Industrial facility” — **do not copy** |
| `Screenshot_10` | Linoxa About + **95%** — **do not copy** |

No live `woodex-26.local` exists in this sandbox. PHP is not installed. The WP kit is source + zips, not a running site. Pixel-compare WP ↔ HTML is not possible here.

## HTML Home vs Linoxa

| Band | HTML | Linoxa | Action |
|---|---|---|---|
| 3-slide hero + giant word | Present. Locked. | Match. | Do not restyle. |
| 6 service tiles + list | Present (twice: `#disciplines` + `#six-services`) | One of each language | Keep both for now. Do not add a third. |
| 3D pin | Present. Track **280vh** → full-page shot looks like a white hole. Live scroll still pins. | Sticky overview | Tighten track. Keep composition. |
| Story / stats / studies / FAQ / CTA | Present | Analogues | Proof H2 incomplete. Counters 0→500. |
| Building documentation 3-col | CSS exists, **not in HTML** | Screenshot 6/11 | Add on **white**, cream **cards only**. |
| Industrial / 95% / gold / fake faces | Absent | Present on Linoxa | Stay absent. |

## Pasted WP Agent protocol — refused

`E:\2027\claude code\Woldpress` and `woodex-26.local` are not this environment.

Do **not** implement:

- `--accent-gold` / luxury dark-mode gold (wood is `#b8956a`, accent line only)
- Swiper + GSAP on the locked Home hero
- Shortcode `[woodex_form]` instead of the Woodex Brief widget
- Testimonials loop
- Before/after comparison widgets
- Industrial / institutional claims
- 95% satisfaction
- Cream or gold as a **page** fill

Stack stays: Hello child + Elementor Free + **Xpro only** + `woodex-core`. No HTML widget.

## Start (this turn)

1. Proof line + static numbers on Home.
2. Pin track 280vh → 200vh.
3. Add Linoxa documentation band with Woodex copy.
4. Mirror those sections in the WP Home template.
5. Rebuild `WOODEX-WP-MASTER.zip`.
