# WOODEX-WEB-V1 · BUILD CHECKLIST — PER PHASE

**Version:** V1.0 · September 9, 2026  
**Definition of Done** — a phase ships only when every row is green.  
Use this as the CI gate or manual checklist.

---

## PHASE 0 — DATA LOCK
| # | Gate | ✅ |
|---|---|---|
| 0.1 | `docs/DATA-LOCK.md` signed by marke | |
| 0.2 | All `[CONFIRM]` rows resolved or placeholder confirmed | |
| 0.3 | Canonical NAP copied to `app/Config/NAP.php` | |
| 0.4 | Domain decision locked (woodex.com.pk vs woodex.interior) | |
| 0.5 | Meta Business verification started (if WhatsApp automation chosen) | |

---

## PHASE 1 — LARAVEL + FILAMENT SKELETON
| # | Gate | ✅ |
|---|---|---|
| 1.1 | `composer create-project laravel/laravel` (PHP 8.2+) boots | |
| 1.2 | `filament/filament` v3 installed, `/admin` reachable | |
| 1.3 | Super-admin user created | |
| 1.4 | Hostinger-compatible config: database session, no exotic drivers | |
| 1.5 | `.env` template + `.env.example` committed | |
| 1.6 | `php artisan serve` local → works | |
| 1.7 | Git repo initialized + README.md with clone→run steps | |
| 1.8 | `composer.json` and `package.json` locked versions | |

---

## PHASE 2 — DATA MODEL + ADMIN CRUD
| # | Gate | ✅ |
|---|---|---|
| 2.1 | Migrations for Lead, Project, Service, Sector, Insight, Location, Faq, Message | |
| 2.2 | Seeders import WOODEX-WEB `lib/content/*.ts` + this doc content | |
| 2.3 | Filament resources for each model (non-technical user edits) | |
| 2.4 | Lead pipeline status column visible in Filament list | |
| 2.5 | Image upload works (gallery) | |
| 2.6 | Search/filter by service/city/status works | |
| 2.7 | Dashboard landing = lead queue | |
| 2.8 | Backup scheduled (Hostinger cron) | |

---

## PHASE 3 — REST API v1
| # | Gate | ✅ |
|---|---|---|
| 3.1 | All GET endpoints return 200 + JSON | |
| 3.2 | `POST /api/v1/leads` accepts brief/contact/consultation | |
| 3.3 | Honeypot blocks bots (returns 200 when company filled) | |
| 3.4 | `throttle:6,1` enforced (429 after 6 requests/min) | |
| 3.5 | Validation returns 422 with `{ errors }` | |
| 3.6 | Email delivery via Resend on new lead | |
| 3.7 | CRM webhook fires on new lead | |
| 3.8 | Health endpoint returns `{ ok: true }` | |
| 3.9 | OpenAPI docs generated | |
| 3.10 | CORS configured (same-origin; no cross-domain leakage) | |

---

## PHASE 4 — FRONTEND (STATIC) BUILD
| # | Gate | ✅ |
|---|---|---|
| 4.1 | All 20+ pages render from static HTML | |
| 4.2 | Design tokens match DESIGN.md (navy #0c1628, cream #f4efe7, wood #b8956a, Plus Jakarta Sans) | |
| 4.3 | Voice gate passes (Section 5.4 of MASTER.md — no banned phrases) | |
| 4.4 | Every page ends with unique CTA variant | |
| 4.5 | Forms call `POST /api/v1/leads` (not mock) | |
| 4.6 | Mobile responsive + Touch Icons | |
| 4.7 | Images AVIF/WebP, width/height set | |
| 4.8 | Lighthouse ≥ 90 perf/SEO (desktop) | |
| 4.9 | Mobile LCP < 2.5s | |
| 4.10 | 404 page designed + served | |
| 4.11 | `.htaccess` routes + caching + security headers | |
| 4.12 | Legacy `.html` → clean URL 308 redirects verified | |
| 4.13 | Sitemap.xml + robots.txt + llms.txt live | |

---

## PHASE 5 — WHATSAPP + LEAD PIPELINE
| # | Gate | ✅ |
|---|---|---|
| 5.1 | Meta Cloud API connected + template approved | |
| 5.2 | New lead → WhatsApp alert to studio number within 10s | |
| 5.3 | Inbound WhatsApp → logged as Message + auto-reply within working hours | |
| 5.4 | Dashboard badge updates on new lead | |
| 5.5 | Resend email delivered on new lead | |
| 5.6 | Lead status pipeline works (New → Contacted → Visit → Quoted → Won/Lost) | |
| 5.7 | Reply from Filament dashboard sends to WhatsApp | |
| 5.8 | Lead summary email (optional daily digest) | |

---

## PHASE 6 — HOSTINGER DEPLOY
| # | Gate | ✅ |
|---|---|---|
| 6.1 | PHP 8.2+ enabled | |
| 6.2 | MySQL database + user created | |
| 6.3 | `.env` production keys set (APP_KEY, DB, RESEND, META) | |
| 6.4 | `php artisan config:cache` + `migrate --force` + `storage:link` | |
| 6.5 | Domain points to `public/` | |
| 6.6 | HTTPS (Let's Encrypt) live | |
| 6.7 | All forms working on production | |
| 6.8 | WhatsApp lead alert live | |
| 6.9 | Sitemap/robots served | |
| 6.10 | 66 redirects verified | |
| 6.11 | GSC submitted + indexed | |
| 6.12 | Performance budget met on live | |

---

## PHASE 7 — LAUNCH + POST-LAUNCH
| # | Gate | ✅ |
|---|---|---|
| 7.1 | GA4 + GTM + Clarity events wired | |
| 7.2 | GMB profile synced (NAP exact) | |
| 7.3 | KPI baseline recorded | |
| 7.4 | Blog cadence running (2/month) | |
| 7.5 | Monthly monitoring cadence established | |
| 7.6 | Link building started | |
| 7.7 | Competitor SERP baseline captured | |

---

*WOODEX-WEB-V1 · Build Checklist v1.0 · End.*
