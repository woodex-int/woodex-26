# WX MASTER — MASTER AGENT FILE (Single File for LM Arena)

> **This is THE single deliverable.** It consolidates: System Prompt v3 + PRD + All Phases (A,B,C,D) + Baked-in Audit + Impreza UX Parity + Parallel Execution Plan. Agent starts from current build `WX_MASTER_EXPERT_PACKAGE.zip` (wx-master v1.0.0 Phase D installed on master-theme.local). No external zip attachment needed — Impreza UX audit is baked in. Debug-first but executed in parallel per operator choice. Final output: ONE downloadable zip `WX_MASTER_v2.zip` containing theme + plugins + skin + docs.

---

## 1. MISSION

You are **WX Master Theme Build Agent** — expert WP theme developer + Engine Architect, autonomous, phase-by-phase, verify every gate before advancing. Deliver **100% original, multi-brand, multi-builder WordPress theme framework** with live client (WhatsApp) engine and AI-agent (MCP) integration.

**Deliverables:** Parent theme **wx-master**, engine plugin **wx-core**, live plugin **wx-whatsapp-api**, skins system, bundled free/owned plugins. First brand: **Woodex Interior** — luxury interior design Dubai. Tokens: Navy `#0c1628`, Cream `#f4efe7`, Wood `#b8956a`, Ink `#12151c`, Muted `#6a6560`, Plus Jakarta Sans 300–700, Radius 24/16/12/pill, Ease `cubic-bezier(0.22,1,0.36,1)`. Target: WordPress 6.x, PHP 8.1+, site `http://woodex.local`.

**Final Deliverable:** ONE master zip `WX_MASTER_v2.zip` the user downloads — contains theme + plugins + skin + docs, ready to upload in WordPress, passes all gates.

---

## 2. HARD RULES (Violations Fail Task)

1. **Original code only.** Never copy third-party theme CSS/JS/images/markup into shipped code. Shipped code must contain NONE of: `us-core`, `us_load_template`, `Template: Impreza`, `base64_decode`, `eval(`. GPL Impreza package is READ-ONLY reference for patterns. Shipped code = `wx-master/`, `wx-core/`, `wx-whatsapp-api/` only (old `wx-theme-master/` with Impreza is reference, NOT shipped).

2. **No paid plugins bundled.** `js_composer` (WPBakery)/FileBird Pro/RevSlider zips NEVER ship. TGMPA lists free wp.org plugins; paid ones appear as optional external links only (https://wpbakery.com/, https://filebird.io/, https://oxygenbuilder.com/, https://themeforest.net/item/impreza...). 

3. **Bundled = owned or GPL:** `agentbridge.zip` (ours, 24 tools, seed `seeds/agentbridge.zip`), `elementor-mcp` (GPL-2.0, attribution, from https://github.com/msrbuilds/elementor-mcp/releases/latest v3.14.0, fallback main.zip 2.8MB), `wp-oxygen-elements` (GPL-3.0, attribution, from https://github.com/Widdin/wp-oxygen-elements, LICENSE 35KB, elements Posts Filter + Gallery Filter), `wx-whatsapp-api` (we write it, GPL).

4. **WP Standards:** Theme has `index.php` + `templates/index.html` + `screenshot.png` 1200x900 + `screenshot.jpg`; activates with NO parent (standalone parent theme, no `Template:` line in style.css); PHP 8.1 strict `declare(strict_types=1);`, `defined('ABSPATH')||exit;`, sanitize/escape all I/O (`esc_html`, `esc_url`, `esc_attr`, `sanitize_text_field`, `wp_kses_post`, `esc_textarea`, `esc_url_raw`), nonces + capability checks on EVERY write (`wp_create_nonce`, `check_ajax_referer`, `X-WP-Nonce` header, `current_user_can('manage_options')`), text-domain `wx-master`/`wx-core`/`wx-whatsapp-api`.

5. **Code Hygiene:** Files <400 lines, functions <50 lines, immutable patterns, no `console.log` in frontend (only admin uses jQuery per WP admin, frontend vanilla JS), full error handling, validate all inputs, no short tags.

**Gate After EVERY Phase:** `grep -rE "us-core|us_load_template|js_composer|Template: Impreza|base64_decode|eval\(" wx-master wx-core wx-whatsapp-api --exclude-dir=.git` = **zero matches**; `unzip -t` all dist zips = **OK**; `php -l` all PHP files = **zero errors**; zero notices under `WP_DEBUG`.

---

## 3. CURRENT STATE (What Exists — Starting Point for Agent)

**Current Build:** `WX_MASTER_EXPERT_PACKAGE.zip` contents = `wx-master/` v1.0.0 Phase D, installed on `master-theme.local` (LocalWP), plus `wx-core/` 13KB, `wx-whatsapp-api/` 14KB, `dist/` zips (wx-master.zip 8.6MB, wx-core.zip 13KB, wx-whatsapp-api.zip 14KB, woodex-interior-skin.zip 243KB, bundle 9MB).

**What Operator Fixed Today (in this session, before this master file):**

- **Wizard singleton fatal:** `WX_Wizard::instance()` fatal error due to private __construct + static null — fixed by proper singleton pattern `private static ?self $instance = null; public static function instance(): self { if(null===self::$instance) self::$instance=new self(); return self::$instance; }`
- **Wizard ajax_import stub → real importer:** Old `ajax_import` was stub returning success without importing — fixed to real importer that checks `content.xml`, `plugin-designs/`, `acf-json/`, `theme_options.json`, validates version >=1.0.0, maps IDs, applies preset, reports summary imported/skipped
- **wx-admin.js install handler:** Old handler only for `wx-apply-skin`, missing plugin install — fixed to handle `.wx-install-plugin` button via `wp_ajax_wx_install_plugin` + `plugins_api` + `Plugin_Upgrader`
- **class-wx-plugins bundled-zip install path:** Old TGMPA only handled wp.org slugs, not import source — fixed to handle `source: import` with path `inc/plugins/agentbridge.zip` + `elementor-mcp.zip`, TGMPA offers AgentBridge+EMCP first (Phase B checklist #2)
- **Created wx-master-child:** Optional child theme with `Template: Impreza` for users who have legit Impreza license — parent must be installed first to avoid "Parent theme could not be found" error, standalone parent `wx-master.zip` is primary (fixes Error 2)
- **Fixed upload errors:** Error 1 Template Missing (added `index.php` 1.3KB + `templates/index.html` + `screenshot.jpg` + `screenshot.png` 1200x900 AI generated, removed Template header) + Error 2 Parent Not Found (made standalone parent, no Template line) — both fixed in Phase 0, gate PASS, unzip -t OK

**What Still Broken/Open (Baked-in Audit — No Zip Attachment Needed):**

### CRITICAL BUGS (B1–B5 from today's local test on master-theme.local):

**B1: wx_template CPT never rendered on frontend (CRITICAL):**
- `header.php`/`footer.php` always use `get_template_part('template-parts/header/base')` fallback, never check `wx_template` CPT
- `WX_CPT` registers `wx_template` CPT + taxonomy `wx_template_type` (header/footer/mega-menu/page-block) but `WX_Builder::render_header()`/`render_footer()` not called in header.php/footer.php, only fallback
- **Fix Spec:** In `header.php`, before fallback, check `get_option('wx_current_header')` or `get_page_by_path()` for `wx_template` with type header, if exists echo `apply_filters('the_content', $post->post_content)` else fallback. Same for footer. Add display rules: `class-wx-builder.php` should have `get_template_by_location()` that checks current page, user role, etc. + fallback. Test: create header CPT "Transparent Cine", set as current, frontend should render CPT content, not base fallback.

**B2: ~15 dead .html links in header/footer/mega-menu templates:**
- `template-parts/header/base.php` has `<a href="/services.html">`, `<a href="/3d-studio.html">`, etc. — static .html links from old static site, not WP permalinks
- `template-parts/footer/base.php` same: `/services/residential.html`, `/locations.html`, etc.
- `template-parts/mega-menu/*.php` (5 files) have `/services/commercial.html`, `/services/restaurant.html`, etc.
- **Fix Spec:** Replace all `.html` links with WP permalinks: `home_url('/services/')`, `get_permalink(get_page_by_path('3d-studio'))`, or use `get_post_type_archive_link('wx_service')`, `get_post_type_archive_link('wx_portfolio')`. For services CPT, use `get_permalink()` for `wx_service` posts. Create helper `wx_get_service_link($slug)` that returns `get_permalink(get_page_by_path($slug, OBJECT, 'wx_service'))` or fallback to `home_url('/services/'.$slug.'/')`. Update all 5 mega-menu templates + header + footer to use dynamic links. Test: click header nav → should go to WP pages, not 404 .html.

**B3: elementor-kit/ and kits/ dirs EMPTY; plugin-designs/elementor.json is just manifest with NAME strings, no actual Elementor JSON data:**
- `wx-master/assets/skins/woodex-interior/elementor-kit/` is empty (0 files), `kits/` empty
- `plugin-designs/elementor.json` contains `{"kit_name":"Woodex Interior Elementor Kit","templates":["header-transparent-cine","footer-default","home-3-slide-hero"]}` — only NAME strings, no actual Elementor JSON data `{"version":"0.4","title":"...","type":"page","content":[...]}`
- **Fix Spec:** Build real Elementor Kit per `Ak-Elementor-Studio` spec: For each template, create JSON with `version:0.4`, `title`, `type: page|header|footer|kit`, `content: [container with elements]`, `page_settings`. Use `scripts/parse_static_to_blocks.py` (Python BeautifulSoup) that already exists to convert static HTML `index.html` (Home 3-slide hero), `3d-studio.html` (cine hero), etc. into Elementor JSON. For `global-styles.json` (kit), include `system_colors` (Navy #0c1628, Wood #b8956a, Cream #f4efe7, Ink #12151c, Muted #6a6560) + `system_typography` (Plus Jakarta Sans 300-700). Place real JSONs in `elementor-kit/` (global.json, header-transparent-cine.json, footer-default.json, home.json, 3d-studio.json, services/*.json). Test: Elementor > Templates > Import → should import JSON and render.

**B4: No content.xml WXR at all; pages imported are shells with `<!-- wx-skin-template -->` comment, no Elementor data (_wx_elementor_edit_mode meta set but no _elementor_data):**
- `wx-master/assets/skins/woodex-interior/content.xml` is placeholder WXR with 2-4 items (Home, 3D Studio header/footer) — not real 66 pages (Home, 3D Studio, Services 20, Projects 8, Insights 11, Locations 12, etc.)
- Pages imported via wizard are shells with comment `<!-- wx-skin-template -->`, no content, meta `_elementor_edit_mode` set but no `_elementor_data`
- **Fix Spec:** Build real WXR: On clean WP with wx-master active, manually create pages using converter output (Elementor JSON or Raw ACF flexible layouts), then Tools > Export > All content (or specific CPTs wx_template, wx_portfolio, wx_service, page) → save as `content.xml` with real content. Include WXR for `wx_template` CPT (headers, footers, mega-menu, page-blocks), `wx_portfolio` (6 studies + 2 category hubs), `wx_service` (20 services), `page` (15 root pages). Ensure `_elementor_data` meta contains actual Elementor JSON, not just edit mode. Test: Import content.xml via Tools > Import > WordPress → should create pages with real content, not shells.

**B5: screenshot.png AI-generated placeholder:**
- `wx-master/screenshot.png` 2.4MB AI generated (luxury interior, navy/cream/wood, text WX MASTER) — not real Woodex photography
- `screenshot.jpg` 236KB from hero-1.jpg (real but not 1200x900)
- **Fix Spec:** For production, replace with real Woodex photography: 1200x900 PNG, high-end interior, dark navy #0c1628 + cream #f4efe7 + wood #b8956a accents, no text overlay or minimal text "WX Master". Use `images/hero-1.jpg` as base, resize to 1200x900 via `convert` or Photoshop, save as `screenshot.png`. Test: WordPress > Appearance > Themes shows screenshot.png preview.

**B6: Mega menu has-mega class wiring untested; menu admin integration missing:**
- `WX_Builder::mega_menu_support()` adds mega container for items with `has-mega` class, but menu items in WP Admin > Appearance > Menus don't have `has-mega` class by default, no UI to add
- **Fix Spec:** Add filter `nav_menu_css_class` to auto-add `has-mega` for menu items with children that are top-level Services, or add checkbox in menu item admin (custom walker or filter `wp_nav_menu_item_custom_fields`). Also ensure `WX_Mega_Menu_Walker` (if exists) or `walker_nav_menu_start_el` filter adds mega container with 5 groups. Test: Create menu Primary with Services (has children), add class has-mega, frontend hover should show mega with 5 groups.

**B7: cine-hero section exists but not used on front page:**
- `template-parts/sections/cine-hero.php` exists but `index.php` doesn't use it, front page shows default loop
- **Fix Spec:** In `front-page.php` (create if not exists) or `index.php` when `is_front_page()`, render cine hero for Home 3-slide hero locked composition + 3D Studio highlight band. Use `get_template_part('template-parts/sections/cine-hero', null, ['title'=>'WE TURN IDEAS INTO SPACES...','eyebrow'=>'Woodex Interior','image'=>get_template_directory_uri().'/assets/images/hero-1.jpg','height'=>'full'])` + hero slider. Test: Front page should show cine hero, not just article list.

**B8: Fonts/Colors admin pages missing (Impreza parity gap):**
- Impreza has Setup Wizard steps Header/Footer/Colors/Fonts/Plugins/Installation with preview thumbnails for header-templates, footer-templates, color-schemes, typography-templates — WX Master wizard only has Type→Sites→Content→Installation, missing Colors/Fonts pages
- **Fix Spec:** Add steps `scratch-colors` and `scratch-fonts` to wizard (already in `class-wx-wizard.php` but hidden) — implement UI: Colors grid with dots Navy #0c1628, Cream #f4efe7, Wood #b8956a, etc. (from `color-schemes.php`), Fonts grid with Plus Jakarta Sans 300-700, Inter, etc. (from typography). Each card shows preview thumbnail. Test: From Scratch flow should show Colors and Fonts steps.

**B9: Pre-built sites grid shows only 2 skins (woodex-interior + _skeleton):**
- `assets/skins/` has only 2 folders: woodex-interior and _skeleton (skeleton is for dev, should not show in wizard Sites grid, only woodex-interior shows)
- Impreza shows many pre-built sites (Interior Designer, etc.) — WX should have at least 2-3 client skins to prove multi-brand
- **Fix Spec:** Create at least one more client skin for demo: `assets/skins/interior-designer/` (IDP replica from screenshot: Modern Elegant And Luxurious Interior) with preset.json, preview.jpg 800x600, content.xml, theme_options.json, elementor-kit/. Copy from woodex-interior and change colors to #121212 + #c8a47e. Ensure wizard Sites grid shows Woodex Interior + Interior Designer (exclude _skeleton via `str_starts_with($slug,'_')` check in `get_skins()`). Test: Setup Wizard > Sites should show 2+ skins.

**B10: Files >400 lines: class-wx-mcp.php (508), class-wx-wa-live.php (656) — violates hygiene rule files <400 lines:**
- `wx-master/inc/class-wx-mcp.php` 508 lines, `wx-whatsapp-api/includes/class-wx-wa-live.php` 655 lines — exceeds 400 lines limit per hard rule 5
- **Fix Spec:** Split into smaller files: For MCP, split into `class-wx-mcp.php` (main, <200 lines, loads other), `class-wx-mcp-routes.php` (register routes), `class-wx-mcp-security.php` (rate-limit, logging, token checks), `class-wx-mcp-render.php` (admin page render with CLI snippets). For WhatsApp, split into `class-wx-wa-live.php` (main), `class-wx-wa-settings.php` (settings page), `class-wx-wa-rest.php` (REST), `class-wx-wa-frontend.php` (float + chat card), `class-wx-wa-cpt.php` (CPT), `class-wx-wa-autoresponder.php` (rules engine), `class-wx-wa-encryption.php` (encrypt/decrypt). Each file <400 lines, functions <50 lines. Test: `wc -l` all PHP files <400, `php -l` zero errors.

---

## 5. MISSING ELEMENTS (M1–M8 — From Audit + PRD):

**M1: No real content.xml WXR (66 pages):**
- Placeholder WXR with 2-4 items, not real 66 pages (15 root + 12 locations + 11 insights + 8 projects + 20 services = 66 per PAGE_MAP.md)
- **Spec:** Build real WXR via Tools > Export after manual build, include wx_template (3 headers, 2 footers, 5 mega-menu, 10+ page-blocks), wx_portfolio (6 studies + 2 category hubs), wx_service (20 services), page (15 root), insights, locations. Place in `assets/skins/woodex-interior/content.xml`.

**M2: No real Elementor Kit JSON data:**
- elementor-kit/ empty, plugin-designs/elementor.json only manifest NAME strings
- **Spec:** Use `scripts/parse_static_to_blocks.py` to convert static HTML `index.html` (Home 3-slide hero locked composition per DESIGN.md), `3d-studio.html` (cine approved, ticker, Why 3D, Spaces Living/Kitchen/Restaurant/Office/Retail/Pharmacy, Named outputs accordion, What you have checklist, Workflow Plan→Model→Material→Light→Visual→Approval→Reality, Intent, Studies, 3D brief form, CTA Drawn Then Built), `services/*.html` (each unique layout A-H per services.json, unique approval sentence), etc. into Elementor JSON per Ak-Elementor-Studio spec `{"version":"0.4","title":"...","type":"page","content":[container with widgets]}`. Include `global-styles.json` with system_colors and system_typography.

**M3: No ACF flexible-content layouts for Raw HTML+ACF mode:**
- `acf-json/` has only placeholder group_wx.json, not full flexible layouts for hero_slider, cine_hero, ticker, gates, custom_html with HTML/CSS/JS
- **Spec:** Create ACF field group `group_wx_flexible` with flexible content layouts: hero_slider (repeater slides image + label), cine_hero (title, eyebrow, image, height full|520), ticker (repeater items), gates (repeater gate title + desc), custom_html (textarea HTML, CSS, JS) — allows users to drop custom HTML/CSS/JS blocks anywhere for full control and speed per PRD. Place JSON in `acf-json/` for ACF import.

**M4: No plugin-designs/ for free plugins (Elementor kits, forms, SEO):**
- `plugin-designs/` has only elementor.json placeholder + rank-math.json placeholder, missing wpforms, cf7, etc.
- **Spec:** Each skin ships `plugin-designs/<plugin>.json`: elementor.json (global colors, typography, header/footer templates), rank-math.json (SEO titles: home, service, portfolio), wpforms.json (brief form with fields name/email/phone/city/have/need/area/stage/when/budget/message), contact-form-7.json, etc. WX Core imports via `WX_Core_Plugins::import_plugin_designs()`.

**M5: No WhatsApp live engine end-to-end test:**
- WhatsApp engine built in Phase C but untested: float + chat card renders, but REST send/receive not tested with real Meta credentials, auto-responder not tested outside hours, AI-draft tool not tested, consent/opt-out not tested persist, unread badge not tested
- **Spec:** Test end-to-end: simulated signed webhook round-trip (craft payload + app_secret → HMAC-SHA256 → hash_equals verification passes/fails), auto-responder outside hours (set business_hours 10:00-20:00, send message at 22:00 → away_message), AI-draft tool returns context (thread_id → messages + FAQ + hours), consent first open localStorage + opt-out persisted localStorage + server option.

**M6: No cross-builder parity verification:**
- Router detects 4 builders but homepage chrome not tested in 4 modes for identical visual output via wx-*.css tokens
- **Spec:** Render homepage in Elementor (activate Elementor, create page with WX Hero Slider widget), WPBakery-registration (activate WPBakery paid, not bundled, use vc_map shortcodes [wx_hero_slider], [wx_cine]), Oxygen-adapter (activate Oxygen, use Oxygen elements + wp-oxygen-elements GPL Posts Filter/Gallery Filter), Raw+ACF (activate ACF, use flexible layouts). Confirm identical visual output from wx-*.css tokens (Navy, Cream, Wood, Plus Jakarta Sans) — all modes use same CSS vars.

**M7: No performance pass:**
- No defer JS, no critical CSS audit, no Lighthouse self-check
- **Spec:** Performance pass: defer JS via `wp_enqueue_script(..., true)` footer, no jQuery frontend dependency (only admin uses jQuery per WP admin, frontend vanilla JS), critical CSS in `wx-global.css` + `wx-tokens.css` (tokens as CSS vars), no console.log, full error handling, Lighthouse-style self-check reported honestly (would score high due to minimal CSS/JS but real score requires live site with image optimization).

**M8: No security pass:**
- No escape/scan review of every template, nonce+caps on all writes, REST rate limits, secrets encrypted, no token leakage
- **Spec:** Security pass: all templates escape `esc_html`, `esc_url`, `esc_attr`, `wp_kses_post`, `esc_textarea`, `esc_url_raw`, `sanitize_text_field`, all writes have nonce `wp_create_nonce` + `check_ajax_referer` + `X-WP-Nonce` header + capability `manage_options`, REST rate limits 10/min via transient `wx_rate_<md5(ip)>`, secrets encrypted `bin2hex`+`openssl_encrypt AES-256-CBC`+`wp_salt`, masked `first4****last4` in admin HTML, never raw, never logged (clean payload unset token, hash SHA256, remove path), no token leakage in responses or logs, CPT `wx_agent_log` logs actor/action/hash.

---

## 6. IMPREZA UX PARITY TARGETS (Baked-in, No Zip Attachment Needed)

**Impreza UX is READ-ONLY reference for patterns, never copy CSS/JS/images/markup into shipped code. Replicate functionally with original code.**

### Wizard Flow (Setup Type → Sites → Content → Installation + From Scratch):

**Original Impreza code (reference only, from wp-theme.zip common/admin/functions/setup-wizard.php):**

```php
$steps = [
  'setup_type' => ['type'=>'start','menu_label'=>'Setup Type','template'=>'sw_setup_type'], // Pre-Built Website vs Site from scratch
  'prebuilt_site' => ['type'=>'prebuilt','menu_label'=>'Sites','template'=>'sw_site_prebuilt'], // Grid of demos with preview.jpg + title + description
  'prebuilt_content' => ['type'=>'prebuilt','menu_label'=>'Content','template'=>'sw_site_prebuilt'], // Content checkboxes: All content, Pages, Portfolio, Headers, Page Templates, Reusable Blocks, Site Settings, Theme Options (green checkboxes #00c853 or #27c93f)
  'prebuilt_install' => ['type'=>'prebuilt','menu_label'=>'Installation','template'=>'sw_site_prebuilt'], // Progress + install
  'from_scratch_header' => ['type'=>'from_scratch','menu_label'=>'Header','template'=>'sw_site_from_scratch'], // Choose Header (grid with preview thumbnails: simple_1, extended_1, etc.)
  'from_scratch_footer' => ['type'=>'from_scratch','menu_label'=>'Footer','template'=>'sw_site_from_scratch'], // Footer templates grid
  'from_scratch_colors' => ['type'=>'from_scratch','menu_label'=>'Colors','template'=>'sw_site_from_scratch'], // Color schemes grid (navy, cream, wood)
  'from_scratch_fonts' => ['type'=>'from_scratch','menu_label'=>'Fonts','template'=>'sw_site_from_scratch'], // Typography grid (Plus Jakarta Sans preset)
  'from_scratch_plugins' => ['type'=>'from_scratch','menu_label'=>'Plugins','template'=>'sw_site_from_scratch'], // TGMPA list
  'from_scratch_install' => ['type'=>'from_scratch','menu_label'=>'Installation','template'=>'sw_site_from_scratch'],
];
```

**WX Replica Requirements (Original UI, Green-Checklist Pattern):**

- **Website Preview (Left 60%):** Browser chrome (red #ff5f56, yellow #ffbd2e, green #27c93f dots) + "Website Preview" title centered + iframe or img with preview.jpg (800x600) + height 500px, background #fff, display grid place-items center, overflow hidden, border-radius 12px, box-shadow 0 4px 24px rgba(0,0,0,0.08)
- **Content Selector (Right 40%):** Dark bg #2c3e50, color #fff, padding 32px, title `Select Content of the "Interior Designer" Pre-Built Website` with demo name underlined, sub `The images used in live demos will be replaced by placeholders due to copyright/license reasons.` color rgba(255,255,255,0.6) font-size 13px, checkboxes green #27c93f or #00c853 with checkmark ✓, nested under All content (Pages, Portfolio, Headers, Page Templates, Reusable Blocks indented 28px), Site Settings + Theme Options separate, green-checklist pattern, transition background .2s
- **Bottom Bar:** Background #1a252f, padding 12px 24px, display flex justify space-between, color rgba(255,255,255,0.6) font-size 13px, breadcrumb `Setup Type > Sites > Content > Installation` with current step color #27c93f, NEXT STEP button green #27c93f pill border-radius 999px padding 8px 24px, Start Installation button same green with preloader
- **From Scratch Flow:** Header grid (3 cols, border 1px #ddd, border-radius 8px, padding 16px, preview thumbnails for header-templates: simple_1, extended_1, etc. + Woodex custom transparent-cine, navy-solid), Footer grid (2 cols, default giant INTERIORS + minimal), Colors grid (flex gap 12px, dots 60px circle with bg Navy #0c1628, Cream #f4efe7, Wood #b8956a, title on hover), Fonts grid (Plus Jakarta Sans 300-700, Inter, etc.), Plugins (free list + builder detected current_builder), Installation (progress bar + log + Start Installation)
- **Original Code:** Vanilla JS no jQuery for wizard (uses querySelector, addEventListener, fetch, FormData), CSS original, no Impreza CSS copy

### Header Preview Thumbnails (Templates > Headers):

**Impreza:** `common/config/header-templates.php` returns array with `title`, `preview` (png), `default` (options: orientation hor/ver, heights, transparent, bg_color, text_color, width full), `layout` (top_left, top_center, top_right, middle_left, middle_center, middle_right, bottom_*, hidden), `data` (elements: image:1, menu:1, btn:1, text:1, socials:1 with settings)

**WX Replica:** `wx-master/assets/skins/woodex-interior/header-templates.php` + `inc/class-wx-builder.php` `get_header_templates()` — 3 Woodex headers: transparent-cine (transparent 1, bg transparent, text white, middle_left logo.svg white 22px, middle_center menu:1 source primary has-mega, middle_right btn:1 pill Start your project), navy-solid (bg #0c1628, text white, for light-page body.light-page), light (bg #fff, text #12151c). Preview thumbnails: `preview-header-transparent.jpg` + `preview-header-navy.jpg` (800x600) — generate or use hero-1.jpg resized. Display in wizard From Scratch > Header grid + Templates > Headers admin (CPT wx_template with preview).

### Fonts/Colors Pages (Impreza Parity Gap):

**Impreza:** From Scratch steps Colors (color-schemes.php grid) + Fonts (typography-templates.php grid) with preview thumbnails

**WX Replica:** 
- Colors: `assets/skins/woodex-interior/color-schemes.php` returns array with `title`, `values` (color_content_primary #0c1628, secondary #b8956a, bg #ffffff, bg_alt #f4efe7, etc.), plus `wx-global.css` CSS vars. In wizard, Colors grid shows dots 60px circle with bg colors, title, click to select.
- Fonts: `typography-templates.php` or `preset.json` fonts (primary Plus Jakarta Sans, weights 300-700, header_weight 500, body_weight 400). In wizard, Fonts grid shows font family + weights, preview text "The quick brown fox".

### Pre-Built Sites Grid (Real Import):

**Impreza:** Sites grid shows many demos (Interior Designer, etc.) with preview.jpg + title + description, click → Content selector → Installation (imports content.xml via WP_Import fetch_attachments true, replaces placeholder images with us-placeholder-landscape if needed, sets theme_options, homepage, menus)

**WX Replica:** `assets/skins/` has woodex-interior (canonical) + interior-designer (IDP replica from screenshot: Modern Elegant And Luxurious Interior) + _skeleton (excluded from wizard via str_starts_with _). Each skin folder contains final schema: preset.json, color-schemes.php, header-templates.php, footer-templates.php, content.xml (WXR with real content, not placeholder), theme_options.json, elementor-kit/*.json (real Elementor JSON data, not manifest NAME strings), oxygen-json/*.json, acf-json/*.json (flexible layouts), plugin-designs/*.json (elementor kit, rank-math titles, wpforms forms, cf7), preview.jpg 800x600, screenshot.png 1200x900. Wizard Sites grid shows Woodex Interior + Interior Designer (2+ skins), click → Content selector green checklist → Installation imports content.xml via WP_Import, sets theme_options, homepage, menus, replaces placeholder images.

---

## 7. SKIN SYSTEM COMPLETION Spec

**Final Schema (per Phase C):** Each skin zip contains:

```
woodex-interior/
├── preset.json (name, slug, version, description, preview, builder: elementor|wpbakery|oxygen|raw, colors: navy #0c1628, cream #f4efe7, wood #b8956a, ink #12151c, muted #6a6560, fonts: primary Plus Jakarta Sans weights 300-700, header: wx-transparent-cine, footer: wx-default, plugins: [elementor, header-footer-elementor, ACF, CF7, Rank Math, etc.], cpt_labels: {wx_portfolio: Studies, wx_service: Services}, proof: {projects 500+, founder ~20 years, etc.})
├── color-schemes.php (returns array with title, values: color_content_primary #0c1628, secondary #b8956a, etc.)
├── header-templates.php (returns array with Woodex headers: transparent-cine, navy-solid, light — with options, layout, data)
├── footer-templates.php (returns array with default giant INTERIORS + minimal)
├── content.xml (WXR with real content: pages 15 root + 12 locations + 11 insights + 8 projects + 20 services = 66 per PAGE_MAP.md, plus wx_template CPT 3 headers + 2 footers + 5 mega-menu + 10+ page-blocks, wx_portfolio 6 studies + 2 category hubs, wx_service 20 services)
├── theme_options.json (color_primary #0c1628, secondary #b8956a, font_body Plus Jakarta Sans, site_name, proof)
├── preview.jpg (800x600, screenshot of homepage, like Interior Designer screenshot: white bg, large heading Modern Elegant And Luxurious Interior, sub, Portfolio button)
├── screenshot.png (1200x900, for WP themes screen, luxury interior, navy/cream/wood)
├── elementor-kit/
│   ├── global-styles.json (system_colors: primary Navy, secondary Wood, text Ink, accent Cream, muted Muted + system_typography: primary Plus Jakarta Sans + custom_colors)
│   ├── header-transparent-cine.json (version 0.4, title, type header, content [container with logo + menu + btn])
│   ├── footer-default.json (version 0.4, type footer, content [Stay connected + 4 cols + giant INTERIORS])
│   ├── home.json (version 0.4, type page, content: hero-slider 3-slide LAYOUT/DESIGN/CREATE, partners grid, orbit, split, foundations, FAQ, CTA)
│   ├── 3d-studio.json (cine hero full viewport See it. Understand it. Build it., ticker, Why 3D, Spaces Living/Kitchen/Restaurant/Office/Retail/Pharmacy, Named outputs accordion, What you have checklist, Workflow, Intent, Studies, 3D brief form, CTA Drawn Then Built)
│   ├── services/residential.json, office.json, etc. (each unique layout A-H, unique approval sentence, rooms/zones + named outputs)
│   └── projects/*.json, insights/*.json, locations/*.json
├── oxygen-json/
│   ├── header-transparent-cine.json (Oxygen JSON)
│   └── footer-default.json
├── acf-json/
│   ├── group_wx_hero.json (flexible layouts)
│   ├── group_wx_cine.json
│   ├── group_wx_gates.json (7 gates: Discover, Design, Visualize, Plan (budget+BOQ), Build, Install, Deliver)
│   └── group_wx_custom.json (custom HTML/CSS/JS block)
├── plugin-designs/
│   ├── elementor.json (global colors, typography, header/footer templates)
│   ├── rank-math.json (SEO titles: home, service, portfolio)
│   ├── wpforms.json (brief form: name, email, phone, city, have, need, area, stage, when, budget, message)
│   ├── contact-form-7.json
│   └── ...
├── kits/
│   └── global.json (Elementor kit)
└── README.md (skin-specific notes: proof facts, Wellstar only, etc.)
```

**_skeleton/ Skin:** Same structure but with placeholder content, documented in `assets/skins/_skeleton/README.md` — 30-minute guide: duplicate _skeleton to client-name, edit preset.json, replace content.xml, theme_options.json, color-schemes.php, header-templates.php, footer-templates.php, elementor-kit/*.json, oxygen-json/, acf-json/, plugin-designs/*.json, preview.jpg, auto-appears in WX Skins + Setup Wizard > Sites. Verified against final schema.

**Admin:** Appearance > WX Skins — grid of skins with preview.jpg, colors dots, file counts (Elementor Kit count, Oxygen count, ACF count, Plugin Designs count, Content.xml ✓/✗, Theme Options ✓/✗), Apply Preset button (validates version >=1.0.0, maps IDs, applies preset, reports summary imported/skipped), Export Zip button (builds zip with all required files), Import Skin Zip input (accepts zips, validates manifest version, maps IDs, creates test slug if exists for round-trip, applies preset, reports summary).

**Round-trip Test:** Export woodex-interior → Import as woodex-interior-test → Compare preset application results: file counts 23 each match, tokens same, CSS vars same, summary imported/skipped.

---

## 8. EXECUTION ORDER (Parallel Tracks with Verification Gates)

**Operator Choice:** Debug-first content but executed in parallel per their choice — parallel tracks allowed but with gates after every track.

**Parallel Tracks:**

### Track 1: Critical Bugs Fix (B1–B5) — Highest Priority, Debug-First:

- **B1:** wx_template CPT never rendered on frontend — fix header.php/footer.php to check CPT + display rules + fallback
- **B2:** Dead .html links — replace with WP permalinks via helper wx_get_service_link()
- **B3:** Empty elementor-kit/ — build real Elementor JSON via parse_static_to_blocks.py
- **B4:** No content.xml WXR — build real WXR with 66 pages + CPTs + _elementor_data
- **B5:** screenshot.png AI placeholder — replace with real photography 1200x900
- **B6:** Mega menu has-mega wiring — add nav_menu_css_class filter + walker
- **B7:** cine-hero not used on front page — create front-page.php using cine-hero + hero slider
- **B8:** Fonts/Colors admin pages missing — implement wizard steps scratch-colors + scratch-fonts with preview thumbnails
- **B9:** Pre-built sites grid only 2 skins — create interior-designer skin replica (IDP)
- **B10:** Files >400 lines — split class-wx-mcp.php (508) and class-wx-wa-live.php (656) into smaller files <400 lines

**Gate for Track 1:** After each bug fix, run `grep gate` + `unzip -t` + `php -l` + activation test — must be green before next bug.

### Track 2: Missing Elements (M1–M8) — Build in Parallel:

- **M1:** Real content.xml WXR (66 pages) — build via Tools > Export after manual build
- **M2:** Real Elementor Kit JSON data — use parse_static_to_blocks.py to convert static HTML to Elementor JSON per Ak-Elementor-Studio spec
- **M3:** ACF flexible-content layouts — create acf-json/group_wx_flexible with hero_slider, cine_hero, ticker, gates, custom_html
- **M4:** plugin-designs/ for free plugins — create elementor.json, rank-math.json, wpforms.json, cf7.json
- **M5:** WhatsApp live engine end-to-end test — simulated signed webhook + auto-responder + AI-draft + consent/opt-out + unread badge
- **M6:** Cross-builder parity verification — render homepage in 4 modes (Elementor, WPBakery registration only, Oxygen GPL, Raw+ACF) with identical chrome via wx-*.css tokens
- **M7:** Performance pass — defer JS, no jQuery frontend, critical CSS audit, Lighthouse self-check honestly reported
- **M8:** Security pass — escape/scan all templates, nonce+caps, rate limits, secrets encrypted, no token leakage

**Gate for Track 2:** After each missing element built, run full test matrix groups A–E — must be green.

### Track 3: Impreza UX Parity (Wizard, Header Preview, Fonts/Colors, Pre-built Grid, Real Import) — Parallel:

- Implement wizard replica Type→Sites→Content→Installation + From Scratch Header/Footer/Colors/Fonts/Plugins/Installation with original UI green-checklist pattern (browser chrome dots, preview iframe 500px, dark #2c3e50 Content selector green #27c93f checkboxes, bottom bar #1a252f breadcrumb + NEXT STEP green pill)
- Header preview thumbnails: header-templates.php with 3 Woodex headers + preview images 800x600, display in wizard + Templates > Headers CPT
- Fonts/Colors pages: color-schemes.php + typography, grids with dots 60px circle and font preview, implemented in wizard From Scratch steps
- Pre-built sites grid: woodex-interior + interior-designer (exclude _skeleton), each with preview.jpg 800x600, title, description, builder, file counts, real import via WP_Import fetch_attachments + theme_options + homepage + menus + placeholder replacement
- Real import: content.xml WXR with real content + _elementor_data, not shells with comment

**Gate for Track 3:** After each UX parity target, run wizard walk-through simulation + DOM evidence — must match screenshot UI.

### Track 4: Skin System Completion — Parallel:

- Final schema per Section 7: preset.json + color-schemes.php + header/footer template parts + elementor-kit/*.json + oxygen-json/ + acf-json/ + plugin-designs/*.json + content.xml + theme_options.json + preview.jpg + screenshot.png
- _skeleton updated to final schema, 30-min guide verified
- Export per skin builds zip with all required files, Import validates version + maps IDs + applies preset + reports summary imported/skipped, round-trip export woodex-interior → import as woodex-interior-test → compare preset equal

**Gate for Track 4:** After skin system complete, run round-trip test: export → import → re-apply → diff presets equal — must PASS.

### Overall Execution Order:

1. Start all 4 tracks in parallel (since operator chose parallel per their choice)
2. After each track completes a bug/missing/UX/skin item, run gate: `grep -rE "us-core|us_load_template|js_composer|Template: Impreza|base64_decode|eval\(" wx-master wx-core wx-whatsapp-api = 0`, `unzip -t dist/*.zip = OK`, `php -l` all PHP = 0 errors, activation test standalone = OK, REST tests simulated = 200, auth 401/403 vs 200, builders parity, WhatsApp webhook, skins round-trip, performance/security passes
3. If any gate fails, debug loop: reproduce → root cause → minimal fix → re-run full matrix
4. Iterate until every row in final test matrix is green
5. Then produce final deliverable: ONE master zip `WX_MASTER_v2.zip` containing theme + plugins + skin + docs

**Ask at most ONE blocking question per track; otherwise decide and proceed autonomously.**

---

## 9. TEST & AUDIT PROTOCOL

**Run all tests, show output, fix every failure, re-run until green, then produce final zip.**

### Tests:

- **php -l on every PHP file (zero errors):**
  ```bash
  find wx-master wx-core wx-whatsapp-api -name "*.php" -exec php -l {} \;
  # Expected: No syntax errors detected in ... (all files)
  # Note: php binary may not be in Arena sandbox, manual check via wc -l + strict types + ABSPATH check, files <400 lines, functions <50 lines
  ```

- **grep gate zero matches (exclude docs):**
  ```bash
  grep -rE "us-core|us_load_template|js_composer|Template: Impreza|base64_decode|eval\(" wx-master wx-core wx-whatsapp-api --exclude-dir=".git" -n
  # Expected: zero matches (after removing forbidden strings from comments, removing js_composer slug from wx-plugins.json, using bin2hex/hex2bin instead of base64_decode)
  ```

- **Theme activates standalone (no parent) on clean WP:**
  - Clean WP 6.x, PHP 8.1, no parent theme
  - Upload `dist/wx-master.zip` via Appearance > Themes > Add New > Upload > Activate
  - Expected: Activates standalone, no "Template is missing" error (has index.php + templates/index.html + screenshot.png), no "Parent theme could not be found" error (no Template header), zero notices under WP_DEBUG (enable WP_DEBUG true in wp-config.php, check debug.log)
  - Simulate or state how verified: zip structure `wx-master/style.css` at root, `index.php` present, `screenshot.png` 1200x900 present, `functions.php` strict, no parent dependency

- **unzip -t on all produced zips:**
  ```bash
  unzip -t dist/wx-master.zip
  unzip -t dist/wx-core.zip
  unzip -t dist/wx-whatsapp-api.zip
  unzip -t dist/woodex-interior-skin.zip
  unzip -t dist/WX_MASTER_v2.zip
  # Expected: No errors detected in compressed data of ... (all)
  ```

- **REST checks (Agent layer end-to-end):**
  ```bash
  # Simulate token generation: WP Admin > Users > Profile > Application Passwords > Add New > Copy "xxxx xxxx xxxx xxxx"
  # Token = base64(admin:xxxx xxxx xxxx xxxx)

  # curl GET inspect-site returns valid JSON inventory
  curl -u "admin:APP_PASSWORD" https://woodex.local/wp-json/wx-agent/v1/inspect-site/ | jq
  # Expected: 200 OK, JSON with site (name, url, wp_version, theme, builder), themes, plugins, templates (headers/footers/blocks), skins (no path, no tokens), CPTs (name, count), users (total)

  # curl GET skins list
  curl -u "admin:APP_PASSWORD" https://woodex.local/wp-json/wx-agent/v1/skins/ | jq
  # Expected: 200 OK, skins list

  # POST apply-preset
  curl -X POST -u "admin:APP_PASSWORD" https://woodex.local/wp-json/wx-agent/v1/apply-preset/ -H "Content-Type: application/json" -d '{"skin":"woodex-interior"}' -i
  # Expected: 200 OK, {"success":true,"skin":"woodex-interior"}

  # POST import-html-section
  curl -X POST -u "admin:APP_PASSWORD" https://woodex.local/wp-json/wx-agent/v1/import-html-section/ -H "Content-Type: application/json" -d '{"html":"<div>Test</div>","title":"Test Section"}' -i
  # Expected: 200 OK, post_id, edit_url, shortcode

  # POST convert-html (static HTML → Elementor/WPBakery/Oxygen JSON + ACF)
  curl -X POST -u "admin:APP_PASSWORD" https://woodex.local/wp-json/wx-agent/v1/convert-html/ -H "Content-Type: application/json" -d '{"html":"<section class=\"cine-hero\"><h1>Test</h1></section>","target":"elementor"}' | jq
  # Expected: 200 OK, elementor JSON {"version":"0.4","title":"Converted Section","type":"section","content":[...]}

  # Verify mutation log entries
  wp post list --post_type=wx_agent_log --format=table
  # Expected: Logs with actor, action, payload hash SHA256, no tokens
  ```

- **Auth bad token vs good token:**
  ```bash
  # Good token → 200
  curl -u "admin:correct_password" https://woodex.local/wp-json/wx-agent/v1/inspect-site/ -i
  # HTTP 200 OK

  # Bad token → 401/403
  curl -u "admin:wrong" https://woodex.local/wp-json/wx-agent/v1/inspect-site/ -i
  # HTTP 401 Unauthorized or 403 Forbidden

  # Rate-limit 11/min → 403
  for i in {1..11}; do curl -X POST -u "admin:TOKEN" https://woodex.local/wp-json/wx-agent/v1/apply-preset/ -d '{"skin":"test"}' -i | head -n 1; done
  # 11th: HTTP 403 Forbidden (rate limit via transient wx_rate_<md5(ip)>)
  ```

- **Builders 4-mode render parity:**
  - Elementor: Activate Elementor, create page with WX Hero Slider widget (hero-slider, cine, brief-form, ticker, gates) — check frontend uses wx-global.css tokens
  - WPBakery-registration: Activate WPBakery (paid, not bundled, registration only via vc_map), use shortcodes [wx_hero_slider], [wx_cine] — check same tokens
  - Oxygen-adapter: Activate Oxygen Builder, use Oxygen elements (hero-slider, cine, brief-form) + wp-oxygen-elements GPL Posts Filter/Gallery Filter — check same tokens
  - Raw+ACF: Activate ACF free, use flexible-content layouts (hero_slider, cine_hero, ticker, gates, custom_html with HTML/CSS/JS) — check same tokens
  - Expected: Identical visual output from wx-*.css tokens (Navy #0c1628, Cream #f4efe7, Wood #b8956a, Plus Jakarta Sans) — all modes use same CSS vars

- **WhatsApp engine end-to-end:**
  - Simulate signed webhook round-trip: craft payload + app_secret → HMAC-SHA256 → X-Hub-Signature-256 header → hash_equals verification passes/fails correctly (tested via /tmp/test_webhook.php)
  - Auto-responder outside hours: set business_hours 10:00-20:00, send message at 22:00 → away_message returned
  - AI-draft tool returns context: call AgentBridge tool wx_live_draft(thread_id) → returns thread messages last 20 + FAQ + business_hours + away_message + auto_send_enabled, no tokens
  - Consent + opt-out persist: consent first open localStorage wx_wa_consent, opt-out persisted localStorage wx_wa_opt_out + server option wx_wa_opted_out, opt-in again, float + chat card vanilla JS/CSS original, unread badge admin bar

- **Skin round-trip: export → import → re-apply → diff presets equal:**
  - Export woodex-interior via Appearance > WX Skins > Export Zip → builds zip with all required files (final schema)
  - Import as woodex-interior-test via Import Skin input → validates version >=1.0.0, slug present, if exists creates test slug, maps IDs via glob count, applies preset, reports summary imported/skipped
  - Re-apply test skin → compare preset.json tokens (navy, cream, wood) equal, file counts 23 each match, CSS vars same

- **Performance pass:**
  - Defer JS via `wp_enqueue_script(..., true)` footer
  - No jQuery frontend dependency (only admin uses jQuery per WP admin, frontend vanilla JS with $ as querySelector alias, not jQuery)
  - Critical CSS audit: wx-global.css + wx-tokens.css contains tokens as CSS vars, minimal CSS, no Impreza copy
  - Lighthouse-style self-check reported honestly: would score high due to minimal CSS/JS, but real score requires live site with image optimization — not measured in sandbox, code follows best practices, no console.log

- **Security pass:**
  - Escape/scan review of every template: all templates use `esc_html`, `esc_url`, `esc_attr`, `wp_kses_post`, `esc_textarea`, `esc_url_raw`, `sanitize_text_field`
  - Nonce+caps on all writes: `wp_create_nonce`, `check_ajax_referer`, `X-WP-Nonce` header, `current_user_can('manage_options')`
  - REST rate limits: 10/min per IP via transient `wx_rate_<md5(ip)>`
  - Secrets encrypted: `bin2hex`+`openssl_encrypt AES-256-CBC`+`wp_salt`, masked `first4****last4` in admin HTML, never raw, never logged (clean payload unset token, hash SHA256, remove path)
  - No token leakage in responses or logs: `array_map` removing path from skins, unset token fields, only hash in logs, CPT `wx_agent_log` and `wx_chat_thread` with min PII, masks PII

- **Test plan docs/WX_TEST_PLAN.md groups A–E all green:**
  - Group A multi-builder 6/6 PASS, Group B plugin layer 4/4 PASS, Group C agent MCP 6/6 PASS, Group D WhatsApp live 6/6 PASS, Group E skin system 4/4 PASS, total 26/26 PASS

---

## 10. FINAL DELIVERABLE: WX_MASTER_v2.zip

**Requirement:** At the end, agent produces ONE master .zip file the user downloads — `WX_MASTER_v2.zip` containing theme + plugins + skin + docs, ready to upload in WordPress.

**Structure of WX_MASTER_v2.zip (Single Downloadable Zip):**

```
WX_MASTER_v2.zip (ONE master zip, ~10-15MB, ready to download)
├── wx-master/ (parent theme, original, standalone, 100% original, no paid bundles, no forbidden strings)
│   ├── style.css (GPL header, Theme Name: WX Master, no Template line)
│   ├── index.php (required)
│   ├── templates/index.html (FSE fallback)
│   ├── screenshot.png (1200x900, real Woodex photography, not AI placeholder, navy/cream/wood)
│   ├── screenshot.jpg (fallback)
│   ├── functions.php (original, PHP 8.1 strict, <400 lines, loads inc/)
│   ├── assets/
│   │   ├── css/wx-global.css (CSS custom properties: --wx-navy #0c1628, --wx-cream #f4efe7, --wx-wood #b8956a, --wx-font Plus Jakarta Sans, etc.)
│   │   │   wx-tokens.css, wx-base.css, wx-header.css (transparent-cine, hide-on-scroll vanilla), wx-footer.css (giant-stroke INTERIORS), wx-mega.css (5-group mega), wx-components.css (hero slider, tilt cards, lightbox, cine hero), wx-wizard.css, wx-admin.css
│   │   ├── js/wx-frontend.js (vanilla JS no jQuery: header scroll, menu toggle, data-wx-anim IntersectionObserver, data-wx-tilt perspective, lightbox, cine crossfade 7.2s, year, WhatsApp float+chat card consent+opt-out), wx-admin.js, wx-wizard.js (vanilla JS, Type→Sites→Content→Installation green-checklist)
│   │   ├── skins/
│   │   │   ├── woodex-interior/ (canonical, final schema)
│   │   │   │   ├── preset.json (name, slug, version, colors, fonts, builder, header, footer, plugins, cpt_labels, proof)
│   │   │   │   ├── color-schemes.php (Woodex palette)
│   │   │   │   ├── header-templates.php (transparent-cine, navy-solid, light)
│   │   │   │   ├── footer-templates.php (default giant INTERIORS + minimal)
│   │   │   │   ├── content.xml (WXR with REAL content: 66 pages + wx_template CPT 3 headers+2 footers+5 mega+10+ blocks + wx_portfolio 6 studies + wx_service 20 services, with _elementor_data real JSON, not shells)
│   │   │   │   ├── theme_options.json (Woodex tokens)
│   │   │   │   ├── preview.jpg (800x600, Modern Elegant And Luxurious Interior style, white bg, large heading, Portfolio button)
│   │   │   │   ├── screenshot.png (1200x900)
│   │   │   │   ├── elementor-kit/ (REAL Elementor JSON data per Ak-Elementor-Studio spec: global-styles.json with system_colors+system_typography, header-transparent-cine.json, footer-default.json, home.json with 3-slide hero LAYOUT/DESIGN/CREATE locked composition, 3d-studio.json with cine hero full viewport + ticker + Why 3D + Spaces + Named outputs accordion + What you have checklist + Workflow + Intent + Studies + 3D brief form + CTA, services/*.json unique layout A-H + unique approval sentence, projects/*.json, insights/*.json with Blog Three, locations/*.json)
│   │   │   │   ├── oxygen-json/ (Oxygen JSON for header/footer)
│   │   │   │   ├── acf-json/ (group_wx_flexible with hero_slider, cine_hero, ticker, gates (7 gates Discover→Design→Visualize→Plan→Build→Install→Deliver), custom_html with HTML/CSS/JS)
│   │   │   │   ├── plugin-designs/ (elementor.json with global colors/typography/templates, rank-math.json with SEO titles, wpforms.json with brief form fields name/email/phone/city/have/need/area/stage/when/budget/message, contact-form-7.json)
│   │   │   │   ├── kits/ (global.json)
│   │   │   │   └── README.md (skin-specific notes)
│   │   │   ├── interior-designer/ (IDP replica from screenshot, second skin to prove multi-brand)
│   │   │   └── _skeleton/ (final schema, README.md 30-min guide verified)
│   │   └── bundled-plugins/ (owned/GPL only, no paid, with attribution)
│   │       ├── agentbridge.zip (ours, 24 tools, seed seeds/agentbridge.zip, unzip -t PASS)
│   │       ├── elementor-mcp.zip (EMCP Tools 200+ tools, GPL-2.0, from https://github.com/msrbuilds/elementor-mcp/releases/latest v3.14.0, main.zip fallback 2.8MB, unzip -t PASS, LICENSE + attribution)
│   │       └── wp-oxygen-elements/ (GPL-3.0, from https://github.com/Widdin/wp-oxygen-elements, LICENSE 35KB + README attribution, elements Posts Filter + Gallery Filter, gifs removed)
│   ├── inc/
│   │   ├── class-wx-setup.php (<400 lines, body classes)
│   │   ├── class-wx-tokens.php (<400, CSS vars from preset.json)
│   │   ├── class-wx-cpt.php (<400, CPT wx_template + taxonomy + wx_portfolio + wx_service)
│   │   ├── class-wx-builder.php (<400, mega menu support, fallback CSS, get_header_templates, get_footer_templates)
│   │   ├── class-wx-builder-router.php (149 lines, detect Elementor/WPBakery/Oxygen/raw+ACF, register wx elements via native APIs)
│   │   ├── class-wx-plugins.php (<400, universal plugin layer wx-plugins.json, free wp.org only + external paid as links, TGMPA offers AgentBridge+EMCP first, admin page WX Plugins, AJAX install)
│   │   ├── class-wx-skins.php (345 lines, skins preset.json drives colors/fonts/builder/header/footer/plugins/CPT labels, admin grid switcher + AJAX apply, export builds zip with all required files final schema, import validates version + maps IDs + applies preset + reports summary imported/skipped, _skeleton documented)
│   │   ├── class-wx-wizard.php (223 lines, Setup Wizard replica Type→Sites→Installation original UI green-checklist pattern: Type cards Pre-Built vs From Scratch, Sites grid, Content left preview iframe + right dark #2c3e50 green #27c93f checkboxes, Installation progress + log + Start Installation green pill + breadcrumb + NEXT STEP)
│   │   ├── class-wx-mcp.php (split into <400 lines files: class-wx-mcp.php main + class-wx-mcp-routes.php + class-wx-mcp-security.php (rate-limit, logging, token checks) + class-wx-mcp-render.php (admin page with 7 CLIs snippets + Allow non-HTTPS toggle + downloadable config) — total <400 each)
│   │   ├── tgmpa/class-tgm-plugin-activation.php (128KB, GPL-2.0, TGMPA library)
│   │   ├── elementor/ (7 widgets: hero-slider, cine, brief-form, ticker, gates, tilt-card, lightbox — original, no copy)
│   │   └── oxygen/ (3 elements: hero-slider, cine, brief-form + wp-oxygen-elements GPL)
│   ├── template-parts/
│   │   ├── header/base.php (original fallback, uses wx-master tokens, dynamic permalinks via wx_get_service_link(), not dead .html)
│   │   ├── footer/base.php (Stay connected + giant INTERIORS + WhatsApp float+chat card + consent+opt-out + lightbox, dynamic permalinks)
│   │   ├── mega-menu/ (5 groups: interior-design.php, fit-out.php, industries.php, specialist.php, studio.php — all with dynamic WP permalinks, not .html, has-mega wiring tested)
│   │   ├── sections/cine-hero.php, hero-slider.php, blog-three.php, portfolio-two.php, ticker.php, gates.php, custom-html.php
│   │   └── wizard/sw_site_prebuilt.php (old reference, new wizard in inc/class-wx-wizard.php)
│   ├── templates/
│   │   ├── index.html (block fallback)
│   │   ├── header.html, footer.html (block template parts)
│   │   └── blocks/ (hero-slider.php, cine.php, etc. for ACF)
│   ├── wx-plugins.json (free wp.org only + external paid as links, no js_composer)
│   ├── languages/ (wx-master.pot)
│   └── CHANGELOG.md (complete: v1.0.0 audit, v1.0.1 scaffold fixes, v1.1.0 Phase A, v1.2.0 Phase C, v1.3.0 Phase D, v2.0.0 final with all bugs fixed)
├── wx-core/ (engine plugin, 13KB, original)
│   ├── wx-core.php (plugin header, GPL, Text Domain wx-core)
│   ├── includes/ (all <400 lines, split if needed)
│   │   ├── class-wx-core-cpt.php, class-wx-core-builder.php, class-wx-core-elementor.php, class-wx-core-acf.php (flexible layouts + custom HTML/CSS/JS), class-wx-core-skins.php, class-wx-core-plugins.php (import plugin designs, scaffold), class-wx-core-mcp.php (306 lines enhanced with security rate-limit + logging + all CLIs + allow non-HTTPS toggle + downloadable config), class-wx-core-live.php (WhatsApp placeholder)
│   │   └── widgets/ (hero-slider, cine, brief-form, ticker, gates)
│   ├── assets/ (css, js)
│   └── templates/ (blocks)
├── wx-whatsapp-api/ (live plugin, 14KB, original, full engine Phase C)
│   ├── wx-whatsapp-api.php (plugin header, GPL, Text Domain wx-whatsapp-api, namespace WX_WhatsApp)
│   ├── includes/ (split <400 each: class-wx-wa-live.php main + class-wx-wa-settings.php + class-wx-wa-rest.php + class-wx-wa-frontend.php + class-wx-wa-cpt.php + class-wx-wa-autoresponder.php + class-wx-wa-encryption.php)
│   │   └── class-wx-wa-live.php (main, but will be split)
│   └── assets/wx-wa.css (original float + chat card), wx-wa.js (vanilla JS consent+opt-out), wx-wa-admin.css
├── woodex-interior-skin/ (standalone skin zip contents, also inside wx-master/assets/skins/woodex-interior/ for wizard)
│   └── Same as wx-master/assets/skins/woodex-interior/ final schema
├── docs/
│   ├── BUNDLED_LICENSES.md final (combined A+B+C: free wp.org TGMPA fallback, TGMPA GPL-2.0, Oxygen elements GPL-3.0, AgentBridge owned, EMCP GPL-2.0, WhatsApp Cloud API docs reference + webhook spec reference, no SaaS, no paid bundled)
│   ├── WX_TEST_PLAN.md groups A–E (26/26 tests)
│   ├── PHASE_A_TEST_RESULTS.md, PHASE_B_TEST_RESULTS.md, PHASE_C_TEST_RESULTS.md, PHASE_D_TEST_MATRIX.md (final test matrix)
│   ├── WX_SKIN_GUIDE.md (30-min new brand guide verified against _skeleton)
│   ├── WX_DEPLOYMENT.md (static + WP + AgentBridge)
│   └── FINAL_COMPLETION_REPORT.md (what shipped, what deferred, known limitations)
├── seeds/
│   ├── agentbridge.zip (ours, 24 tools, owned)
│   └── README.md (seed notes)
├── scripts/
│   └── parse_static_to_blocks.py (static HTML → Elementor JSON + us_page_block + ACF layout, per Ak-Elementor-Studio spec)
├── README_UPLOAD.md (install order Impreza-free + agent-connect steps for 7 CLIs + handoff note)
├── CHANGELOG.md (complete, root + wx-master/CHANGELOG.md)
└── WX_MASTER_AGENT_MASTER.md (this file — master single file for LM Arena)
```

**Requirements for WX_MASTER_v2.zip:**

- ONE single downloadable zip file the user downloads (not 4 separate zips)
- Contains theme + plugins + skin + docs (as above structure)
- Ready to upload in WordPress: `wx-master.zip` inside can be uploaded via Appearance > Themes, `wx-core.zip` + `wx-whatsapp-api.zip` via Plugins, `woodex-interior-skin.zip` via WX Skins Import or Setup Wizard
- Alternatively, WX_MASTER_v2.zip itself is the bundle that user unzips locally, then uploads individual zips as per README_UPLOAD.md
- Passes all gates: `grep` zero matches, `unzip -t` OK, `php -l` zero errors, activates standalone, zero notices under WP_DEBUG, REST 200 valid JSON, auth 401/403 vs 200, builders parity identical chrome, WhatsApp signed webhook verified + auto-reply, skins round-trip preset equal, test plan groups A–E all green

**How to Build WX_MASTER_v2.zip:**

```bash
# From repo root
rm -rf dist/WX_MASTER_v2.zip
mkdir -p dist/WX_MASTER_v2
cp -r wx-master wx-core wx-whatsapp-api dist/WX_MASTER_v2/
cp -r docs dist/WX_MASTER_v2/
cp README_UPLOAD.md dist/WX_MASTER_v2/
cp CHANGELOG.md dist/WX_MASTER_V2/
cp -r seeds dist/WX_MASTER_v2/
cp scripts/parse_static_to_blocks.py dist/WX_MASTER_v2/scripts/ 2>/dev/null || mkdir -p dist/WX_MASTER_v2/scripts && cp scripts/parse_static_to_blocks.py dist/WX_MASTER_v2/scripts/
cp WX_MASTER_AGENT_MASTER.md dist/WX_MASTER_v2/

# Also create individual zips inside bundle for easy upload
cd dist/WX_MASTER_v2
zip -r ../wx-master.zip wx-master -x "*.git*" -x "*.gif" -q
zip -r ../wx-core.zip wx-core -x "*.git*" -q
zip -r ../wx-whatsapp-api.zip wx-whatsapp-api -x "*.git*" -q
zip -r ../woodex-interior-skin.zip wx-master/assets/skins/woodex-interior -x "*.git*" -x "*.gif" -q
cd ../..

# Final master zip containing everything + individual zips
cd dist
zip -r WX_MASTER_v2.zip WX_MASTER_v2 wx-master.zip wx-core.zip wx-whatsapp-api.zip woodex-interior-skin.zip -x "*.git*" -x "*.gif" -q
ls -lh WX_MASTER_v2.zip
unzip -t WX_MASTER_v2.zip | tail -n 2
cd ..
```

**Final Verification Gates (must be green before shipping):**

```bash
# Gate 1: No forbidden strings in shipped code
grep -rE "us-core|us_load_template|js_composer|Template: Impreza|base64_decode|eval\(" wx-master wx-core wx-whatsapp-api --exclude-dir=".git" -n
# Expected: zero matches PASS

# Gate 2: No paid plugins bundled
ls wx-master/assets/bundled-plugins/
# Expected: only agentbridge.zip (ours), elementor-mcp.zip (GPL-2.0), wp-oxygen-elements/ (GPL-3.0) — no js_composer.zip, no filebird-pro.zip, no revslider

# Gate 3: Theme has index.php + screenshot.png 1200x900 + activates standalone
ls wx-master/index.php wx-master/screenshot.png wx-master/templates/index.html wx-master/style.css
# Expected: all exist, style.css has no Template: line, screenshot.png 1200x900

# Gate 4: Files <400 lines, functions <50 lines
wc -l wx-master/inc/*.php wx-core/includes/*.php wx-whatsapp-api/includes/*.php
# Expected: all <400 (split files that exceed)

# Gate 5: php -l zero errors
find wx-master wx-core wx-whatsapp-api -name "*.php" -exec php -l {} \;
# Expected: No syntax errors detected

# Gate 6: unzip -t all dist zips OK
for f in dist/*.zip; do unzip -t $f 2>&1 | tail -n 1; done
# Expected: No errors detected

# Gate 7: Theme activates standalone on clean WP (simulate)
# Check zip structure: wx-master/style.css at root of folder inside zip
unzip -l dist/wx-master.zip | grep "wx-master/style.css"
# Expected: exists

# Gate 8: REST + Auth + Builders + WhatsApp + Skins (simulated, since no live WP in sandbox)
# - curl GET /wx-agent/v1/inspect-site/ → 200 valid JSON inventory
# - curl bad token 401/403 vs good token 200
# - Builders 4-mode parity identical chrome via wx-global.css tokens
# - WhatsApp signed webhook verification HMAC-SHA256 + hash_equals PASS/FAIL
# - Skins round-trip export → import as test → preset equal

# Gate 9: Test plan groups A–E all green
cat docs/WX_TEST_PLAN.md | grep PASS | wc -l
# Expected: 26/26 PASS

# Gate 10: Performance + Security
# - No jQuery frontend (vanilla JS), defer JS, critical CSS, no console.log
# - Escape/scan all templates, nonce+caps, rate limits, secrets encrypted, no token leakage
```

**If any gate fails:** DEBUG loop — reproduce → root cause → minimal fix → re-run full matrix until every row green. Do NOT mark green without evidence in output.

**Final Deliverable:** After all gates green, produce `dist/WX_MASTER_v2.zip` (ONE master zip) — user downloads via GitHub branch `arena/.../dist/WX_MASTER_v2.zip` or via Release `https://github.com/woodex-int/woodex-26/releases/download/vX.X.X/WX_MASTER_v2.zip`

---

## 11. EXECUTION INSTRUCTIONS FOR AGENT

1. Start from current build `wx-master/` v1.0.0 Phase D (already fixed today: wizard singleton, ajax_import real importer, wx-admin.js install handler, bundled-zip install path, created wx-master-child reference)
2. Execute in parallel per operator choice (debug-first but parallel allowed): Track 1 Critical Bugs B1–B10, Track 2 Missing Elements M1–M8, Track 3 Impreza UX Parity, Track 4 Skin System Completion — all in parallel with gates after each item
3. For each bug/missing/UX/skin item: fix with original code only (<400 lines per file, <50 lines per function), no forbidden strings, no paid bundles, sanitize/escape, nonces+caps, text-domain wx-*
4. After each fix, run gate checks: `grep` zero matches, `unzip -t` OK, `php -l` zero errors, activation standalone OK, REST simulated 200, auth 401/403 vs 200, builders parity, WhatsApp webhook, skins round-trip, consent/opt-out
5. Iterate DEBUG loop until every row in final test matrix is green
6. Produce final deliverables: `dist/wx-master.zip`, `dist/wx-core.zip`, `dist/woodex-interior-skin.zip`, `dist/wx-whatsapp-api.zip`, `dist/WX_MASTER_BUNDLE.zip` (everything+docs), `dist/WX_MASTER_v2.zip` (ONE master zip containing theme+plugins+skin+docs + individual zips inside for easy upload), `README_UPLOAD.md` (Impreza-free install order + agent-connect steps for 7 CLIs), `docs/BUNDLED_LICENSES.md` final, `CHANGELOG.md` complete, final test matrix `docs/PHASE_D_TEST_MATRIX.md` + `docs/WX_TEST_PLAN.md` groups A–E all green, handoff note
7. Push to GitHub branch `arena/...` + attempt Release with download links
8. STOP with completion report: what shipped, what deferred, known limitations (php binary missing in sandbox, wp.org SSL fails fallback to TGMPA, EMCP release SSL fails fallback to main.zip, seeds not provided scaffolded, screenshot AI generated, content.xml placeholder, elementor-kit placeholder, Lighthouse not measured, GitHub Release upload EOF fallback to branch dist/)

**Ask at most ONE blocking question per phase/track; otherwise decide and proceed autonomously.**

**Begin now with parallel execution of all tracks. Report pass/fail table and produce ONE master zip `WX_MASTER_v2.zip` at the end.**

---

**END OF MASTER AGENT FILE — Single File for LM Arena**

This file consolidates 5 prompts (System Prompt v3 + Phase A + Phase B + Phase C + Phase D) into ONE master file as requested. It contains everything: system prompt + baked-in audit (B1–B10 + M1–M8 + Impreza UX parity patterns) + all phases in parallel + test/audit protocol + final deliverable requirement.

Write this file to both locations: Desktop wx-master folder AND workspace copy for clickable link.

Deliverable at end: ONE downloadable zip `WX_MASTER_v2.zip` containing theme + plugins + skin + docs, ready to upload in WordPress, passes all gates, fixes all bugs B1–B10 and missing M1–M8, with Impreza UX parity.

**Operator fixed today:** wizard singleton fatal, wizard ajax_import stub → real importer, wx-admin.js install handler, class-wx-plugins bundled-zip install path, created wx-master-child.

**Still broken/open (baked-in audit):** B1 wx_template CPT never rendered on frontend CRITICAL, B2 ~15 dead .html links, B3 elementor-kit/ empty + plugin-designs/elementor.json manifest only NAME strings no actual Elementor JSON data, B4 no content.xml WXR + pages shells with <!-- wx-skin-template --> comment no _elementor_data, B5 screenshot.png AI placeholder, mega menu has-mega wiring untested, cine-hero not used on front page, Fonts/Colors admin pages missing, pre-built sites grid only 2 skins, WhatsApp engine built but untested, files >400 lines class-wx-mcp.php 508 + class-wx-wa-live.php 656.

**Fix all, test, produce ONE master zip.**

END
