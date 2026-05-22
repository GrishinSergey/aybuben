// src/content/themes/grammar/past-imperfect.ts
// verified: false — вміст додано Claude, потребує перевірки носієм мови.

import type { GrammarRule } from '../../types';

export const pastImperfect: GrammarRule = {
  slug: 'past-imperfect',
  emoji: '⏳',
  title: { uk: 'Минулий недоконаний', ru: 'Прошедшее несовершенное' },
  intro: {
    uk: 'Минулий недоконаний час описує тривалу або повторювану дію в минулому — «робив», «робив колись». Будується так само, як теперішній: дієприкметник на -ում, але з допоміжним дієсловом у минулому часі.',
    ru: 'Прошедшее несовершенное время описывает длительное или повторяющееся действие в прошлом — «делал», «бывало делал». Строится так же, как настоящее: причастие на -ում, но со вспомогательным глаголом в прошедшем времени.',
  },
  points: [
    {
      form: '-ում',
      label: { uk: 'Той самий дієприкметник', ru: 'То же причастие' },
      description: {
        uk: 'Дієприкметник на -ում — точно як у теперішньому часі.',
        ru: 'Причастие на -ում — точно как в настоящем времени.',
      },
    },
    {
      label: { uk: 'Минуле допоміжне', ru: 'Прошедшее вспомогательное' },
      description: {
        uk: 'Замість теперішніх форм «бути» додаються минулі: я — էի, ти — էիր, він — էր…',
        ru: 'Вместо настоящих форм «быть» добавляются прошедшие: я — էի, ты — էիր, он — էր…',
      },
    },
    {
      label: { uk: 'Що виражає', ru: 'Что выражает' },
      description: {
        uk: 'Тривалу дію в минулому або звичку: «я читав», «я читав щовечора».',
        ru: 'Длительное действие в прошлом или привычку: «я читал», «я читал каждый вечер».',
      },
    },
  ],
  tables: [
    {
      caption: {
        uk: 'Минулий недоконаний: սիրել (любити), հասկանալ (розуміти)',
        ru: 'Прошедшее несовершенное: սիրել (любить), հասկանալ (понимать)',
      },
      columns: [
        { uk: 'սիրել', ru: 'սիրել' },
        { uk: 'հասկանալ', ru: 'հասկանալ' },
      ],
      rows: [
        { header: { uk: 'я', ru: 'я' }, cells: [{ hy: 'սիրում էի', translit: 'sirum ei' }, { hy: 'հասկանում էի', translit: 'haskanum ei' }] },
        { header: { uk: 'ти', ru: 'ты' }, cells: [{ hy: 'սիրում էիր', translit: 'sirum eir' }, { hy: 'հասկանում էիր', translit: 'haskanum eir' }] },
        { header: { uk: 'він / вона', ru: 'он / она' }, cells: [{ hy: 'սիրում էր', translit: 'sirum er' }, { hy: 'հասկանում էր', translit: 'haskanum er' }] },
        { header: { uk: 'ми', ru: 'мы' }, cells: [{ hy: 'սիրում էինք', translit: 'sirum eink' }, { hy: 'հասկանում էինք', translit: 'haskanum eink' }] },
        { header: { uk: 'ви', ru: 'вы' }, cells: [{ hy: 'սիրում էիք', translit: 'sirum eik' }, { hy: 'հասկանում էիք', translit: 'haskanum eik' }] },
        { header: { uk: 'вони', ru: 'они' }, cells: [{ hy: 'սիրում էին', translit: 'sirum ein' }, { hy: 'հասկանում էին', translit: 'haskanum ein' }] },
      ],
      verified: false,
    },
  ],
  groups: [
    {
      caseForm: '-ում + էի',
      label: { uk: 'Минулий недоконаний у реченні', ru: 'Прошедшее несовершенное в предложении' },
      examples: [
        {
          hy: 'Նա դպրոցում սովորում էր։',
          translit: 'Na dprotsum sovorum er.',
          uk: 'Він навчався у школі.',
          ru: 'Он учился в школе.',
          verified: false,
        },
        {
          hy: 'Մենք միասին խաղում էինք։',
          translit: 'Menk miasin khaghum eink.',
          uk: 'Ми гралися разом.',
          ru: 'Мы играли вместе.',
          verified: false,
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Armenian verbs — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Armenian_verbs',
    },
    {
      title: 'Past tense in Armenian Grammar — Talkpal',
      url: 'https://talkpal.ai/grammar/past-tense-in-armenian-grammar/',
    },
    {
      title: 'Armenian Verbs — LingQ Armenian Grammar Guide',
      url: 'https://www.lingq.com/en/grammar-resource/armenian/verbs/',
    },
  ],
};
