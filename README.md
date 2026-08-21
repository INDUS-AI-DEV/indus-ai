# Indus AI — indusai.app

Corporate and product site for **Indus AI Pvt Ltd**, the parent company of
[IndusLabs](https://induslabs.io) (enterprise voice AI) and
[FinoLabs](https://finolabs.ai) (financial operations AI).

Built with Next.js 15 (App Router), React 19, and Tailwind CSS v4.

## Getting started

```bash
npm install
cp .env.example .env.local   # add your Resend key
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build (also type-checks and lints)
npm run start   # serve the production build
npm run lint    # ESLint with next/core-web-vitals + next/typescript
```

## Environment variables

| Variable | Required | Default | Purpose |
| --- | --- | --- | --- |
| `RESEND_API_KEY` | Yes | — | Sends enquiry-form submissions. Create at [resend.com/api-keys](https://resend.com/api-keys). |
| `ENQUIRY_TO_EMAIL` | No | `info@indusai.app` | Inbox that receives enquiries. |
| `ENQUIRY_FROM_EMAIL` | No | `Indus AI Website <enquiries@indusai.app>` | Sender. **Its domain must be verified in Resend** or every send fails. |

Without `RESEND_API_KEY` the form returns a 503 and tells the visitor to email
`info@indusai.app` instead — the rest of the site is unaffected.

### Resend setup checklist

1. Add `indusai.app` under Resend → Domains and publish the DNS records it gives
   you (SPF, DKIM, and the return-path CNAME).
2. Wait for the domain to show **Verified**.
3. Add `RESEND_API_KEY` in Vercel → Settings → Environment Variables, for
   Production, Preview, and Development.
4. Redeploy, then submit a test enquiry and confirm it lands in `info@indusai.app`.
   Replies to that email go straight back to the person who submitted the form
   (the API sets `replyTo`).

## Project structure

```
app/
  api/enquiry/route.ts        Resend-backed enquiry endpoint
  components/
    forms/EnquiryForm.tsx     Contact form (validation, honeypot, states)
    navigation/Navbar.tsx
    sections/                 Homepage and shared page sections
    ui/                       Container, Button
  lib/
    site.ts                   Brand, entity, and product data (single source of truth)
    schema.ts                 JSON-LD builders (Organization, FAQ, Article, Breadcrumb)
    metadata.ts               Per-page metadata + canonical helper
    faqs.ts                   Homepage FAQ copy (also feeds FAQPage structured data)
    enquiry.ts                Shared form validation (client + server)
  opengraph-image.tsx         Generated 1200×630 social card
  sitemap.ts / robots.ts      Generated at /sitemap.xml and /robots.txt
```

## SEO notes

- Every public route sets its own title, description, and canonical URL via
  `pageMetadata()`. Add new routes to `app/sitemap.ts`.
- Product and brand facts live in `app/lib/site.ts`. Changing a product URL or
  name there updates the homepage cards, the products page, the footer, and the
  `Organization` structured data at once.
- `organizationSchema()` declares `induslabs.io` and `finolabs.ai` as
  sub-organisations of Indus AI Pvt Ltd. Keep the reciprocal
  `parentOrganization` markup on those sites so the domains are read as one
  company.
- `/testing` is an internal harness: excluded from the sitemap and marked
  `noindex`.
- The homepage FAQ copy in `app/lib/faqs.ts` is rendered *and* emitted as
  `FAQPage` JSON-LD. Structured data must match visible content, so edit the
  one file rather than duplicating copy.
