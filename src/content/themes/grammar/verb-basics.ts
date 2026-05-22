// src/content/themes/grammar/verb-basics.ts
// verified: false — вміст додано Claude, потребує перевірки носієм мови.

import type { GrammarRule } from '../../types';

export const verbBasics: GrammarRule = {
  slug: 'verb-basics',
  emoji: '🛠️',
  title: { uk: 'Дієслово: основи та класи', ru: 'Глагол: основы и классы' },
  intro: {
    uk: 'Вірменське дієслово не має роду — воно змінюється за особами (я / ти / він) та числами (однина / множина). Словникова форма — інфінітив, що закінчується на -ել або -ալ; від цього закінчення залежить уся подальша зміна. Складені часи будуються за допомогою дієприкметника та допоміжного дієслова «бути».',
    ru: 'Армянский глагол не имеет рода — он изменяется по лицам (я / ты / он) и числам (единственное / множественное). Словарная форма — инфинитив, оканчивающийся на -ել или -ալ; от этого окончания зависит всё дальнейшее изменение. Сложные времена строятся с помощью причастия и вспомогательного глагола «быть».',
  },
  points: [
    {
      form: '-ել',
      label: { uk: 'Клас -ել', ru: 'Класс -ել' },
      description: {
        uk: 'Інфінітив на -ել. Приклади: սիրել («любити»), գրել («писати»).',
        ru: 'Инфинитив на -ել. Примеры: սիրել («любить»), գրել («писать»).',
      },
    },
    {
      form: '-ալ',
      label: { uk: 'Клас -ալ', ru: 'Класс -ալ' },
      description: {
        uk: 'Інфінітив на -ալ. Приклади: հասկանալ («розуміти»), խաղալ («гратися»).',
        ru: 'Инфинитив на -ալ. Примеры: հասկանալ («понимать»), խաղալ («играть»).',
      },
    },
    {
      label: { uk: 'Особа й число', ru: 'Лицо и число' },
      description: {
        uk: 'Кожен час має шість форм — три особи в однині й множині. Граматичного роду немає.',
        ru: 'Каждое время имеет шесть форм — три лица в единственном и множественном числе. Грамматического рода нет.',
      },
    },
  ],
  tables: [
    {
      caption: { uk: 'Допоміжне дієслово «бути»', ru: 'Вспомогательный глагол «быть»' },
      columns: [
        { uk: 'Теперішній', ru: 'Настоящее' },
        { uk: 'Минулий', ru: 'Прошедшее' },
      ],
      rows: [
        { header: { uk: 'я', ru: 'я' }, cells: [{ hy: 'եմ', translit: 'em' }, { hy: 'էի', translit: 'ei' }] },
        { header: { uk: 'ти', ru: 'ты' }, cells: [{ hy: 'ես', translit: 'es' }, { hy: 'էիր', translit: 'eir' }] },
        { header: { uk: 'він / вона', ru: 'он / она' }, cells: [{ hy: 'է', translit: 'e' }, { hy: 'էր', translit: 'er' }] },
        { header: { uk: 'ми', ru: 'мы' }, cells: [{ hy: 'ենք', translit: 'enk' }, { hy: 'էինք', translit: 'eink' }] },
        { header: { uk: 'ви', ru: 'вы' }, cells: [{ hy: 'եք', translit: 'ek' }, { hy: 'էիք', translit: 'eik' }] },
        { header: { uk: 'вони', ru: 'они' }, cells: [{ hy: 'են', translit: 'en' }, { hy: 'էին', translit: 'ein' }] },
      ],
      verified: false,
    },
  ],
  groups: [
    {
      caseForm: 'է',
      label: { uk: 'Допоміжне як зв’язка', ru: 'Вспомогательный как связка' },
      examples: [
        {
          hy: 'Նա բժիշկ է։',
          translit: 'Na bzhishk e.',
          uk: 'Він лікар.',
          ru: 'Он врач.',
          verified: false,
        },
        {
          hy: 'Մենք ընկերներ ենք։',
          translit: 'Menk enkerner enk.',
          uk: 'Ми друзі.',
          ru: 'Мы друзья.',
          verified: false,
        },
      ],
    },
    {
      caseForm: 'ինֆ.',
      label: { uk: 'Інфінітив як додаток', ru: 'Инфинитив как дополнение' },
      examples: [
        {
          hy: 'Ես սիրում եմ կարդալ։',
          translit: 'Yes sirum em kardal.',
          uk: 'Я люблю читати.',
          ru: 'Я люблю читать.',
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
      title: 'Eastern Armenian verb table — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Eastern_Armenian_verb_table',
    },
    {
      title: 'Armenian Verbs — LingQ Armenian Grammar Guide',
      url: 'https://www.lingq.com/en/grammar-resource/armenian/verbs/',
    },
  ],
};
