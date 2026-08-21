# Woodex — Live pending TODO (audit 20 Aug 2026)

**Do not delete:** `WOODEX_PENDING_AND_MASTER_PLAN.md`, `docs/NEXT_PHASE_PLAN.md`, `docs/DESIGN.md`, or any other theme-improvement plan. This file is an **add-on audit** of what is still open after the Linoxa build.

**Site:** `/home/user/WOODEX-26/` · **66 HTML** · stack stays HTML5 + Tailwind CDN + `css/` + `js/app.js` until you command a convert.

**Theme lock (this command):**
- Page / section **backgrounds = white + navy (`#0c1628`) only**
- **3rd colour inside sections** = cream `#f4efe7` (cards, split panels, form fills). Wood `#b8956a` stays the accent line, not a page fill.
- Type: Plus Jakarta Sans only.

---

## Already done — do not rebuild

| Item | Status |
|---|---|
| Home 3-slide hero composition | Locked. Do not restyle. |
| Home six services (Interior / Commercial / Residential / Office / Retail / Brand shop) | Replaced. |
| Home 3D Studio sticky split (`#studio-highlight`) | Built (Linoxa overview). |
| 3D Studio page | Ported. Exclusive H2 once. |
| About sticky “Focused on spatial excellence” | Built. 500+ / 10+ / ISO 9001. |
| About values / vision / mission / Wellstar / furniture / team | Built. |
| Contact = Linoxa contact-three + map below | Built. |
| Insights = Blog Three + 7 articles + category hubs | Built. |
| Projects = Portfolio Two + 6 case galleries + 2 category hubs | Built. |
| Services mega 5 groups + leftover specialist pages live | Built. Do not delete pages. |
| 4 extra services (office / commercial / residential fit-out, turnkey) | Built. |
| Process 7 gates · FAQ footer-only · Contact in nav | Built. |
| SEO: canonical, OG, JSON-LD, sitemap, robots, vercel/netlify | First pass done. |
| Docs: DESIGN, PAGE_MAP, CONTENT_BRAND, SEO_PLAN, ESTIMATE, AGENT_HANDOFF | Exist. |
| WhatsApp `923224000768` · Call `+923362259477` · Desk Model Town | Wired. |
| Theme pass: cream page-fills → white; cream kept on cards | First pass done. |

**Proof published (locked, not “unverified”):** 500+ projects · founder ~20 years · execution 10+ years · ISO 9001 · Wellstar Pharmacy → Cosmetics → Mini Hospital, DHA Lahore. No awards, no 15/12 years, no ISO 45001.

---

## Pending — theme / Linoxa (do not drop)

These stay on the original improvement plan.

### P1 — Chrome & colour lock
- [x] Cream **section** fills → white; cream kept on cards / city nationwide tiles / forms. `bg-cream` utility maps to white.
- [ ] Header contrast on white pages (`light-page` navy bar) — cine pages stay transparent-over-photo.
- [x] Mega CTA pill un-broken (column-link CSS no longer paints the button).
- [ ] Unique line icons sprite on nested pages (inline SVGs used today).
- [x] Inner cine-short crumbs pinned top-left (820 / 375). Further 1440 QA later.

### P2 — Motion
- [ ] `[data-anim]` on remaining pages that only use `.reveal` or have none (404, some locations).
- [ ] Tilt on folio cards + remaining blog images.
- [ ] Lightbox `.lb-src` on case galleries still missing it.
- [ ] Reduced-motion audit.
- [ ] Real background video — **only if you supply a file**. Ken Burns stays until then.

### P3 — Linoxa match leftovers
- [ ] Insights **article** spacing → closer to Linoxa blog-post (listing already Blog Three).
- [ ] Case pages: facts row + gallery already exist — polish to Linoxa project rhythm.
- [ ] Services hub visual (not 16 cloned cards — already grouped; can tighten).

### P4 — QA
- [ ] Breakpoints 375 / 768 / 1024 / 1440.
- [ ] Forms validate + success note (frontend only).
- [ ] Project filters.
- [ ] Mobile nav hashes already pointed at `projects/residential.html` — spot-check nested `../`.
- [ ] Server: `python3 -m http.server 8080 --bind 0.0.0.0` from `WOODEX-26/`.

---

## Pending — master content agent (new, from attached MD)

Keep layouts. Rewrite **copy** to the master content system. Do not invent clients or awards.

### Content system to apply
Path on site: **Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver**  
Master file also writes DESIGN → VISUALIZE → PLAN → BUDGET → BOQ → EXECUTE → DELIVER. Same gates.

Every major service should answer: problem → what you have → six deliverables (plan, concept, 3D, materials, detail, execution) → method → proof → FAQ → CTA + WhatsApp.

### Rewrite order (after START)
1. [x] Home copy only (hero composition stays). Intro / one team / one process / one result. **Done 20 Aug 2026.**
2. [x] About — keep sticky + Wellstar; deepen founder/workflow chapters without negative partner framing. **Done 20 Aug 2026.**
3. [x] Services hub — client routes (empty / plan / brand / existing design / 3D-only / renovation). **Done 20 Aug 2026.**
4. [x] 3D Studio **copy only** — situations (plan / references / design / 3D-only / walkthrough / design+build). Page not redesigned. **Done 20 Aug 2026.**
5. [x] Residential · Office · Retail heroes tightened to master lines. Unique sections kept. Restaurant / Café / Shops already matched. **Done 20 Aug 2026.**
6. [x] Fit-out hero: two routes kept (Woodex-designed vs client drawings). **Done 20 Aug 2026.** Renovation H1 already master. Remaining fit-outs / turnkey — later START.
7. [x] Specialist pages already unique. Visualization leak of exclusive 3D line removed. Pharmacy names Wellstar. Craft / joinery / architecture / lighting / drawings / software house kept. **Done 20 Aug 2026.**
8. [x] Start form: area, stage, timeline, optional budget added. Have / need already matched master. Process path already seven gates. **Done 20 Aug 2026.**
9. [ ] Insights — new clusters only if you want more articles. Existing 7 stay.
10. [x] Locations hub + city cine-eyes: Studio (Gulberg / Clifton / F-7) vs Nationwide (served from). **Done 20 Aug 2026.**

### Do not
- Clone one service layout onto another.
- Promise unlimited free design.
- Invent a layout in 3D and call it design.
- Publish industrial / institutional unless you confirm Woodex does them.
- Delete any live page until you command it.

---

## Pending — later (not this START unless you add it)

- React + Node or WordPress conversion
- Live `/api/brief` backend
- Real photography / more named clients (only names you supply)
- Root `/home/user/*.html` old site (do not delete)

---

## START order (after you answer the questions)

1. Colour lock QA (white + navy backgrounds, cream in-section).
2. Then the content block you pick first (see questions).
3. Motion + mega + icon leftovers.
4. QA 375–1440.
5. Stop. Conversion is a new plan.

Original plans remain in:
- `/home/user/WOODEX-26/WOODEX_PENDING_AND_MASTER_PLAN.md`
- `/home/user/WOODEX-26/docs/NEXT_PHASE_PLAN.md`
- `/home/user/WOODEX-26/docs/DESIGN.md`
