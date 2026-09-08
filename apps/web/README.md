# Woodex Interior — Web (Next.js)

The custom Next.js build for Woodex Interior. Phase 3 scaffold of
`docs/FULLSTACK_MASTER_PLAN.md` — content is authored in `lib/content/*` now and is
structured to move to Sanity in Phase 4.

## Run

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build (SSG/ISR)
npm run start     # serve the production build
npm run typecheck
```

## Stack

- **Next.js 15 (App Router)** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** design tokens (`app/globals.css` → `@theme`)
- **Plus Jakarta Sans** self-hosted via `@fontsource-variable/plus-jakarta-sans`
  (Google Fonts is blocked in this environment; Fontsource is served from npm)
- No GSAP yet — motion is CSS + `IntersectionObserver` (`components/Reveal.tsx`),
  keeping the JS budget under ~120 kB. GSAP is a Phase 3 follow-up per the plan.

## Structure

```
app/                 routes (SSG + one API route)
  (…)
  services/[slug]    service detail template (7 services)
  projects/[slug]    case study template (6 studies + Wellstar)
  insights/[slug]    article template (7 articles)
  api/brief          lead form endpoint (validated; CRM/email pending env vars)
components/          design system + interactive islands
lib/content/         content source of truth (swap for Sanity in Phase 4)
lib/site.ts          locked brand facts (proof line, contact, studios)
public/images/       project/hero imagery
```

## Notes

- Canonicals/metadata point at `https://woodex.interior` (working domain) via
  `lib/site.ts` — final domain decision is a Phase 0 item.
- Form leads are validated server-side but email/CRM delivery (`/api/brief`) is a
  stub until Resend/CRM env vars are set.
- The consultation scheduler (Cal.com/Calendly) is a placeholder until the Phase 0
  tool is confirmed.
