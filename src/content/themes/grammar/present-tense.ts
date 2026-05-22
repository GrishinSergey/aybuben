// src/content/themes/grammar/present-tense.ts
// verified: false — вміст додано Claude, потребує перевірки носієм мови.

import type { GrammarRule } from '../../types';

export const presentTense: GrammarRule = {
  slug: 'present-tense',
  emoji: '⏱️',
  title: { uk: 'Теперішній час', ru: 'Настоящее время' },
  intro: {
    uk: 'Теперішній час описує дію, що триває зараз, або звичну, повторювану дію. Утворюється аналітично: дієприкметник теперішнього часу на -ում плюс допоміжне дієслово в теперішньому часі.',
    ru: 'Настоящее время описывает действие, которое длится сейчас, или привычное, повторяющееся действие. Образуется аналитически: причастие настоящего времени на -ում плюс вспомогательный глагол в настоящем времени.',
  },
  points: [
    {
      form: '-ում',
      label: { uk: 'Дієприкметник на -ում', ru: 'Причастие на -ում' },
      description: {
        uk: 'Відкидаємо -ել / -ալ від інфінітива й додаємо -ում: սիրել → սիրում.',
        ru: 'Отбрасываем -ել / -ալ от инфинитива и добавляем -ում: սիրել → սիրում.',
      },
    },
    {
      label: { uk: 'Плюс допоміжне дієслово', ru: 'Плюс вспомогательный глагол' },
      description: {
        uk: 'До дієприкметника додається теперішня форма «бути» за особою та числом.',
        ru: 'К причастию добавляется настоящая форма «быть» по лицу и числу.',
      },
    },
    {
      label: { uk: 'Що виражає', ru: 'Что выражает' },
      description: {
        uk: 'І дію в процесі («читаю зараз»), і звичну дію («читаю щодня»).',
        ru: 'И действие в процессе («читаю сейчас»), и привычное действие («читаю каждый день»).',
      },
    },
  ],
  tables: [
    {
      caption: {
        uk: 'Теперішній час: սիրել (любити), հասկանալ (розуміти)',
        ru: 'Настоящее время: սիրել (любить), հասկանալ (понимать)',
      },
      columns: [
        { uk: 'սիրել', ru: 'սիրել' },
        { uk: 'հասկանալ', ru: 'հասկանալ' },
      ],
      rows: [
        { header: { uk: 'я', ru: 'я' }, cells: [{ hy: 'սիրում եմ', translit: 'sirum em' }, { hy: 'հասկանում եմ', translit: 'haskanum em' }] },
        { header: { uk: 'ти', ru: 'ты' }, cells: [{ hy: 'սիրում ես', translit: 'sirum es' }, { hy: 'հասկանում ես', translit: 'haskanum es' }] },
        { header: { uk: 'він / вона', ru: 'он / она' }, cells: [{ hy: 'սիրում է', translit: 'sirum e' }, { hy: 'հասկանում է', translit: 'haskanum e' }] },
        { header: { uk: 'ми', ru: 'мы' }, cells: [{ hy: 'սիրում ենք', translit: 'sirum enk' }, { hy: 'հասկանում ենք', translit: 'haskanum enk' }] },
        { header: { uk: 'ви', ru: 'вы' }, cells: [{ hy: 'սիրում եք', translit: 'sirum ek' }, { hy: 'հասկանում եք', translit: 'haskanum ek' }] },
        { header: { uk: 'вони', ru: 'они' }, cells: [{ hy: 'սիրում են', translit: 'sirum en' }, { hy: 'հասկանում են', translit: 'haskanum en' }] },
      ],
      verified: false,
    },
  ],
  groups: [
    {
      caseForm: '-ում',
      label: { uk: 'Теперішній час у реченні', ru: 'Настоящее время в предложении' },
      examples: [
        {
          hy: 'Նա գիրք է կարդում։',
          translit: 'Na girk e kardum.',
          uk: 'Він читає книгу.',
          ru: 'Он читает книгу.',
          verified: false,
        },
        {
          hy: 'Երեխաները խաղում են բակում։',
          translit: 'Yerekhanere khaghum en bakum.',
          uk: 'Діти граються у дворі.',
          ru: 'Дети играют во дворе.',
          verified: false,
        },
        {
          hy: 'Ես ամեն օր հայերեն եմ սովորում։',
          translit: 'Yes amen or hayeren em sovorum.',
          uk: 'Я щодня вивчаю вірменську.',
          ru: 'Я каждый день учу армянский.',
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
      title: 'Armenian verb tenses explained — Preply',
      url: 'https://preply.com/en/blog/armenian-verb-tenses/',
    },
    {
      title: 'Armenian Verbs — LingQ Armenian Grammar Guide',
      url: 'https://www.lingq.com/en/grammar-resource/armenian/verbs/',
    },
  ],
};
