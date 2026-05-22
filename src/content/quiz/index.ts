// src/content/quiz/index.ts
//
// Реєстр граматичних тестів. Кожен generate() будує свіжий рандомізований
// набір із 14 питань, добуваючи дані з src/content/themes/grammar/.

import type { QuizDef, Question } from '../../components/quiz/types';
import type { GrammarRule, GrammarExample } from '../types';
import { shuffle, sample } from '../../components/quiz/util';
import {
  ASK_PERSON, ASK_CASE, ASK_PLURAL,
  joinBil, formQ, slotQ, translateQ, matchQ, conjCells,
} from './generators';

import { definiteArticle } from '../themes/grammar/definite-article';
import { indefiniteArticle } from '../themes/grammar/indefinite-article';
import { possessiveArticles } from '../themes/grammar/possessive-articles';
import { nounPlural } from '../themes/grammar/noun-plural';
import { casesOverview } from '../themes/grammar/cases-overview';
import { nounDeclensionI } from '../themes/grammar/noun-declension-i';
import { personalPronouns } from '../themes/grammar/personal-pronouns';
import { verbBasics } from '../themes/grammar/verb-basics';
import { presentTense } from '../themes/grammar/present-tense';
import { pastImperfect } from '../themes/grammar/past-imperfect';
import { aorist } from '../themes/grammar/aorist';
import { futureTense } from '../themes/grammar/future-tense';

function examplesOf(...rules: GrammarRule[]): GrammarExample[] {
  return rules.flatMap((r) => r.groups.flatMap((g) => g.examples));
}

/* ── Дієслова: часи ──────────────────────────────────── */

function generateVerbs(): Question[] {
  const tenseTables = [presentTense, pastImperfect, aorist, futureTense].map((r) => ({
    table: r.tables![0],
    tense: r.title,
  }));
  const cells = tenseTables.flatMap(({ table, tense }) =>
    conjCells(table).map((c) => ({ ...c, tense })),
  );
  const allForms = cells.map((c) => c.form);
  const persons = presentTense.tables![0].rows.map((r) => r.header);
  const examples = examplesOf(verbBasics, presentTense, pastImperfect, aorist, futureTense);

  const qs: Question[] = [];
  for (const c of sample(cells, 6))
    qs.push(formQ(c.verb, joinBil(c.person, c.tense), c.form, allForms));
  for (const c of sample(cells, 4))
    qs.push(slotQ(c.form, ASK_PERSON, c.person, persons));
  for (const e of sample(examples, 3))
    qs.push(translateQ(e, examples));
  // пари: 4 особи одного дієслова в одному часі
  const mt = tenseTables[Math.floor(Math.random() * tenseTables.length)].table;
  const ci = Math.floor(Math.random() * mt.columns.length);
  qs.push(matchQ(mt.rows.map((row) => ({ form: row.cells[ci].hy, label: row.header }))));

  return shuffle(qs);
}

/* ── Відмінки іменника ───────────────────────────────── */

function generateCases(): Question[] {
  const decl = nounDeclensionI.tables![0];          // cols: однина/множина, rows: 7 відмінків
  const noun = decl.rows[0].cells[0].hy.replace(/\(.*?\)/g, '').trim();
  const cases = decl.rows.map((r) => r.header);
  const declCells = decl.rows.flatMap((r) =>
    r.cells.map((c, ci) => ({ caseName: r.header, num: decl.columns[ci], form: c.hy })),
  );
  const declForms = declCells.map((c) => c.form);
  const plural = nounPlural.tables![0];             // cols: однина/множина/суфікс
  const pluralForms = plural.rows.map((r) => r.cells[1].hy);
  const examples = examplesOf(casesOverview, nounDeclensionI, nounPlural);

  const qs: Question[] = [];
  for (const c of sample(declCells, 5))
    qs.push(formQ(noun, joinBil(c.caseName, c.num), c.form, declForms));
  for (const row of sample(plural.rows, 2))
    qs.push(formQ(row.cells[0].hy, ASK_PLURAL, row.cells[1].hy, pluralForms));
  for (const c of sample(declCells, 3))
    qs.push(slotQ(c.form, ASK_CASE, c.caseName, cases));
  for (const e of sample(examples, 3))
    qs.push(translateQ(e, examples));
  // пари: вірменська назва відмінка ↔ українська/російська
  qs.push(matchQ(casesOverview.points.map((p) => ({ form: p.form ?? '', label: p.label }))));

  return shuffle(qs);
}

/* ── Займенники й артиклі ────────────────────────────── */

function generatePronArt(): Question[] {
  const pron = personalPronouns.tables![0];   // cols: наз./род./дав-знах., rows: 6 осіб
  const poss = possessiveArticles.tables![0]; // cols: суфікс/приклад/із займ., rows: 3 особи
  const pronForms = pron.rows.flatMap((r) => r.cells.map((c) => c.hy));
  const persons = pron.rows.map((r) => r.header);
  const examples = examplesOf(definiteArticle, indefiniteArticle, possessiveArticles);

  // непрямі відмінки займенника (пропускаємо стовпець 0 — називний)
  const oblique = pron.rows.flatMap((r) =>
    r.cells.slice(1).map((c, idx) => ({
      nom: r.cells[0].hy,
      col: pron.columns[idx + 1],
      form: c.hy,
    })),
  );
  const slotCells = pron.rows.flatMap((r) => r.cells.map((c) => ({ form: c.hy, person: r.header })));

  const qs: Question[] = [];
  for (const c of sample(oblique, 4))
    qs.push(formQ(c.nom, c.col, c.form, pronForms));
  for (const c of sample(slotCells, 4))
    qs.push(slotQ(c.form, ASK_PERSON, c.person, persons));
  for (const e of sample(examples, 4))
    qs.push(translateQ(e, examples));
  // пари: присвійний суфікс ↔ особа
  qs.push(matchQ(poss.rows.map((r) => ({ form: r.cells[0].hy, label: r.header }))));
  // пари: форма займенника (один відмінок) ↔ особа
  const ci = Math.floor(Math.random() * pron.columns.length);
  qs.push(matchQ(pron.rows.map((r) => ({ form: r.cells[ci].hy, label: r.header }))));

  return shuffle(qs);
}

/* ── Реєстр ──────────────────────────────────────────── */

export const quizzes: QuizDef[] = [
  {
    slug: 'verbs',
    emoji: '🛠️',
    title: { uk: 'Дієслова: часи', ru: 'Глаголы: времена' },
    intro: {
      uk: '14 питань на дієвідмінювання: теперішній, минулий недоконаний, аорист і майбутній час. Постав форму, визнач особу, переклади речення, поєднай пари.',
      ru: '14 вопросов на спряжение: настоящее, прошедшее несовершенное, аорист и будущее время. Поставь форму, определи лицо, переведи предложение, соедини пары.',
    },
    count: 14,
    generate: generateVerbs,
  },
  {
    slug: 'cases',
    emoji: '🧭',
    title: { uk: 'Відмінки іменника', ru: 'Падежи существительного' },
    intro: {
      uk: '14 питань на відмінювання іменників: сім відмінків, однина й множина. Постав форму, визнач відмінок, переклади речення, поєднай пари.',
      ru: '14 вопросов на склонение существительных: семь падежей, единственное и множественное число. Поставь форму, определи падеж, переведи предложение, соедини пары.',
    },
    count: 14,
    generate: generateCases,
  },
  {
    slug: 'pronouns-articles',
    emoji: '🙋',
    title: { uk: 'Займенники й артиклі', ru: 'Местоимения и артикли' },
    intro: {
      uk: '14 питань на особові займенники, присвійні суфікси та артиклі. Постав форму, визнач особу, переклади речення, поєднай пари.',
      ru: '14 вопросов на личные местоимения, притяжательные суффиксы и артикли. Поставь форму, определи лицо, переведи предложение, соедини пары.',
    },
    count: 14,
    generate: generatePronArt,
  },
];

export function findQuiz(slug: string): QuizDef | undefined {
  return quizzes.find((q) => q.slug === slug);
}
