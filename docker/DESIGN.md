# DESIGN.md — Woodex Interior

**Stack:** HTML5 + Tailwind CDN + `css/theme.css` + `js/app.js`  
**Site:** `/home/user/WOODEX-26/`  
**Do not:** restyle Home 3-slide composition or 3D Studio unless commanded.

## Tokens (locked)

| Token | Value |
|---|---|
| Font | Plus Jakarta Sans 300–700 |
| Navy | `#0c1628` |
| Navy-2 | `#121e34` |
| Card | `#152033` |
| Cream | `#f4efe7` |
| Ink | `#12151c` |
| Muted | `#6a6560` |
| Wood | `#b8956a` |
| Radius | 24 / 16 / 12 / pill |
| Ease | `cubic-bezier(0.22, 1, 0.36, 1)` |

No second typeface. No extra accent.

## Components

- **Button:** Linoxa pill + circular arrow, dual-label hover (`.btn` / `.btn-light`).
- **Header:** fixed, white type, mega on Services, hide-on-scroll desktop only (>820px). Cream pages: `body.light-page` navy bar.
- **Cine hero:** full-viewport on **Home** (3-slide) and **3D Studio** only.  
  **Later START:** all other inner heroes **520px** (range 450–600).
- **Blog Three:** cream listing, alternating author + image rows (Insights).
- **Footer:** Stay connected + giant INTERIORS.
- **WhatsApp:** float `wa.me/923224000768`.

## Motion (Linoxa)

| Hook | Use |
|---|---|
| `[data-anim]` | fade / left / right / scale / clip / up |
| `[data-tilt]` | mouse 3D on media |
| `.cine-slide` | Ken Burns + 7.2s crossfade |
| `.hero-slide` | Home clip-path slider |
| `.lb-src` | lightbox |
| `.st-acc` / `.faq-q` | accordion |
| `prefers-reduced-motion` | kill animation |

Pending: mega dropdown rise, unique SVG icons, tilt on all cards.

## Icons (pending)

Line icons, 24px, currentColor, navy/cream. Process gates + service families. No emoji. No Lucide CDN unless commanded.
