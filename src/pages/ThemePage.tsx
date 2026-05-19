// src/pages/ThemePage.tsx
//
// Диспетчер по типу теми. Заголовок (з емодзі та лічильником) спільний.
// Тіло сторінки — окремий компонент-«view» для кожного kind.

import { useParams, Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import { findTheme } from '../content/themes';
import { plural } from '../i18n/plural';
import { LetterCard } from '../components/LetterCard';
import { WordCard } from '../components/WordCard';
import { NumeralsView } from './NumeralsView';

export function ThemePage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLang();
  const theme = slug ? findTheme(slug) : undefined;

  if (!theme) {
    return (
      <div>
        <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 mb-6">
          {t.pages.notFound}
        </h1>
        <Link to="/learn" className="text-apricot-600 font-semibold hover:underline">
          ← {t.nav.learn}
        </Link>
      </div>
    );
  }

  // Лічильник у заголовку
  const counter = (() => {
    if (theme.kind === 'alphabet') {
      const n = theme.letters.length;
      return `${n} ${plural(n, t.common.lettersForms)}`;
    }
    if (theme.kind === 'vocab') {
      const n = theme.words.length;
      return `${n} ${plural(n, t.common.cardForms)}`;
    }
    // numerals — показуємо сумарно
    const n = theme.digits.length + theme.rounds.length;
    return `${n} ${plural(n, t.common.cardForms)}`;
  })();

  return (
    <div>
      {/* Хлібні крихти */}
      <Link
        to="/learn"
        className="inline-flex items-center gap-1 text-sm text-ink-500 hover:text-ink-700 mb-6"
      >
        ← {t.nav.learn}
      </Link>

      {/* Заголовок теми */}
      <div className="flex items-center gap-4 mb-2">
        <div className="w-16 h-16 rounded-2xl grid place-items-center text-4xl bg-gradient-to-br from-apricot-100 to-pomegranate-100">
          {theme.emoji}
        </div>
        <div>
          <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 -tracking-[0.02em] leading-none">
            {theme.title[lang]}
            {theme.hyName && (
              <span className="font-hy text-apricot-500 ml-3 text-2xl">
                {theme.hyName}
              </span>
            )}
          </h1>
          <p className="text-ink-500 mt-1.5">{counter}</p>
        </div>
      </div>

      {/* Тіло — по типу теми */}
      {theme.kind === 'alphabet' && (
        <div className="mt-10 grid gap-5 auto-grid-240">
          {theme.letters.map((letter) => (
            <LetterCard key={letter.lower} letter={letter} lang={lang} />
          ))}
        </div>
      )}

      {theme.kind === 'vocab' && (
        <div className="mt-10 grid gap-5 auto-grid-280">
          {theme.words.map((word, idx) => (
            <WordCard key={`${word.hy}-${idx}`} word={word} lang={lang} />
          ))}
        </div>
      )}

      {theme.kind === 'numerals' && <NumeralsView theme={theme} />}
    </div>
  );
}