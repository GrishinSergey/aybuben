// src/content/themes/grammar/future-tense.ts
// verified: false — вміст додано Claude, потребує перевірки носієм мови.

import type { GrammarRule } from '../../types';

export const futureTense: GrammarRule = {
  slug: 'future-tense',
  emoji: '⏩',
  title: { uk: 'Майбутній час', ru: 'Будущее время' },
  intro: {
    uk: 'У вірменській два майбутні часи. Основний — з префіксом կ-, що приєднується до форм кон’юнктива. Другий — аналітичний: інфінітив + -ու + допоміжне дієслово; він означає намір або заплановану дію.',
    ru: 'В армянском два будущих времени. Основное — с префиксом կ-, который присоединяется к формам сослагательного наклонения. Второе — аналитическое: инфинитив + -ու + вспомогательный глагол; оно означает намерение или запланированное действие.',
  },
  points: [
    {
      form: 'կ-',
      label: { uk: 'Майбутній з կ-', ru: 'Будущее с կ-' },
      description: {
        uk: 'Префікс կ- + форма кон’юнктива: սիրել → կսիրեմ, կսիրես… Основний спосіб сказати «зроблю».',
        ru: 'Префикс կ- + форма сослагательного: սիրել → կսիրեմ, կսիրես… Основной способ сказать «сделаю».',
      },
    },
    {
      form: '-ու',
      label: { uk: 'Майбутній з -ու', ru: 'Будущее с -ու' },
      description: {
        uk: 'Інфінітив + -ու + допоміжне дієслово: սիրելու եմ. Виражає намір, заплановану дію.',
        ru: 'Инфинитив + -ու + вспомогательный глагол: սիրելու եմ. Выражает намерение, запланированное действие.',
      },
    },
    {
      label: { uk: 'Яку форму обрати', ru: 'Какую форму выбрать' },
      description: {
        uk: 'Форма з կ — нейтральне майбутнє; форма з -ու підкреслює намір чи план.',
        ru: 'Форма с կ — нейтральное будущее; форма с -ու подчёркивает намерение или план.',
      },
    },
  ],
  tables: [
    {
      caption: {
        uk: 'Майбутній з կ-: սիրել (любити), հասկանալ (розуміти)',
        ru: 'Будущее с կ-: սիրել (любить), հասկանալ (понимать)',
      },
      columns: [
        { uk: 'սիրել', ru: 'սիրել' },
        { uk: 'հասկանալ', ru: 'հասկանալ' },
      ],
      rows: [
        { header: { uk: 'я', ru: 'я' }, cells: [{ hy: 'կսիրեմ', translit: 'ksirem' }, { hy: 'կհասկանամ', translit: 'khaskanam' }] },
        { header: { uk: 'ти', ru: 'ты' }, cells: [{ hy: 'կսիրես', translit: 'ksires' }, { hy: 'կհասկանաս', translit: 'khaskanas' }] },
        { header: { uk: 'він / вона', ru: 'он / она' }, cells: [{ hy: 'կսիրի', translit: 'ksiri' }, { hy: 'կհասկանա', translit: 'khaskana' }] },
        { header: { uk: 'ми', ru: 'мы' }, cells: [{ hy: 'կսիրենք', translit: 'ksirenk' }, { hy: 'կհասկանանք', translit: 'khaskanank' }] },
        { header: { uk: 'ви', ru: 'вы' }, cells: [{ hy: 'կսիրեք', translit: 'ksirek' }, { hy: 'կհասկանաք', translit: 'khaskanak' }] },
        { header: { uk: 'вони', ru: 'они' }, cells: [{ hy: 'կսիրեն', translit: 'ksiren' }, { hy: 'կհասկանան', translit: 'khaskanan' }] },
      ],
      verified: false,
    },
  ],
  groups: [
    {
      caseForm: 'կ-',
      label: { uk: 'Майбутній час у реченні', ru: 'Будущее время в предложении' },
      examples: [
        {
          hy: 'Վաղը ես կկարդամ այս գիրքը։',
          translit: 'Vaghe yes kkardam ays girke.',
          uk: 'Завтра я прочитаю цю книгу.',
          ru: 'Завтра я прочитаю эту книгу.',
          verified: false,
        },
        {
          hy: 'Նա կգա վաղը։',
          translit: 'Na kga vaghe.',
          uk: 'Він прийде завтра.',
          ru: 'Он придёт завтра.',
          verified: false,
        },
        {
          hy: 'Մենք հայերեն կսովորենք։',
          translit: 'Menk hayeren ksovorenk.',
          uk: 'Ми вивчимо вірменську.',
          ru: 'Мы выучим армянский.',
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
      title: 'Eastern Armenian verb table — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Eastern_Armenian_verb_table',
    },
  ],
};
