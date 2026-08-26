# Woodex — project status report

**Date:** 26 August 2026 · pack **1.2.0** (`wx-theme.zip` in dist)  
**Site of record:** `/home/user/WOODEX-26/`  
**GitHub:** https://github.com/woodex-int/woodex-26  
**This file** is the current picture. Todo list: `docs/TODO.md`.

---

## 1. What this repo is

Two tracks, one brand.

| Track | Where | Role |
|---|---|---|
| **HTML (live)** | 66 pages at repo root | Canonical front. Serve with `python3 -m http.server 8080 --bind 0.0.0.0` |
| **WordPress (kit)** | `WP-THEME/` | Upload-ready theme + plugin. Not running here (no PHP, no Docker) |

HTML stays until you command **CUTOVER**.

---

## 2. Folder (organized)

```
WOODEX-26/
├── index.html … 3d-studio.html …     66 HTML pages
├── services/ (20)  locations/ (12)  projects/ (8)  insights/ (11)
├── css/  js/  images/  content/  assets/
├── docs/                             plans + this report + TODO.md
├── WP-THEME/
│   ├── src/wx-theme/                 NEW parent (Elementor). Impreza = reference
│   ├── src/woodex/                   Hello child (legacy fallback)
│   ├── src/woodex-core/              plugin: widgets, CPT, installer, REST
│   ├── kit/json/                     16 Elementor v0.4 templates
│   ├── dist/                         UPLOAD THIS
│   │   ├── theme.zip                 Hello Elementor 3.4.9 (official)
│   │   ├── child.zip                 Woodex Hello-child
│   │   ├── woodex-core.zip           plugin
│   │   ├── templates/*.json
│   │   ├── WOODEX-WP-MASTER.zip
│   │   └── INSTALL.md
│   └── 01–06 + ADVANCED_MASTER_PLAN.md
├── sitemap.xml  robots.txt  vercel.json  netlify.toml  .htaccess
└── DEPLOY_KEY.txt                    LOCAL ONLY — never commit
```

Root `WOODEX-WP-MASTER.zip` is a copy of `WP-THEME/dist/`. Canonical pack is `dist/`.

---

## 3. Done

### HTML site (66 pages)

- Home 3-slide LAYOUT / DESIGN / CREATE, 6.8s — **locked**
- One six-service module (`#six-services`). `#disciplines` removed
- 3D pin (`#studio-highlight`), track 200vh
- Documentation band (`.lx-doc`) — white page, cream cards
- Stats static: `500+` · `10+` · `~20` · `3` — no 0→500
- Proof H2: `500+ projects · founder ~20 years · execution 10+ years · ISO 9001`
- 3D Studio cine + exclusive H2 once
- 20 unique services + AEO/GEO blocks
- 12 city pages (studio vs nationwide)
- 6 studies + 2 hubs — labelled studies
- Insights listing (Blog Two/Three) + 7 articles + 4 hubs
- Mega 5-group, footer Call + WhatsApp on all pages
- WhatsApp `923224000768` · Call `+923362259477` · Model Town desk
- Skip-link, `light-page`, image dimensions, sitemap 65 URLs (404 noindex)
- Fake socials removed. Named client: Wellstar only

### WordPress kit

- Hello child `woodex` — tokens, chrome, mega, header/footer
- Parent scaffold `wx-theme` — 31 files, one skin `woodex-interior`
- Plugin `woodex-core` — Hero Slider, Cine, Ticker, Gates, Brief, CPTs, REST brief, MCP handshake (secret in wp-config only), WhatsApp float, Tools → Woodex Setup
- 16 Elementor JSON templates
- Master zip ready to upload

### Docs

`DESIGN` · `PAGE_MAP` · `CONTENT_BRAND` · `SEO_PLAN` · `WX_THEME_MASTER_PLAN` · `PROJECT_MAP` · `WP_DOCKER_AND_THEME_PLAN` · this report · `TODO.md`

---

## 4. Git

| Item | State |
|---|---|
| Local `main` | `7de27fe` |
| Remote `origin/main` | `9fd4c23` — stub “WX Theme Master” (Impreza text) |
| `origin/WX-Theme-Master` | Impreza + WPBakery + FileBird Pro + agent zips — **not merged** |
| `origin/theme` | Old HTML snapshot |
| Uncommitted | Home proof, `lx.css`, README, `.gitignore`, entire `WP-THEME/`, new docs |
| Not committed | `DEPLOY_KEY.txt` (gitignored) |

No push this phase (your last git answer).

---

## 5. Environment limits

- This sandbox: **no Docker, no PHP**. WordPress cannot be installed here unless you choose a later path (`docs/WP_DOCKER_AND_THEME_PLAN.md`).
- Preview: HTML on port **8080** only.
- `woodex-26.local` is on **your** machine.

---

## 6. Locks (do not break)

- Home 3-slide composition. 3D Studio cine. Exclusive H2 once.
- Tokens: Plus Jakarta · navy `#0c1628` · cream `#f4efe7` in-section · wood `#b8956a` line only.
- Page fills: white + navy only.
- Proof line exact. Wellstar only. No 95%, no industrial, no fake awards.
- No HTML widget. No us-core / WPBakery / RevSlider in the product.
- No hardcoded MCP secret.

---

## 7. Recommended stack (unchanged)

**`wx-theme` parent + Elementor Free + Xpro + woodex-core.**  
Impreza = reference of *jobs*, not the engine.  
HTML = live until CUTOVER.

---

## 8. Remaining

See **`docs/TODO.md`**. High level:

1. HTML P4 QA + leftover motion  
2. Point installer at `wx-theme`; zip `wx-theme.zip`  
3. Real WordPress (your host or compose) — then Elementor pages  
4. Git: commit kit without deploy key; decide branch vs main  
5. Do not merge GitHub Impreza/WPBakery zips  

---

## 9. Next command

| You say | I do |
|---|---|
| **START P4 QA** | HTML 375–1440 + motion leftovers |
| **START P3** | Installer → `wx-theme` + `wx-theme.zip` |
| **COMPOSE** | Write `docker-compose.yml` for your machine |
| **PUSH BRANCH** | `wp-kit` only. No `DEPLOY_KEY`. No Impreza zips |
| **CUTOVER** | HTML → WP redirects. Not before a live WP |
