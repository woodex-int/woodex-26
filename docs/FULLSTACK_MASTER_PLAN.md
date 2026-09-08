# Woodex Interior — Master Fullstack Plan

**Version:** 1.0
**Status:** Draft for review — no code is built until this is signed off and Phase 0 decisions close
**Date:** 2026-09-08
**Companion docs:** `docs/CONTENT_READY_PAGE_SPEC.md` (copy/content) · `docs/CONTENT_BRAND.md` (voice + proof) · `docs/SEO_PLAN.md`
**Current state of repo:** 66-page static HTML (canonical front) + upload-ready WordPress kit (`WP-THEME/`). HTML stays live until **CUTOVER**.

---

## 1. Executive summary

Build **Woodex Interior** as a custom, content-driven marketing + lead-generation site with a **fullstack JavaScript architecture**: Next.js (App Router) front-end, Sanity headless CMS, serverless API routes for forms/booking/revalidation, and Vercel for hosting. The site is **server-rendered/static by default**, with client-side interactivity limited to isolated, well-audited islands (motion, filters, scheduler, sliders).

The goal is a site that:

1. Ranks — fully server-rendered content, schema, sitemaps, fast CWV.
2. Converts — WhatsApp + consultation as the two primary conversion paths, with a measurable funnel.
3. Is editable — non-technical staff edit services, projects, articles, FAQs and testimonials in Sanity without a deploy.
4. Proves — case studies and render-to-reality evidence, built from verified facts only.

**Primary conversion goals:** (1) Start a WhatsApp conversation, (2) Book a consultation.

---

## 2. Guiding principles & hard constraints

### 2.1 Principles

- **Server-first.** Server Components by default; `"use client"` only where interactivity demands it.
- **Content over code.** Every page is driven by structured Sanity content, never hardcoded copy.
- **Restrained motion.** Architectural, precise; motion supports hierarchy, never delays access.
- **Verified facts only.** No invented numbers, awards, or clients (see §2.2).
- **One codebase, one deploy.** Embedded Sanity Studio keeps infra minimal.

### 2.2 Hard constraints (inherited from brand lock — do not break)

| Constraint | Rule |
|---|---|
| Proof block | `500+ projects · founder ~20 years · execution 10+ years · ISO 9001` — nothing else numeric |
| Named client | **Wellstar only** (Pharmacy → Cosmetics → Mini Hospital, DHA Lahore). All else = "study" |
| Brand lines | DRAWN. THEN BUILT. · DESIGN IS NOT DECORATION… · WE TURN IDEAS INTO SPACES · SEE IT. UNDERSTAND IT. BUILD IT. |
| Process | Discover → Design → Visualize → Plan (budget + BOQ) → Build → Install → Deliver |
| Tokens | Plus Jakarta Sans · navy `#0c1628` · cream `#f4efe7` · wood `#b8956a` (accent line only) |
| 3D line | *"You are not approving a plan. You are approving a room."* — `/3d-studio/` only |
| Contact | WhatsApp `+92 322 4000768` · Call `+92 336 2259477` · `studio@woodex.interior` · LG 90 Link Road, Model Town, Lahore |
| Home hero | 3-slide composition preserved (or per final approved redesign) |

### 2.3 Domain decision (open — blocks metadata/schema/canonical)

`mavric.pk` vs Woodex-branded domain vs parent/division structure. **Working canonical:** `https://woodex.interior`. Until resolved, all canonicals/OG/redirects are emitted behind a single `NEXT_PUBLIC_SITE_URL` variable.

---

## 3. Architecture overview

```text
                          ┌─────────────────────────────────────────────┐
                          │                 Vercel (Edge + Functions)    │
                          │                                             │
   Browser ─────────────► │  Next.js 15 App Router (React 19 + TS)      │
                          │   ├─ Server Components (SSG / ISR / SSR)    │
                          │   ├─ Client islands (GSAP, filters, forms)  │
                          │   ├─ Route Handlers (API)                   │
                          │   └─ /studio (embedded Sanity Studio)       │
                          └───────┬─────────────────┬───────────────┬───┘
                                  │                 │               │
                    ┌─────────────▼──┐   ┌──────────▼───────┐   ┌───▼───────────┐
                    │  Sanity CMS    │   │  Sanity image CDN │   │  Mux (video)  │
                    │  (content)     │   │  + webhook→reval  │   │  (optional)   │
                    └─────────────┬──┘   └──────────────────┘   └───────────────┘
                                  │
       ┌──────────────┬───────────┼──────────────┬─────────────┐
   ┌───▼────┐   ┌─────▼────┐  ┌────▼─────┐  ┌────▼────┐  ┌─────▼──────┐
   │ Resend │   │ Cal.com  │  │  CRM     │  │ Upstash │  │ GA4 + GTM  │
   │ email  │   │ booking  │  │ HubSpot/ │  │ rate-limit│ │ + Clarity  │
   └────────┘   └──────────┘  │ Zoho     │  └─────────┘  └────────────┘
                              └──────────┘
```

**Key properties**

- **SSG/ISR for all content pages** (services, projects, articles, legal, utility) — built at deploy, revalidated on Sanity webhook.
- **Static shells + client scheduling** for `/consultation/` (Cal.com embed) and `/contact/` (form posts to a Route Handler).
- **Single region primary** (Vercel); assets served from Sanity CDN; no custom server.
- **No database of our own** — content lives in Sanity; leads flow to email + CRM, never stored in the app.

---

## 4. Technology stack

| Layer | Choice | Rationale | Alternatives (if required) |
|---|---|---|---|
| Framework | **Next.js 15 (App Router)** | SSR/SSG/ISR, RSC, streaming, image/font pipelines | Astro (lighter, less dynamic) |
| Language | **TypeScript** (strict) | Schema-first safety between CMS and UI | — |
| CMS | **Sanity v3** (embedded Studio) | Relational content, GROQ, live preview, image transforms, structured content | Storyblok, Payload |
| Styling | **Tailwind CSS v4** | Matches existing `tailwind.config.js` tokens; utility-driven design system | CSS Modules |
| Motion | **GSAP + ScrollTrigger** (loaded per-route) | Specified by master plan; native CSS transitions for micro-interactions | Motion (Framer) |
| Hosting | **Vercel** | First-class Next.js, ISR, Edge, previews | Netlify |
| Forms | **Next.js Route Handlers → Resend + CRM webhook** | Server-side validation, no client secrets | Server Actions |
| Booking | **Cal.com embed** (open source) | Self-hostable, PK-friendly; Calendly as drop-in | Calendly, custom form |
| CRM | **HubSpot** (abstraction layer) | Most common fit; swappable via lead-service interface | Zoho, Pipedrive, existing CRM |
| Email | **Resend** (transactional) | Simple, reliable; Postmark as equivalent | Postmark |
| Media | **Sanity image pipeline** (AVIF/WebP) | One pipeline, on-the-fly transforms, accurate dimensions | Cloudinary |
| Video | **Mux** (only if heavy video) | Streaming; otherwise self-hosted MP4 via Sanity | Sanity file asset |
| Analytics | **GA4 + GTM + Microsoft Clarity + Search Console** | Specified by master plan | Plausible (privacy) |
| Rate limiting | **Upstash Ratelimit + Redis** | Edge-compatible | In-memory fallback (single region) |
| Error tracking | **Sentry** | Specified by master plan | — |
| E2E/a11y | **Playwright + axe-core + Lighthouse CI** | — | Cypress |
| Consent | **Cookie consent (Cookiebot/Osano)** — only if ads/analytics rules require | Conditional | — |

---

## 5. Repository & project structure

Monorepo-friendly single app (works with `npm create next-app` layout), plus `studio/` embedded.

```text
woodex-26/                      # repo root (new app lives in apps/web)
├── apps/
│   └── web/                    # Next.js application
│       ├── app/
│       │   ├── (marketing)/    # public site route group
│       │   │   ├── page.tsx                    # Homepage
│       │   │   ├── about/page.tsx
│       │   │   ├── process/page.tsx
│       │   │   ├── services/
│       │   │   │   ├── page.tsx                # Services hub
│       │   │   │   └── [slug]/page.tsx         # Service detail (SSG)
│       │   │   ├── 3d-studio/page.tsx
│       │   │   ├── projects/
│       │   │   │   ├── page.tsx                # Projects hub
│       │   │   │   └── [slug]/page.tsx         # Case study (SSG)
│       │   │   ├── sectors/
│       │   │   │   ├── page.tsx                # P1
│       │   │   │   └── [slug]/page.tsx         # P1
│       │   │   ├── insights/
│       │   │   │   ├── page.tsx                # Insights hub
│       │   │   │   ├── [slug]/page.tsx         # Article (SSG)
│       │   │   │   └── category/[slug]/page.tsx # P1
│       │   │   ├── locations/
│       │   │   │   ├── page.tsx                # P1 (only if genuine)
│       │   │   │   └── [city]/page.tsx         # P1 (verified only)
│       │   │   ├── consultation/page.tsx
│       │   │   ├── contact/page.tsx
│       │   │   ├── thank-you/page.tsx
│       │   │   ├── privacy-policy/page.tsx
│       │   │   ├── terms/page.tsx
│       │   │   └── cookie-policy/page.tsx
│       │   ├── search/page.tsx    # P2, client-side, noindex
│       │   ├── studio/[[...index]]/page.tsx   # Embedded Sanity Studio
│       │   ├── api/
│       │   │   ├── brief/route.ts             # POST form
│       │   │   ├── consultation/route.ts      # POST booking intent
│       │   │   ├── revalidate/route.ts        # Sanity webhook (secret)
│       │   │   └── health/route.ts
│       │   ├── sitemap.ts · robots.ts · llms.txt · manifest.ts · opengraph-image.tsx
│       │   ├── layout.tsx · not-found.tsx · error.tsx · global-error.tsx
│       │   └── globals.css
│       ├── components/           # design-system + feature components
│       ├── lib/                  # sanity client, groq, lead service, analytics
│       ├── studio/               # Sanity schema definitions
│       ├── styles/               # tokens
│       └── tests/
├── packages/                     # (optional) shared types
├── tooling/                      # eslint, tsconfig, prettier
└── docs/                         # this plan + content spec + brand facts
```

**Component conventions**

- `components/` split by layer: `ui/` (Button, Section, Container, Eyebrow, FAQAccordion), `blocks/` (Hero, ServiceSelector, EntrySelector, CaseGrid, RenderRealitySlider, ProcessTimeline, MegaMenu, Footer, FloatingWhatsApp), `page/` (one composed page per template).
- Server components fetch via `lib/sanity`; client islands receive **serialized props only** (no direct Sanity access on the client).

---

## 6. Data model — Sanity schemas

Each schema maps 1:1 to the master plan §14 CMS collections. Relationships use Sanity references for cross-linking (the internal-linking system in the content spec).

| Schema | Type | Notes |
|---|---|---|
| `globalSettings` | singleton | brand, contact, WhatsApp, socials, GA4/GTM/Clarity IDs, org schema, footer, CTAs |
| `navigation` | singleton | header links, mega-menu groups, featured case study |
| `page` | document | flexible landing pages (homepage, about, process, contact, legal) via Portable Text + block picker |
| `service` | document | the 7 standard services + 3D Studio |
| `project` | document | case studies (MVS → premium fields) |
| `sector` | document | P1 |
| `insight` | document | articles |
| `team` | document | leadership (P1) |
| `location` | document | verified cities only |
| `faq` | document | reusable, referenced by service/sector/page |
| `testimonial` | document | approved quotes only |
| `redirect` | document | migration redirect map (or lives in code — see §16) |
| `media.tag` | schema | taxonomy for images/video |

### 6.1 `service` fields

`name · slug · shortDescription · definition (AEO intro) · heroMedia · audience[] · problemsSolved[] · deliverables[] · inclusions[] · exclusions[] · processStages[{title, inputs, outputs, approvalGate}] · costFactors[] · timelineFactors[] · faqs[] (ref) · relatedServices[] (ref) · relatedProjects[] (ref) · relatedInsights[] (ref) · ctaLabel · whatsappMessageTemplate · seo{title, description, ogImage, canonical, noindex} · schemaOverrides`

### 6.2 `project` fields

`name · slug · client{name, publishable} · sector (ref) · location · completionDate · status · area · timeline · budgetTier (optional) · services[] (ref) · heroMedia · summary · brief · challenge · constraints[] · designResponse · visualization · documentationBOQ · execution · joinery · results · metrics[] · testimonial (ref) · beforeImages[] · renderImages[] · completedImages[] · gallery[] · video · teamCredits[] · relatedProjects[] · relatedInsights[] · featured · seo{…}`

### 6.3 `insight` fields

`title · slug · excerpt · coverImage · author (ref team) · reviewer (ref team) · category · tags[] · body (Portable Text) · keyTakeaways[] · toc (auto) · faqs[] (ref) · sources[] · relatedServices[] · relatedProjects[] · relatedInsights[] · publishedAt · updatedAt · seo{…}`

### 6.4 `globalSettings` (the single source of truth)

`brandName · logo{light, dark} · contact{whatsapp, phone, email, addresses[]} · socialProfiles[] · primaryCTAs · footer · officeLocations[] · analytics{ga4Id, gtmId, clarityId} · organizationSchema · defaultSeo · legalPages[]`

**GROQ patterns**

- Service detail: `*[_type == "service" && slug.current == $slug][0]{..., faqs[]->, relatedServices[]->{name, slug}, relatedProjects[]->{name, slug, heroMedia}}`
- Revalidation tags: `service`, `project`, `insight`, `global` (Sanity webhook → `revalidateTag`).

---

## 7. Route map (pages → components → rendering → schema → CTA)

| Route | Template | Rendering | Data | Schema | Primary CTA | Phase |
|---|---|---|---|---|---|---|
| `/` | Homepage | SSG + ISR (revalidate 300s) | page + services + projects | Organization + WebSite | Book a consultation | P0 |
| `/about/` | About | SSG | page | AboutPage + Organization | Talk to the team | P0 |
| `/process/` | Process | SSG | page | — | Discuss your project | P0 |
| `/services/` | Services hub | SSG | service[] | CollectionPage + ItemList | Find the right service | P0 |
| `/services/[slug]/` | Service detail | SSG (7) | service | Service + BreadcrumbList | per-service | P0 |
| `/3d-studio/` | 3D Studio | SSG | page/service | Service + VideoObject/ImageObject | Start a 3D brief | P0 |
| `/projects/` | Projects hub | SSG + ISR | project[] | CollectionPage + ItemList | Discuss your project | P0 |
| `/projects/[slug]/` | Case study | SSG (8–12) | project | Article/CreativeWork + ImageObject | Start a similar project | P0 |
| `/sectors/` | Sectors hub | SSG | sector[] | CollectionPage | Select your sector | P1 |
| `/sectors/[slug]/` | Sector detail | SSG | sector | — | Discuss your space | P1 |
| `/insights/` | Insights hub | SSG + ISR | insight[] | Blog + CollectionPage | Read/subscribe | P0 |
| `/insights/[slug]/` | Article | SSG | insight | Article/BlogPosting + Person | Ask Woodex | P0 |
| `/insights/category/[slug]/` | Category | SSG (optional) | insight[] | — | — | P1 |
| `/locations/` | Locations hub | SSG | location[] | — | — | P1 |
| `/locations/[city]/` | Location | SSG (verified only) | location | LocalBusiness subtype | Contact the studio | P1 |
| `/consultation/` | Consultation | SSG shell + client scheduler | page | — | Confirm booking | P0 |
| `/contact/` | Contact | SSG shell + client form | page | ContactPage | WhatsApp / contact | P0 |
| `/thank-you/` | Confirmation | SSG | page | — | View projects | P0 |
| `/privacy-policy/` `/terms/` `/cookie-policy/` | Legal | SSG | page | — | — | P0 |
| `/search/` | Search | client-side, `noindex` | JSON index | — | — | P2 |
| `/studio/` | Sanity Studio | client (editor only) | — | — | — | P0 |
| `/404/` `/500/` | Utility | SSG | — | — | Return to projects | P0 |
| `/sitemap.xml` `/robots.txt` `/llms.txt` | Generated | build-time | — | — | — | P0 |

**Dynamic route details**

- `generateStaticParams` for `service`, `project`, `insight`, `sector`, `location` slugs.
- `dynamicParams: false` for P0 collections so unknown slugs 404 (prevents thin indexable URLs).

---

## 8. Rendering, caching & revalidation

- **Publish-time SSG.** All content pages are pre-rendered at build.
- **ISR + on-demand revalidation.** `revalidateTag("service")` etc. triggered by the Sanity webhook (`POST /api/revalidate`, secret-authenticated). Default `revalidate = 300` as a safety net.
- **Draft Mode.** Next.js Draft Mode + Sanity live preview for editors (`/api/draft`, `POST /api/disable-draft`).
- **Cache policy.** HTML: `s-maxage=1, stale-while-revalidate` (Vercel defaults); images immutable via Sanity CDN; fonts self-hosted.
- **Filters must not create indexable URLs.** `/projects/?sector=x` is client-side state (or `noindex` + canonical to `/projects/`) — never SSG'd parameter combinations (master plan §6.8).

---

## 9. API routes & server functions

| Route | Method | Purpose | Auth / protection |
|---|---|---|---|
| `/api/brief` | POST | Project brief form | honeypot + Upstash rate limit + server validation + file restrictions |
| `/api/consultation` | POST | Booking intent (fallback to Cal.com) | same as above |
| `/api/revalidate` | POST | Sanity webhook → `revalidateTag` | shared secret header |
| `/api/disable-draft` | GET/POST | Exit Draft Mode | signed cookie |
| `/api/health` | GET | Uptime check | public |

**`/api/brief` behavior**

1. Honeypot field `company` (hidden) — if filled, return 200 and drop silently.
2. Rate limit (per IP + per fingerprint) via Upstash.
3. Zod validation of the master-plan form fields (name, phone/WhatsApp, email, city, project type, service, stage, area, budget band, start period, message).
4. File upload: max size + MIME allowlist (PDF/images); store to Sanity asset (never to the function FS).
5. Persist lead → **lead service** (interface): email via Resend + CRM webhook (HubSpot/Zoho) + optional WhatsApp notification to the studio.
6. Return JSON; front-end shows the thank-you state and offers WhatsApp fallback.
7. Log `project_form_submit` to analytics (server-side, via Measurement Protocol if GTM not client-available).

---

## 10. Integrations

| Integration | Where | Notes |
|---|---|---|
| WhatsApp click-to-chat | global (`lib/wa.ts`) | `https://wa.me/923224000768?text=<encoded template>`; template auto-populates service/city/area |
| Cal.com embed | `/consultation/` | track `consultation_start` → `consultation_booked` |
| CRM (HubSpot/Zoho/Pipedrive) | lead service | swappable; webhook + list membership |
| Resend/Postmark | lead service | transactional + studio notification |
| GA4 + GTM | `layout.tsx` (GTM script) | event layer in §13 |
| Microsoft Clarity | `layout.tsx` | heatmaps/session replay |
| Sentry | instrumentation | server + edge errors, releases |
| Sanity image pipeline | all media | AVIF/WebP, `width/height`, lazy below fold |
| Mux (optional) | 3D Studio video | only if large video assets |
| Consent manager | conditional | only if ads/analytics rules require |

---

## 11. Design system

### 11.1 Tokens (locked)

```text
font-family: Plus Jakarta Sans (next/font, subset latin, swap)
navy:      #0c1628   (page background / header solid)
cream:     #f4efe7   (in-section: cards, split panels, form fills)
wood:      #b8956a   (accent line only — never a page fill)
ink:       #0c1628   (text on light)
paper:     #ffffff   (page background)
```

- Page/section backgrounds: **white + navy only**. Cream only inside sections.
- Spacing/grid: 8px base, 12-col grid, max content width ~1280px.

### 11.2 Component states

- Buttons: min 44px touch target, visible focus ring, arrow nudge 4–6px on hover, contrast reversal fill.
- Links: underline grows from left; WCAG AA contrast.
- Forms: progressive disclosure, preserve data on error, response-time expectation, WhatsApp fallback.

---

## 12. Motion system

- **GSAP + ScrollTrigger**, loaded only on routes that need it (dynamic import). Native CSS transitions for micro-interactions.
- Page load reveal ≤ 900ms; page transitions 350–550ms; scroll reveals 16–32px / 450–700ms / stagger 50–90ms; images scale 1 → 1.03.
- Homepage: split-line H1, slow hero scale, service-list media swap, entry-selector routing, process highlight-on-scroll, count-up metrics (once), render-to-reality slider, FAQ accordion, slow marquee.
- **Reduced motion:** `prefers-reduced-motion` disables all pinning/carousel autoplay/count-up; carousels always have manual controls.
- **No scroll-jacking, no sound-autoplay videos.**

---

## 13. SEO / AEO / GEO implementation

- **SSR/SSG** for all indexable content (master plan §8.4).
- `sitemap.ts` → sitemap index: `sitemap-pages.xml`, `sitemap-projects.xml`, `sitemap-insights.xml`.
- `robots.ts` + `llms.txt` (experimental discovery aid — crawlable text only, no hidden content in canvas).
- Canonicals: self-referencing; single trailing-slash policy; `www` → apex redirect; HTTP→HTTPS at edge.
- `noindex` on: search results, filter parameter combinations, thin taxonomy.
- Structured data per `docs/CONTENT_READY_PAGE_SPEC.md` §1.6 (Organization, Service, Article/CreativeWork, FAQPage only where visible, VideoObject with duration/uploadDate/transcript).
- AEO: answer-first intros, question-based H2/H3, numbered processes, comparison tables, visible FAQs (already specified in the content spec).
- OG: per-page `opengraph-image` (next/og) with Sanity OG image override.
- Image SEO: AVIF/WebP, explicit width/height, meaningful alt ("render of DHA Lahore pharmacy reception, oak counter…"), lazy below fold, preload LCP only.

---

## 14. Analytics & measurement

GTM loads GA4 + Clarity. Event layer (master plan §16) implemented in a typed `lib/analytics.ts`:

- **Conversions:** `whatsapp_click · consultation_start · consultation_booked · project_form_start · project_form_submit · phone_click · email_click · file_upload · directions_click`
- **Engagement:** `service_view · service_selector_use · project_view · project_filter_use · case_study_50_percent · case_study_complete · video_start · video_complete · before_after_use · faq_open · article_75_percent · cta_click · outbound_click`
- **Parameters:** page type, page title, service, sector, project, city, CTA position/label, device, source, campaign, form type.
- **Dashboard (monthly):** organic landing pages, leads by page/service, WhatsApp vs consultation, case-study-assisted conversions, form abandonment, mobile/desktop CVR, CWV, branded vs non-branded, city-level demand.

---

## 15. Security

- `next.config` headers: CSP (strict, with Sanity/Cal.com/GTM/Clarity allowlisted), X-Frame-Options, nosniff, Referrer-Policy (carry over from current `vercel.json`).
- Forms: honeypot + rate limit + Zod validation + file MIME/size allowlist; **no secret keys on the client**; no hardcoded secrets (revalidation secret via env).
- Secrets in Vercel env only; `.env*` gitignored (already in repo `.gitignore`).
- Staging `noindex` + basic auth; prevent staging from indexing.
- Dependency audit (Dependabot), Sentry release tracking.

---

## 16. Performance budget

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 200ms |
| CLS | < 0.1 |
| Mobile Lighthouse | 85+ (realistic conditions) |
| Home JS (motion bundle) | gzip < 60KB, GSAP route-scoped |
| Fonts | self-hosted, subset, `swap` |

---

## 17. Accessibility

- Semantic HTML, one H1, logical heading order, skip link.
- Keyboard: full nav/mega-menu/filter/accordion/slider operation; visible focus states.
- `aria-expanded` on accordions/menu; `aria-live` for filter result counts; screen-reader labels on icon-only controls.
- `prefers-reduced-motion` honored globally; no text-only-in-images; captions on video.
- axe-core in CI + manual SR pass in QA.

---

## 18. Testing

| Layer | Tool | Scope |
|---|---|---|
| Unit | Vitest | lib/analytics, lib/wa, validation schemas, slug utils |
| Component | Testing Library | Button, FAQAccordion, MegaMenu, ServiceSelector |
| E2E | Playwright | conversion journeys (Home→Service→WhatsApp/Consultation), forms, booking |
| A11y | axe-core + Lighthouse CI | CI gate on PRs |
| Visual | Playwright screenshots | breakpoints 375 / 768 / 1024 / 1440 |

---

## 19. CI/CD & deployment

- **GitHub Actions:** lint + typecheck + unit tests + build → Vercel preview deploy (per PR) → Lighthouse CI + axe gate → production deploy on `main`.
- **Branch model:** `main` (production) + short-lived feature branches + `arena/*` session branches.
- **Sanity:** Studio deployed as part of the app (`/studio`); content migrations via `sanity migration` CLI.
- **Previews:** PR previews for both app and content (Draft Mode).
- **Monitoring:** Vercel analytics + Sentry + uptime ping on `/api/health`.

---

## 20. Environment variables

```text
# App
NEXT_PUBLIC_SITE_URL          # https://woodex.interior (working)
NEXT_PUBLIC_WHATSAPP_NUMBER   # 923224000768
NEXT_PUBLIC_CAL_LINK          # Cal.com/Calendly link

# Sanity
SANITY_PROJECT_ID
SANITY_DATASET                # production
SANITY_API_TOKEN              # read (server)
SANITY_API_WRITE_TOKEN        # studio/webhook
SANITY_REVALIDATE_SECRET      # webhook auth

# Email / CRM
RESEND_API_KEY
CRM_WEBHOOK_URL               # HubSpot/Zoho/Pipedrive
CRM_API_KEY

# Analytics
NEXT_PUBLIC_GA4_ID
NEXT_PUBLIC_GTM_ID
NEXT_PUBLIC_CLARITY_ID

# Infra
UPSTASH_REDIS_REST_URL / TOKEN
SENTRY_DSN
```

---

## 21. Migration & redirect plan (66 HTML pages → new routes)

The redesign consolidates the current **16 services** into the **8 confirmed lines**. Redirects are 301 and preserve the strongest existing URLs (master plan §8.4 "preserve valuable existing URLs").

### 21.1 Top-level pages

| Old | New |
|---|---|
| `/index.html` → `/` | `/` |
| `/services.html` | `/services/` |
| `/projects.html` | `/projects/` |
| `/insights.html` | `/insights/` |
| `/about.html` | `/about/` |
| `/process.html` | `/process/` |
| `/3d-studio.html` | `/3d-studio/` |
| `/locations.html` | `/locations/` (P1) or retire |
| `/contact.html` | `/contact/` |
| `/start-your-project.html` | `/consultation/` |
| `/client-stories.html` | `/projects/` (Wellstar becomes a case study) |
| `/woodex-craft.html` | `/services/custom-furniture-joinery/` |
| `/careers.html` | `/about/` (or keep `/careers/`) |
| `/faq.html` | `/process/#faq` or `/contact/` |
| `/404.html` | `/404/` |

### 21.2 Services (16 → 8)

| Old (`/services/*.html`) | New |
|---|---|
| `fit-out` | `/services/fit-out/` |
| `turnkey` | `/services/turnkey-execution/` |
| `architecture` | `/services/architecture/` |
| `renovation` | `/services/renovation/` |
| `drawings` | `/services/drawings-boq/` |
| `joinery` | `/services/custom-furniture-joinery/` |
| `visualization` | `/3d-studio/` |
| `residential` | `/services/interior-design/` |
| `office` · `software-house` · `office-fit-out` · `commercial-fit-out` | `/services/fit-out/` (or `/sectors/offices/` P1) |
| `residential-fit-out` | `/services/fit-out/` |
| `retail` · `shops` | `/sectors/retail/` (P1) |
| `restaurant` · `cafe` | `/sectors/restaurants-cafes/` (P1) |
| `pharmacy` | `/projects/wellstar-pharmacy/` (named case study) |
| `lighting` | `/services/interior-design/` (sub-discipline) |
| `space-planning` | `/services/interior-design/` |

### 21.3 Projects / insights / locations

- `/projects/*.html` (6 studies) → `/projects/[slug]/` (slugs preserved where sensible; relabel as studies).
- `/insights/*.html` (7 articles) → `/insights/[slug]/`.
- `/locations/*.html` (12 cities) → only **verified** cities keep `/locations/[city]/` (Lahore, Karachi, Islamabad). Nationwide cities consolidate to `/locations/` (P1), or retire with 301 to `/contact/` if no genuine local content exists (avoid doorway pages — master plan §6.16).

### 21.4 Redirect mechanics

- Serve 301s at the edge (Vercel `redirects`/`next.config`) from a generated `redirects.ts` table (sourced from the `redirect` Sanity document or a code map).
- Preserve trailing-slash consistency; force lowercase; `www` → apex; HTTP → HTTPS.
- Post-launch: Search Console change-of-address + sitemap resubmission + crawl of old URLs to verify 301s.

---

## 22. Phased roadmap

| Phase | Scope | Exit criteria |
|---|---|---|
| **0 — Discovery** (1–2 wks) | Domain/brand decision, crawl inventory, Search Console/GA access, verify locations/stats/clients, asset audit, confirm CRM + booking | audit + redirect inventory + approved sitemap + keyword map |
| **1 — Strategy/UX** (2–3 wks) | journeys, nav/mega, wireframes, conversion arch, CMS model, SEO/AEO/GEO spec, analytics plan | approved wireframes + URL map + schema + page briefs |
| **2 — Design system** (2–3 wks) | tokens, type, grid, buttons/forms, cards, mobile, motion prototypes, a11y states | Figma system + hi-fi templates + motion prototype |
| **3 — Core build** (4–6 wks) | global shell, homepage, about, process, services hub + template, 3D Studio, projects + case template, insights + article, contact, consultation, legal/utility, Studio + preview | all P0 routes build + pass CI |
| **4 — Content & migration** (3–6 wks) | core pages, 7 service pages, 8–12 case studies, launch articles, media, metadata, internal links, schema, redirects | content QA per `CONTENT_READY_PAGE_SPEC.md` |
| **5 — QA/SEO/perf** (1–2 wks) | responsive, browsers, forms, booking, WhatsApp, CMS workflow, a11y, CWV, metadata, schema, sitemap, redirects, analytics events | QA sign-off |
| **6 — Launch** | content freeze, DNS, redirect activation, Search Console verify, sitemap submit, analytics + CRM validation, monitoring | production live |
| **7 — Growth** (90 days) | indexing/redirect monitoring, CWV review, CTA testing, 2 articles/mo, 1 case/mo, sector/location expansion | improvement loop live |

**P0 / P1 / P2 feature split:** carried from master plan §19; P0 = launch-critical (home, about, process, services + 7 details, 3D Studio, projects + 8 cases, insights + 6 articles, contact, consultation, WhatsApp, legal, CMS, analytics, SEO, redirects, a11y/reduced-motion).

---

## 23. Open decisions & risks (close in Phase 0)

1. **Domain** — `mavric.pk` vs Woodex domain; blocks canonicals/schema/redirects.
2. **Verified locations** — beyond the 3 studios.
3. **Verified stats** — square footage, per-service counts, timelines (none publishable until supplied).
4. **Testimonials** — which quotes are approved.
5. **Booking tool** — Cal.com vs Calendly.
6. **CRM** — which system the leads land in.
7. **Video assets** — whether Mux is warranted or MP4 via Sanity suffices.
8. **Search** — needed at all (P2), or drop.
9. **Consent manager** — whether ads/analytics rules require it.

---

## 24. Definition of done

- Every P0 route: server-rendered, one H1, self-canonical, schema, OG, breadcrumbs, internal links.
- Both conversion paths (WhatsApp + consultation) functional end-to-end with event tracking.
- All copy matches `docs/CONTENT_READY_PAGE_SPEC.md`; all facts match the verified list; no invented numbers.
- CWV within budget (§16); Lighthouse 85+ mobile.
- Full redirect map live; no 404s from the old 66-page site.
- CMS allows editing every visible string without a deploy.

---

## Appendix — Reference

- **Content/copy:** `docs/CONTENT_READY_PAGE_SPEC.md` (homepage, service, 3D Studio, case study templates + FAQ + CTA + internal links).
- **Voice & proof:** `docs/CONTENT_BRAND.md`, `content/site.json`.
- **SEO rules:** `docs/SEO_PLAN.md`.
- **Current page inventory:** `docs/PAGE_MAP.md`.
