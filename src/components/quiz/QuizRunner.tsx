// src/components/quiz/QuizRunner.tsx
//
// Узагальнений плеєр тестів: фази intro → playing → done, бали, прогрес-бар.
// Тіло одного питання — ChoiceQuestion або MatchQuestion за полем kind.

import { useState, type ReactNode } from 'react';
import { useLang } from '../../i18n/LangContext';
import type { QuizDef, Question } from './types';
import { ChoiceQuestion, type Choice } from './ChoiceQuestion';
import { MatchQuestion } from './MatchQuestion';

const pressBtn =
  'bg-apricot-400 text-white font-semibold rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all';

export function QuizRunner({ quiz }: { quiz: QuizDef }) {
  const { t, lang } = useLang();
  const [phase, setPhase] = useState<'intro' | 'playing' | 'done'>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  function start() {
    setQuestions(quiz.generate());
    setCurrentQ(0);
    setScore(0);
    setPhase('playing');
  }

  function handleDone(correct: boolean) {
    if (correct) setScore((s) => s + 1);
    if (currentQ + 1 >= questions.length) setPhase('done');
    else setCurrentQ((q) => q + 1);
  }

  if (phase === 'intro') {
    return (
      <div className="text-center py-12">
        <div className="text-7xl mb-5">{quiz.emoji}</div>
        <h2 className="font-display vf-soft-hi font-semibold text-3xl text-ink-900 mb-3">
          {quiz.title[lang]}
        </h2>
        <p className="text-ink-500 max-w-md mx-auto mb-10 leading-relaxed">
          {quiz.intro[lang]}
        </p>
        <button onClick={start} className={`${pressBtn} text-lg px-10 py-4`}>
          {t.pages.quiz.start}
        </button>
      </div>
    );
  }

  if (phase === 'done') {
    const pct = questions.length ? score / questions.length : 0;
    const emoji = pct >= 0.9 ? '🏆' : pct >= 0.7 ? '🎉' : pct >= 0.5 ? '👍' : '💪';
    return (
      <div className="text-center py-12">
        <div className="text-7xl mb-4">{emoji}</div>
        <h2 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 mb-2">
          {score} / {questions.length}
        </h2>
        <p className="text-ink-500 mb-10">
          {Math.round(pct * 100)}% {t.pages.quiz.correctAnswers}
        </p>
        <button onClick={start} className={`${pressBtn} px-8 py-3`}>
          {t.pages.quiz.retry}
        </button>
      </div>
    );
  }

  const q = questions[currentQ];
  let body: ReactNode;

  if (q.kind === 'match') {
    body = <MatchQuestion key={currentQ} pairs={q.pairs} onDone={handleDone} />;
  } else {
    let headline: ReactNode;
    let instruction: string;
    let choices: Choice[];
    let correctId: string;

    if (q.kind === 'form') {
      headline = <div className="font-hy text-5xl font-bold text-apricot-500 leading-none">{q.subject}</div>;
      instruction = q.prompt[lang];
      choices = q.options.map((o, i) => ({ id: String(i), text: o, armenian: true }));
      correctId = String(q.options.indexOf(q.answer));
    } else if (q.kind === 'slot') {
      headline = <div className="font-hy text-4xl font-bold text-ink-900 leading-none">{q.form}</div>;
      instruction = q.prompt[lang];
      choices = q.options.map((o, i) => ({ id: String(i), text: o[lang], armenian: false }));
      correctId = String(q.options.indexOf(q.answer));
    } else {
      headline = (
        <>
          <div className="font-hy text-2xl font-semibold text-ink-900 leading-snug">{q.hy}</div>
          <div className="text-[13px] text-ink-300 mt-1 tracking-wide">{q.translit}</div>
        </>
      );
      instruction = t.pages.quiz.translatePrompt;
      choices = q.options.map((o, i) => ({ id: String(i), text: o[lang], armenian: false }));
      correctId = String(q.options.indexOf(q.answer));
    }

    body = (
      <ChoiceQuestion
        key={currentQ}
        headline={headline}
        instruction={instruction}
        choices={choices}
        correctId={correctId}
        onDone={handleDone}
      />
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between text-sm text-ink-500 mb-2">
          <span>
            {t.pages.quiz.questionLabel} {currentQ + 1} / {questions.length}
          </span>
          <span>🏆 {score}</span>
        </div>
        <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-apricot-400 rounded-full transition-all duration-500"
            style={{ width: `${(currentQ / questions.length) * 100}%` }}
          />
        </div>
      </div>
      {body}
    </div>
  );
}
