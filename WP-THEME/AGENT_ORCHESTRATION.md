# Woodex Interior — Agent Orchestration Protocol (Advanced)

**Status:** BUILD KIT started. Scaffold is in `WP-THEME/src/woodex` + `WP-THEME/src/woodex-core`. HTML site still live.  
**Role:** Machine-readable stations for Hermes / Claude / Arena.  
**Source of truth for copy/proof:** live `WOODEX-26/` HTML + `docs/CONTENT_BRAND.md`.  
**This file supersedes** the pasted Tailwind/shortcode sample. That sample is **rejected** (see Station 01-R).

---

## Master execution roadmap

```
STATION 01  Environment sanitization & constraints
     │
     ▼
STATION 02  High-utility stack (Elementor Free — no Pro)
     │
     ▼
STATION 03  File tree (theme child + woodex-core + recovery JSON)
     │
     ▼
STATION 04  Visual mapping (Elementor + Xpro/HFE — no HTML box)
     │
     ▼
STATION 05  Diagnostic checklist (proof, WA, locks, schema)
```

---

## Station 01 — Constraints (non-negotiable)

### 01-A Proof strings — use **exactly**, never paraphrase

```
500+ projects · founder ~20 years · execution 10+ years · ISO 9001
Studio: LG 90 Link Road, Model Town, Lahore · 10:00–8:30
WhatsApp: +92 322 4000768
Call: +92 336 2259477
Named client: Wellstar only
```

WhatsApp URL: `https://wa.me/923224000768`  
Call URL: `tel:+923362259477`  
Email: `studio@woodex.interior`

**Reject / block:** any other client name · “globally” · “award” · 95% · 320+ · 15 years · ISO 45001 · unlimited free design · fake square-foot rate · industrial / institutional.

Wellstar path if named: **Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore.**  
Do not call Wellstar a “corporate hub.”

### 01-B Design lock

- Do **not** restyle Home 3-slide composition (LAYOUT / DESIGN / CREATE, clip-path, 6.8s, pill + paragraph).  
- Do **not** restyle 3D Studio cine page. Exclusive H2 once: *You are not approving a plan. You are approving a room.*  
- Tokens: Plus Jakarta Sans · navy `#0c1628` · navy-2 `#121e34` · cream `#f4efe7` (in-section only) · ink `#12151c` · wood `#b8956a` · page fills **white + navy only**.  
- Buttons: navy/white pill + circular arrow. Not green “Consultation Desk.”

### 01-C Engineering lock

- **No Elementor HTML widget.**  
- **No shortcode hero** that dumps a new slider. Home slider = Elementor widget in `woodex-core` with panel controls.  
- **No Tailwind CDN** in WordPress. Child theme ports `css/theme.css` tokens.  
- **No Unsplash / stock URLs.** Use `/images/` from WOODEX-26.  
- **No hardcoded API secrets** in PHP. MCP token = `wp-config.php` constant only, never `'woodex_hermes_claude_bridge_2026'` in the plugin.  
- **No Novamira PHP-exec on production** in v1.  
- Do not delete HTML site until commanded.

### 01-R Why the pasted sample is invalid

| Sample | Violation |
|---|---|
| `wa.me` with no number | Wrong WhatsApp |
| `https://jsdelivr.net` Tailwind | Broken URL + forbidden CDN |
| `bg-gray-50` header, green pill | Not Woodex chrome |
| Unsplash backgrounds | Not our stills |
| “Cinematic Structural Space Composition” | Fluff + restyles locked hero |
| “500+ … globally” | Proof paraphrase + invented geography |
| Wellstar as corporate hubs | Wrong story |
| Shortcode + inline `<script>` slider | Not Elementor-editable; restyles Home |
| Bearer token in source | Security fail |
| “Audit Matrix” checkmarks | Corporate sludge |

**Do not generate those files.**

---

## Station 02 — Stack (Elementor Pro not required)

**One theme + one addon family + one Woodex plugin.**

| Layer | Package | Role |
|---|---|---|
| Parent theme | Hello Elementor | Blank canvas |
| Child theme | `woodex` | Tokens, skip-link, reduced-motion, button CSS |
| Builder | Elementor Free (current stable) | Containers, pages |
| Header / footer | **Pick one:** Xpro Theme Builder **or** Header Footer Elementor (HFE / UAE) | Not both |
| Mega menu | Same pack as H/F (Xpro Mega **or** Master Addons mega) | Not both |
| Core | `woodex-core` | CPT, Elementor widgets, Brief REST, WA float |
| SEO | Rank Math Free | Sitemap, titles |
| Forms | Woodex Brief widget (+ WPForms Lite optional) | Elementor Form is Pro |
| Agent (staging) | Novamira Free | MCP. Not a design pack |

### Stack decision (you must pick before BUILD KIT)

The pasted protocol named **HFE + Master Addons**.  
The researched plan named **Xpro only**.  

**Default if you say APPROVE without choosing:** **Xpro Addons Free only** (Theme Builder + mega + floating).  
If you want HFE + Master Addons instead, write: **STACK HFE+MA**.

Never install Xpro **and** Master Addons **and** HFE together.

---

## Station 03 — Production file tree (corrected)

This is the tree the agent writes **after APPROVE BUILD KIT**. Not the gray Tailwind theme.

```
WP-THEME/
├── AGENT_ORCHESTRATION.md          ← this protocol
├── ADVANCED_MASTER_PLAN.md
├── 01_STACK_AND_PLUGINS.md
├── 02_PAGE_AND_CPT_MAP.md
├── 03_WIDGET_AND_ANIMATION_MAP.md
├── 04_IMPORT_SOP.md
├── 05_DEVELOPMENT_PHASES.md
├── 06_DO_NOT.md
├── kit/                            ← export later, empty now
├── recovery/                       ← schema only, not fake Elementor JSON
│   ├── tokens.json
│   ├── mega_ia.json
│   ├── services_schema.json
│   └── insights_schema.json
└── src/                            ← written on APPROVE BUILD KIT
    ├── woodex/                     # Hello child
    │   ├── style.css
    │   ├── functions.php
    │   ├── theme.json
    │   └── assets/
    │       ├── tokens.css          # port of navy/cream/wood
    │       └── reduced-motion.css
    └── woodex-core/
        ├── woodex-core.php
        ├── includes/
        │   ├── cpt.php
        │   ├── rest-brief.php
        │   ├── rest-mcp.php        # token from wp-config
        │   └── whatsapp-float.php  # wa.me/923224000768
        └── elementor/
            ├── class-hero-slider.php
            ├── class-cine.php
            ├── class-ticker.php
            ├── class-gates.php
            └── class-brief-form.php
```

On a real WordPress install these copy to:

```
wp-content/themes/woodex/
wp-content/plugins/woodex-core/
```

`header.php` / `footer.php` in the child are **thin shells** (`wp_head`, `wp_body_open`, `wp_footer`) so **Elementor/Xpro/HFE** owns chrome.  
Do **not** hardcode a white Tailwind header.

---

## Station 04 — Visual mapping (no-code + Woodex widgets)

| Surface | How it is built |
|---|---|
| Header / footer / 404 / singles | Theme Builder (Xpro or HFE) |
| Mega 5-col | Same addon mega, IA from `recovery/mega_ia.json` |
| Home 3-slide | **Woodex Hero Slider** widget — same composition as `index.html` |
| 3D Studio hero | **Woodex Cine** widget |
| Inner heroes | Woodex Cine `short` |
| Services / studies / cities | CPT + Theme Builder single |
| Insights | Native posts + Blog Two archive CSS |
| Start / Contact | Woodex Brief Form |
| WhatsApp float | Plugin footer hook — number locked |

Animation: Elementor entrance **or** Xpro floating. `prefers-reduced-motion` in child. No particles.

Content migration: copy from HTML **as written**. Do not invent services (“Luxury Villas”, “Penthouse Structural Mapping”).

---

## Station 05 — Diagnostic checklist (agent must pass 100%)

### Proof

- [ ] Footer / About / schema contain the **exact** proof line  
- [ ] WhatsApp `923224000768` on float + forms  
- [ ] Call `tel:+923362259477` in footer  
- [ ] Desk `LG 90 Link Road, Model Town` + `10:00–8:30`  
- [ ] Wellstar only named client; path correct if present  
- [ ] No “globally”, no awards, no 95%

### Locks

- [ ] Home hero is Woodex Hero Slider, not `[woodex_hero_slider]` shortcode dump  
- [ ] 3D exclusive H2 once  
- [ ] Zero Elementor HTML widgets  
- [ ] No Tailwind CDN  
- [ ] No Unsplash  
- [ ] No secret in plugin source  

### Stack

- [ ] Hello parent + `woodex` child  
- [ ] Elementor Free  
- [ ] One H/F+mega pack only  
- [ ] woodex-core active; CPTs registered  

### UX

- [ ] Skip link  
- [ ] Reduced-motion kills Ken Burns / floating  
- [ ] Brief creates CPT + optional WA  

---

## Station 05-B — Agent start block (use this, not the pasted one)

```
WOODDEX ORCHESTRATION — EXECUTE ONLY AFTER HUMAN: APPROVE BUILD KIT

ACTION 01  Create WP-THEME/src/woodex (Hello child) and src/woodex-core
ACTION 02  Tokens from DESIGN.md / theme.css — navy #0c1628 cream #f4efe7 wood #b8956a
ACTION 03  Register Elementor widgets (Hero Slider, Cine, Ticker, Gates, Brief) — no shortcode hero
ACTION 04  WhatsApp float https://wa.me/923224000768
ACTION 05  REST /wp-json/woodex/v1/brief  and  /wp-json/woodex/v1/mcp
           MCP auth: constant WOODEX_MCP_SECRET from wp-config only
ACTION 06  CPT: service, study, location, brief, testimonial (empty)
ACTION 07  Run Station 05 checklist — fail the job if any proof string is paraphrased
ACTION 08  Do not import the rejected sample slider/header/footer
ACTION 09  Do not delete WOODEX-26 HTML
```

---

## Approval gate

Reply exactly:

- **APPROVE BUILD KIT** — write `src/woodex` + `src/woodex-core` stubs (correct code).  
- **STACK HFE+MA** — if you refuse Xpro and want Header Footer Elementor + Master Addons.  
- **APPROVE BUILD KIT XPRO** — explicit Xpro path.

Until then: plan only. The HTML site on port 8080 stays the live frontend.
