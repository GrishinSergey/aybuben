// src/content/themes/grammar/personal-pronouns.ts
// verified: false — вміст додано Claude, потребує перевірки носієм мови.

import type { GrammarRule } from '../../types';

export const personalPronouns: GrammarRule = {
  slug: 'personal-pronouns',
  emoji: '👤',
  title: { uk: 'Особові займенники', ru: 'Личные местоимения' },
  intro: {
    uk: 'Особові займенники вказують на учасників мовлення. У вірменській три особи й два числа; роду немає, тож «він», «вона» і «воно» — це один займенник նա. Займенники відмінюються; їхній родовий відмінок збігається з присвійними формами «мій, твій…» і служить основою для дієвідмінювання.',
    ru: 'Личные местоимения указывают на участников речи. В армянском три лица и два числа; рода нет, поэтому «он», «она» и «оно» — это одно местоимение նա. Местоимения склоняются; их родительный падеж совпадает с притяжательными формами «мой, твой…» и служит основой для спряжения.',
  },
  points: [
    {
      label: { uk: 'Три особи, два числа', ru: 'Три лица, два числа' },
      description: {
        uk: 'ես / դու / նա в однині, մենք / դուք / նրանք у множині. դուք — також ввічливе звертання до однієї особи.',
        ru: 'ես / դու / նա в единственном, մենք / դուք / նրանք во множественном. դուք — также вежливое обращение к одному человеку.',
      },
    },
    {
      label: { uk: 'Немає роду', ru: 'Нет рода' },
      description: {
        uk: 'Займенник նա означає «він», «вона» і «воно» одночасно — рід підказує лише контекст.',
        ru: 'Местоимение նա означает «он», «она» и «оно» одновременно — род подсказывает только контекст.',
      },
    },
    {
      label: { uk: 'Родовий = присвійний', ru: 'Родительный = притяжательный' },
      description: {
        uk: 'Форми իմ, քո, նրա, մեր, ձեր, նրանց — це родовий відмінок займенників; вони ж виступають присвійними «мій, твій, його…».',
        ru: 'Формы իմ, քո, նրա, մեր, ձեր, նրանց — это родительный падеж местоимений; они же выступают притяжательными «мой, твой, его…».',
      },
    },
  ],
  tables: [
    {
      caption: { uk: 'Особові займенники: основні форми', ru: 'Личные местоимения: основные формы' },
      columns: [
        { uk: 'Називний', ru: 'Именительный' },
        { uk: 'Родовий (присвійний)', ru: 'Родительный (притяж.)' },
        { uk: 'Дав. / знах.', ru: 'Дат. / вин.' },
      ],
      rows: [
        {
          header: { uk: '1 ос. одн. — я', ru: '1 л. ед. — я' },
          cells: [
            { hy: 'ես', translit: 'yes' },
            { hy: 'իմ', translit: 'im' },
            { hy: 'ինձ', translit: 'indz' },
          ],
        },
        {
          header: { uk: '2 ос. одн. — ти', ru: '2 л. ед. — ты' },
          cells: [
            { hy: 'դու', translit: 'du' },
            { hy: 'քո', translit: 'ko' },
            { hy: 'քեզ', translit: 'kez' },
          ],
        },
        {
          header: { uk: '3 ос. одн. — він/вона', ru: '3 л. ед. — он/она' },
          cells: [
            { hy: 'նա', translit: 'na' },
            { hy: 'նրա', translit: 'nra' },
            { hy: 'նրան', translit: 'nran' },
          ],
        },
        {
          header: { uk: '1 ос. мн. — ми', ru: '1 л. мн. — мы' },
          cells: [
            { hy: 'մենք', translit: 'menk' },
            { hy: 'մեր', translit: 'mer' },
            { hy: 'մեզ', translit: 'mez' },
          ],
        },
        {
          header: { uk: '2 ос. мн. — ви', ru: '2 л. мн. — вы' },
          cells: [
            { hy: 'դուք', translit: 'duk' },
            { hy: 'ձեր', translit: 'dzer' },
            { hy: 'ձեզ', translit: 'dzez' },
          ],
        },
        {
          header: { uk: '3 ос. мн. — вони', ru: '3 л. мн. — они' },
          cells: [
            { hy: 'նրանք', translit: 'nrank' },
            { hy: 'նրանց', translit: 'nrants' },
            { hy: 'նրանց', translit: 'nrants' },
          ],
        },
      ],
      verified: false,
    },
  ],
  groups: [
    {
      caseForm: 'Ուղղ.',
      label: { uk: 'Займенники в реченні', ru: 'Местоимения в предложении' },
      examples: [
        {
          hy: 'Ես ուսանող եմ։',
          translit: 'Yes usanogh em.',
          uk: 'Я студент.',
          ru: 'Я студент.',
          verified: false,
        },
        {
          hy: 'Դու հայերեն գիտես։',
          translit: 'Du hayeren gites.',
          uk: 'Ти знаєш вірменську.',
          ru: 'Ты знаешь армянский.',
          verified: false,
        },
        {
          hy: 'Նա մեր ընկերն է։',
          translit: 'Na mer enkern e.',
          uk: 'Він наш друг.',
          ru: 'Он наш друг.',
          verified: false,
        },
        {
          hy: 'Մենք միասին ենք սովորում։',
          translit: 'Menk miasin enk sovorum.',
          uk: 'Ми навчаємося разом.',
          ru: 'Мы учимся вместе.',
          verified: false,
        },
      ],
    },
  ],
  sources: [
    {
      title: 'Eastern Armenian — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Eastern_Armenian',
    },
    {
      title: 'Armenian Pronouns — LingQ Armenian Grammar Guide',
      url: 'https://www.lingq.com/en/grammar-resource/armenian/pronouns/',
    },
    {
      title: 'Armenian grammar — Wikibooks',
      url: 'https://en.wikibooks.org/wiki/Armenian/Grammar',
    },
  ],
};
