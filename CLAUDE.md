# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project Overview

Campbell Davis's freelance marketing site — a static Next.js site advertising five services: website development, business process analysis/improvement, bespoke software development, vibe-coded prototype health checks, and vibe-to-production development. No CMS, no database: static pages plus one flagship case study, with a single Route Handler powering the contact form.

The `docs/` folder holds the two source documents (CV and a sample codebase-assessment report) that the site copy was drafted from — not part of the build.

## Commands

```bash
npm run dev          # dev server (Turbopack) — picks a free port if 3000 is taken
npm run build         # production build (also type-checks)
npm run start          # serve the production build
npm run lint            # eslint
npx tsc --noEmit         # type-check only, no build
```

There is no test suite.

## Architecture

- **Next.js App Router + TypeScript.** Every page route is statically generated (SSG); the one exception is `app/api/contact/route.ts`, a Route Handler.
- **Tailwind CSS v4.** Config lives in `app/globals.css` via `@theme inline` (CSS-first config) — there is no `tailwind.config.ts`. Don't add one; extend the theme in `globals.css` instead.
- **Content lives in code, not a CMS.** `lib/services.ts` is the single source of truth for the five service offerings (title, summary, description, "what you get" bullets) — both the home page teaser cards and the full `/services` page render from this array. `lib/site.ts` holds site-wide constants (name, email, social links, `siteConfig.url` for metadata/OG tags).
- **`/services` is one page, not five.** Each service renders as an anchored section (`#<slug>`) rather than a separate route. Split a service into its own page only if it needs dedicated SEO — don't do it preemptively.
- **Case studies:** `/case-studies` is an index (currently one entry, hardcoded in that page); `/case-studies/mockproject` is the flagship write-up of a real (anonymized) vibe-code health check engagement, used as the proof point for the health-check and vibe-to-production services.
- **Contact form sends via Gmail SMTP, not a third-party email API.** `components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which sends through Nodemailer using a Gmail account + App Password (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, both required env vars — see `.env.example`). Chosen over a transactional email API (e.g. Resend) because volume is low and the destination is Campbell's own Gmail, so the usual third-party deliverability/account-setup tradeoff wasn't worth it. `CONTACT_TO_EMAIL` (optional, falls back to `GMAIL_USER`) supports Gmail plus-addressing to route submissions to a separate inbox tag. The form has a hidden honeypot field (`company`) for basic bot filtering — real users never see or fill it.
- **Shared chrome** (`Header`, `Footer`) is wired into `app/layout.tsx`; page components under `app/**/page.tsx` render only their own content.
- **`siteConfig.url`** in `lib/site.ts` is a placeholder domain — update it once a real domain is registered, since it feeds `metadataBase`, the sitemap, and robots.txt.
- The CV lists a mobile number that is deliberately **not** published anywhere on the site pending confirmation — check `app/contact/page.tsx` before adding it.
