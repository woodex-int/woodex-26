# WOODEX-WEB-V1 · API SPEC — REST v1 CONTRACT

**Version:** V1.0 · September 9, 2026
**Base path:** `/api/v1`
**Auth:** None for GET. Sanctum token or CSRF for POST/PUT/DELETE.
**Rate limit:** `throttle:6,1` per IP on all POST (honeypot `company` field required).
**Format:** JSON throughout. ISO 8601 timestamps.

---

## STATUS CODES (standard)

| Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Created |
| 204 | No content (delete) |
| 400 | Validation error (detail in `errors` object) |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not found |
| 422 | Unprocessable entity (Zode-like validation) |
| 429 | Too many requests |
| 500 | Server error (logged, client sees generic message) |

---

## HEALTH CHECK

```
GET /api/v1/health
```
Response 200:
```json
{ "ok": true, "service": "woodex-api", "time": "2026-09-09T00:00:00+05:00" }
```

---

## LEADS

### Create lead
```
POST /api/v1/leads
```
Body (honeypot `company` required, blank = bot):
```json
{
  "name": "Ali Khan",
  "phone": "+923001234567",
  "email": "ali@example.com",
  "city": "Lahore",
  "service": "interior-design",
  "stage": "concept",
  "area": "1200 sq ft",
  "budget": "500000-1000000",
  "preferred": "Weekend",
  "message": "Interested in full interior fit-out.",
  "company": "",
  "formType": "brief"
}
```
Response 201:
```json
{ "ok": true, "id": 42, "delivered": { "email": "sent", "crm": "sent", "whatsapp": "sent" } }
```

### Update lead status (admin / automation)
```
POST /api/v1/leads/{id}/status
```
Body:
```json
{ "status": "quoted" }
```
Allowed statuses: `new`, `contacted`, `visit`, `quoted`, `won`, `lost`.
Response 200: `{ "ok": true, "lead": { ... } }`

### List leads (admin)
```
GET /api/v1/leads?status=new&page=1&per=25
```
Response 200:
```json
{ "data": [...], "meta": { "current_page": 1, "last_page": 4, "total": 87 } }
```

---

## PROJECTS (portfolio)

### List
```
GET /api/v1/projects?service=architectural&city=lahore&status=published&page=1
```
Response 200: paginated collection with `service`, `sector`, `city`, `gallery`, `stats`, `timeline`, `quote`, `slug`.

### Single
```
GET /api/v1/projects/{slug}
```
Response 200: full project detail + related projects.

---

## SERVICES

### List
```
GET /api/v1/services?pillar=construction&city=lahore
```
Response 200: collection with `slug`, `title`, `summary`, `body`, `image`, `order`.

### Single
```
GET /api/v1/services/{slug}
```
Response 200: full service detail + related services + FAQs.

---

## SECTORS

### List
```
GET /api/v1/sectors
```
### Single
```
GET /api/v1/sectors/{slug}
```

---

## INSIGHTS (blog)

### List (paginated)
```
GET /api/v1/insights?category=process&page=1
```
### Single
```
GET /api/v1/insights/{slug}
```
Response 200: `author`, `category`, `published_at`, `excerpt`, `body`, `image`, `seo`.

---

## LOCATIONS

### List
```
GET /api/v1/locations
```
### Single (by city)
```
GET /api/v1/locations/{city}
```
Response 200: `city`, `slug`, `copy`, `neighborhoods[]`, `map`, `live_flag`.

---

## FAQs

```
GET /api/v1/faqs?page=contact   # filter by page group
GET /api/v1/faqs                 # all (paginated)
```
Response 200: collection with `group`, `question`, `answer`, `order`.

---

## MESSAGES (WhatsApp)

### Log inbound
```
POST /api/v1/whatsapp/webhook
```
Body (Meta signature verified):
```json
{ "entry": [{ "changes": [{ "value": { "messages": [{ "from": "92300...", "text": "Hello", "timestamp": 1725800000 }] } }] }] }
```
Response 200: `{ "ok": true }`

### Outbound quick reply (admin)
```
POST /api/v1/messages/send
```
Body:
```json
{ "to": "+923001234567", "template": "lead-alert", "language": "en" }
```

---

## VALIDATION (ported from WOODEX-WEB Zod schemas)

### briefSchema
- `name`: required, max 120
- `phone`: required, min 6, max 40
- `email`: optional, email format
- `city`: required, max 80
- `service`: required, max 120
- `stage`, `area`, `budget`, `preferred`, `message`: optional
- `company`: honeypot (must be blank)

### contactSchema
- `name`: required
- `email`: required, email
- `phone`: required
- `message`: required, max 4000

### consultationSchema
- `name`: required
- `email`, `phone`, `city`, `service`, `preferredDate`, `preferredTime`, `message`: optional
- `company`: honeypot

All validators throw 422 with `{ errors: { field: "message" } }`.

---

## WEBHOOK CONTRACTS

| Event | Target | Payload |
|---|---|---|
| Lead created | `CRM_WEBHOOK_URL` | `{ formType, submittedAt, source, ...fields }` |
| Lead status changed | optional downstream | `{ id, status, updatedAt }` |
| WhatsApp inbound | app queue | `{ from, text, timestamp }` |
| WhatsApp outbound | Meta | template + language |

---

## SECURITY

- Honeypot `company` field (must be empty, else 200 silent)
- `throttle:6,1` per IP on POST
- CSRF token for web forms · Sanctum for API consumers
- Signed webhook for Meta Cloud API inbound
- `.env` secrets off-repo; `APP_KEY` rotation on deploy
- Upload validation: mime + size caps; storage symlink
- Security headers (port `next.config.ts` list): X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy, no powered-by

---

*WOODEX-WEB-V1 · API Spec v1.0 · End.*
