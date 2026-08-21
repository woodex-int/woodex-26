# Woodex Interior — Master Brand & Systems Audit (7 Benchmarks)

**Date:** 20 August 2026  
**Corpus:** `/home/user/WOODEX-26/` · **66 HTML** · 20 service pages · 8 CSS · 14 images · `js/app.js`  
**Overall: 65 / 100** — A prestige skin on an incomplete commercial system.  
**Visual report:** `docs/MASTER_BRAND_AUDIT_7_BENCHMARKS.html`

Do not delete: `WOODEX_PENDING_AND_MASTER_PLAN.md`, `docs/NEXT_PHASE_PLAN.md`, `docs/DESIGN.md`, `docs/PENDING_TODO_LIVE.md`. Do not restyle Home 3-slide composition. Do not redesign `3d-studio.html`. Do not delete pages.

---

## Scoreboard

| # | Benchmark | Score | Band |
|---|---|---|---|
| 1 | Elite HTML Architect — semantic skeleton, CLS, instant value | **61** | Mid |
| 2 | Prestige-Identity Fluid Visual Engine | **76** | Strong |
| 3 | Conversion Systems — 3-second hero SOP | **68** | Mid |
| 4 | Direct-response copy & value proposition | **82** | Strong |
| 5 | Organic lead-generation architecture | **54** | Weak |
| 6 | Consumer trust & proof matrix | **63** | Mid |
| 7 | Data-driven systems auditor (friction loops) | **52** | Weak |

---

## Brand DNA (locked)

- **Idea:** DRAWN. THEN BUILT.
- **Promise:** WE TURN IDEAS INTO SPACES. / ONE PARTNER. FROM CONCEPT TO COMPLETION.
- **Foundation:** DESIGN IS NOT DECORATION. DESIGN IS THE FOUNDATION OF A SUCCESSFUL PROJECT.
- **Path:** Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver  
  (master also: DESIGN → VISUALIZE → PLAN → BUDGET → BOQ → EXECUTE → DELIVER)
- **3D:** SEE IT. UNDERSTAND IT. BUILD IT. Exclusive H2 *“You are not approving a plan. You are approving a room.”* — `3d-studio.html` only.
- **Proof:** 500+ · founder ~20 · execution 10+ · ISO 9001 · studios Gulberg III / Clifton / F-7 · desk LG 90 Link Road, Model Town · hours 10:00–8:30 · named client **Wellstar only**.
- **Contact:** WhatsApp `https://wa.me/923224000768` · Call `+92 336 2259477` · `studio@woodex.interior`
- **Tokens:** Plus Jakarta Sans · navy `#0c1628` · navy-2 `#121e34` · card `#152033` · cream `#f4efe7` (in-section only) · ink `#12151c` · wood `#b8956a` (accent, not fill). Page backgrounds = white + navy only.

**Identity risk:** Linoxa visual language (LAYOUT / DESIGN / CREATE, giant INTERIORS, sticky splits) speaking for a Lahore mill-connected fit-out practice. Prestige is useful. Leftover Linoxa verbs are not.

---

## 01 — Elite HTML Architect · 61

**Asked:** semantic header/nav/main/section/footer, no generic div wrappers, no layout shift, premium value instantly.

**Pass**
- 66/66: `header` `nav` `main` `footer`. 0 missing H1/title/canonical/OG.
- 0 unclosed tags. 0 broken internal hrefs. 0 missing src.
- JSON-LD on 66. Types: BreadcrumbList 65, InteriorDesignStudio 3, FAQPage 1 (Home, matches visible FAQ), Article 7.
- 291 sections, 351 articles, 132 navs.

**Fail vs the brief**
- **4,389 `div`** vs 291 `section` (15.1:1). Home 134 divs. 3D Studio 122. About 100.
- 0 `picture` / `source` / `address` / `time` / `aside`. 0 skip-link.
- Header + mega + footer copy-pasted (~8.7 KB chrome × 66).
- **511 images, 0 width+height.** 221 empty `alt=""`. `loading="lazy"` = 1 (map iframe). `fetchpriority` = 0.
- Tailwind CDN + Google Fonts on 66/66. Home loads 6 CSS files.

**SOP:** aspect-ratio or width/height on every img; LCP `fetchpriority="high"`; skip link; `<address>` on desk; stop chasing zero divs — chase anonymous wrappers. Do not rebuild the visual.

---

## 02 — Prestige-Identity Fluid Visual Engine · 76

**Asked:** Grid/Flex on semantic tags, custom properties, dark-mode variables, fluid type, elite positioning.

**Pass**
- Tokens locked and used. `clamp()` on display type. Grid/flex throughout. Button system (pill + circular arrow + dual-label) is owned UI.
- Colour lock held: body `#fff`; `.bg-cream { background:#fff }`; cream on cards/forms.
- `prefers-reduced-motion` kills Ken Burns, `[data-anim]`, lx-pin.

**Fail**
- No `prefers-color-scheme` / dark-mode variables in any of 8 CSS files.
- CSS federation (130 KB, 8 files). `chrome.css` linked on **Home only**. Duplicate `.mega` in chrome.css + mega.css.
- `body.light-page` only on Insights (12). About / Projects / Contact / Start sit on white with transparent header until `.scrolled`.
- **14 JPEGs for 66 pages.** Most 1408×768. Ken Burns fakes cinema.

**SOP:** `--bg/--fg` pairs for white-page vs navy-page (not a consumer dark-mode toggle). `light-page` on all non-cine inners. Unify CSS load. Real photography before any restyle. Home 3-slide + 3D Studio remain locked.

---

## 03 — Conversion Systems Designer · 68

**Asked:** 3-second pattern-interrupt, all-caps unbeatable value, zero layout confusion.

**3-second Home test**
0.0 photography + giant **LAYOUT** (then DESIGN / CREATE, 6.8s).  
0.8 kicker *Drawn. Then built.* H1 *We turn ideas into spaces.*  
1.5 CTA **Get started** + supporting paragraph.  
3.0 prestige feeling, generic verb. The three doors (empty / existing design / 3D-only) are two scrolls down.

**Confusion**
- Same pill label, three destinations: `start-your-project.html` / `services.html` / `projects.html`.
- Two “six services” modules: `#disciplines` (Interior/Commercial/Residential/Office/Retail/Brand shop) and `#six-services` (Residential/Office/Restaurant/Café/Retail/Craft).
- Header CTA = Start your project. Hero = Get started. Featured = Get started. Final H2 = Tell us about your space. Final button = Contact us.
- Do **not** add “UNBEATABLE VALUE.” It would cheapen the brand. Interrupt is already DRAWN. THEN BUILT.

**SOP (keep 3-slide machine):** Slide 1 Start your project · Slide 2 Explore interiors · Slide 3 Open 3D Studio or View studies. Kill one six-services block.

---

## 04 — Elite Direct-Response Copy · 82

**Strongest asset.** Keep:

- We do not invent a layout in 3D and call it design.
- We do not execute an external design we have not read against the site.
- We do not publish a fake square-foot rate.
- 3D-only is a complete engagement.
- Fit-out two routes. Residential “house as one instrument.”

**Template leftovers to cut**

| Location | Line | Replace with |
|---|---|---|
| Home hero ×3, featured | Get started | Start your project / Explore interiors / Open 3D Studio |
| Home approach | Learn more | About the practice |
| Home final button | Contact us | Send the brief |
| Contact H1/H2 | Contact us | Tell us what you have |
| Contact form intro | “timeless spaces blending function, beauty…” | Woodex path sentence |
| Contact submit | Submit now | Send message |
| About close | “Ready for a space that feels as refined as it feels lived-in?” | Tell us about your space |

Do not import “digital economy” language from the benchmark prompt. Woodex is rooms, mill, site.

---

## 05 — Organic Lead Generation Architect · 54

**Asked:** two-step — micro-offer, then availability script.

**Now**
- 3 forms, all frontend-only (`content/brief.json` → `/api/brief` does not exist).
- Start form fields are correct (have/need/area/stage/timeline/budget).
- WhatsApp 66/66 `923224000768` — the real pipe.
- Call tel only on About, Contact, Projects (+ cases). Not in footer.
- Contact HTML requires phone; JS only name/email/message; `novalidate`.
- Footer socials `href="#"` on 66 pages.
- `content/site.json` still has old WA `9242111800800`.
- Hours printed. No live availability pulse. “One working day” only on Start.

**SOP:** Until API exists, form submit → WhatsApp with field string (or mailto). Footer Call. Hide socials. Align validation. Contact H1 = Tell us what you have. Step 1 = 4-field strip or WhatsApp prefill. Step 2 = “Desk 10:00–8:30 PKT · reply one working day.”

---

## 06 — Consumer Trust & Conversion · 63

Honesty high. Evidence thin.

| Claim | Proof | Gap |
|---|---|---|
| 500+ | Animated counter + FAQ | Number without rooms. Prefer 8–12 anonymised named jobs. |
| ~20 / 10+ | Copy | Tied to Wellstar origin on About — keep. |
| ISO 9001 | Text only | Need mark + number or stop repeating. |
| Wellstar | Named path | Must be a full case with real photos. |
| 6 studies | Labelled studies, March 2026 | Mood, not checkout proof. Correct integrity. |
| Savings | None | Translate to “fewer unknowns when the still becomes a BOQ” + one anonymised number. |
| Social | Dead `#` | Worse than none. |
| Photos | 14 recycled | 500+ studio that cannot show mill or Wellstar = skepticism. |

Do not add 95%, reviews, awards. Static 500+ (drop 0→500 animation). 4-cell matrix only: 500+ · ISO 9001 · 3 cities · 1 named path.

---

## 07 — Data-Driven Systems Auditor · 52

**No 14-day metrics exist.** No GA/Plausible/GTM. No events. Inventing Unique Visitors / Bounce / Session / CVR would violate the proof lock.

**Predicted loops (markup)**

1. **LCP/CLS** — hero JPEG no dimensions; fonts + Tailwind CDN blocking.
2. **Hierarchy mismatch** — LAYOUT vs H1; two six-service taxonomies; Get started → 3 URLs.
3. **Header hide** after 280px desktop — primary CTA leaves.
4. **Lead pipe** — submit does not persist.
5. **SEO** — `404.html` in sitemap (page is `noindex, follow`). Canonical host `https://woodex.interior/` unverified. Keywords meta on Home.
6. **Image sameness** — 511 tags, 14 files.
7. **Motion theatre** — lx-pin, counters, tilt, Ken Burns, marquees. Reduced-motion coded; lx-pin already static &lt;1100px.
8. **Chrome duplication** — 1.43 MB HTML, mega nav × 66.

**Not a problem:** broken links, WA consistency, exclusive 3D H2, awards scan, industrial claim.

**SOP:** analytics + 4 events (WhatsApp, Start, form, 3D). Drop 404 from sitemap. Image dimensions. Self-host font. Drop Tailwind CDN before any performance claim. Then read 14 real days.

---

## Measured facts (20 Aug 2026)

- HTML 66 · WhatsApp 66/66 · Start your project 66/66 · Get started = `index.html` only.
- Tel pages: about, contact, projects + 8 cases.
- Forms: 3d-studio, contact, start-your-project.
- `light-page`: insights only (12).
- `chrome.css`: index only. `lx.css`: index, about, services. `home.css`: index only.
- Sitemap 66 locs including `404.html`. robots.txt Allow + sitemap.
- Images 2.8 MB total. Largest HTML: index 51 KB, 3d-studio 38 KB, about 34 KB.
- Service pages: ticker on all 20; unique H1s; unique section sequences (not cloned).
- Exclusive 3D line: `3d-studio.html` only.
- Banned scan: “unlimited free design” only as denial (faq, process, design-vs-turnkey insight).

---

## P0 / P1 / P2

### P0 — pipe and hygiene
1. Drop 404 from sitemap.
2. Forms persist (API or WhatsApp-fallback). Align phone required.
3. Footer Call on 66. Hide Ig/In/Fb.
4. Fix `content/site.json` WhatsApp.
5. Home verbs: Get started / Contact us / Learn more → Woodex.
6. Contact H1 + form intro. About “refined / lived-in” H2.

### P1 — trust + CLS
7. Image width/height or aspect-ratio. LCP fetchpriority.
8. `light-page` on non-cine inners.
9. ISO mark. Wellstar photos. Mill sequence.
10. One Home six-services module, not two.
11. Skip link. `<address>` on desk.

### P2 — identity ownership
12. Self-host font. Built CSS. Drop Tailwind CDN.
13. Unify CSS; retire duplicate mega in chrome.css.
14. Analytics + 4 events.
15. Original photography.
16. Do not restyle Home 3-slide. Do not redesign 3D Studio. Do not delete pages or plans.

---

## Hold (already outclasses the market)

- No award walls / 15 years / 95% / ISO 45001 / 320+.
- Unlimited free design denied.
- 20 unique service pages (rooms + named outputs + unique approval).
- 3D-only is complete. Two-route fit-out.
- Studies labelled studies. Wellstar only named client.
- Voice: short, specific, unsentimental.

Woodex does not need a new brand idea. It needs the site to stop auditioning as Linoxa and start operating as the studio that draws a room, lets the client approve it, and can build it in Lahore, Karachi or Islamabad.
