# Slingverse ERP & CRM Landing Page

Next.js 14 App Router + TypeScript + Tailwind CSS + Lucide React.

## Start
Requires Node.js 18.17+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:
```bash
npm run build
npm start
```

## Structure
- `src/app/page.tsx` — landing entry
- `src/app/layout.tsx` — SEO metadata
- `src/app/globals.css` — Tailwind and design system
- `src/components/Landing.tsx` — sections, navigation, FAQ and scroll controls
- `src/components/Dashboard.tsx` — responsive illustrative dashboard
- `src/components/ContactForm.tsx` — validated frontend-only enquiry form
- `src/lib/data.ts` — editable features, industries, technologies and FAQ

## Before publishing
The enquiry form deliberately does **not** transmit or store personal information. Connect it to a real `/api/enquiry` route with server-side validation, rate limiting, spam protection and your email/CRM provider, then replace the preview-only submit handler and test delivery. Do not expose provider secrets in client-side variables.

Replace illustrative dashboard numbers with verified live data if desired. The sectors strip is explicitly illustrative, not a claim of real clients. Package scopes are indicative; no prices are fabricated. Qualify any performance, licensing or scalability claims against signed scope and actual measurements.

No external logo assets or image dependencies are needed.
