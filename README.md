# Slingverse landing page

A responsive Next.js 14 + TypeScript landing page built with Tailwind CSS, Lucide React, Framer Motion, and AOS scroll animations.

## Requirements
- Node.js 18.17+ (Node 20 LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Animation notes
AOS is initialized on the client and applied to the major content sections. It respects `prefers-reduced-motion`, runs once per element, and the layout keeps content readable when animation JavaScript is unavailable. Framer Motion remains in use for interactive UI details.

## Enquiry form integration
The current form validates required fields in the browser and opens the visitor's default email application with a prefilled message (`mailto:contact@slingverse.in`). It does **not** send/store form data on a server.

For production, replace the `submitForm` handler in `app/page.tsx` with a POST request to a server-side Next.js Route Handler (for example `app/api/enquiry/route.ts`). Validate and rate-limit submissions server-side, protect against spam, and send email through a provider such as Resend, Postmark, or an SMTP service. Keep API keys in environment variables and never expose secrets in client code. Add consent/privacy copy and a privacy policy appropriate to your practices before collecting enquiries.

## Before launch
- Confirm service descriptions and any performance claims.
- The dashboard preview is illustrative; replace it with real screenshots if available.
- Client/partner names and logos are not claimed; the strip uses capability labels.
- Pricing is quote-based because no approved prices were supplied.
- Add actual Privacy Policy and Terms of Service pages and real social links.
- Connect analytics only with appropriate consent and privacy controls.

## Structure
```text
app/
  globals.css
  layout.tsx
  page.tsx
components/   # ready for future component extraction
```
