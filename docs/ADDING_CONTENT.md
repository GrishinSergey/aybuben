# Adding content

Step-by-step instructions. The closer you follow them, the less rework you'll do later.

## Contents

1. [Add a vocab theme](#add-a-vocab-theme)
2. [Add a word to an existing theme](#add-a-word-to-an-existing-theme)
3. [Add a letter to the alphabet](#add-a-letter-to-the-alphabet) (rarely needed — the alphabet is fixed)
4. [Add a number or example to the Numbers theme](#add-a-number-or-example)
5. [Create a new theme kind](#create-a-new-theme-kind)
6. [Convention: the verified flag](#convention-the-verified-flag)

---

## Add a vocab theme

**Scenario:** "I want to add an Animals theme."

### 1. Create `src/content/themes/animals.ts`

Copy the structure from `colors.ts` as a reference:

```ts
import type { VocabTheme } from '../types';

export const animals: VocabTheme = {
  slug: 'animals',                             // URL segment: /learn/topic/animals
  kind: 'vocab',                                // MUST be 'vocab'
  emoji: '🐾',                                  // one emoji for the /learn card
  title: { uk: 'Тварини', ru: 'Животные' },
  hyName: 'կենդանիներ',                         // Armenian name of the topic (optional)
  words: [
    { hy: 'շուն',  translit: 'shun',  uk: 'собака', ru: 'собака', pos: 'noun', emoji: '🐶' },
    { hy: 'կատու', translit: 'katu',  uk: 'кіт',    ru: 'кот',    pos: 'noun', emoji: '🐱' },
    // ...
  ],
};
```

### 2. Register in `src/content/themes/index.ts`

Add the import and an entry to the array:

```ts
import { animals } from './animals';

export const themes: Theme[] = [
  alphabet,
  numbers,
  colors,
  animals,    // ← new line
];
```

### 3. Verify

```bash
npm run dev
```

A new card should appear on `/learn`. Clicking it should route to `/learn/topic/animals` with a grid of words.

### Rules for `words[]`

- `hy` — Armenian spelling in dictionary form (Nom. sg. for nouns, infinitive for verbs)
- `translit` — Latin script, **Wikipedia-style** (`karmir`, not `kʿarmir`)
- `uk` / `ru` — the most natural translation, no hedge words ("собака", not "домашній собака")
- `pos` — part of speech: `'noun' | 'verb' | 'adj' | 'adv' | 'pron' | 'prep' | 'conj' | 'interj' | 'num' | 'particle'`
- `emoji` — optional but recommended in vocab themes. Missing → renders `✦`. One emoji per word, not a sequence.

### When Claude adds words

- If you're not 100% sure about the form or translation, set `verified: false`. Doesn't block deployment, but renders a badge on the card and flags the entry for review with a native speaker / teacher.
- Avoid rare vocabulary in themes meant for basic words. Pick high-frequency items.

---

## Add a word to an existing theme

Open the theme file. Append a new object to the `words` array. Save.

```ts
words: [
  // existing entries...
  { hy: 'ձկներ', translit: 'dzknér', uk: 'риба', ru: 'рыба', pos: 'noun', emoji: '🐟' },
],
```

Array order is render order on the page. Keep the order meaningful — by family, frequency, difficulty — whichever fits the theme.

---

## Add a letter to the alphabet

Rarely needed — the 39 East Armenian Reformed letters are fixed. If you do need it (different alphabet / archaic form):

1. In `src/content/themes/alphabet.ts` append an entry to `letters: []`
2. `lower` / `upper` — Unicode characters
3. `name` — Latin name (like `ayb`, `ben`)
4. `pronUk` / `pronRu` — pronunciation hints
5. `imageUrl` — either from Wikimedia Commons, or a self-hosted SVG in `public/`

The Wikimedia URL is constructed from a thumb URL like this: `commons/thumb/X/XY/file.svg/250px-file.svg.png` → `commons/X/XY/file.svg` (strip `/thumb` and the `/250px-…png` suffix).

---

## Add a number or example

File: `src/content/themes/numbers.ts`.

**Cardinal (`Numeral`):**

```ts
{
  value: 11, digit: '11', hy: 'տասնմեկ', translit: 'tasnmek',
  uk: 'одинадцять', ru: 'одиннадцать',
  // ordinalHy / ordinalTranslit — if applicable
}
```

Where to add:
- 0–9 → the `digits` array
- round numbers (10, 20, 100, 1000) → the `rounds` array
- in-between numbers (11, 23, etc.) — not currently a dedicated section. Either add them to `rounds` (visually inconsistent) or raise the question of a new "composite numbers" section separately.

**Example (`NumeralExample`):**

```ts
{ hy: 'երեք տարի', translit: 'yerek tari', uk: 'три роки', ru: 'три года' }
```

→ goes into `digitExamples` (with single-digit numbers) or `roundExamples` (with larger numbers).

---

## Create a new theme kind

Scenario: the data is substantially different and doesn't fit `vocab` / `alphabet` / `numerals`. For example "Time" (hours, minutes, days of the week with various forms).

Steps:

1. In `src/content/types.ts` add the type:
   ```ts
   export type TimeTheme = {
     slug: string;
     kind: 'time';
     emoji: string;
     title: Bilingual;
     hyName?: string;
     // your fields...
   };
   ```
2. Add it to the `Theme` union: `type Theme = VocabTheme | ... | TimeTheme`
3. Create a dedicated view component: `src/pages/TimeView.tsx` (use `NumeralsView.tsx` as a reference)
4. In `src/pages/ThemePage.tsx` add a dispatcher branch: `if (theme.kind === 'time') return <TimeView theme={theme} />`
5. In `src/content/themes/index.ts` add a selector: `export const timeThemes = themes.filter(...)`
6. In `src/pages/LearnPage.tsx` render the new category's cards
7. Register the theme file itself in `themes`

Don't over-engineer: if there's only one theme of a kind, don't build factories or "view engines". A direct component is always easier to read than an abstract one.

---

## Convention: the verified flag

All content types accept an optional `verified?: boolean` (to be added when the feature is wired up).

- **absent or `true`** — a human (me or a teacher) reviewed it. Renders normally.
- **`false`** — added by Claude without verification. Card shows an "Unverified" badge.

Workflow:
1. I (via PR / Claude Code) add a new theme or word. If unsure, set `verified: false`.
2. I review it myself, or show it to the teacher in a weekly batch.
3. If everything is OK → remove the field (or set `verified: true`). If there are fixes → apply them and remove the field.

Badge rendering details will live in `docs/CONTENT_VERIFICATION.md` once we implement the feature.