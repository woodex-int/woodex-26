# SERVICES — per-page master plans (Parts 1–8)

One master plan per services page, following the 8-part structure:
**Part 1** Page Strategy & SEO · **Part 2** UI/UX Section-by-Section Layout (unique per page) · **Part 3** Complete Page Copy notes · **Part 4** Internal Linking Map · **Part 5** On-Page Schema · **Part 6** Image & Media Brief · **Part 7** Quality Checklist · **Part 8** Execution Summary + Queue.

| Plan | Status | Wave |
|---|---|---|
| [office-fit-out.md](office-fit-out.md) | planned | 1 |
| [pharmacy.md](pharmacy.md) | planned | 1 |
| [retail.md](retail.md) | planned | 1 |
| [restaurant.md](restaurant.md) | planned | 1 |
| [turnkey.md](turnkey.md) | planned | 1 |
| [office.md](office.md) | planned | 2 |
| [commercial-fit-out.md](commercial-fit-out.md) | planned | 2 |
| [renovation.md](renovation.md) | planned | 2 |
| [architecture.md](architecture.md) | planned | 2 |
| [visualization.md](visualization.md) | planned | 3 |
| [software-house.md](software-house.md) | planned | 3 |
| [cafe.md](cafe.md) | planned | 3 |
| [shops.md](shops.md) | planned | 3 |
| [space-planning.md](space-planning.md) | planned | 3 |
| [drawings.md](drawings.md) | planned | 4 |
| [lighting.md](lighting.md) | planned | 4 |
| [joinery.md](joinery.md) | planned | 4 |
| [fit-out.md](fit-out.md) | planned | 4 |
| [residential-fit-out.md](residential-fit-out.md) | planned | 4 |
| [residential.md](residential.md) | planned | 4 |

Hub (`services.html`) reworks last (wave 5), after sub-pages, so the index reflects the final set.
Architecture + goal set + pattern vocabulary: [`../SERVICES_ARCHITECTURE.md`](../SERVICES_ARCHITECTURE.md).
**Blocked on owner answer:** the visual reference for the v2 rebuild (screenshots unreadable — no image capability this session).

## Status

- **office-fit-out.html — v2 BUILT (exemplar). Owner sign-off pending.**

## v3 status (2026-09-20, later)

- **Canonical 9-section system owner-locked** (hero / Who it's for / The run / Why Woodex / FAQ / slide / Related services / Next to this scope / "Shell in. Business out." statement). Supersedes the 15-slot layout.
- **New generator:** `tools/build_services.py` + `tools/services_data.py` (old /tmp .py approach retired).
- **Built on v3:** office-fit-out · pharmacy · 3d-studio (improved to the same system). Remaining 17 pages: add data to services_data.py, run generator, pagecheck, commit.

## v5 — 3D Studio complete rebuild (owner, 2026-09-24)

- Owner chose **full 14-section brief structure** for 3d-studio (docker/3d-studio-hub.md): hero · what-is · who · services(slide,6) · delivers · process(5) · featured-work · marketing · cost(Cost-Lock, NO PKR) · why-woodex(universal 4 facts) · FAQ · cta-brief · related. Testimonial omitted (no verified quote). Brief's old NAP/prices replaced per fact lock.
- 3d-studio removed from tools/services_data.py (no longer a 9-section page); office-fit-out + pharmacy remain on the 9-section system pending owner direction on upgrading them to full-14.
- Live URL kept: /3d-studio.html + woodex.interior (brief's /3d-visualization/ + woodex.com.pk is outdated).
