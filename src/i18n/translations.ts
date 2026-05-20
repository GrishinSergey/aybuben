// src/i18n/translations.ts
//
// Єдине джерело UI-перекладів. UI лише uk/ru.
// Latin (en) використовується тільки для транслітерації вірменських слів,
// тому в i18n її немає.

export type Lang = 'uk' | 'ru';

export const translations = {
  uk: {
    appName: 'Aybuben',
    nav: {
      learn: 'Навчання',
      tests: 'Тести',
    },
    pages: {
      learn: {
        title: 'Навчання',
        subtitle: 'Обери тему, з якої хочеш почати',
      },
      tests: {
        title: 'Тести',
        subtitle: 'Перевір себе на пройденому матеріалі',
      },
      topic: {
        wordsHeader: 'Слова теми',
        passageHeader: 'Текст для читання',
      },
      grammar: {
        examplesHeader: 'Приклади',
        sourcesHeader: 'Джерела',
        unverified: 'Не перевірено',
        backToGrammar: '← Граматика',
        ruleForms: ['правило', 'правила', 'правил'] as [string, string, string],
      },
      notFound: 'Тему не знайдено',
    },
    common: {
      comingSoon: 'Скоро',
      switchLanguage: 'Перемкнути мову',
      cardForms: ['слово', 'слова', 'слів'] as [string, string, string],
      lettersForms: ['літера', 'літери', 'літер'] as [string, string, string],
    },
    topics: {
      alphabet: { title: 'Алфавіт' },
      grammar: { title: 'Граматика' },
    },
  },

  ru: {
    appName: 'Aybuben',
    nav: {
      learn: 'Обучение',
      tests: 'Тесты',
    },
    pages: {
      learn: {
        title: 'Обучение',
        subtitle: 'Выбери тему, с которой хочешь начать',
      },
      tests: {
        title: 'Тесты',
        subtitle: 'Проверь себя на пройденном материале',
      },
      topic: {
        wordsHeader: 'Слова темы',
        passageHeader: 'Текст для чтения',
      },
      grammar: {
        examplesHeader: 'Примеры',
        sourcesHeader: 'Источники',
        unverified: 'Не проверено',
        backToGrammar: '← Грамматика',
        ruleForms: ['правило', 'правила', 'правил'] as [string, string, string],
      },
      notFound: 'Тема не найдена',
    },
    common: {
      comingSoon: 'Скоро',
      switchLanguage: 'Переключить язык',
      cardForms: ['слово', 'слова', 'слов'] as [string, string, string],
      lettersForms: ['буква', 'буквы', 'букв'] as [string, string, string],
    },
    topics: {
      alphabet: { title: 'Алфавит' },
      grammar: { title: 'Грамматика' },
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];