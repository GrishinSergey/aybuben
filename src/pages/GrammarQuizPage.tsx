// src/pages/GrammarQuizPage.tsx
//
// Сторінка одного граматичного тесту. Маршрут: /tests/grammar/:quizSlug
// Шапка (хлібні крихти + заголовок), тіло — універсальний QuizRunner.

import { useParams, Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import { findQuiz } from '../content/quiz';
import { QuizRunner } from '../components/quiz/QuizRunner';

export function GrammarQuizPage() {
  const { quizSlug } = useParams<{ quizSlug: string }>();
  const { t, lang } = useLang();
  const quiz = quizSlug ? findQuiz(quizSlug) : undefined;

  if (!quiz) {
    return (
      <div>
        <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 mb-6">
          {t.pages.notFound}
        </h1>
        <Link to="/tests" className="text-apricot-600 font-semibold hover:underline">
          ← {t.nav.tests}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        to="/tests"
        className="inline-flex items-center gap-1 text-sm text-ink-500 hover:text-ink-700 mb-6"
      >
        ← {t.nav.tests}
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl grid place-items-center text-3xl bg-gradient-to-br from-apricot-100 to-pomegranate-100">
          {quiz.emoji}
        </div>
        <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 -tracking-[0.02em]">
          {quiz.title[lang]}
        </h1>
      </div>

      <QuizRunner quiz={quiz} />
    </div>
  );
}
