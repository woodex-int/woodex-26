# Woodex Interior — Advanced WordPress Master Plan

**Date:** 22 August 2026  
**Source:** live static site `WOODEX-26/` (66 HTML)  
**Target:** WordPress theme + Elementor-editable templates. **No HTML widget.**  
**This document is the plan.** It is not a locked product decision from the last Q&A. Better options from 2026 research override “install everything named.”

---

## 0. What “better” means for Woodex

A prestige interior studio site dies if WordPress becomes:

- five Elementor addon packs fighting each other  
- HTML boxes nobody can edit  
- fake testimonials and award walls  
- a slider plugin that cannot do LAYOUT / DESIGN / CREATE  
- a theme that restyles Home and 3D Studio by accident  

Better = **one theme canvas + one addon pack + one Woodex plugin + one SEO plugin + one form plugin.**  
Everything else is refused until a page proves it needs it.

---

## 1. Verdict after research (2026)

| Need | Weak choice | Better choice | Why |
|---|---|---|---|
| Theme canvas | Astra + 3 companions | **Hello Elementor + child `woodex`** | Blank. Tokens live in the child. No Astra opinion. |
| Page builder | Elementor Pro first (paid) | **Elementor Free** | You locked Free. Pro is optional later for native Form + Theme Style. |
| Header / footer / single / 404 | Elementor Pro Theme Builder | **Xpro Theme Builder (free)** | Documented free equivalent. Header, footer, archive, singular, 404. |
| Mega menu | Max Mega Menu + CSS war | **Xpro Mega Menu** | Same pack as theme builder. One vendor. |
| Extra widgets | Essential + Happy + Plus + Xpro | **Xpro Addons Free only** | 50+ widgets, floating, icons, template importer. Do not stack packs. |
| Home 3-slide | Elementor Image Carousel / Prime Slider | **Custom widget `Woodex Hero Slider`** | Carousel cannot do giant LAYOUT/DESIGN/CREATE + clip-path + 6.8s pips. A custom Elementor widget is still editable. It is not an HTML box. |
| Inner cine heroes | Background slideshow | **Custom widget `Woodex Cine`** | Ken Burns + crumbs + CTA row is a Woodex object. Settings: images, H1, eye, CTA. |
| Animation | Every pack’s motion on | **Xpro Floating (free) + Elementor entrance + theme `prefers-reduced-motion`** | Match current site: fade / left / right / tilt. Kill theatre. |
| Slider library | MetaSlider, Smart Slider 3 | **Do not install** | Conflicts with custom hero. Adds weight. |
| Forms | Elementor Form (Pro) | **WPForms Lite** *or* Woodex Brief widget → CPT | Same fields as `start-your-project.html`. WhatsApp fallback stays. |
| Dynamic services / studies | Manual 20 Elementor pages only | **CPT + Xpro / Elementor Theme Builder single** | Edit content in WP. Layout stays one template. |
| Blog | Custom blog plugin | **Native Posts + categories** | Insights already map to posts. |
| Testimonials | Fake review slider | **CPT `testimonial` — empty until a name is approved** | Wellstar is a **story**, not a 5-star widget. |
| AI / agent build | Manual only | **Novamira Free on staging** | MCP into WP. Pro only if you want Elementor-native AI abilities. Never on production with file/PHP exec until you accept the risk. |
| SEO / AEO / GEO | Rank Math + Schema Pro + 3 more | **Rank Math Free** (or Yoast) + Woodex JSON-LD in `woodex-core` | FAQPage, Service, LocalBusiness already specified. |
| Import | Hand-written JSON | **Build on staging → Export JSON / Kit ZIP** | Hand-authored Elementor JSON breaks often. Plan now. Export after BUILD KIT. |

**Xpro + Novamira is a valid pair.**  
Xpro = design surface.  
Novamira = agent access to WordPress.  
They are not two design kits. Do not treat “Nova Mira” as a third widget pack.

---

## 2. Architecture

```
WordPress
├── Theme: Hello Elementor
│   └── Child: woodex
│         style.css     → tokens only (--navy, --cream, --wood, Plus Jakarta)
│         functions.php → enqueue, reduced-motion, skip-link, brief endpoint hook
│         theme.json    → optional WP fonts/colors mirror
│
├── Plugin: woodex-core  (we write this)
│   ├── CPT: service, study, location, brief, testimonial
│   ├── Tax: service_group, insight_gate, city_type (studio|nationwide)
│   ├── Elementor widgets:
│   │     Woodex Hero Slider
│   │     Woodex Cine
│   │     Woodex Ticker
│   │     Woodex Gates
│   │     Woodex Brief Form
│   ├── REST: POST /wp-json/woodex/v1/brief
│   └── Schema helpers (FAQ, Service, LocalBusiness)
│
├── Elementor (Free)
├── Xpro Elementor Addons (Free)
│   ├── Theme Builder → Header, Footer, Single Service, Single Study, Single Post, 404
│   ├── Mega Menu
│   ├── Floating Effect, icons
│   └── Template importer
├── Novamira (Free on staging)
├── WPForms Lite  (or Brief widget only)
└── Rank Math Free
```

No page uses **HTML widget**.  
No page uses a raw `[html]` shortcode.  
If a layout cannot be done with Elementor + Xpro, it becomes a **Woodex Elementor widget** with controls (repeater, images, text, URL). That is still visual: select widget → edit fields.

---

## 3. Information architecture (WordPress)

| WP object | Replaces | Notes |
|---|---|---|
| Pages | Home, About, Services hub, Process, Contact, Start, Craft, Careers, FAQ, Locations hub, 404 | Elementor canvas / full width |
| CPT `service` | 20 files in `services/` | One Single template. Unique sections via ACF-like fields or Elementor Theme Builder + dynamic tags |
| CPT `study` | `projects/` + 6 cases | Labelled **Study**. Not “project” in UI if you want honesty |
| CPT `location` | 12 city pages | Field: `presence` = studio \| nationwide. Unique GEO copy per city |
| Posts | 7 insights + future notes | Categories: 3D, Cost, Rooms, Process |
| CPT `brief` | Form submissions | Admin list. WhatsApp still fires |
| CPT `testimonial` | — | **Do not populate** until a client approves a quote. Wellstar stays a page/story |

Mega IA (unchanged): Interior Design · Fit-Out · Industries · Specialist · Studio.

---

## 4. Chrome (header / footer)

Built in **Xpro Theme Builder**, not PHP chrome copied 66 times.

**Header**

- Logo lockup (SVG inline as Elementor icon / image, not HTML box)  
- Nav: About · Services (mega) · 3D Studio · Projects · Insights · Contact  
- CTA pill: Start your project  
- Mobile: Xpro / Elementor nav off-canvas  
- Transparent over cine / navy after scroll → Xpro display conditions + a small `woodex` JS (same as `.scrolled`)

**Mega (5 columns)**  
Xpro Mega Menu. Columns match today’s mega. CTA row: Open 3D Studio.

**Footer**  
Stay connected · Practice · Explore · Get in touch (email, WhatsApp, **Call +92 336 2259477**, desk, hours) · giant INTERIORS (heading widget + stroke CSS in child theme — still a heading, not HTML).  
No fake Ig/In/Fb until URLs exist.

**Skip link** in child theme `header.php` / `wp_body_open`.

---

## 5. Home + 3D Studio (the hard pages)

You asked for Elementor-editable clones and no HTML box.

### Home 3-slide

**Widget: Woodex Hero Slider** (in `woodex-core`)

Controls:

- Repeater × 3: image, kicker, H1 line 1, H1 line 2, CTA label, CTA URL, paragraph  
- Side labels: Layout / Design / Create  
- Index words: LAYOUT / DESIGN / CREATE  
- Duration: 6800ms  
- Reduced motion: static first slide  

Output is the same composition as `index.html` hero. Editors change copy/images in the panel. They do not paste HTML.

Rest of Home = Elementor containers + Xpro + Woodex widgets (partners, st-spaces, lx-pin split, story, stats, foundations, FAQ, CTA).  
Orbit section is **already removed** — do not bring it back.

### 3D Studio

**Widget: Woodex Cine** for the full-bleed hero.  
Exclusive H2 *“You are not approving a plan. You are approving a room.”* — **this page only.**  
Other bands: ticker, approve, spaces, delivers, start form (Woodex Brief Form with 3D fields).  
Do not restyle by accident. Clone, then stop.

---

## 6. Animation doctrine

Current site motion (keep the *language*, not every effect):

| Now | In WordPress |
|---|---|
| `[data-anim]` fade / left / right / clip | Elementor entrance **or** Xpro scroll — one system per page |
| `.reveal` | Same |
| `[data-tilt]` | Xpro 3D Tilt **if free**; else omit on mobile |
| `.cine-slide` Ken Burns | Inside Woodex Cine widget only |
| `.hero-slide` clip-path | Inside Woodex Hero Slider only |
| `.st-ticker` | Woodex Ticker widget |
| `lx-pin` sticky | CSS in child + Elementor containers; disable &lt;1100px |
| `prefers-reduced-motion` | **Required** in `woodex` child. Kills floating + Ken Burns |

**Do not** enable Xpro particles, smoke, mouse trail, magnetic cursor. Wrong brand.

---

## 7. Services, blog, testimonials (your list)

### Services

- CPT `service`  
- Archive = Elementor template (today’s `services.html` IA)  
- Single = Theme Builder template: cine + ticker + unique blocks  
- Unique copy stays in post fields (have, outputs, FAQ, GEO). Layout does not clone 10 identical sections with the same paragraph.

### Blog / Insights

- Native posts  
- Archive = Blog Two list (date · title · Discover more) — Elementor loop **or** Xpro post list styled as `.b2`  
- Single = title, meta (Woodex studio), hero, prose, Direct answers (FAQ), related  
- Categories: 3D, Cost & BOQ, Rooms, Process  

### Testimonials

- CPT exists for the day you have a second named quote  
- **Do not** put a star-rating slider on Home  
- Wellstar = Client story page / CPT study with `named=1`

### Team / Process / FAQ / Locations / Craft / Careers

- Pages + Theme Builder  
- Locations: CPT with studio vs nationwide  
- Careers: no fake openings  

---

## 8. Leads

**Woodex Brief Form** widget (and/or WPForms):

- Fields already locked: name, email, phone, city, have, need, area, stage, timeline, budget, message  
- On submit: create CPT `brief` + `mailto` / admin email + optional `wa.me` with field string  
- REST `POST /wp-json/woodex/v1/brief` so a future Node/CRM can replace WP without touching Elementor  
- Phone required only when the control is on (Contact yes, Start optional)

This is the “frontend API ready” layer. Not a second app.

---

## 9. Design tokens (Elementor Site Settings + child CSS)

| Token | Value | Elementor |
|---|---|---|
| Font | Plus Jakarta Sans 300–700 | Custom font (Free: enqueue in child; Pro: Site Settings) |
| Navy | `#0c1628` | Primary |
| Navy-2 | `#121e34` | Secondary |
| Card | `#152033` | |
| Cream | `#f4efe7` | Accent (in-section only) |
| Ink | `#12151c` | Text |
| Muted | `#6a6560` | |
| Wood | `#b8956a` | Accent line |
| Radius | 24 / 16 / 12 / pill | Button = 999px |
| Ease | `cubic-bezier(0.22, 1, 0.36, 1)` | |

Page backgrounds: **white + navy only**. Cream is cards/forms. Wood is not a fill.

Buttons: pill + circular arrow. Build once as a **global widget / Xpro button style**. Duplicate label hover can be CSS in the child.

---

## 10. SEO / AEO / GEO / E-E-A-T

Carry over from the live site:

- Unique title + H1 + canonical per URL  
- FAQPage JSON-LD on Home, FAQ, each service, each city  
- InteriorDesignStudio on Home / About / Contact  
- Article on insights  
- BreadcrumbList via Rank Math + theme  
- GEO: Lahore / Karachi / Islamabad + Model Town desk + 10:00–8:30  
- E-E-A-T: 500+, ~20, 10+, ISO 9001, Wellstar only  
- 404 not in sitemap  
- No “award-winning”, no 95%, no unlimited free design  

---

## 11. Import / delivery (when you say BUILD KIT)

1. Local WP (LocalWP / Docker) + Hello + child + plugins  
2. Build header/footer/pages in Elementor  
3. Export:  
   - each template → `kit/json/*.json`  
   - full site → `kit/woodex-elementor-kit.zip` (Elementor Export Kit)  
4. SOP for production: install plugins → import kit → assign Theme Builder conditions → permalinks → forms  
5. Hand-made JSON without a live Elementor export is **not** the advanced path. Too many import failures.

Until BUILD KIT, `kit/` stays empty except a readme.

---

## 12. Risk register

| Risk | Mitigation |
|---|---|
| Five addon packs | One: Xpro. Written in 06_DO_NOT. |
| Elementor Free has no Form | Woodex Brief + WPForms. |
| Home slider looks generic | Custom widget, not Carousel. |
| Novamira PHP exec on production | Staging only until you accept risk. |
| CPT singles lose unique sections | Fields per service, not one cloned 10-block. |
| Snapshot eats `.git/config` | Irrelevant to WP plan. |
| Converting 66 pages in one week | Phases in `05_DEVELOPMENT_PHASES.md`. |

---

## 13. Success criteria

- Client can edit Home slide copy without a developer and without an HTML box  
- Header/footer edited in Elementor (Xpro Theme Builder)  
- New service = new CPT item, not a new PHP file  
- New insight = new Post  
- Briefs appear in WP admin  
- Reduced-motion users get a still site  
- Proof list unchanged  
- Exclusive 3D H2 still once  

---

## 14. Next command

You already have the **advanced plan**.  

Say **BUILD KIT** to start Hello child + `woodex-core` plugin stubs + Theme Builder spec (still no fake JSON).  
Say **BUILD CORE PAGES** to begin Elementor templates on a WordPress instance.  
Do **not** say START unless you mean “write more plan.” This plan is the start.

Related (not this folder): a future `DEPLOYMENT/` for Hostinger/Vercel + REST backend remains a **separate** command.
