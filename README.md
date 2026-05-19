# Aybuben

[![Deploy to GitHub Pages](https://github.com/<your-username>/aybuben/actions/workflows/deploy.yml/badge.svg)](https://github.com/<your-username>/aybuben/actions/workflows/deploy.yml)

Personal platform for learning Armenian (Eastern Armenian, reformed orthography).

**Live:** https://&lt;your-username&gt;.github.io/aybuben/

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173/aybuben/.

> Note: the dev server respects Vite's `base: '/aybuben/'` setting. Opening `localhost:5173` without the suffix redirects, but using the full path is more reliable.

## What's inside

- **Alphabet** — 39 letters with handwritten forms (Wikimedia Commons, CC-BY-SA)
- **Numbers** — digits, round numbers, examples
- **Vocabulary** — themes (currently: colors), more planned
- **Grammar** — planned

## Tech

Vite · React · TypeScript · Tailwind · React Router · Handwritten i18n (uk/ru) · localStorage

No backend. Content is stored as TS modules in `src/content/`.

## Deploy

Pushes to `main` automatically build and deploy via GitHub Actions. See `.github/workflows/deploy.yml`.

## For contributors and future-me

- [CLAUDE.md](./CLAUDE.md) — instructions for Claude Code
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — why things are the way they are
- [docs/ADDING_CONTENT.md](./docs/ADDING_CONTENT.md) — how to add a new theme or word

## Credits

Handwritten letter images come from Wikimedia Commons, licensed under CC-BY-SA.