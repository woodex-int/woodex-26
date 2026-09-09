# WOODEX-WEB

**Woodex Interior — fullstack marketing + lead-generation website.**

A custom Next.js 15 (App Router) build: server-rendered content pages, two
conversion paths (WhatsApp + consultation), a lead-intake API, and a
structured content layer ready to move to a headless CMS.

---

## Master template

This repository is the **master template** for the Woodex web project. New
pages, sections and content types follow the same conventions, so the codebase
stays consistent as it grows.

### Guiding rules

1. **Server-first.** Everything is a Server Component unless it must be
   interactive — then it becomes a small `"use client"` island in
   `components/`.
2. **Content lives in `lib/content/*`**, typed in `lib/types.ts`. No copy is
   hardcoded inside a page component.
3. **One source of truth for brand facts** — `lib/site.ts` (proof line,
   contact, studios, nav). Never duplicate these strings.
4. **Locked tokens only.** navy `#0c1628` · cream `#f4efe7` · wood `#b8956a` ·
   Plus Jakarta Sans. No cream button fills, no forbidden copy (no
   "award-winning", no invented numbers/clients).
5. **Every page closes with a CTA variant** (`split` / `statement` / `compact`)
   and gets unique copy — no copy-paste blocks.

---

## Run

```bash
npm install
npm run dev        # http://localhost:3000 (dev)
npm run build      # production build (SSG + ISR)
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
node scripts/audit-links.mjs   # crawl sitemap + internal links, check redirects
```

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (tokens in `app/globals.css` → `@theme`) |
| Fonts | Plus Jakarta Sans (self-hosted, `@fontsource-variable`) |
| Motion | GSAP (route-scoped) + CSS + IntersectionObserver (`components/Reveal.tsx`) |
| Validation | Zod (`lib/lead.ts`) |
| Hosting | Vercel (serverless; see `.env.example`) |

## Structure

```text
app/
  page.tsx                     Home (hero slides, six services, proof count-up, …)
  about/ process/ contact/ consultation/ thank-you/ not-found/
  services/      + [slug]      service hub + 8 detail pages (SSG)
  projects/      + [slug]      portfolio hub + case studies (SSG)
  insights/      + [slug]      articles; + category/[slug]  (SSG)
  sectors/       + [slug]      sectors hub + 5 sector pages (SSG)
  locations/     + [city]      locations hub + 3 city pages (SSG)
  3d-studio/
  api/  brief · contact · consultation · health   (POST/GET)
  sitemap.ts · robots.ts · llms.txt (public/llms.txt)
components/
  ui:       CTA · Section · PageHero · Reveal · JsonLd · cards · Icons
  blocks:   SixServices · HeroSlides · ServiceSelector · ProjectFilters ·
            FAQAccordion · CTASection · Scheduler · CountUp · SiteHeader ·
            SiteFooter · FloatingWhatsApp · ContactForm · ProjectForm
lib/
  content/   services · projects · insights · sectors · locations · faqs
  site.ts    locked brand facts + nav
  seo.ts     metadata + JSON-LD helpers
  lead.ts    form validation + delivery (Resend / CRM)
  whatsapp.ts  wa.me link builder
public/images/   14 optimized JPEGs
scripts/audit-links.mjs
redirects.ts     66 legacy .html → new routes (308)
```

## Add a page (template recipe)

1. Create `app/<route>/page.tsx` (or `app/<route>/[slug]/page.tsx` for a
   collection) following an existing detail page.
2. Export `metadata` with title/description/canonical.
3. Add content to `lib/content/*.ts` and a type to `lib/types.ts`.
4. Use `<PageHero>`, `<Section>`, `<Reveal>`, `<CTASection variant="…">`.
5. Add the route to `app/sitemap.ts`.
6. `npm run typecheck && npm run build && node scripts/audit-links.mjs`.

## Environment (`.env.example`)

- `NEXT_PUBLIC_SITE_URL` · `NEXT_PUBLIC_WHATSAPP_NUMBER` · `NEXT_PUBLIC_CAL_LINK`
- `RESEND_API_KEY` · `RESEND_FROM` · `RESEND_TO` · `CRM_WEBHOOK_URL`
- `SANITY_PROJECT_ID` … `SANITY_REVALIDATE_SECRET`
- `NEXT_PUBLIC_GA4_ID` · `NEXT_PUBLIC_GTM_ID` · `NEXT_PUBLIC_CLARITY_ID`
- `UPSTASH_REDIS_REST_URL/TOKEN` · `SENTRY_DSN`

Without the delivery/analytics vars the app runs fully in "safe fallback"
mode: leads log to the server console, the scheduler shows a WhatsApp route,
and analytics silently no-op.

## Docs

- `docs/FULLSTACK_MASTER_PLAN.md` — architecture, data model, roadmap.
- `docs/MASTER_IMPROVEMENT_PLAN.md` — per-page/section audit + redesign plan.
- `docs/CONTENT_READY_PAGE_SPEC.md` — copy/content spec.
- `docs/PHASE_4_5_MIGRATION_SEO.md` — migration + technical SEO log.
