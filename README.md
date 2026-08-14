# campbell-public-site

Campbell Davis's freelance marketing site: a static Next.js (App Router) site advertising five services, plus one flagship case study and a contact form backed by SMTP. See `CLAUDE.md` for the full architecture rundown.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. The dev server picks a free port if 3000 is taken.

Copy `.env.example` to `.env.local` and fill in the SMTP variables if you need the contact form to send mail locally.

## Commands

```bash
npm run dev         # dev server
npm run build        # production build (also type-checks)
npm run start         # serve the production build
npm run lint            # eslint
npx tsc --noEmit         # type-check only, no build
npm test                  # vitest — currently covers app/api/contact/route.ts
```

## Structure

- `app/` — page routes (all statically generated except `app/api/contact/route.ts`)
- `lib/services.ts` — the five service offerings, source of truth for the `/services` page
- `lib/site.ts` — site-wide constants (name, email, social links, `siteConfig.url`)
- `components/` — shared UI (`Header`, `Footer`, `ContactForm`, service icons)
- `docs/` — source documents (CV, a sample codebase-assessment report) the site copy was drafted from; not part of the build
