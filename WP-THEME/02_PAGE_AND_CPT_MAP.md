# Page and CPT map — 66 HTML → WordPress

Base domain later: `https://woodex.interior/` (change on go-live).

## WordPress Pages (Elementor)

| WP page | HTML source | Template type |
|---|---|---|
| Home | `index.html` | Page + Woodex Hero Slider |
| About | `about.html` | Page |
| Services | `services.html` | Page (hub) or CPT archive |
| 3D Studio | `3d-studio.html` | Page + Woodex Cine |
| Process | `process.html` | Page |
| Woodex Craft | `woodex-craft.html` | Page |
| Projects | `projects.html` | CPT `study` archive |
| Client stories | `client-stories.html` | Page (Wellstar) |
| Insights | `insights.html` | Post archive (Blog Two) |
| Locations | `locations.html` | CPT `location` archive |
| Start your project | `start-your-project.html` | Page + Brief Form |
| Contact | `contact.html` | Page + map + Brief Form |
| FAQ | `faq.html` | Page + accordion + FAQ schema |
| Careers | `careers.html` | Page |
| 404 | `404.html` | Xpro Theme Builder 404 |

## CPT `service` (20)

`residential` · `office` · `retail` · `shops` · `restaurant` · `cafe` · `renovation` · `fit-out` · `architecture` · `drawings` · `joinery` · `lighting` · `pharmacy` · `software-house` · `space-planning` · `visualization` · `office-fit-out` · `commercial-fit-out` · `residential-fit-out` · `turnkey`

**Fields (unique per item, not cloned prose):**  
slug, group (interior|fitout|industry|specialist|studio), cine H1, cine eye, cine paragraph, approval H2, have[], outputs[], faq[], geo line, related insight, related study.

Single template: Woodex Cine + ticker + Elementor containers bound to those fields.

## CPT `study` (6 + hubs)

contemporary-retreat · urban-living-concept · spatial-innovation · concrete-harmony · minimal-space-design · modern-facade-study  
+ archive filters: residential / commercial  
Always labelled **Study**.

## CPT `location` (12)

| Studio | Nationwide |
|---|---|
| Lahore (Gulberg III) | Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, Sialkot, Gujranwala, Hyderabad, Bahawalpur |
| Karachi (Clifton) | |
| Islamabad (F-7) | |

Field `presence`: studio | nationwide. Unique ask/GEO per city (already written in HTML).

## Posts (7 now)

what-is-3d-visualization · interior-design-cost-pakistan · design-vs-turnkey · home-renovation-checklist · office-interior-guide · restaurant-planning · retail-shop-interior  

Hubs `insights/3d|cost|rooms|process` → **category archives**, not extra pages.

## CPT `brief`

Internal. Not public. Columns: have, need, city, stage, phone, WhatsApp sent.

## CPT `testimonial`

Empty. Capability only.

## Redirects (when HTML dies)

`/services/residential.html` → `/services/residential/`  
Same pattern for all 66. `.htaccess` / Rank Math redirects. **Do not delete HTML until you command it.**
