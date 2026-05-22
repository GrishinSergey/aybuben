// src/content/themes/grammar/aorist.ts
// verified: false — вміст додано Claude, потребує перевірки носієм мови.

import type { GrammarRule } from '../../types';

export const aorist: GrammarRule = {
  slug: 'aorist',
  emoji: '⏪',
  title: { uk: 'Аорист (простий минулий)', ru: 'Аорист (простое прошедшее)' },
  intro: {
    uk: 'Аорист — простий минулий, доконаний час: описує завершену дію в минулому («зробив»). На відміну від інших часів, це синтетична форма — без допоміжного дієслова. До основи додається суфікс і особові закінчення.',
    ru: 'Аорист — простое прошедшее, совершенное время: описывает завершённое действие в прошлом («сделал»). В отличие от других времён, это синтетическая форма — без вспомогательного глагола. К основе добавляется суффикс и личные окончания.',
  },
  points: [
    {
      form: '-եց-',
      label: { uk: 'Клас -ել', ru: 'Класс -ել' },
      description: {
        uk: 'Дієслова на -ել беруть суфікс -եց-: սիրել → սիրեցի, սիրեցիր, սիրեց…',
        ru: 'Глаголы на -ել берут суффикс -եց-: սիրել → սիրեցի, սիրեցիր, սիրեց…',
      },
    },
    {
      form: '-աց-',
      label: { uk: 'Клас -ալ', ru: 'Класс -ալ' },
      description: {
        uk: 'Дієслова на -ալ беруть суфікс -աց-: խաղալ → խաղացի, խաղացիր, խաղաց…',
        ru: 'Глаголы на -ալ берут суффикс -աց-: խաղալ → խաղացի, խաղացիր, խաղաց…',
      },
    },
    {
      label: { uk: 'Неправильні аористи', ru: 'Неправильные аористы' },
      description: {
        uk: 'Багато вживаних дієслів мають особливий аорист: գալ → եկա («прийшов»), տալ → տվեց («дав»), հասկանալ → հասկացավ («зрозумів»).',
        ru: 'Многие употребительные глаголы имеют особый аорист: գալ → եկա («пришёл»), տալ → տվեց («дал»), հասկանալ → հասկացավ («понял»).',
      },
    },
  ],
  tables: [
    {
      caption: {
        uk: 'Аорист: սիրել (любити), խաղալ (гратися)',
        ru: 'Аорист: սիրել (любить), խաղալ (играть)',
      },
      columns: [
        { uk: 'սիրել', ru: 'սիրել' },
        { uk: 'խաղալ', ru: 'խաղալ' },
      ],
      rows: [
        { header: { uk: 'я', ru: 'я' }, cells: [{ hy: 'սիրեցի', translit: 'siretsi' }, { hy: 'խաղացի', translit: 'khaghatsi' }] },
        { header: { uk: 'ти', ru: 'ты' }, cells: [{ hy: 'սիրեցիր', translit: 'siretsir' }, { hy: 'խաղացիր', translit: 'khaghatsir' }] },
        { header: { uk: 'він / вона', ru: 'он / она' }, cells: [{ hy: 'սիրեց', translit: 'sirets' }, { hy: 'խաղաց', translit: 'khaghats' }] },
        { header: { uk: 'ми', ru: 'мы' }, cells: [{ hy: 'սիրեցինք', translit: 'siretsink' }, { hy: 'խաղացինք', translit: 'khaghatsink' }] },
        { header: { uk: 'ви', ru: 'вы' }, cells: [{ hy: 'սիրեցիք', translit: 'siretsik' }, { hy: 'խաղացիք', translit: 'khaghatsik' }] },
        { header: { uk: 'вони', ru: 'они' }, cells: [{ hy: 'սիրեցին', translit: 'siretsin' }, { hy: 'խաղացին', translit: 'khaghatsin' }] },
      ],
      verified: false,
    },
  ],
  groups: [
    {
      caseForm: '-եց- / -աց-',
      label: { uk: 'Аорист у реченні', ru: 'Аорист в предложении' },
      examples: [
        {
          hy: 'Ես երեկ նամակ գրեցի։',
          translit: 'Yes yerek namak gretsi.',
          uk: 'Я вчора написав листа.',
          ru: 'Я вчера написал письмо.',
          verified: false,
        },
        {
          hy: 'Նա հասկացավ ամեն ինչ։',
          translit: 'Na haskatsav amen inch.',
          uk: 'Він зрозумів усе.',
          ru: 'Он понял всё.',
          verified: false,
        },
        {
          hy: 'Մենք խաղացինք պարտեզում։',
          translit: 'Menk khaghatsink partezum.',
          uk: 'Ми гралися в саду.',
          ru: 'Мы играли в саду.',
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
      title: 'Eastern Armenian verb table — Wikipedia',
      url: 'https://en.wikipedia.org/wiki/Eastern_Armenian_verb_table',
    },
  ],
};
