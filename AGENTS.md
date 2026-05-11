## Project Overview

This project is a corporate website for **Plus Tecnología**, a small company that sells spare parts and specialized services for fuel, petroleum, diesel, and industrial fluid filtration systems.

The website must be professional, responsive, clear, and focused on generating quotation requests and contact leads.

This is a business project, not a student/demo-only project. Prioritize maintainability, production readiness, clean code, and a professional visual result.

## Tech Stack

- Next.js with App Router

- TypeScript

- Tailwind CSS

- React

- ESLint

- Minimal App Router API routes are allowed for lead generation/contact handling

- No database for the first version

- No authentication

- No ecommerce/cart/payment system yet

## Contact Form

- The `Contacto` form posts to `/api/contact`.
- The API route must validate required fields, reject invalid emails, and verify anti-spam checks before attempting to send email.
- Anti-spam protection currently uses a signed math captcha, honeypot field, minimum submit time, and lightweight in-memory rate limiting.
- Email delivery is configurable through environment variables:
  - `CONTACT_EMAIL_PROVIDER=disabled|resend`
  - `RESEND_API_KEY`
  - `CONTACT_EMAIL_FROM`
  - `CONTACT_EMAIL_TO`
  - `CONTACT_CAPTCHA_SECRET`
- Contact emails must be readable and structured for quotation follow-up.

## Images

- Page-level images are configured in `src/data/site.ts`.
- Product-category images are configured in `src/data/products.ts`.
- Store local assets under `public/images` and reference them with paths like `/images/file-name.jpg`.

## Brand Identity

Brand name:

```txt

Plus Tecnología
