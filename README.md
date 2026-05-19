# Aybuben

Personal platform for learning Armenian (Eastern Armenian, reformed orthography).

## Development

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## What's inside

- **Alphabet** — 39 letters with handwritten forms (Wikimedia Commons, CC-BY-SA)
- **Numbers** — digits, round numbers, examples
- **Vocabulary** — themes (currently: colors), more planned
- **Grammar** — planned

## Tech

Vite · React · TypeScript · Tailwind · React Router · Handwritten i18n (uk/ru) · localStorage

No backend. Content is stored as TS modules in `src/content/`.

## For contributors and future-me

- [CLAUDE.md](./CLAUDE.md) — instructions for Claude Code
- [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) — why things are the way they are
- [docs/ADDING_CONTENT.md](./docs/ADDING_CONTENT.md) — how to add a new theme or word

## Credits

Handwritten letter images come from Wikimedia Commons, licensed under CC-BY-SA.