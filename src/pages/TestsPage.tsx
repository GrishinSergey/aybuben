// src/pages/TestsPage.tsx

import { useLang } from '../i18n/LangContext';
import { TopicCard } from '../components/TopicCard';

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
        <TopicCard
          emoji="🦁"
          title={lang === 'uk' ? 'Тварини' : 'Животные'}
          hyName="կենդանիներ"
          countLabel={lang === 'uk' ? '13 питань' : '13 вопросов'}
          href="/tests/animals"
        />
      </div>
    </div>
  );
}
