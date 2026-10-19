# Strohm Partners marketing website

Multipage marketing site for [Strohm Partners LLC](https://www.strohmpartners.com) — Astro + React islands, Tailwind CSS v4, Cloudflare Pages.

Lives in the `automate-with-josh` monorepo because there is no separate strohmpartners.com app repo yet. Point Cloudflare Pages **root directory** at `strohm-partners-website/` for deploy.

## Stack

- [Astro](https://astro.build/) 7 (static pages + server API route)
- React islands (contact form, mobile nav, FAQ accordions)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- `@astrojs/cloudflare` adapter for `/api/contact` proxy

## Development

```bash
cd strohm-partners-website
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `N8N_WEBHOOK_URL` | No | Overrides default n8n webhook URL for `/api/contact` (set in Cloudflare dashboard for production if needed). |

Copy `.env.example` to `.env` for local overrides.

## Contact form

The browser posts JSON to **`/api/contact`** (same origin). The Astro API route forwards the payload to the n8n webhook defined in the [website build plan](../docs/website-build-plan.md) (see `src/data/site.ts` for the default URL).

This avoids browser CORS issues with the n8n endpoint. Test locally:

```bash
curl -sS -X POST http://localhost:4321/api/contact \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "interest": "not-sure",
    "source": "strohm-partners-website",
    "page": "/contact",
    "submittedAt": "2026-10-19T17:30:00.000Z"
  }'
```

## Cloudflare Pages

1. Create a Pages project connected to this repository.
2. Set **Root directory** to `strohm-partners-website`.
3. Build command: `npm run build`
4. Build output: `dist`
5. Optional: add `N8N_WEBHOOK_URL` in **Settings → Environment variables**.

`wrangler.toml` is included for reference; Pages can use the dashboard build settings above.

## Project docs

Copy and IA source of truth live in the Project store `docs/` folder (website build plan, brand tokens, site copy).
