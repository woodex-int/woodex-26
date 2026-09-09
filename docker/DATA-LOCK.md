# WOODEX-WEB-V1 · DATA LOCK — PHASE 0

**Status:** ⏳ BLOCKING — signatures required before any Phase 1 build
**Date:** September 9, 2026
**Owner:** marke (client sign-off)
**Agents:** Use locked values below once signed. Do not fabricate unlisted facts.

---

## HOW THIS WORKS

Each row must be answered with one decision. Unanswered rows get a `[CONFIRM]` placeholder in all downstream code and copy. **No invented numbers, clients, or addresses.**

Sign this file by replying with the completed table, or by editing it and committing in GitHub.

---

## THE LOCK TABLE

| # | Fact | Source A | Source B | Source C | **DECISION (marke)** |
|---|---|---|---|---|---|
| 1 | **Address (canonical)** | `LG 90 Link Road, Model Town, Lahore` | `M-71, Zainab Tower, Model Town Link Rd` | `Gulberg III, Lahore` | ? |
| 2 | **Phone canonical** | `+92 336 2259477` | `+92 322 4000768` (WhatsApp) | — | ? |
| 3 | **Domain** | `woodex.interior` (planned) | `woodex.com.pk` (Hostinger live) | — | ? |
| 4 | **Email** | `studio@woodex.interior` | `woodexinterior.pk@gmail.com` | — | ? |
| 5 | **Named client** | "Wellstar" (site.ts reference) | Unverified | — | ? |
| 6 | **St Studios** | Gulberg III · Clifton · F-7 | GMB: Lahore only | — | ? |
| 7 | **Founder name & photo** | `[CONFIRM: name]` | — | — | ? |
| 8 | **Proof: projects** | "500+" | — | — | Confirm or correct |
| 9 | **Proof: founder yrs** | "~20" | "10+ yrs execution" | — | Confirm or correct |
| 10 | **ISO 9001** | "ISO 9001" (no number) | — | — | Publish without cert number? |
| 11 | **Testimonials** | Placeholder quotes exist | Real client quotes needed | — | Confirm 3 real clients |
| 12 | **Portfolio images** | 14 JPEGs in `public/images/` | More real projects needed | — | Confirm real inventory |
| 13 | **Pricing anchors** | see §6.3 service anchors | `improve + confirm` | — | Confirm per sq ft & ranges |
| 14 | **CRM webhook** | `CRM_WEBHOOK_URL` env var | In-dashboard pipeline | — | Use webhook or build only dashboard |
| 15 | **Cal.com / Calendly** | `NEXT_PUBLIC_CAL_LINK=` empty | — | — | Enable scheduler or form-only? |
| 16 | **Meta Business verification** | `Not started` | — | — | Start now? (days delay) |
| 17 | **GMB location(s)** | Lahore live | ISB/KHI roadmap placeholder | — | Confirm ISB/KHI go-live status |
| 18 | **Hours** | `10:00 – 8:30` | — | — | Confirm |

---

## LOCKED ONCE SIGNED (carry into all code)

```typescript
// docs/DATA-LOCK.md — signed values become the single source of truth
export const lock = {
  address:      "LG 90 Link Road, Model Town, Lahore, Pakistan",  // [CONFIRM A/B/C]
  phone:        "+92 336 2259477",                                // [CONFIRM A/B]
  whatsapp:     "+92 322 4000768",                                // [CONFIRM B]
  domain:       "woodex.com.pk",                                  // [CONFIRM A/B]
  email:        "studio@woodex.interior",                         // [CONFIRM A/B]
  namedClient:  "Wellstar",                                       // [CONFIRM — verify real]
  studios:      ["Gulberg III, Lahore", "Clifton, Karachi", "F-7, Islamabad"], // [CONFIRM]
  proof: { projects: "500+", founderYears: "10+", executionYears: "10+", iso: "ISO 9001" },
  hours:        "10:00 – 8:30",
  // post-sign defaults below:
  leadFormTo:   "+92 322 4000768",
  timezone:     "Asia/Karachi",
  currency:     "PKR",
};
```

---

## SIGNATURE

**I, marke, confirm the above decisions and authorize Phase 1 build.**

- [ ] Data lock signed
- [ ] Date: _______________
- [ ] Initials: _______________

---

*Any unconfirmed row uses `[CONFIRM]` placeholder throughout the build. No invented facts.*
