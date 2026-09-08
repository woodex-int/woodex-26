# Woodex — Master Improvement Plan (audit → redesign → go-live)

**Date:** 2026-09-08
**Scope:** full-site design/UX audit of `apps/web`, with a per-page, per-section
redesign plan. Every shared block is made **unique per page** — no copy-paste sections.
**Reference language:** Linoxa home-two (editorial, big type, numbered steps, image-led).

---

## 1. Audit — the repetition problem (root cause)

Almost every page is composed of the same four building blocks:

| Shared block | Used on | Issue |
|---|---|---|
| `PageHero` (navy + image + eyebrow + H1) | 13 inner pages | Identical visual; pages blur together |
| `Section` (py + container) | everywhere | Neutral, fine — problem is the *content* inside |
| `CTASection` (navy + image + "Start your project" + 3 buttons) | **16 places** | The single biggest offender: same image, same buttons, same copy cadence on every page |
| "eyebrow + H2 + white card grid" | services, sectors, locations, insights, about, 3D studio | Same card recipe repeated with different words |

Because `CTASection` and the "card grid" recipe are copy-pasted, the site reads as one
template with swapped titles. The fix: give every page a **distinct closing CTA** and a
**distinct internal rhythm**, while keeping the locked tokens (navy `#0c1628`,
cream `#f4efe7`, wood `#b8956a`, Plus Jakarta Sans).

---

## 2. Page-by-page section audit

| Page | Sections today | Verdict |
|---|---|---|
| `/` Home | HeroSlides · SixServices · Marquee · Positioning · ServiceSelector · Entry points · 3D feature · Process · Proof (count-up) · Featured work · Render/reality · Sectors · FAQ · Insights · CTA | Strongest page. Only CTA is generic. |
| `/about` | Hero · Practice · Story · Values · **One process** · Workshop · **Studios** · Named work · CTA | "One process" 7-col strip is cramped; "Studios" cards are bare text. |
| `/services` | Hero · **Start here** · grouped cards · **Compare table** · FAQ · CTA | "Start here" is a bare link list; Compare table is a horizontal-scroll spreadsheet (bad on mobile). |
| `/services/[slug]` | Hero · definition · problems · deliverables · process · factors · FAQ · related · CTA | Solid. CTA generic. |
| `/3d-studio` | Hero · Positioning · **What we produce** · Sequence · Who for · Study · FAQ · CTA | "What we produce" is 6 bare label boxes. |
| `/projects` | Hero · Featured · **All work / filter** · Render/reality · CTA | Filter is two undifferentiated pill rows; no counts, no reset, weak results line. |
| `/projects/[slug]` | Header · gallery · story · result · related · CTA | Solid. CTA generic. |
| `/insights` | Hero · Featured · **Topics** · Latest · CTA | Topics are text-only pills (already have counts) — still the weakest block on the page. |
| `/insights/[slug]` | Header · takeaways · TOC · body · related · FAQ · articles · CTA | Good editorial page. CTA generic. |
| `/insights/category/[slug]` | Hero · articles · more topics · CTA | Fine. CTA generic. |
| `/sectors` + `/sectors/[slug]` | Hero · cards · CTA / hero · capability · services · projects · FAQ · CTA | Cards fine. CTA generic. |
| `/locations` + `/locations/[city]` | Hero · cards · CTA / hero · intro · areas · services · FAQ · CTA | Cards fine. CTA generic. |
| `/process` | Hero · Who for · Gates · FAQ · CTA | Good, distinct (numbered gates). CTA generic. |
| `/contact` | c3 hero · desk · form · map | Unique already (Linoxa contact-three replica). |
| `/consultation` | Hero · covers · scheduler · form | Unique. |

---

## 3. Redesign plan (unique per page, minimal, editorial)

### 3.1 CTA system — replace one block with three variants (`components/CTASection.tsx`)

- **`split`** (image-backed): two-column — left eyebrow/H2/subtitle/reassurance note;
  right a "next steps" card (01 Brief the space · 02 Approve the route · 03 Build it).
  Buttons beneath. Richer than today's single column.
- **`statement`** (typographic): no image, centered, giant ghost word behind the H2
  (Linoxa "Inspired spaces / Lasting design / Life enhanced" energy).
- **`compact`** (band): navy bar, wood hairline, left title + right button cluster.

Per-page assignment (each also gets unique copy + imagery):

| Page | Variant | Ghost / image |
|---|---|---|
| Home | split | `split-night.jpg` — "Tell us about your space." |
| About | compact | — "Talk to the team." |
| Process | statement | ghost **START** — "Discuss your project." |
| Services | split | `hero-2.jpg` — "Find the right service." |
| Service detail | compact | — "Discuss your {service} project." |
| 3D Studio | split | `studio-hero.jpg` — "Start a 3D brief." |
| Projects | statement | ghost **BUILD** — "Discuss a similar project." |
| Project detail | compact | — "Start a similar project." |
| Insights | compact | — "Ask Woodex." |
| Insight article | split | `project-minimal.jpg` — "Discuss your project." |
| Insight category | compact | — "Ask Woodex." |
| Sectors | split | `project-concrete.jpg` — "Select your sector." |
| Sector detail | compact | — "Discuss your {sector} space." |
| Locations | split | `project-facade.jpg` — "Find your studio." |
| Location detail | compact | — "Contact the {city} studio." |

### 3.2 `/services` — "Start here" + remove "Compare"

- **Start here / What do you need?** → numbered route cards (01–06) with arrow, not a
  bare link list.
- **Remove the "Compare" table.** Replace with a **Coverage** section: per-service rows
  where *included* capabilities render as solid navy pills and *available* as outline
  pills (excluded capabilities omitted). Legend explains the encoding. No horizontal
  scroll, no `—` clutter.

### 3.3 `/projects` — "All work / Filter by sector or status"

- Two labelled segmented controls: **Status** (All work / Named work / Studies) and
  **Sector** (All + each sector), each chip showing a count.
- Results header: "N projects · {sector}" with a **Reset** action when filtered.
- Empty state when a combination yields nothing.

### 3.4 `/insights` — "Topics / Browse by topic"

- Replace pills with **topic tiles**: name + article count + arrow, hover fills cream
  and shifts border to wood. Prepend an "All topics" tile with the total count.

### 3.5 `/3d-studio` — "What we produce / Stills, walkthroughs and 360°"

- Replace 6 bare label boxes with **numbered output cards** (01–06): title + one-line
  description of what each output is for.

### 3.6 `/about` — "One process" + "Where we are"

- **One process / Capabilities under one roof** → navy rail: intro sentence, then the
  7 steps in a responsive grid (2→4→7 cols) with wood numbering and hover border.
- **Where we are / Studios across Pakistan** → linkable studio cards (city + studio
  line + pin + "Visit studio →") driven by `lib/content/locations.ts`, linking to
  `/locations/[city]`.

---

## 4. Not changing (locked, verified)

Proof block (`500+ · ~20 · 10+ · ISO 9001`) · Wellstar-only naming · 3D Studio
exclusive line · contact facts · button system (white/blue/transparent, no cream
fills) · redirects · schema/sitemap/audit.

---

## 5. Go-live checklist

- [x] tsc + production build clean
- [x] routes 200 · audit 0 broken · redirects OK
- [x] commit + push `arena/01a080bf-woodex-26`
- [x] open PR → `main`
- [ ] post-merge: Vercel deploy, Search Console change-of-address, sitemap resubmit (outside sandbox)
