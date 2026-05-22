// src/content/themes/grammar/index.ts
//
// Тема «Граматика». Кожне правило — окремий файл у цій теці
// (зручно для поштучної перевірки носієм/учителем).
// План розділу: docs/GRAMMAR_PLAN.md

import type { GrammarTheme } from '../../types';
import { definiteArticle } from './definite-article';
import { indefiniteArticle } from './indefinite-article';
import { possessiveArticles } from './possessive-articles';
import { nounPlural } from './noun-plural';
import { casesOverview } from './cases-overview';
import { nounDeclensionI } from './noun-declension-i';
import { personalPronouns } from './personal-pronouns';
import { verbBasics } from './verb-basics';
import { presentTense } from './present-tense';
import { pastImperfect } from './past-imperfect';
import { aorist } from './aorist';
import { futureTense } from './future-tense';

export const grammar: GrammarTheme = {
  slug: 'grammar',
  kind: 'grammar',
  emoji: '📖',
  title: { uk: 'Граматика', ru: 'Грамматика' },
  rules: [
    definiteArticle,
    indefiniteArticle,
    possessiveArticles,
    nounPlural,
    casesOverview,
    nounDeclensionI,
    personalPronouns,
    verbBasics,
    presentTense,
    pastImperfect,
    aorist,
    futureTense,
  ],
};
