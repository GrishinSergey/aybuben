# Aybuben — Armenian learning platform

Personal platform for learning Armenian (Eastern Armenian, Yerevan literary standard, reformed orthography). Not commercial — for myself and friends.

## Stack

- **Vite 8** + **React 19** + **TypeScript 6**
- **Tailwind v3** (do not use v4 — most AI patterns expect v3, plus our palette in `tailwind.config.js` uses v3 syntax)
- **react-router-dom v6**
- **i18n** — handwritten on React Context (`src/i18n/`), no libraries
- **npm** as package manager
- **localStorage** for all persistence (currently only UI language; later — SRS state)
- **No backend.** Content is stored as TS modules in `src/content/`, not in a database.

## Commands

```bash
npm run dev        # dev server at http://localhost:5173
npm run build      # tsc + vite build → dist/
npm run lint       # eslint .
npm run preview    # view the production bundle locally
```

## Layout

```
src/
├── App.tsx                    # router + LangProvider
├── main.tsx                   # entry, imports index.css
├── index.css                  # Tailwind directives, fonts, base layer
├── components/                # AppShell, TopicCard, LetterCard, WordCard, NumeralTile, ExampleCard, PageStub
├── pages/                     # LearnPage, ThemePage, TestsPage, NumeralsView
├── i18n/
│   ├── translations.ts        # uk/ru UI dictionaries
│   ├── LangContext.tsx        # provider + useLang() hook
│   └── plural.ts              # plural(n, [one, few, many]) for Slavic plurals
└── content/
    ├── types.ts               # Word, Letter, Numeral, theme types
    └── themes/
        ├── index.ts           # registry of all themes
        ├── alphabet.ts        # 39 letters with SVG URLs from Wikimedia
        ├── numbers.ts         # digits, round numbers, examples
        └── colors.ts          # sample vocab theme
```

Detailed architectural rationale lives in [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).

## Adding a vocab theme

Step-by-step in [docs/ADDING_CONTENT.md](./docs/ADDING_CONTENT.md), tl;dr:

1. Create `src/content/themes/<slug>.ts` using `colors.ts` as a template
2. Import in `src/content/themes/index.ts` and add to the `themes` array
3. Done — the topic appears on `/learn` and is accessible at `/learn/topic/<slug>`

## How to write code in this project

**Style.** Existing components are the reference. Tailwind utility classes go directly in JSX. No styled-components, no `clsx` wrappers unless they earn their keep.

**Colors through tokens.** Palette lives in `tailwind.config.js`: `apricot-*`, `pomegranate-*`, `accent-*`, `cream-*`, `ink-*`, `grass-*`. **No raw hex values in JSX.** The only exception: non-standard gradients in specific cards; if you reach for one, comment why.

**Fonts.** `font-display` (Fraunces, headings) — pair with `vf-soft-hi` / `vf-soft-md` / `vf-soft-lo` for variation axes. `font-hy` for Armenian text. `font-sans` (DM Sans) by default.

**Buttons.** For primary actions use the "3D press" pattern with `shadow-press-*` and `active:translate-y-0.5 active:shadow-press-*-sm`. Quiet lookups / reminders — softer card, no press effect.

**TypeScript.** `type` over `interface` for consistency with the rest of the codebase. Discriminated unions with `kind: '...'` — as in `VocabTheme | AlphabetTheme | NumeralsTheme`.

**Do not guess Armenian.** If you add new content and aren't sure about the form, transliteration, or translation, set `verified: false` (see below). A pending-review marker is always better than a silent error.

## Content: the verified flag

All content types (Word, Letter, Numeral, NumeralExample) accept an optional `verified?: boolean`:
- **absent or `true`** — a human (me or a teacher) reviewed it. Renders normally.
- **`false`** — added by Claude, not yet verified. The card shows an "Unverified" badge.

The full convention lives in [docs/CONTENT_VERIFICATION.md](./docs/CONTENT_VERIFICATION.md) (to be created when we implement it).

## What not to do

- Don't add runtime LLM calls (generating quizzes or explanations on the fly). All "generation" happens offline, by adding content to the repo.
- Don't introduce a backend, database, or auth without discussion. This is a personal tool.
- Don't add new dependencies unless necessary. If something can be written in 30 lines, write 30 lines.
- Don't change the palette, fonts, base radii, or shadows without agreement — these are project-wide design tokens.
- Don't use Tailwind v4 syntax (`@theme`, `@import "tailwindcss"`). Stay on v3 with `tailwind.config.js`.

## Language facts to keep in mind

- Target dialect: **Eastern Armenian** (Yerevan literary), **reformed orthography** (so `և` is a separate letter, `ու` is a separate letter, no classical ω).
- UI translations: **uk + ru**. Armenian transliteration is **Latin script** — not for translation, but to help reading until the eye gets used to the script.
- When you produce a new transliteration, use the same style as Wikipedia and the existing files: `karmir`, `hing`, `yerek` (not `kʿarmir`, not `gharmir`).

## Workflow

1. Changes happen on a feature branch.
2. Before opening a PR: `npm run lint` and `npm run build` must pass cleanly.
3. Commits are short, imperative mood: `add weather theme`, `fix LetterCard aspect ratio`.
4. The PR description covers: what was added, what changed, what to verify manually.