# WOODEX-WEB-V1 · The Complete Build Package

**Woodex Interior — full-stack website master package**
One repo. Everything. From design system to Hostinger deploy.

---

## What this is

This folder contains the **complete project package** for building the Woodex Interior website — from scratch, with zero ambiguity, ready for any AI build agent or human developer.

---

## The documents

| File | Purpose | Read this when... |
|---|---|---|
| **`MASTER.md`** | Master system prompt — the constitution for the entire build | **Read first, always** — this rules everything |
| `DATA-LOCK.md` | Phase 0 data decisions — addresses, phones, names, proof stats | Before any build starts (blocking gate) |
| `SEOMAP.md` | Full keyword map, page URLs, meta strings, schema, post-launch SEO tasks | Building pages or fixing SEO |
| `API-SPEC.md` | REST API contract — routes, payloads, validation, rate limits | Building Laravel backend |
| `CONTENT-REFRESH.md` | Improved page copy — every page, every section, CTA variants | Building static frontend (Phase 4) |
| `BUILD-CHECKLIST.md` | Definition-of-done gates per phase — ship only when all rows green | CI gates, manual QA, phase reviews |

---

## The project (in one sentence)

> One Laravel 11 app, static marketing frontend inside `public/`, admin dashboard on `/admin`, REST API on `/api/v1/*`, WhatsApp automation via Meta Cloud API — all running on Hostinger shared hosting (PHP 8.2+, MySQL).

---

## For AI build agents

Read `MASTER.md` first — it is the constitution. It contains:
- Non-negotiable constraints (Hostinger, Hostinger, GitHub downloadable, admin dashboard, WhatsApp automation)
- Design tokens + brand voice rules (do not invent, do not deviate)
- Full page-by-page content and SEO map
- Data lock gate (Phase 0 — must be signed before build)
- Per-phase roadmap and definition of done

Use `SEOMAP.md` for URLs, meta strings, schema.
Use `API-SPEC.md` for backend routes.
Use `CONTENT-REFRESH.md` for page copy.
Use `BUILD-CHECKLIST.md` as CI gate.

---

## For marke

Your one action before build starts: **sign `DATA-LOCK.md`**.

Reply with the completed table (Section 2 in that file). That is your signature. Once signed, Claude Codex (or any build agent) has everything it needs to build the site — no more questions required.

---

## The 7 documents (prior workspace, superseded here)

This V1 package **supersedes** the earlier 7-doc suite (01–09 in the workspace root) where any conflict exists. Use this V1 as the single source of truth.

---

*WOODEX-WEB-V1 · V1.0 · September 9, 2026*
