import type {AlphabetTheme, NumeralsTheme, Theme, VocabTheme} from '../types';
import {alphabet} from './alphabet';
import {colors} from './colors';
import {numbers} from './numbers';
import {domesticAnimals} from './domestic-animals';
import {wildAnimals} from './wild-animals';

export const themes: Theme[] = [
  alphabet,
  numbers,
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

export function findTheme(slug: string): Theme | undefined {
  return themes.find((t) => t.slug === slug);
}
