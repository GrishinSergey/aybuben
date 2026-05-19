// src/content/themes/numbers.ts
//
// Числа: цифри 0-9, круглі числа 10-100 + 1000, приклади.
//
// Порядкові числівники у вірменській:
//   - 1й  → առաջին (arajin)         — суплетивна форма
//   - 2й  → երկրորդ (yerkrord)      — спец. форма
//   - 3й  → երրորդ (yerrord)        — спец. форма
//   - 4й  → չորրորդ (chorrord)      — спец. форма
//   - 5й+ → основа + -րդ:
//             հինգերորդ (hingerord), վեցերորդ (vetserord) ...
//             (з'являється сполучна -ե- між основою та -րդ для більшості)

import type {NumeralsTheme} from '../types';

export const numbers: NumeralsTheme = {
  slug: 'numbers',
  kind: 'numerals',
  emoji: '🔢',
  title: {uk: 'Числа', ru: 'Числа'},
  hyName: 'թվեր',

  digits: [
    {value: 0, digit: '0', hy: 'զրո', translit: 'zro', uk: 'нуль', ru: 'ноль'},
    {
      value: 1, digit: '1', hy: 'մեկ', translit: 'mek', uk: 'один', ru: 'один',
      ordinalHy: 'առաջին', ordinalTranslit: 'arajin'
    },
    {
      value: 2, digit: '2', hy: 'երկու', translit: 'yerku', uk: 'два', ru: 'два',
      ordinalHy: 'երկրորդ', ordinalTranslit: 'yerkrord'
    },
    {
      value: 3, digit: '3', hy: 'երեք', translit: 'yerek', uk: 'три', ru: 'три',
      ordinalHy: 'երրորդ', ordinalTranslit: 'yerrord'
    },
    {
      value: 4, digit: '4', hy: 'չորս', translit: 'chors', uk: 'чотири', ru: 'четыре',
      ordinalHy: 'չորրորդ', ordinalTranslit: 'chorrord'
    },
    {
      value: 5, digit: '5', hy: 'հինգ', translit: 'hing', uk: 'пʼять', ru: 'пять',
      ordinalHy: 'հինգերորդ', ordinalTranslit: 'hingerord'
    },
    {
      value: 6, digit: '6', hy: 'վեց', translit: 'vets', uk: 'шість', ru: 'шесть',
      ordinalHy: 'վեցերորդ', ordinalTranslit: 'vetserord'
    },
    {
      value: 7, digit: '7', hy: 'յոթ', translit: 'yot', uk: 'сім', ru: 'семь',
      ordinalHy: 'յոթերորդ', ordinalTranslit: 'yoterord'
    },
    {
      value: 8, digit: '8', hy: 'ութ', translit: 'ut', uk: 'вісім', ru: 'восемь',
      ordinalHy: 'ութերորդ', ordinalTranslit: 'uterord'
    },
    {
      value: 9, digit: '9', hy: 'ինը', translit: 'inë', uk: 'девʼять', ru: 'девять',
      ordinalHy: 'իններորդ', ordinalTranslit: 'innerord'
    },
  ],

  digitExamples: [
    {hy: 'առաջին դաս', translit: 'arajin das', uk: '1й урок', ru: '1й урок'},
    {hy: 'երեք տարի', translit: 'yerek tari', uk: 'три роки', ru: 'три года'},
    {hy: 'ինը խնձոր', translit: 'inë khndzor', uk: 'девʼять яблук', ru: 'девять яблок'},
    {hy: 'երկու գիրք', translit: 'yerku girk', uk: 'дві книги', ru: 'две книги'},
    {hy: 'հինգերորդ օր', translit: 'hingerord or', uk: 'пʼятий день', ru: 'пятый день'},
    {hy: 'յոթ ընկեր', translit: 'yot ënker', uk: 'семеро друзів', ru: 'семь друзей'},
  ],

  rounds: [
    {value: 10, digit: '10', hy: 'տասը', translit: 'tasë', uk: 'десять', ru: 'десять'},
    {value: 20, digit: '20', hy: 'քսան', translit: 'ksan', uk: 'двадцять', ru: 'двадцать'},
    {value: 30, digit: '30', hy: 'երեսուն', translit: 'yeresun', uk: 'тридцять', ru: 'тридцать'},
    {value: 40, digit: '40', hy: 'քառասուն', translit: 'karasun', uk: 'сорок', ru: 'сорок'},
    {value: 50, digit: '50', hy: 'հիսուն', translit: 'hisun', uk: 'пʼятдесят', ru: 'пятьдесят'},
    {value: 60, digit: '60', hy: 'վաթսուն', translit: 'vatsun', uk: 'шістдесят', ru: 'шестьдесят'},
    {value: 70, digit: '70', hy: 'յոթանասուն', translit: 'yotanasun', uk: 'сімдесят', ru: 'семьдесят'},
    {value: 80, digit: '80', hy: 'ութսուն', translit: 'utsun', uk: 'вісімдесят', ru: 'восемьдесят'},
    {value: 90, digit: '90', hy: 'իննսուն', translit: 'innsun', uk: 'девʼяносто', ru: 'девяносто'},
    {value: 100, digit: '100', hy: 'հարյուր', translit: 'haryur', uk: 'сто', ru: 'сто'},
    {value: 1000, digit: '1000', hy: 'հազար', translit: 'hazar', uk: 'тисяча', ru: 'тысяча'},
  ],

  roundExamples: [
    {
      hy: 'քառասունյոթ դրամ',
      translit: 'karasunyot dram',
      uk: 'сорок сім драм',
      ru: 'сорок семь драм',
    },
    {
      hy: 'երկու հազար քսանմեկերորդ տարի',
      translit: 'yerku hazar ksanmekerord tari',
      uk: 'дві тисячі двадцять перший рік',
      ru: 'две тысячи двадцать первый год',
    },
    {
      hy: 'հարյուր հիսուն մետր',
      translit: 'haryur hisun metr',
      uk: 'сто пʼятдесят метрів',
      ru: 'сто пятьдесят метров',
    },
    {
      hy: 'իննսունինը խնդիր',
      translit: 'innsuninë khndir',
      uk: 'девʼяносто девʼять задач',
      ru: 'девяносто девять задач',
    },
  ],
};