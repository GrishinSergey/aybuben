# Architecture

The "why" file. Doesn't duplicate README/CLAUDE.md — explains decisions that aren't obvious from reading the code.

## Contents

1. [Why no backend](#why-no-backend)
2. [Content as code](#content-as-code)
3. [Discriminated theme unions](#discriminated-theme-unions)
4. [Letter ≠ Word](#letter--word)
5. [Handwritten i18n](#handwritten-i18n)
6. [Tailwind v3, not v4](#tailwind-v3-not-v4)
7. [Design tokens](#design-tokens)
8. [SRS and state](#srs-and-state) (planned)

---

## Why no backend

We considered Supabase / DynamoDB. Rejected because:

- **One user (me) on one device by default.** localStorage covers the needs.
- **A backend drags in auth, RLS, migrations, env secrets.** Hours of infrastructure we don't need right now.
- **Collaboration happens through GitHub PRs**, not through an admin panel. A teacher or friend can either edit locally, or (eventually) file issues that I translate into changes.

When to revisit: if SRS state needs syncing between my laptop and phone. Until then — overkill.

## Content as code

All themes are TypeScript modules under `src/content/themes/`. Not JSON, not markdown, not a database.

Upsides:
- **Type safety:** compile-time errors when a field is missing.
- **Editor autocomplete:** no schema to memorise.
- **Git as a CMS:** change history, review through PRs, rollback via `git revert`.
- **Single-action deploy:** `git push` → CI → GitHub Pages.

Downsides:
- Only people who can use git can edit content. Fine for one or two people. If ten contributors show up, we'll add markdown + a parser.

## Discriminated theme unions

```ts
type Theme = VocabTheme | AlphabetTheme | NumeralsTheme
```

Each branch has its own `kind: 'vocab' | 'alphabet' | 'numerals'` field as a discriminant. `ThemePage` dispatches on it:

```tsx
if (theme.kind === 'alphabet') return <AlphabetView />
if (theme.kind === 'numerals') return <NumeralsView />
// ...
```

**Why this over "one shared Theme type with optional fields".** Hiding everything behind `Word | Letter | Numeral` + `imageUrl?` + `pronUk?` and friends turns the type into a junk drawer where half the fields are undefined in any given instance. Discriminated unions let the compiler enforce that only the relevant fields are accessible.

When to add a new `kind`: when the content's structure is substantially different from the existing kinds. "Animals", "weather", "months" — all `vocab`. "Time" (hours, minutes, day-of-week formats) — likely a new `kind: 'structured'` or a `numerals`-style page.

## Letter ≠ Word

Originally the alphabet was a theme with `Word[]` and optional fields `imageUrl`, `hyUpper`, `pos: 'letter'`. Problems surfaced:
- `imageUrl` and `hyUpper` are letter-specific and stuck out for everything else
- A letter card wants a 1:1 aspect-square panel for the SVG; a word card wants an h-[140px] rectangle for an emoji
- `if (isAlphabet)` inside the card component is an antipattern

We split into `Letter` and `Word`, each with its own card component. Rule to remember: **if you find yourself writing `if (isX)` around rendering, that's a signal to split the type**.

## Handwritten i18n

Instead of `react-i18next` — a `translations` object in `src/i18n/translations.ts` plus a React Context. ~50 lines total.

Why:
- UI strings count in the dozens for the whole project. A library is a sledgehammer.
- Content (words, letters) lives in `uk`/`ru` fields directly. An i18n library doesn't help with that.
- We can adopt `i18next` later if conditional plurals, interpolation, or namespaces become necessary. Until then — don't.

Slavic plurals are handled by a small `plural(n, [one, few, many])` function in `i18n/plural.ts`.

## Tailwind v3, not v4

v4 (with `@import "tailwindcss"` and a CSS-only config) is genuinely interesting, but:
- AI code generation (Claude / Copilot) still thinks in v3 patterns 95% of the time
- Stack Overflow / general docs are still mostly v3
- Our palette is defined in `tailwind.config.js` — v4 would require a rewrite

When to migrate: when v4 becomes the default in Vite templates, and AI catches up.

## Design tokens

Palette: `apricot` (apricot fruit), `pomegranate`, `accent` (teal-green), `cream`, `ink`, `grass` (success). All defined in `tailwind.config.js`.

Custom shadow tokens `shadow-press-*` power the "3D press" button pattern (Duolingo-style). Radii: `rounded-card` (20px), `rounded-card-lg` (28px). Fonts: Fraunces (display), DM Sans (body), Noto Sans Armenian.

A few rules:
- **All colors flow through tokens.** Raw hex values in JSX are forbidden, except for gradients with specific intermediate colors (and even then leave a comment explaining why).
- **Fraunces SOFT/WONK axes** — applied via `.vf-soft-hi/-md/-lo` helpers in `index.css`, because Tailwind has no utility classes for `font-variation-settings`.
- **`.font-hy`** — for any Armenian text, always.

## SRS and state

Not implemented yet. Plan for later:
- `ts-fsrs` library (FSRS algorithm — more modern than SM-2)
- localStorage as the backend, key like `srs:v1`
- JSON export/import in settings — so we don't depend on one browser
- Dedicated `/review` page (currently lives under `/tests`)
- SRS state is stored per card, where a card key is `letter:<lower>` or `word:<theme>:<idx>`