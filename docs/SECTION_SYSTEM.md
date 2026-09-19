# Woodex Section System — named blocks (master reference)

Every page is assembled from NAMED section blocks. The home page (`index.html`) is the
master reference implementation. Each block carries a banner comment and a
`data-section="name"` attribute in markup, and a `.sec-*` class family in `css/home.css`
(home) — inner pages map the same names to their page CSS.

**Rules that apply to every block, every page:**
- Theme locked: tokens (`--navy`, `--cream`, `--wood`, `--ink`, `--muted`, Plus Jakarta Sans) from `css/theme.css`. No new fonts, no new colors, no gold.
- Content from `docker/` corpus only, Woodex brand voice. Fact lock: 200–500 projects · 10+ years founder-led · ISO 9001-grade · 3 studios (Lahore-Gulberg III, Karachi-Clifton, Islamabad-F-7) · only named client: Wellstar Pharmacy, Cosmetics and Mini Hospital, DHA Lahore · pricing "quoted after survey" (no PKR tables) · founder name/photo and testimonials `[CONFIRM]` only.
- No emoji icons (SVG icons from `assets/icons.svg`), no gradient text, no uniform icon-card scaffold without hierarchy, reveal motion via existing `.reveal` + `data-delay` (app.js).
- Every page: unique H1, unique CTA block copy, JSON-LD per brief, `[CONFIRM]` preserved.
- Small text ≥ 4.5:1 contrast, large ≥ 3:1. Dark wood `#7d5f3a` for small labels on light; `--wood` reserved for large numerals/accents on navy.

## The blocks

| # | Name (`data-section`) | Pattern source (Linoxa home-two) | Contents | Reuse |
|---|---|---|---|---|
| 01 | `hero-rotator` | 3-slide rotating hero | 3 slides: eyebrow, split H1, copy, CTA. **Locked — do not restyle.** | home only |
| 02 | `pillars-swap` | Partners interactive (logo grid + copy swap) | 4 pillars list (Architectural Design & Space Planning / Interior Design / Construction Fit-Outs & Turnkey / Furniture Design & Manufacturing — corpus copy verbatim) + image swap on hover/focus/click. JS hook: `.st-space` buttons + `#st-space-img`/`#st-space-cap` (app.js, untouched). | services hub |
| 03 | `statement-intro` | Intro statement band | Cream, centered. One locked brand statement: "One accountable partner, from drawing to delivery." + "Design is the foundation…" | about, all hubs |
| 04 | `service-split` | Service rows (image + heading + copy + Discover more) | 3 alternating rows: Turnkey (cost locked at Gate 4) / Renovation (starts with the drawing) / 3D (approve the room twice). | services, renovation hub, 3d-studio |
| 05 | `big-feature` | Commercial band (big image + H2 + chips) | Sector fit-outs ("cannot close" businesses), Wellstar named, 3 chips → sector pages (services.html until they exist). | sector pages, fit-out hub |
| 06 | `doc-collage` | "Building documentation" (text + 4-image collage) | "Approved drawings. Locked numbers." — still → BOQ → Gate 4 price lock → process.html. White fill, cream cards only. | process, turnkey |
| 07 | `icon-trio` | Icon cards (Interior design / Consultation / 3D Modeling) | 3 entry doors with gate icons (`i-design`, `i-discover`, `i-visualize`): Interior Design / Site Survey & Quote / 3D Studio. | services, start |
| 08 | `marquee-line` | Big repeating marquee | "Drawn. Then built." ×2 counter-scrolling tracks, aria-hidden, reduced-motion off. One per page max, never carries unique content. | hubs, insights |
| 09 | `proof-band` | About + statement with float image | Founder-led story + 4 locked numbers (200–500 / 10+ / ISO / 3 studios). Navy. Numbers only from fact lock — never invent. | about, process, locations |
| 10 | `blog-grid` | Blog band (H2 + View all + 3 cards) | Insights cards — real posts only, real titles, real links. | insights, category hubs |
| 11 | `cta-getintouch` | "Stay connected with us" | "Tell us about your space." + WhatsApp (+92 322 4000768) + Start your project + NAP line (LG 90 Link Road, Model Town, Lahore · 10:00–8:30 · studio@woodex.interior). Copy varies per page; facts don't. | every page (unique CTA copy) |

## Page order (home = master)
hero-rotator → pillars-swap → statement-intro → service-split → big-feature →
doc-collage → icon-trio → marquee-line → proof-band → blog-grid → cta-getintouch

Background rhythm: navy → white → cream → white → white → white → white → cream → navy → white → navy.

## Build order for remaining pages
1. `template-inner.html` — page-hero + statement-intro + service-split + proof-band + cta-getintouch as the inner-page rail.
2. `services.html` hub (pillars-swap + icon-trio + big-feature + cta).
3. Then wave by wave per `docs/MASTER_PLAN_TODO.md`, reusing only these named blocks — no new section patterns without adding them to this file first.
