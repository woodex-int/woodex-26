# Docker + WordPress + WX Theme — plan before start

**Date:** 22 August 2026  
**Status:** Questions first. No install until you answer and say **START**.

## Environment fact

This sandbox has **no Docker** and **no PHP**. `sudo` exists. Nested Docker often fails here.

Two legal ways to get WordPress:

| Path | What happens |
|---|---|
| **A — Compose file only** | I write `docker-compose.yml` + install notes. You run it on your machine (`woodex-26.local`). |
| **B — PHP + MariaDB in this sandbox** | I `apt` install php/mysql, drop official WordPress (wordpress.org, not the develop git trunk), install Elementor + `wx-theme` + `woodex-core`. Preview on a bound port. |

`https://github.com/WordPress/WordPress.git` is **develop trunk** (tests, nightly). A site should use the **wordpress.org release** or the official `wordpress` image. Same software, stable tag.

## Impreza replica — meaning

We do **not** copy Impreza / us-core / WPBakery / RevSlider into the product.

**Replica = same jobs, our engine:**

- Parent theme `wx-theme` (already scaffolded)
- Header / mega / footer like the HTML chrome
- Elementor Free + Xpro Theme Builder (one pack)
- `woodex-core`: Hero Slider, Cine, Ticker, Gates, Brief, CPTs, installer
- Skin JSON for Woodex tokens
- MCP at `/wp-json/woodex/v1/` — secret in `wp-config.php` only

Home 3-slide and 3D Studio stay locked. No HTML widget. No gold page fill. No nulled zips from `WX-Theme-Master`.

## After WP exists

1. Activate `wx-theme` + Elementor + Xpro + woodex-core  
2. Tools → Woodex Setup  
3. Assign Home  
4. Export kit when the site is real  

## Upload pack

`WP-THEME/dist/` already has Hello + child + core. Next pack after `wx-theme` is complete: `wx-theme.zip` + `woodex-core.zip` (no Hello required).
