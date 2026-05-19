// src/content/themes/alphabet.ts
//
// Вірменський алфавіт (Mesrop). 39 літер у східновірменському порядку
// з реформованою орфографією. Дані: hy/upper з Unicode, name — класична
// назва латиницею, imageUrl — рукописна форма з Wikimedia Commons (CC-BY-SA).

import type { AlphabetTheme } from '../types';

export const alphabet: AlphabetTheme = {
  slug: 'alphabet',
  kind: 'alphabet',
  emoji: '🔤',
  title: { uk: 'Алфавіт', ru: 'Алфавит' },
  hyName: 'Այբուբեն',
  letters: [
    {
      lower: 'ա', upper: 'Ա', name: 'ayb',
      pronUk: 'як «а» в «мама»',
      pronRu: 'как «а» в «мама»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/%D4%B1_handwritten.svg',
    },
    {
      lower: 'բ', upper: 'Բ', name: 'ben',
      pronUk: 'як «б»',
      pronRu: 'как «б»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/%D4%B2_handwritten.svg',
    },
    {
      lower: 'գ', upper: 'Գ', name: 'gim',
      pronUk: 'як «ґ» в «ґанок»',
      pronRu: 'как «г» в «гора»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/%D4%B3_handwritten.svg',
    },
    {
      lower: 'դ', upper: 'Դ', name: 'da',
      pronUk: 'як «д»',
      pronRu: 'как «д»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/03/%D4%B4_handwritten.svg',
    },
    {
      lower: 'ե', upper: 'Ե', name: 'yech',
      pronUk: 'як «е»; на початку слова — «йе»',
      pronRu: 'как «э»; в начале слова — «йе»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/94/%D4%B5_handwritten.svg',
    },
    {
      lower: 'զ', upper: 'Զ', name: 'za',
      pronUk: 'як «з»',
      pronRu: 'как «з»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/%D4%B6_handwritten.svg',
    },
    {
      lower: 'է', upper: 'Է', name: 'ē',
      pronUk: 'як «е», завжди чисте',
      pronRu: 'как «э», всегда чистое',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/%D4%B7_handwritten.svg',
    },
    {
      lower: 'ը', upper: 'Ը', name: 'ët',
      pronUk: 'короткий нейтральний звук',
      pronRu: 'короткий нейтральный звук',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/%D4%B8_handwritten.svg',
    },
    {
      lower: 'թ', upper: 'Թ', name: 'tʼo',
      pronUk: 'придиховий «т»',
      pronRu: 'придыхательное «т»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/%D4%B9_handwritten.svg',
    },
    {
      lower: 'ժ', upper: 'Ժ', name: 'že',
      pronUk: 'як «ж»',
      pronRu: 'как «ж»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/%D4%BA_handwritten.svg',
    },
    {
      lower: 'ի', upper: 'Ի', name: 'ini',
      pronUk: 'як «і»',
      pronRu: 'как «и»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/%D4%BB_handwritten.svg',
    },
    {
      lower: 'լ', upper: 'Լ', name: 'lyun',
      pronUk: 'як «л»',
      pronRu: 'как «л»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/%D4%BC_handwritten.svg',
    },
    {
      lower: 'խ', upper: 'Խ', name: 'xe',
      pronUk: 'як «х»',
      pronRu: 'как «х»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/%D4%BD_handwritten.svg',
    },
    {
      lower: 'ծ', upper: 'Ծ', name: 'tsa',
      pronUk: 'як «ц», без придиху',
      pronRu: 'как «ц», без придыхания',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/81/%D4%BE_handwritten.svg',
    },
    {
      lower: 'կ', upper: 'Կ', name: 'ken',
      pronUk: 'як «к»',
      pronRu: 'как «к»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/%D4%BF_handwritten.svg',
    },
    {
      lower: 'հ', upper: 'Հ', name: 'ho',
      pronUk: 'як англ. «h»',
      pronRu: 'как англ. «h»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/%D5%80_handwritten.svg',
    },
    {
      lower: 'ձ', upper: 'Ձ', name: 'ja',
      pronUk: 'як «дз»',
      pronRu: 'как «дз»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/%D5%81_handwritten.svg',
    },
    {
      lower: 'ղ', upper: 'Ղ', name: 'ġat',
      pronUk: 'гортанне «ґх» (як фр. r)',
      pronRu: 'гортанное «гх» (как фр. r)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/12/%D5%82_handwritten.svg',
    },
    {
      lower: 'ճ', upper: 'Ճ', name: 'če',
      pronUk: 'як «ч» (твердий)',
      pronRu: 'как «ч» (твёрдый)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/%D5%83_handwritten.svg',
    },
    {
      lower: 'մ', upper: 'Մ', name: 'men',
      pronUk: 'як «м»',
      pronRu: 'как «м»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%D5%84_handwritten.svg',
    },
    {
      lower: 'յ', upper: 'Յ', name: 'yi',
      pronUk: 'як «й»',
      pronRu: 'как «й»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/78/%D5%85_handwritten.svg',
    },
    {
      lower: 'ն', upper: 'Ն', name: 'nu',
      pronUk: 'як «н»',
      pronRu: 'как «н»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/92/%D5%86_handwritten.svg',
    },
    {
      lower: 'շ', upper: 'Շ', name: 'ša',
      pronUk: 'як «ш»',
      pronRu: 'как «ш»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/%D5%87_handwritten.svg',
    },
    {
      lower: 'ո', upper: 'Ո', name: 'vo',
      pronUk: 'як «о»; на початку слова — «во»',
      pronRu: 'как «о»; в начале слова — «во»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/%D5%88_handwritten.svg',
    },
    {
      lower: 'չ', upper: 'Չ', name: 'čʼa',
      pronUk: 'як «ч» з придихом',
      pronRu: 'как «ч» с придыханием',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/%D5%89_handwritten.svg',
    },
    {
      lower: 'պ', upper: 'Պ', name: 'pe',
      pronUk: 'як «п»',
      pronRu: 'как «п»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/%D5%8A_handwritten.svg',
    },
    {
      lower: 'ջ', upper: 'Ջ', name: 'ǰe',
      pronUk: 'як «дж»',
      pronRu: 'как «дж»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/%D5%8B_handwritten.svg',
    },
    {
      lower: 'ռ', upper: 'Ռ', name: 'ṙa',
      pronUk: 'розкотисте «р»',
      pronRu: 'раскатистое «р»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/%D5%8C_handwritten.svg',
    },
    {
      lower: 'ս', upper: 'Ս', name: 'se',
      pronUk: 'як «с»',
      pronRu: 'как «с»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%D5%8D_handwritten.svg',
    },
    {
      lower: 'վ', upper: 'Վ', name: 'vev',
      pronUk: 'як «в»',
      pronRu: 'как «в»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/%D5%8E_handwritten.svg',
    },
    {
      lower: 'տ', upper: 'Տ', name: 'tyun',
      pronUk: 'як «т», без придиху',
      pronRu: 'как «т», без придыхания',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/%D5%8F_handwritten.svg',
    },
    {
      lower: 'ր', upper: 'Ր', name: 're',
      pronUk: 'м’яке «р» (як англ. r)',
      pronRu: 'мягкое «р» (как англ. r)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/%D5%90_handwritten.svg',
    },
    {
      lower: 'ց', upper: 'Ց', name: 'cʼo',
      pronUk: 'як «ц» з придихом',
      pronRu: 'как «ц» с придыханием',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/70/%D5%91_handwritten.svg',
    },
    {
      lower: 'ու', upper: 'Ու', name: 'u',
      pronUk: 'як «у» (диграф ո+ւ)',
      pronRu: 'как «у» (диграф ո+ւ)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/%D5%88%D6%82_handwritten.svg',
    },
    {
      lower: 'փ', upper: 'Փ', name: 'pʼyur',
      pronUk: 'придиховий «п»',
      pronRu: 'придыхательное «п»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/%D5%93_handwritten.svg',
    },
    {
      lower: 'ք', upper: 'Ք', name: 'kʼe',
      pronUk: 'придиховий «к»',
      pronRu: 'придыхательное «к»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/%D5%94_handwritten.svg',
    },
    {
      lower: 'օ', upper: 'Օ', name: 'ò',
      pronUk: 'чисте «о» (на початку слова та в запозиченнях)',
      pronRu: 'чистое «о» (в начале слова и заимствованиях)',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/%D5%95_handwritten.svg',
    },
    {
      lower: 'ֆ', upper: 'Ֆ', name: 'fe',
      pronUk: 'як «ф»',
      pronRu: 'как «ф»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/%D5%96_handwritten.svg',
    },
    {
      lower: 'և', upper: 'Եւ', name: 'yev',
      pronUk: 'лігатура «єв»/«ев» — означає сполучник «і»',
      pronRu: 'лигатура «йев»/«ев» — означает союз «и»',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/%D4%B5%D6%82_handwritten.svg',
    },
  ],
};
