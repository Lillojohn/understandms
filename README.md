# Understanding MS — MS begrijpen

A small website that explains what **Multiple Sclerosis (MS)** means in everyday and working life —
written in plain language for **employers, family and partners**. It explains MS through four
everyday metaphors (a damaged wire, a draining battery, a hidden iceberg, changing weather), each
with its own illustration, then gives practical "what helps" advice per audience.

Built with **Nuxt 4** + **Tailwind CSS v4**. All illustrations are inline SVG (no external assets),
and it builds to a fully **static site** you can host anywhere.

## Languages

The site is **multilingual** and prerenders one static page per language:

- The default language (**English**) lives at `/`.
- Every other language lives at `/<code>` (e.g. `/nl`, `/de`, `/ar`).
- A language switcher (top-right) links between them; correct `hreflang` alternates and a per-language
  canonical are emitted for SEO, and right-to-left languages (Arabic, Urdu, Persian, Hebrew) get
  `dir="rtl"` automatically.

### Before you deploy

Set your real domain in `nuxt.config.ts`:

```ts
const siteUrl = 'https://example.com' // ← change to your domain
```

This drives the social-share image URL, the canonical link and the `hreflang` alternates. If you
leave the placeholder, link previews and canonical tags will point at the wrong host.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build a static site (for hosting)

```bash
npm run generate     # output goes to .output/public
npx serve .output/public   # optional: preview the static build locally
```

The prerenderer crawls the language switcher, so **every language that has a translation file is
generated automatically** — no route list to maintain. Upload the contents of `.output/public` to any
static host (Netlify, Vercel, GitHub Pages, or any web server).

## Deploy (Dokploy / Docker)

The repo ships a multi-stage `Dockerfile` (Node build → nginx serving the static output, with
gzip and cache headers in `docker/nginx.conf`). In Dokploy:

1. Create an **Application**, connect this GitHub repo, branch `main`.
2. Build type: **Dockerfile** (it's auto-detected at the repo root). Container port: **80**.
3. Add the domain `understandms.org` in the Domains tab and enable HTTPS (Let's Encrypt).
4. Point the domain's DNS **A record** at your Dokploy server's IP (at your registrar).

Every push to `main` can then redeploy automatically (enable auto-deploy in Dokploy).

## Editing the content

- **Text** lives in `app/locales/<code>.json` — one file per language, all sharing the same keys.
  `app/locales/en.json` (English) is the source of truth for the structure.
- **MS resource links** are per-language in `app/components/IndexPage.vue` (`sourcesByLocale`):
  languages with a known national MS organization link to it; everyone else gets the
  MS International Federation.
- **Add a language:** add an entry to the `locales` array in `app/locales/index.ts` (code, endonym,
  `dir`, `ogLocale`) and drop a matching `app/locales/<code>.json` next to it. It appears in the
  switcher and gets its own prerendered page automatically.
- **Layout / non-text bits** (emojis, illustrations, colours, section anchors, the MS resource links)
  live in `app/components/IndexPage.vue` — they're language-independent.
- **Colours** are theme tokens in `app/assets/css/main.css`. **Illustrations** are in
  `app/components/illustrations/`.
- **Social image / favicon:** `public/og-image.svg` (+ generated `og-image.png`) and `public/favicon.svg`.

> The content is general information, not medical advice. Translations are AI-generated; have them
> reviewed by a native speaker before relying on them for anything important.
