# Ч. Ууганбаяр — Profile / CV site

Personal executive profile (Mongolian) built with **Next.js (App Router)**, ready to deploy on **Vercel**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

Standard Next.js app — Vercel auto-detects it, no `vercel.json` needed.

- **Git:** push to a repo, then vercel.com → **New Project** → import → **Deploy**.
- **CLI:** `npx vercel --prod`

## Structure

| File | Purpose |
| --- | --- |
| `app/layout.jsx` | Fonts (Playfair Display, IBM Plex Sans/Mono, Cyrillic subset via `next/font`), metadata, `lang="mn"` |
| `app/globals.css` | All styles (verbatim from the original) |
| `app/page.jsx` | Page content — content lives in data arrays, markup as JSX |
| `components/ScrollReveal.jsx` | Client island for the scroll-in animations |

Fonts are self-hosted through `next/font` (no external Google Fonts request, no layout shift).
The scroll-reveal behavior and reduced-motion handling match the original 1:1.
