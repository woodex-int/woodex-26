# WOODEX-26 — Complete theme master plan

**Status:** START delivered — parallel site live in this folder on port 8080.  
**Date:** 20 August 2026  
**Reference theme:** [Linoxa /service](https://linoxa.webflow.io/service)  
**Reference inner page already approved:** current `3d-studio.html`  
**Parallel site:** `/home/user/WOODEX-26/` — current root site stays live.

---

## 0. Decisions locked this pass

| Question | Answer |
|---|---|
| Home | Home is **good**. Do not rebuild the 3-slide hero, orbit, or overall composition. **Improve** the Home **services** section and make **3D Studio the highlight of the whole site**. Design sections are **not locked** — they may be refined so they go with the theme. |
| Folder | Full **parallel** Tailwind site in `WOODEX-26`. Root site is not deleted. |
| This pass | **Master plan only.** No Tailwind pages until START. |
| How a service is defined | **Both:** named **rooms/zones** first, then named **outputs**, then a **unique workflow**. No two service pages share the same section sequence. |
| 3D Studio | **OK.** Port it. Do not invent a second “What are you actually approving?” heading. It is the highlight, not a sixth generic card. |

---

## 1. What is wrong today (so the new theme has a job)

### 1.1 Home — composition good, two holes

The Home 3-slide hero, partners grid, orbit, split, foundations, FAQ, CTA are Linoxa-shaped and should stay.

What fails:

1. **Services are not defined.** Reside / Atelier / Table / Brew / Gallery / Studio are mood names. A client cannot tell what they are buying.
2. **3D Studio is buried.** It is the sixth card, labelled “Studio / 3D”, and the panel still links to `services/visualization.html` — not `3d-studio.html`.
3. **Linoxa leftover copy** is still on Home: “Digital solutions for interior storytelling”, “Industrial facility designs with optimal space utilization”, “Building strong foundations through early learning”. That is template language, not Woodex.
4. **Proof numbers are old.** Home still says 320+ and 15 years / “most awarded”. Approved facts: **500+ projects**, **~20 years founder**, **10+ years execution team**, **ISO 9001**, named client **Wellstar Pharmacy / Cosmetics / Mini Hospital (DHA Lahore)** + **Woodex Furniture**. No fake awards.

### 1.2 Service pages — the complaint that started this

Even after unique copy, the *feeling* of clone remains when:

- every page opens with the same hero type
- every page then does the same card grid
- every page uses the same six generic families (Space Planning, Concept, 3D, Materials, Detail, Execution)
- every page uses the same step list
- the same H2 appears twice (“What are you actually approving?”)

**Rule for WOODEX-26:** if two pages share the same section order *and* the same block style, the second page is unfinished.

### 1.3 Workflow is too basic

A numbered 01–06 list is not a process. The client still does not know:

- what they walk in with
- what they approve at each gate
- what they pay for
- when 3D happens
- when BOQ happens
- when they can stop (3D-only is a complete engagement)

Master line (keep):

> **DRAWN. THEN BUILT.**  
> DESIGN IS NOT DECORATION. DESIGN IS THE FOUNDATION OF A SUCCESSFUL PROJECT.

Visible path (seven steps, Budget + BOQ live *inside* Plan and Build — they are not extra marketing steps):

> **Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver**

### 1.4 “What are you actually approving?”

Allowed **once** on the site, on **3D Studio only**, as:

> You are not approving a plan. You are approving a room.

Never again as an H2 on any service page. Each service gets its own approval sentence (see §6).

---

## 2. Recommended stack (and why not a heavier framework)

You asked: Tailwind + HTML5 + JS, or a better frontend framework.

**Recommendation for WOODEX-26: HTML5 + Tailwind CSS + vanilla JS + JSON content.**

| Option | Verdict |
|---|---|
| **HTML5 + Tailwind + vanilla JS + JSON** | **Use this.** Static, fast, matches the current host (`python3 -m http.server`), easy to hand to a later backend, no build lock-in if we use the Tailwind CLI. |
| Alpine.js | Optional, only if accordions/tabs get noisy. Not required. |
| React / Next / Vue | **Not this phase.** Backend is deferred. A SPA adds nothing a client can see and makes the later CMS harder, not easier. |
| Webflow clone | We take Linoxa’s *section language*, not their CMS. |

### How Tailwind is used

- **Tokens first** in `tailwind.config.js` — navy, cream, wood, ink, Plus Jakarta Sans. No default Tailwind blue, no Inter.
- **Components** as HTML partials (or small JS includes), not a component library.
- **JSON** in `/content/` is the “CMS”: services, rooms, outputs, workflows, FAQs, studies. Pages read JSON at build time (a small Node or Python renderer) **or** fetch it. For v1, a Python renderer that prints HTML is enough and matches the current toolchain.
- **Motion** in `/js/motion.js` — `[data-anim]`, cine slider, lightbox, tilt. Already proven on 3D Studio. Port it. Do not put motion on Home’s existing slider in a way that restyles the hero.

### Theme features we will actually ship (Linoxa checklist, Woodex meaning)

| Feature | How |
|---|---|
| 3D transforms | Image tilt + perspective on media frames |
| Background video / cine | Ken Burns + slow crossfade (no fake stock video required) |
| CSS Grid | Every unique section |
| Components | Header, mega, button, cine-hero, footer, lightbox, form |
| Content management | `/content/*.json` |
| Custom 404 | Port, Tailwind |
| Forms | Start / 3D brief / contact — frontend only |
| Interactions | Accordion, room switcher, cine, hide-on-scroll (desktop only) |
| Media lightbox | All study images |
| Responsive + nav + slider | Existing Home slider logic ported; cine on inner pages |
| Retina | Existing images; no upscale fakes |
| Web fonts | Plus Jakarta Sans only |

---

## 3. Design system (locked tokens — not locked Home composition)

```
Font:     Plus Jakarta Sans (300 / 400 / 500 / 600 / 700)
Navy:     #0c1628
Navy-2:   #121e34
Card:     #152033
Cream:    #f4efe7
Ink:      #12151c
Wood:     #b8956a
Muted:    #6a6560
Radius:   24 / 16 / 12 / pill
Ease:     cubic-bezier(0.22, 1, 0.36, 1)
```

Buttons stay the Linoxa pill + circular arrow.  
Header stays dark over cinema, cream/navy sections alternate.  
No new accent colours. No second typeface.

---

## 4. Linoxa /service → Woodex section language

Linoxa service page (the attached hero + the rest of `/service`) is the **theme grammar**. We do not copy their industrial/architecture words.

| Linoxa block | Woodex use | Notes |
|---|---|---|
| Full-bleed cine hero, centered eyebrow, 2-line H1, button + line of copy | Every inner page hero | Already approved on 3D Studio |
| Logo / word ticker under hero | Named **outputs** of *that* page, not client logos we do not have | 3D: Stills · Walkthrough · 360 · … |
| About split + giant stat + two icon cards + photo | “Why this service exists” | Unique stat per page. Never “95% satisfaction” unless we have it. |
| Large image + heading + 3 bullets + CTA | “What you get” / industrial | Unique bullets |
| 4-up project strip | Studies, labelled **studies** | No fake named clients |
| Accordion + changing image | Named **outputs** | Interior Eight list style |
| Dark split + 3 text links | Cross-sell (3D / Fit-out / Craft) | |
| Image mosaic | Optional, only on some layouts | |
| Footer CTA | “Stay connected” already exists | |

**3D Studio already speaks this language.** WOODEX-26 treats it as the canonical inner-page. Other pages borrow *blocks*, never the same *sequence*.

---

## 5. 3D Studio is the highlight of the complete website

3D Studio is not a service card. It is the **proof engine**.

### 5.1 Where it must appear (when we build)

| Surface | Planned treatment |
|---|---|
| Nav | Keep dedicated **3D Studio** item + mega feature strip |
| Home services section | Studio is no longer card 06. It becomes a **full-width highlight band** after the five disciplines: still + line “See it. Understand it. Build it.” + CTA to `3d-studio.html` |
| Home story / split | Third story row and the 3D list item point to **3D Studio**, not visualization.html |
| Every service page | One unique “See this service in 3D” moment — different placement per layout |
| Process | Visualize is a real gate, not a thumbnail |
| Mega + footer | Already correct |

### 5.2 3D Studio page itself (do not redesign)

Keep the approved sections, in this order:

1. Cine hero — *See it. Understand it. Build it.*
2. Ticker — named outputs
3. Why 3D — “You are not approving a plan. You are approving a room.” (**once**)
4. Spaces — Living, Kitchen, Restaurant, Office, Retail, Pharmacy
5. Named outputs accordion — 2D / stills / realistic / walkthrough / lighting / VR
6. What you have — checklist, not five identical cards
7. Workflow — Plan → Model → Material → Light → Visual → Approval → Reality
8. Intent — not a render farm
9. Studies
10. 3D brief form
11. CTA — Drawn. Then built.

Port to Tailwind. Same content. Same motion. Same images.

`services/visualization.html` becomes a **short product list** that sends people to 3D Studio. It must not clone the studio page.

---

## 6. How a service is DEFINED (rooms + outputs + unique flow)

A Woodex service page must answer four questions in this order of meaning (layout may shuffle the *blocks*):

1. **What rooms / zones is this?** (Interior Eight)
2. **What do I actually receive?** (named outputs — Interior Eight services list)
3. **What am I approving, on this page?** (one sentence, unique)
4. **What is the path, and where can I stop?** (unique workflow)

### 6.1 Approval sentence — one per page, never the 3D line

| Page | You are actually approving |
|---|---|
| 3D Studio | A **room** (the still). Not a plan. |
| Residential | The **house as one instrument** — living, kitchen, quiet room — before finishes. |
| Office | The **floor** — arrival, focus, demo — not a mural. |
| Retail | The **path** — enter, pause, pay. |
| Shops / showroom | The **walk** and the negotiation table. |
| Restaurant | The **night room** and the pass. |
| Café | The **counter** and the linger seat. |
| Renovation | The **replan inside existing bones**, after survey. |
| Fit-out | The **scope + BOQ**, then the site. |
| Architecture | The **volume** — openings, stair, section. |
| Drawings | The **sheet set** the site can build. |
| Joinery | The **piece as it will be made**. |
| Lighting | The **night scene**, not a fitting catalogue. |
| Pharmacy | Waiting, counter, dispensary — **a Saturday that works**. |
| Software house | **Focus + demo**, then culture. |
| Space planning | The **test-fit**. 3D comes after. |
| Visualization | Which **views**. Then go to 3D Studio. |

If a heading is not in this table, it is leftover template. Delete it.

### 6.2 Named outputs (examples — unique lists, not six generic families)

Generic six (Space Planning / Concept / 3D / Materials / Detail / Execution) is **banned** as a stamped grid.

Each page writes its own list. Examples:

- **Residential:** House plan · Material direction · Key-room stills · Kitchen / wardrobe intent · BOQ if we build
- **Restaurant:** Guest journey · Cover count · Night still · Lighting scenes · Kitchen interface · Phased fit-out
- **Fit-out:** Route A (our still) or Route B (your drawings, reviewed) · BOQ in client language · Programme · Handover
- **Pharmacy:** Queue plan · Counter joinery · Waiting still · Clean/dirty path · Wellstar is named proof, not a template

### 6.3 Unique workflow (not a basic 01–06)

Every service has a **path name** and a **stop rule**.

| Page | Path name | Stop rule |
|---|---|---|
| 3D Studio | Plan → Model → Material → Light → Visual → Approval | 3D-only is complete. Reality is optional. |
| Residential | Empty-home path | Can stop after stills. Build is optional. |
| Office | Workplace path | Can stop after test-fit + stills. Phased fit-out if live. |
| Retail | Brand-shop path | Can stop after 3D. Kit after first store. |
| Restaurant | Kitchen-outward path | Night still is the contract. |
| Café | Counter-first path | First room, then roll-out kit. |
| Renovation | Survey-first path | No 3D before survey. |
| Fit-out | Two routes | We do not build a guess. |
| Architecture | Envelope path | Section before decoration. |
| Drawings | Sheet path | We do not invent a concept in CAD. |
| Joinery | Mill path | Make after still / sample. |
| Lighting | Scene path | Night still before fittings. |
| Pharmacy | Clinic path | Public rooms first. |
| Software house | Studio path | Focus before mural. |
| Space planning | Test-fit path | Planning-only is complete. |
| Visualization | View path | Then 3D Studio. |

Budget + BOQ language sits **inside Plan and Build**. Never as two extra vanity steps.

---

## 7. Eight layout families (no two pages share a sequence)

When we build, assign one family per page. Copy, rooms, images, approval line, and workflow stay unique even if a family is reused later.

| ID | Sequence | First assigned |
|---|---|---|
| **A Rooms** | Cine → problem/response → rooms switcher → unique layers (horizontal tiles, not cream cards) → unique rail → studies → FAQ → CTA | Residential, Joinery |
| **B Bento** | Cine → bento zones → dark accordion outputs → have-checklist → studies → FAQ → CTA | Office, Software house |
| **C Industrial** | Cine → image + get-list → have-checklist (flipped) → rail → studies → FAQ → CTA | Retail, Shops |
| **D Day/Night** | Cine → two-hour split → rooms → dark accordion → rail → studies → CTA | Restaurant, Lighting |
| **E Routes** | Cine → problem/response → two big routes → layers → have-checklist → studies → CTA | Café, Fit-out |
| **F Proof** | Cine → named proof / quote → rooms → have-checklist → rail → FAQ → CTA | Renovation, Pharmacy (Wellstar) |
| **G Sheets** | Cine → horizontal layers first → image + get (flipped) → rail → FAQ → studies → CTA | Drawings, Space planning |
| **H Mosaic** | Cine → studies early → problem/response → rail → dark accordion → FAQ → CTA | Architecture, Visualization |

**Hard rules**

- No `.have-grid` of five identical cream cards.
- No 3×2 `.values` cream cards of the six families.
- No cloned `.step-list` with the same six verbs.
- No second “approving” H2.
- Visualization must not clone 3D Studio.

---

## 8. Home — planned improvements only (not a rebuild)

Keep: 3-slide hero, six-discipline interaction, orbit, split, foundations, FAQ, marquee, featured, CTA, header, footer.

### 8.1 Services section (`#disciplines`) — the required improvement

Keep the six-card interaction (it is the Home signature). Change **meaning**:

| Card | Name | What it is | Link |
|---|---|---|---|
| 01 | Reside | Homes — living, kitchen, wardrobe | `services/residential.html` |
| 02 | Atelier | Workplace — focus, demo, client floor | `services/office.html` |
| 03 | Table | Restaurant — night room + pass | `services/restaurant.html` |
| 04 | Brew | Café — counter first | `services/cafe.html` |
| 05 | Gallery | Retail / showroom — path + pause | `services/retail.html` |
| 06 | **Craft** *(replace buried 3D)* | Kitchens, wardrobes, mill | `woodex-craft.html` or joinery |

Then a **new full-width 3D Studio highlight** under the six (Linoxa industrial split):

- Eyebrow: In-house 3D Studio  
- H2: See it. Understand it. Build it.  
- Line: You are not approving a plan. You are approving a room.  
- CTA: Open 3D Studio → `3d-studio.html`  
- Media: cine still (studio-hero / living still)

Studio is the highlight of the complete website. It is no longer a sixth icon.

### 8.2 Content pass on Home (when START includes Home copy)

Replace leftover Linoxa headings with Woodex lines:

- “Digital solutions…” → Woodex process / DRAWN. THEN BUILT.
- “Industrial facility…” → Fit-out / BOQ / site
- “Building strong foundations through early learning” → studies, not a school
- Stats: **500+** projects, **~20** years founder, **10+** years execution, **ISO 9001**, 3 studios  
- Kill “most awarded”
- Story row 3 and split list item 3 → 3D Studio

Hero slides stay. Labels can tighten later; not this plan’s build.

---

## 9. Complete page inventory (WOODEX-26)

### 9.1 Chrome (every page)

Nav: **Services · 3D Studio · Projects · Process · About · Insights** + Start CTA  
Mega: 3D feature strip + Design / Commercial / Hospitality / Build+craft / Studio+places  
WhatsApp: `https://wa.me/9242111800800` (placeholder)  
Email: `studio@woodex.interior`  
Studios: Gulberg III Lahore · Clifton Karachi · F-7 Islamabad  
No fake awards. Studies labelled studies. Named client: **Wellstar only**.

### 9.2 Pages

| Page | Role in theme | Build note |
|---|---|---|
| Home | Keep composition; services + 3D highlight | After services, or with services if commanded |
| 3D Studio | Canonical inner page | Port first after START |
| Services hub | Index of defined services, not 16 identical cards | Group by Design / Commercial / Hospitality / Build / Studio |
| 16 service pages | Unique family + unique definition | §6–7 |
| Process | Seven visible steps; BOQ inside Plan + Build | Not a clone of 3D workflow |
| Woodex Craft | Kitchens & wardrobes / mill | Links joinery + 3D |
| About | 500+, ~20 years, ISO, Wellstar, Furniture | No negative former-partner framing |
| Projects + 6 studies | Requirement → 3D → BOQ path | |
| Client stories | Wellstar only as named | |
| 12 city pages | Nationwide Pakistan | |
| 7 insights | Remap to have / BOQ / 3D gates | |
| Start your project | Have / need dropdowns | |
| Contact | Contact Two layout | |
| Careers | Keep | |
| 404 | Keep | |
| Changelog / Style guide | Skip (already chosen) | |

Backend (`WOODEX_FULLSTACK_MASTER_PLAN.md`) stays deferred.

---

## 10. JSON content model (the “CMS”)

Planned files, not written this pass:

```
WOODEX-26/content/
  site.json          # nav, studios, WhatsApp, email, proof facts
  home.json          # only the fields we are allowed to improve
  studio.json        # 3D Studio — already approved copy
  services.json      # array of 16, each with:
                     #   slug, layout, eye, h1, lead
                     #   approval_line
                     #   rooms[{title, body, image}]
                     #   outputs[{title, body, image}]
                     #   have[{title, body, href}]
                     #   flow[{title, body}]   # unique path
                     #   stop_rule
                     #   studies[], faq[]
  process.json
  projects.json
  insights.json
  locations.json
```

A page renderer must refuse to print a service if `layout` is missing or if `approval_line` equals the 3D Studio line.

---

## 11. Folder structure (created on START, not now)

```
WOODEX-26/
  README.md
  WOODEX-26_MASTER_PLAN.md          ← this file
  tailwind.config.js
  src/input.css                     # @tailwind + tokens
  dist/styles.css                   # built
  js/main.js
  js/motion.js
  content/*.json
  index.html
  3d-studio.html
  services.html
  services/*.html
  process.html
  about.html
  …
  assets/                           # copy from root
  images/                           # copy from root (no new fake photography)
```

Dev: Tailwind watch + `python3 -m http.server 8080 --bind 0.0.0.0` from `WOODEX-26/`.

---

## 12. Build order — when you say START

Do **not** start this until commanded.

1. Scaffold Tailwind + tokens + chrome (header/mega/footer/button).  
2. **Port 3D Studio** (approved). Motion + cine + lightbox.  
3. Write `content/services.json` from §6–7.  
4. Build **16 unique service pages** (rooms + outputs + unique flow).  
5. Services hub.  
6. Process (seven steps, BOQ inside Plan + Build).  
7. Home **services section + 3D highlight + leftover Linoxa copy + proof numbers**. Do not restyle the 3-slide hero.  
8. About, projects, start, contact, craft, cities, insights, 404.  
9. Pause for review.

---

## 13. Content rules (non-negotiable)

- DESIGN IS NOT DECORATION. DRAWN. THEN BUILT.
- Discover → Design → Visualize → Plan (budget+BOQ) → Build → Install → Deliver.
- Do not promise unlimited free design.
- Do not invent named clients beyond Wellstar.
- Studies stay labelled studies.
- Home hero composition stays. Home *copy leftovers* and the services/3D highlight may change when START includes them.
- Font + navy / cream / wood / ink stay.

---

## 14. What “done” looks like after the future START

- A client can open any service and say what **room**, what **output**, and what **gate** they are in.
- 3D Studio is the site highlight, not a sixth icon.
- No two service pages look stamped.
- “You are not approving a plan…” appears once.
- Workflow looks designed, not like a basic list.
- Home still feels like the current Home — with a defined services section and a 3D Studio band.
- Root site still exists until you say to switch.

---

**Waiting on: START.**
