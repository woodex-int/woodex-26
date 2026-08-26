# WX Theme Master Plan

**Date:** 22 August 2026  
**Repo:** https://github.com/woodex-int/woodex-26  
**Status:** Recommended architecture. Impreza is a **reference**, not the engine.  
**Live site:** HTML in `/WOODEX-26/` until you command cutover.

---

## 0. Verdict

The pasted `wx-theme-master` spec describes **Impreza + us-core + WPBakery + Slider Revolution**. That is a furniture-marketplace stack. It will restyle Home, fight Elementor, and pull commercial zips we will not ship.

**Recommendation:** keep the *capabilities* of that spec. Rebuild them as a **first-party parent theme `wx-theme`** + the existing **`woodex-core` plugin** + **Elementor Free + Xpro**. Keep the **HTML site** as the design source of truth.

| Layer | Role |
|---|---|
| HTML `WOODEX-26/` | Live front. Pixel reference. Do not delete. |
| `wx-theme` | New WordPress **parent**. Canvas like Hello. Woodex chrome, tokens, header/footer, skins. **No Hello. No Impreza.** |
| `woodex` (existing child) | Optional thin child after `wx-theme` is parent. Until then it stays Hello-child. |
| `woodex-core` | CPTs, 5 Elementor widgets, Brief REST, WhatsApp, installer, MCP handshake. |
| Elementor Free + Xpro | One addon pack. Theme Builder header/footer when you want them editable. |

Do **not** install: us-core, js_composer, revslider, FileBird Pro (unless you have a licence), five Elementor packs, HTML widget.

---

## 1. Impreza feature → Woodex equivalent

| Pasted spec | Do this instead | Why |
|---|---|---|
| Engine: Impreza / us-core | **`wx-theme` parent** we write | We own tokens. No us-core opinion. |
| TGMPA: us-core, WPBakery, RevSlider, CF7 | Recommend **Elementor + Xpro + woodex-core**. Optional WPForms. | One builder. Home slider is a Woodex widget. |
| Multi-skin switcher | `assets/skins/{name}/tokens.json` + `theme.json` + CSS variables | Woodex first skin. Next client = new token file. Not Impreza options JSON. |
| MCP `/wp-json/wx-agent/v1/` | Keep **`/wp-json/woodex/v1/`** in woodex-core. Secret only in `wp-config.php`. | Already exists. Do not hardcode a Bearer. Staging for write/exec. |
| Two-way builder + raw HTML → `us_page_block` | Elementor widgets + installer. **No HTML widget. No HTML dump.** | Locked. |
| Header / mega / WhatsApp | `wx-theme` PHP chrome now. Xpro Theme Builder later. | Same chrome as HTML. |
| Dark mode toggle | **No site-wide dark theme.** Navy sections only. Page fill = white + navy. | Brand lock. |
| Slider Revolution | **Woodex Hero Slider** (6.8s, LAYOUT/DESIGN/CREATE) | Locked composition. |
| Demo XML / Impreza wizard | woodex-core **Tools → Woodex Setup** | Creates pages, CPT shells, menus. |
| Multi-client skins | Skin JSON only. Do not clone Woodex proof into other brands. | Wellstar / 500+ stay Woodex. |

---

## 2. Dual track: HTML + WordPress

```
DESIGN (HTML)  ──────────────────────────►  stay live on 8080 / static host
      │
      │  same tokens, same copy, same widgets
      ▼
wx-theme + woodex-core + Elementor     ►  install on a real WP when you have one
```

Rules:

- HTML is canonical until cutover.
- WP must not invent a second Home.
- Exclusive H2 *“You are not approving a plan. You are approving a room.”* — 3D Studio only.
- Proof exact: `500+ projects · founder ~20 years · execution 10+ years · ISO 9001`.
- WhatsApp `https://wa.me/923224000768` · Call `+92 336 2259477` · Desk LG 90 Link Road, Model Town · 10:00–8:30.
- Named client: Wellstar only.

---

## 3. Target tree (`wx-theme`)

```
WP-THEME/src/wx-theme/
├── style.css                      Theme manifest (parent, not a child)
├── functions.php
├── theme.json                     Tokens for WP + Elementor
├── index.php  page.php  single.php  archive.php  404.php  search.php
├── header.php  footer.php
├── assets/
│   ├── css/
│   │   ├── tokens.css             navy / cream / wood — cream in-section only
│   │   ├── chrome.css             header, mega, footer, buttons
│   │   ├── wx-builder.css         Elementor container resets (no gold, no dark page)
│   │   └── reduced-motion.css
│   ├── js/
│   │   └── chrome.js              scroll header, mobile accordion
│   └── skins/
│       └── woodex-interior/
│           └── tokens.json
├── inc/
│   ├── setup.php                  supports, menus, enqueue
│   ├── presets.php                list skins (Woodex only in v1)
│   └── header-footer.php          helpers
├── template-parts/
│   ├── header.php
│   └── footer.php
└── README.md
```

Plugin stays at `WP-THEME/src/woodex-core/`.  
Do **not** put commercial zips in `inc/plugins/`.

---

## 4. What we refuse from the paste

- Bundling `us-core.zip`, `js_composer.zip`, `revslider.zip`
- TGMPA that auto-installs a second page builder
- Executive dark CSS as a **page** fill (`wx-core-dark.css`)
- `POST /import-html-section/` that stores raw HTML as a layout
- Hardcoded MCP token in theme PHP
- Nulled FileBird / WPBakery
- Multi-skin that copies Woodex proof onto another client
- Restyling Home 3-slide or 3D cine “to look more Impreza”

---

## 5. Phases

| Phase | Where | Work | Gate |
|---|---|---|---|
| **P0 Plan** | docs | This file | Done when you accept it |
| **P1 HTML** | `index.html` | One six-service module (`#six-services` only). Proof static. Pin 200vh. Docs band. | Home still locked at hero |
| **P2 Scaffold** | `src/wx-theme` | Parent theme files, tokens, chrome, skins JSON | Activates on a real WP with Elementor |
| **P3 Core** | `woodex-core` | Already written. Point installer at `wx-theme` canvas | Widgets in Elementor category Woodex |
| **P4 Pages** | real WP only | Theme Builder header/footer. Home = Hero Slider. 3D = Cine. | Cannot run in this sandbox |
| **P5 Cutover** | your command | Redirects `.html` → WP permalinks. HTML stays in repo | You say CUTOVER |

This sandbox: **P1 + P2**. No PHP runtime. No `woodex-26.local`.

---

## 6. Next development (this turn)

1. Write this plan (done).
2. Home: remove `#disciplines`. Keep `#six-services` (your answer: keep-list).
3. Scaffold `WP-THEME/src/wx-theme/` as the new parent (Elementor-ready, Impreza-shaped folders, Woodex tokens).
4. Do **not** push. Do **not** merge GitHub Impreza zips.

After P2: say **START P3** to retarget the installer, or **PUSH BRANCH** to publish `wp-kit` without touching `main`.
