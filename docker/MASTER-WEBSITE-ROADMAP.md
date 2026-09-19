# MASTER WEBSITE PLAN — WOODEX INTERIOR (WOODEX-26 RELAUNCH)

**Target Domain:** [woodex.com.pk](https://woodex.com.pk) | **Sister Brand:** [woodexfurniture.pk](https://woodexfurniture.pk)  
**Baseline Repository:** `C:\Users\marke\OneDrive\Desktop\woodex-26`  
**Content & Strategy Repository:** `c:\Users\marke\OneDrive\Desktop\relunching plan`  
**Status:** Architecture Approved — Ready for Phase 1 Execution

---

## 1. Approved Design System (Locked from `woodex-26`)

| Token Category | Approved Value | Notes |
|---|---|---|
| **Primary Navy** | `#0c1628` | Main dark page canvas & header |
| **Secondary Navy** | `#121e34` | Sub-sections & gradients |
| **Navy 3** | `#18263e` | Hover fills & inner containers |
| **Card Fill** | `#152033` | Surface card (`#1a2940` on active) |
| **Cream Light** | `#f4efe7` | Light sections & high contrast |
| **Wood Accent** | `#b8956a` | Luxury brand accent (`#c9a97a` hover) |
| **Ink** | `#12151c` | Body copy on cream backgrounds |
| **Muted** | `#6a6560` | Secondary copy, borders (`#9a948c`) |
| **Typography** | `Plus Jakarta Sans` | Weights 300 to 700. Tracking `-0.038em` |
| **Border Radii** | 24px / 16px / 12px / Pill | Curated luxury rounding |
| **Buttons** | Linoxa pill + circular arrow | Dual-label hover transition |
| **Navigation** | Fixed, hide-on-scroll (>820px) | Mega-menu on desktop, drawer on mobile |
| **Hero Standards** | Cine Hero (Home & 3D Studio) | Inner pages locked at 520px height |
| **Motion Hooks** | `[data-anim]`, `[data-tilt]`, `.st-acc` | Smooth performant micro-interactions |

---

## 2. Three-Step Frontend Master Roadmap

```
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 1: CORE MAIN PAGES APPROVAL & UNIVERSAL SINGLE TEMPLATE          │
│ 1.1 Home Page Overhaul (3-Slide Cine Hero, Services, FAQ, Trust)       │
│ 1.2 Woodex 3D Studio Flagship Page (3D Rendering, Walkthroughs, VR)    │
│ 1.3 Universal Single Inner Page Template (520px Hero, Sidebar, BOQ)    │
│ 1.4 Global Shell Validation (Desktop Mega-Menu, Mobile Nav, Footer)    │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 2: SPECIALIZED TEMPLATES & COMPLETE PAGE SUITE ROLLOUT           │
│ 2.1 Service & Sector Templates (Architecture, Fit-Out, Renovation)     │
│ 2.2 Location Cluster Templates (Lahore Flagship + 11 Nationwide Desks) │
│ 2.3 Portfolio & Case Study Showcase (Filterable Hub + Detailed Studies)│
│ 2.4 Insights & Resource Center (Guides, Cost Breakdowns, Articles)     │
│ 2.5 Brand & Trust Templates (About Us, Woodex Furniture™, Contact)     │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ PHASE 3: ASSET ORGANIZATION, API HOOKS, QA, DEBUGGING & READINESS      │
│ 3.1 Asset Paths & Code Hygiene Normalization                           │
│ 3.2 Dynamic Integration & API Hooks (Form Endpoints, WhatsApp Engine)  │
│ 3.3 Full SEO, OpenGraph & JSON-LD Rich Schema Implementation           │
│ 3.4 Cross-Device Testing (Mobile to 4K), Performance & Lighthouse QA   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ SUBSEQUENT PHASE: BACKEND ARCHITECTURE & DEPLOYMENT                    │
│ • Serverless Form Processing & Automated Email/WhatsApp Lead Routing   │
│ • Headless CMS / Content Management for Dynamic Projects & Insights    │
│ • Online BOQ & Quotation Calculator Engine                             │
│ • Production CDN Deployment, Custom Domain DNS & SSL Configuration    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Deliverables Matrix by Phase

### Phase 1: Core Main Pages & Universal Template
- `index.html` (Modernized Home Page with verified facts: 10+ yrs, 200–500 projects, 12-month warranty)
- `3d-studio.html` (3D Studio Hub matching `3d-studio-hub.md`)
- `template-inner.html` (Master structural archetype for inner pages)
- `css/chrome.css`, `css/mega.css`, `css/theme.css`, `js/app.js` (Core shell)

### Phase 2: Complete Template Rollout
- **Architecture Suite (15 Pages):** `services/architecture.html` + residential & commercial sub-pages with PCATP/PEC compliance notes.
- **Commercial Fit-Out Suite (4 Pages):** Pharmacy (DRAP-compliant), Retail, Restaurant (PFA-compliant), Healthcare.
- **Renovation Suite (7 Pages):** Commercial, Retail, Healthcare, Restaurant, Residential, Specialized, Office.
- **Turnkey Hub (1 Page):** Complete Design + Build + Furnish model.
- **Locations Suite (12 Pages):** Lahore flagship (`locations/lahore.html`) + 11 city desk pages.
- **Projects Suite (8+ Pages):** Filterable portfolio hub + modular project case studies.
- **Company & Brand (4 Pages):** About Us (`about.html`), Woodex Furniture™ bridge (`woodex-craft.html`), Contact & Brief (`start-your-project.html`).
- **Insights (11 Articles):** Cost guides, fit-out vs renovation comparison, planning checklists.

### Phase 3: Project Organization, API Hooks & Launch QA
- Direct form submission hooks with client-side validation.
- Dynamic WhatsApp link pre-formatting (`wa.me/923224000768?text=...`).
- Comprehensive structured data (`InteriorDesignStudio`, `LocalBusiness`, `FAQPage`, `Service`).
- Cross-browser, responsive, and accessibility validation.

### Subsequent Phase: Backend Architecture
- Lead notifications & CRM dispatch.
- Headless CMS integration (Decap CMS / Strapi).
- Interactive budget estimation engine.
- Production hosting & SSL deployment.
