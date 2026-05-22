// src/components/quiz/types.ts
//
// Типи рушія тестів. Дискримінований союз Question за полем kind —
// як і контентні теми (VocabTheme | AlphabetTheme | …).

import type { Bilingual } from '../../content/types';

/** «Постав форму»: показати слово + слот, вибрати вірменську форму. */
export type FormQ = {
  kind: 'form';
  /** Вірменське слово, яке відмінюємо / дієвідмінюємо. */
  subject: string;
  /** Опис слота: «я · теперішній час», «родовий · однина». */
  prompt: Bilingual;
  /** Правильна вірменська форма. */
  answer: string;
  /** Варіанти (вірменською), містить answer. */
  options: string[];
};

/** «Визнач форму»: показати вірменську форму, вибрати її назву. */
export type SlotQ = {
  kind: 'slot';
  form: string;
  prompt: Bilingual;
  answer: Bilingual;
  options: Bilingual[];
};

/** «Переклад»: показати вірменське речення, вибрати переклад. */
export type TranslateQ = {
  kind: 'translate';
  hy: string;
  translit: string;
  answer: Bilingual;
  options: Bilingual[];
};

/** «Пари»: поєднати вірменські форми з ярликами. */
export type MatchQ = {
  kind: 'match';
  pairs: { form: string; label: Bilingual }[];
};

export type Question = FormQ | SlotQ | TranslateQ | MatchQ;

/** Визначення одного тесту. */
export type QuizDef = {
  slug: string;
  emoji: string;
  title: Bilingual;
  intro: Bilingual;
  /** Скільки питань буде в тесті (для картки на /tests). */
  count: number;
  /** Генерує свіжий рандомізований набір питань при кожному запуску. */
  generate: () => Question[];
};
