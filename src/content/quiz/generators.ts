// src/content/quiz/generators.ts
//
// Чисті функції-будівники питань. Увесь вірменський текст береться з наявного
// граматичного контенту (таблиці, приклади) — тут авторського вірменського
// тексту немає, лише uk/ru-підказки.

import type { Bilingual, GrammarTable, GrammarExample } from '../types';
import type { FormQ, SlotQ, TranslateQ, MatchQ } from '../../components/quiz/types';
import { shuffle, sample } from '../../components/quiz/util';

export const ASK_PERSON: Bilingual = {
  uk: 'Яка це особа й число?',
  ru: 'Какое это лицо и число?',
};
export const ASK_CASE: Bilingual = {
  uk: 'Який це відмінок?',
  ru: 'Какой это падеж?',
};
export const ASK_PLURAL: Bilingual = {
  uk: 'постав у множину',
  ru: 'поставь во множественное число',
};

/** Склеює два ярлики через крапку: «я · теперішній час». */
export function joinBil(a: Bilingual, b: Bilingual): Bilingual {
  return { uk: `${a.uk} · ${b.uk}`, ru: `${a.ru} · ${b.ru}` };
}

function uniq(a: string[]): string[] {
  return [...new Set(a)];
}

/** «Постав форму»: 1 правильна + 3 дистрактори з пулу вірменських форм. */
export function formQ(subject: string, prompt: Bilingual, answer: string, pool: string[]): FormQ {
  const distractors = sample(uniq(pool).filter((x) => x !== answer), 3);
  return { kind: 'form', subject, prompt, answer, options: shuffle([answer, ...distractors]) };
}

/** «Визнач форму»: 1 правильний ярлик + 3 дистрактори з пулу ярликів. */
export function slotQ(form: string, prompt: Bilingual, answer: Bilingual, pool: Bilingual[]): SlotQ {
  const distractors = sample(pool.filter((x) => x.uk !== answer.uk), 3);
  return { kind: 'slot', form, prompt, answer, options: shuffle([answer, ...distractors]) };
}

/** «Переклад»: правильний переклад + 3 з інших прикладів. */
export function translateQ(ex: GrammarExample, pool: GrammarExample[]): TranslateQ {
  const answer: Bilingual = { uk: ex.uk, ru: ex.ru };
  const distractors = sample(pool.filter((e) => e.hy !== ex.hy), 3)
    .map((e) => ({ uk: e.uk, ru: e.ru }));
  return {
    kind: 'translate',
    hy: ex.hy,
    translit: ex.translit,
    answer,
    options: shuffle([answer, ...distractors]),
  };
}

/** «Пари»: до 4 випадкових пар форма ↔ ярлик. */
export function matchQ(pairs: { form: string; label: Bilingual }[]): MatchQ {
  return { kind: 'match', pairs: sample(pairs, Math.min(4, pairs.length)) };
}

/** Комірка таблиці дієвідміни: columns = дієслова, rows = особи. */
export type ConjCell = { verb: string; person: Bilingual; form: string };

export function conjCells(table: GrammarTable): ConjCell[] {
  const out: ConjCell[] = [];
  table.rows.forEach((row) =>
    row.cells.forEach((cell, ci) =>
      out.push({ verb: table.columns[ci].uk, person: row.header, form: cell.hy }),
    ),
  );
  return out;
}
