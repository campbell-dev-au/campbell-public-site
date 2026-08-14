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
npm run typecheck        # tsc --noEmit — type-check only, no build
npm test                  # vitest — currently covers app/api/contact/route.ts
```

## CI

`.github/workflows/ci.yml` runs lint, typecheck, and build on every push and pull request against `main`. Dependabot (`.github/dependabot.yml`) checks weekly for updates to `next`, `nodemailer`, and GitHub Actions.

## Architecture

- **Next.js App Router + TypeScript.** Every page route is statically generated (SSG); the one exception is `app/api/contact/route.ts`, a Route Handler.
- **Tailwind CSS v4.** Config lives in `app/globals.css` via `@theme inline` (CSS-first config) — there is no `tailwind.config.ts`. Don't add one; extend the theme in `globals.css` instead.
- **Corner radius is a single token.** All boxy/bordered elements (cards, panels, photo frames, buttons, inputs, the page shell) use the `rounded-box` utility instead of Tailwind's built-in `rounded-md`/`-lg`/`-xl`/etc., so the whole site's corner sharpness changes in one place: `--radius-box` in `app/globals.css`. `rounded-full` is reserved for things that are actually circular (avatar photos, decorative blur orbs) — don't route those through `rounded-box`.
- **Content lives in code, not a CMS.** `lib/services.ts` is the single source of truth for the five service offerings (title, summary, description, "what you get" bullets) — both the home page teaser cards and the full `/services` page render from this array. `lib/site.ts` holds site-wide constants (name, email, social links, `siteConfig.url` for metadata/OG tags).
- **`/services` is one page, not five.** Each service renders as an anchored section (`#<slug>`) rather than a separate route. Split a service into its own page only if it needs dedicated SEO — don't do it preemptively.
- **Case studies:** `/case-studies` is an index (currently one entry, hardcoded in that page); `/case-studies/mockproject` is the flagship write-up of a real (anonymized) vibe-code health check engagement, used as the proof point for the health-check and vibe-to-production services.
- **Contact form sends via Porkbun-hosted SMTP, not a third-party email API.** `components/ContactForm.tsx` posts to `app/api/contact/route.ts`, which sends through Nodemailer using the `hello@campbelldavis.com.au` mailbox hosted by Porkbun (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, all required env vars — see `.env.example`). Chosen over a transactional email API (e.g. Resend) because volume is low and the destination is Campbell's own mailbox, so the usual third-party deliverability/account-setup tradeoff wasn't worth it. `CONTACT_TO_EMAIL` (optional, falls back to `SMTP_USER`) can route submissions to a separate inbox if the mail provider supports sub-addressing. The form has a hidden honeypot field (`company`) for basic bot filtering — real users never see or fill it. `lib/rate-limit.ts` adds a per-IP in-memory rate limit (5 requests/minute) in front of the route's validation — state is per lambda instance and resets on cold start, an accepted tradeoff given the low traffic this form gets; it also gates honeypot-triggered fake successes, not just real sends, so the honeypot response can't be used to probe around the limiter.
- **Shared chrome** (`Header`, `Footer`) is wired into `app/layout.tsx`; page components under `app/**/page.tsx` render only their own content.
- **`siteConfig.url`** in `lib/site.ts` is `https://campbelldavis.com.au`, the site's real domain (registered via Porkbun) — it feeds `metadataBase`, the sitemap, and robots.txt.
- The CV lists a mobile number that is deliberately **not** published anywhere on the site pending confirmation — check `app/contact/page.tsx` before adding it.
- **Accent color is indigo→fuchsia**, applied consistently via Tailwind utility classes (`indigo-600`/`indigo-400` for links/text, `from-indigo-600 to-fuchsia-600` gradients for primary CTAs and decorative blur blobs) rather than custom theme tokens — match this instead of introducing a new accent. `components/icons.tsx` holds small hand-drawn SVG icons (one per service, keyed by `ServiceIconKey`) used in indigo-tinted badges on `ServiceCard` and the `/services` page; add new icons there rather than pulling in an icon library.
