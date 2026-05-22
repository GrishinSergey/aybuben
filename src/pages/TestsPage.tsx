// src/pages/TestsPage.tsx

import { useLang } from '../i18n/LangContext';
import { TopicCard } from '../components/TopicCard';
import { quizzes } from '../content/quiz';

export function TestsPage() {
  const { t, lang } = useLang();
  return (
    <div>
      <h1 className="font-display vf-soft-hi font-semibold text-5xl text-ink-900 -tracking-[0.02em] mb-3">
        {t.pages.tests.title}
      </h1>
      <p className="text-ink-500 text-lg mb-12 max-w-[640px]">
        {t.pages.tests.subtitle}
      </p>

      <div className="grid gap-5 auto-grid-240">
        {/* Граматичні тести */}
        {quizzes.map((quiz) => (
          <TopicCard
            key={quiz.slug}
            emoji={quiz.emoji}
            title={quiz.title[lang]}
            countLabel={`${quiz.count} ${t.pages.quiz.questionsLabel}`}
            href={`/tests/grammar/${quiz.slug}`}
          />
        ))}

        {/* Лексика */}
        <TopicCard
          emoji="🦁"
          title={lang === 'uk' ? 'Тварини' : 'Животные'}
          hyName="կենդանիներ"
          countLabel={`13 ${t.pages.quiz.questionsLabel}`}
          href="/tests/animals"
        />
      </div>
    </div>
  );
}
