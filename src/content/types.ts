// src/content/types.ts
//
// Контентні типи. Три види тем:
//   - vocab     → лексика, картки слів (Word[])
//   - alphabet  → алфавіт, картки літер (Letter[])
//   - numerals  → числа, структурована сторінка з секціями
//
// Спільного «базового типу слова» немає навмисно: кожна сутність має свої поля.

export type Bilingual = { uk: string; ru: string };

/* ============================================================
   Лексика
   ============================================================ */

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adj'
  | 'adv'
  | 'pron'
  | 'prep'
  | 'conj'
  | 'interj'
  | 'num'
  | 'particle';

export type Word = {
  hy: string;
  translit: string;
  uk: string;
  ru: string;
  pos: PartOfSpeech;
  emoji?: string;
  imageUrl?: string;
  audio?: string;
  verified?: boolean;
  examples?: Array<{ hy: string; uk: string; ru: string }>;
};

export type VocabTheme = {
  slug: string;
  kind: 'vocab';
  emoji: string;
  title: Bilingual;
  hyName?: string;
  words: Word[];
  passage?: { hy: string; translit: string; uk: string; ru: string };
};

/* ============================================================
   Алфавіт
   ============================================================ */

export type Letter = {
  lower: string;
  upper: string;
  name: string;
  pronUk: string;
  pronRu: string;
  imageUrl: string;
};

export type AlphabetTheme = {
  slug: string;
  kind: 'alphabet';
  emoji: string;
  title: Bilingual;
  hyName?: string;
  letters: Letter[];
};

/* ============================================================
   Числа
   ============================================================ */

/** Один числівник — цифра або «кругле» число. */
export type Numeral = {
  /** Числове значення (для сортування й логіки). */
  value: number;
  /** Цифра/число як рядок ('0', '5', '100'). */
  digit: string;
  /** Вірменський спеллінг кількісного: 'հինգ'. */
  hy: string;
  /** Латинська транслітерація: 'hing'. */
  translit: string;
  /** Підказка вимови / переклад українською: 'пʼять'. */
  uk: string;
  /** Те саме російською: 'пять'. */
  ru: string;
  /** Порядкова форма (вірменською): 'հինգերորդ'. Опційно — є не у всіх. */
  ordinalHy?: string;
  /** Транслітерація порядкової: 'hingerord'. */
  ordinalTranslit?: string;
};

/** Приклад вживання: фраза з числом. */
export type NumeralExample = {
  hy: string;
  translit: string;
  uk: string;
  ru: string;
};

export type NumeralsTheme = {
  slug: string;
  kind: 'numerals';
  emoji: string;
  title: Bilingual;
  hyName?: string;
  /** Одноцифрові: 0-9. */
  digits: Numeral[];
  /** Приклади з одноцифровими + порядковими. */
  digitExamples: NumeralExample[];
  /** «Круглі» числа: 10, 20...100, 1000. */
  rounds: Numeral[];
  /** Приклади зі складеними/великими числами. */
  roundExamples: NumeralExample[];
};

/* ============================================================
   Граматика
   ============================================================ */

export type GrammarSource = {
  title: string;
  url: string;
};

/** Картка-пояснення під вступом. `form` — опційний гліф (напр. артикль ը/ն). */
export type GrammarPoint = {
  form?: string;
  label: Bilingual;
  description: Bilingual;
};

export type GrammarExample = {
  hy: string;
  translit: string;
  uk: string;
  ru: string;
  verified?: boolean;
};

export type GrammarExampleGroup = {
  caseForm: string;
  label: Bilingual;
  examples: GrammarExample[];
};

/** Клітинка таблиці-парадигми. */
export type GrammarTableCell = {
  hy: string;
  translit?: string;
};

/** Таблиця-парадигма: відмінювання іменника або дієвідміна дієслова. */
export type GrammarTable = {
  /** Підпис над таблицею. */
  caption: Bilingual;
  /** Заголовки стовпців (без кутової клітинки). */
  columns: Bilingual[];
  /** Рядки: заголовок рядка + клітинки (довжина cells = довжині columns). */
  rows: Array<{ header: Bilingual; cells: GrammarTableCell[] }>;
  verified?: boolean;
};

export type GrammarRule = {
  slug: string;
  emoji: string;
  title: Bilingual;
  intro: Bilingual;
  /** Картки-пояснення під вступом. */
  points: GrammarPoint[];
  /** Таблиці-парадигми — для відмінків і дієслів. Опційно. */
  tables?: GrammarTable[];
  /** Приклади-речення, згруповані за формою. */
  groups: GrammarExampleGroup[];
  sources: GrammarSource[];
};

export type GrammarTheme = {
  slug: string;
  kind: 'grammar';
  emoji: string;
  title: Bilingual;
  hyName?: string;
  rules: GrammarRule[];
};

/* ============================================================
   Об'єднання
   ============================================================ */

export type Theme = VocabTheme | AlphabetTheme | NumeralsTheme | GrammarTheme;