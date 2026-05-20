import type {AlphabetTheme, GrammarRule, GrammarTheme, NumeralsTheme, Theme, VocabTheme} from '../types';
import {alphabet} from './alphabet';
import {colors} from './colors';
import {numbers} from './numbers';
import {domesticAnimals} from './domestic-animals';
import {wildAnimals} from './wild-animals';
import {grammar} from './grammar';

export const themes: Theme[] = [
  alphabet,
  numbers,
  grammar,
  colors,
  domesticAnimals,
  wildAnimals,
];

/** Окремі вибірки. */
export const vocabThemes: VocabTheme[] = themes.filter(
  (t): t is VocabTheme => t.kind === 'vocab'
);

export const alphabetThemes: AlphabetTheme[] = themes.filter(
  (t): t is AlphabetTheme => t.kind === 'alphabet'
);

export const numeralsThemes: NumeralsTheme[] = themes.filter(
  (t): t is NumeralsTheme => t.kind === 'numerals'
);

export const grammarThemes: GrammarTheme[] = themes.filter(
  (t): t is GrammarTheme => t.kind === 'grammar'
);

export function findTheme(slug: string): Theme | undefined {
  return themes.find((t) => t.slug === slug);
}

export function findGrammarRule(ruleSlug: string): GrammarRule | undefined {
  for (const theme of grammarThemes) {
    const rule = theme.rules.find((r) => r.slug === ruleSlug);
    if (rule) return rule;
  }
  return undefined;
}
