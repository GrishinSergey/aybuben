// src/components/quiz/ChoiceQuestion.tsx
//
// Спільний компонент для механік «вибери один із чотирьох»:
// form (постав форму), slot (визнач форму), translate (переклад).

import { useState, type ReactNode } from 'react';
import { useLang } from '../../i18n/LangContext';

export type Choice = { id: string; text: string; armenian: boolean };

export function ChoiceQuestion({ headline, instruction, choices, correctId, onDone }: {
  headline: ReactNode;
  instruction: string;
  choices: Choice[];
  correctId: string;
  onDone: (correct: boolean) => void;
}) {
  const { t } = useLang();
  const [selected, setSelected] = useState<string | null>(null);
  const answered = selected !== null;
  const isCorrect = selected === correctId;

  function cls(id: string): string {
    const base = 'rounded-card p-4 text-center transition-all border-2 shadow-soft';
    if (!answered)
      return `${base} bg-white border-transparent hover:border-apricot-200 hover:shadow-card hover:-translate-y-0.5 cursor-pointer`;
    if (id === correctId) return `${base} bg-grass-50 border-grass-500 cursor-default`;
    if (id === selected) return `${base} bg-pomegranate-50 border-pomegranate-500 cursor-default`;
    return `${base} bg-white border-transparent opacity-40 cursor-default`;
  }

  return (
    <div>
      <div className="text-center mb-8">
        {headline}
        <p className="text-ink-500 text-sm mt-3">{instruction}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6 max-w-xl mx-auto">
        {choices.map((c) => (
          <button
            key={c.id}
            onClick={() => { if (!answered) setSelected(c.id); }}
            className={cls(c.id)}
          >
            <span className={c.armenian
              ? 'font-hy font-semibold text-ink-900 text-xl leading-tight'
              : 'text-ink-800 text-[15px] font-medium leading-snug'}>
              {c.text}
            </span>
          </button>
        ))}
      </div>

      {answered && (
        <div className="text-center">
          <p className={`text-lg font-semibold mb-4 ${isCorrect ? 'text-grass-700' : 'text-pomegranate-600'}`}>
            {isCorrect ? `✓ ${t.pages.quiz.correct}` : `✗ ${t.pages.quiz.wrong}`}
          </p>
          <button
            onClick={() => onDone(isCorrect)}
            className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
          >
            {t.pages.quiz.next}
          </button>
        </div>
      )}
    </div>
  );
}
