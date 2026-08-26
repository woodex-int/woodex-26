# Widget and animation map

Rule: **Elementor container + native/Xpro widget**, or **Woodex widget**. Never HTML widget.

## Woodex-core widgets (we write)

| Widget | Replaces | Editor controls |
|---|---|---|
| Hero Slider | Home `.hero` 3-slide | Repeater 3, duration, side labels, index words |
| Cine | `.cine-hero` / `.cine-short` | Images, crumbs, eye, H1, CTA, copy, short/full |
| Ticker | `.st-ticker` | Repeater words, speed |
| Gates | Process 7 gates / `sv-rail` | Repeater: n, title, note |
| Brief Form | `#project-form` / `#contact-form` | Field visibility, required phone, WA on/off |

These register with Elementor as normal widgets (`Widget_Base`). They output semantic HTML (`section`, `h1`, `nav`, `form`). Settings are in the panel.

## Section → widget (Home)

| HTML | Widget |
|---|---|
| `.hero` | Woodex Hero Slider |
| `#disciplines` | Tabs or custom; 6 cards + copy panel — Xpro / containers |
| `#six-services` | Image + icon list (hover swap = small Woodex script in widget) |
| `#studio-highlight` | Containers + sticky CSS; 3 slides as nested |
| `.story` | Two columns + icon list |
| `.stats` | Xpro / Elementor Counter (static number option — prefer **static 500+**, no 0→500) |
| `.split` | Image + heading + list |
| `.foundations` | Gallery / image box → CPT `study` |
| `.approach` | Image + accordion |
| `.marquee` | Optional; or delete (ticker already exists) |
| `.featured` | Two images + list + button |
| `.cta` | Background image container + heading + button |

Orbit: **gone**. Do not rebuild.

## Service / inner

| HTML | Widget |
|---|---|
| cine-short | Woodex Cine (short) |
| wx-have / wx-out | Icon list / icon box grid — **content from CPT fields** |
| wx-ask | Accordion or definition list widget |
| wx-geo | Text + 3 icon boxes + `<address>` via Theme Builder HTML tag on text widget (Elementor text allows tag, not HTML box) |
| wx-eeat | 4 counters / icon boxes |
| wx-note | Blog Two row: heading + button |
| sv-* unique blocks | Keep variety: bento = image boxes; routes = two containers; day = two figures |

## Insights (Blog Two)

Archive: loop. Each item: `time` + `h2` + button. CSS already in `css/blog-two.css` — port to child.  
Single: Theme Builder. FAQ block = accordion + FAQ schema from post meta.

## Animation (allowed)

| Effect | Tool | Where |
|---|---|---|
| Fade / slide in | Elementor entrance **or** Xpro | One per section, once |
| Floating translate | Xpro Floating (subtle, &lt;8px) | Rare, hero only |
| Ken Burns | Woodex Cine only | Heroes |
| Clip-path slide | Woodex Hero Slider only | Home |
| Tilt | Xpro if free; else skip | Folio images desktop |
| Sticky pin | CSS | Home 3D + About; off &lt;1100px |
| Reduced motion | Child CSS | Global |

## Animation (forbidden)

Particles, smoke, magnetic cursor, autoplay video backgrounds (no file), 0→500 counters on every page, three marquees on one URL.
