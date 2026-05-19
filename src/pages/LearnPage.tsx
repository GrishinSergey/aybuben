// src/pages/LearnPage.tsx

import { useLang } from '../i18n/LangContext';
import { TopicCard } from '../components/TopicCard';
import { alphabetThemes, vocabThemes, numeralsThemes } from '../content/themes';
import { plural } from '../i18n/plural';

export function LearnPage() {
  const { t, lang } = useLang();

  return (
    <div>
      <h1 className="font-display vf-soft-hi font-semibold text-5xl text-ink-900 -tracking-[0.02em] mb-3">
        <span className="font-hy text-apricot-500">Բարև</span>! {t.pages.learn.title}
      </h1>
      <p className="text-ink-500 text-lg mb-12 max-w-[640px]">
        {t.pages.learn.subtitle}
      </p>

      <div className="grid gap-5 auto-grid-240">
        {/* Алфавіт */}
        {alphabetThemes.map((theme) => {
          const count = theme.letters.length;
          return (
            <TopicCard
              key={theme.slug}
              emoji={theme.emoji}
              title={theme.title[lang]}
              hyName={theme.hyName}
              countLabel={`${count} ${plural(count, t.common.lettersForms)}`}
              href={`/learn/topic/${theme.slug}`}
            />
          );
        })}

        {/* Граматика — заглушка */}
        <TopicCard
          emoji="📖"
          title={t.topics.grammar.title}
          disabled
        />

        {/* Числа */}
        {numeralsThemes.map((theme) => {
          const count = theme.digits.length + theme.rounds.length;
          return (
            <TopicCard
              key={theme.slug}
              emoji={theme.emoji}
              title={theme.title[lang]}
              hyName={theme.hyName}
              countLabel={`${count} ${plural(count, t.common.cardForms)}`}
              href={`/learn/topic/${theme.slug}`}
            />
          );
        })}

        {/* Інша лексика */}
        {vocabThemes.map((theme) => {
          const count = theme.words.length;
          return (
            <TopicCard
              key={theme.slug}
              emoji={theme.emoji}
              title={theme.title[lang]}
              hyName={theme.hyName}
              countLabel={`${count} ${plural(count, t.common.cardForms)}`}
              href={`/learn/topic/${theme.slug}`}
            />
          );
        })}
      </div>
    </div>
  );
}