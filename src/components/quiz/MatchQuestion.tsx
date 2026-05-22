// src/components/quiz/MatchQuestion.tsx
//
// Механіка «пари»: вибери вірменську форму → потім її назву.
// Текстовий аналог MatchQuestion зі сторінки тесту тварин.

import { useState } from 'react';
import type { Bilingual } from '../../content/types';
import { useLang } from '../../i18n/LangContext';
import { shuffle } from './util';

type Pair = { form: string; label: Bilingual };

export function MatchQuestion({ pairs, onDone }: {
  pairs: Pair[];
  onDone: (correct: boolean) => void;
}) {
  const { t, lang } = useLang();
  // Порядок чіпів-ярликів: перемішані індекси пар.
  const [chipOrder] = useState(() => shuffle(pairs.map((_, i) => i)));
  const [activeCard, setActiveCard] = useState<number | null>(null);
  // assigned[cardIdx] = індекс пари, чий ярлик призначено картці.
  const [assigned, setAssigned] = useState<(number | null)[]>(() => pairs.map(() => null));
  const [checked, setChecked] = useState(false);

  const used = new Set(assigned.filter((x): x is number => x !== null));
  const allAssigned = assigned.every((x) => x !== null);
  const correctCount = assigned.filter((x, i) => x === i).length;
  const allCorrect = correctCount === pairs.length;

  function clickCard(i: number) {
    if (checked) return;
    setActiveCard((p) => (p === i ? null : i));
  }

  function clickChip(pairIdx: number) {
    if (checked || activeCard === null) return;
    const card = activeCard;
    setAssigned((prev) => {
      const next = [...prev];
      const old = next.indexOf(pairIdx);
      if (old !== -1) next[old] = null;
      next[card] = pairIdx;
      return next;
    });
    setActiveCard(null);
  }

  return (
    <div>
      <p className="text-ink-500 text-center text-sm mb-6">{t.pages.quiz.matchHint}</p>

      {/* Картки — вірменські форми */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {pairs.map((pair, i) => {
          const a = assigned[i];
          const isActive = activeCard === i;
          const right = checked && a === i;
          const wrong = checked && a !== null && a !== i;
          return (
            <button
              key={i}
              onClick={() => clickCard(i)}
              className={[
                'rounded-card-lg p-4 text-center border-2 transition-all min-h-[7rem] flex flex-col justify-center',
                right ? 'bg-grass-50 border-grass-500'
                  : wrong ? 'bg-pomegranate-50 border-pomegranate-500'
                  : isActive ? 'bg-apricot-50 border-apricot-400 shadow-card'
                  : 'bg-cream-50 border-transparent',
                !checked ? 'cursor-pointer hover:bg-cream-100' : 'cursor-default',
              ].join(' ')}
            >
              <div className="font-hy text-xl font-semibold text-ink-900 mb-2">{pair.form}</div>
              <div className="min-h-[1.5rem] text-xs leading-snug">
                {!checked && a !== null && (
                  <span className="text-apricot-700 font-medium">{pairs[a].label[lang]}</span>
                )}
                {!checked && a === null && <span className="text-ink-300">—</span>}
                {checked && right && (
                  <span className="text-grass-700 font-medium">{pair.label[lang]}</span>
                )}
                {checked && wrong && (
                  <>
                    <span className="text-pomegranate-500 line-through">{pairs[a].label[lang]}</span>
                    <span className="block text-grass-700 font-medium">✓ {pair.label[lang]}</span>
                  </>
                )}
                {checked && a === null && (
                  <span className="text-grass-700 font-medium">✓ {pair.label[lang]}</span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Чіпи — ярлики */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {chipOrder.map((pairIdx) => {
          const isUsed = used.has(pairIdx);
          return (
            <button
              key={pairIdx}
              onClick={() => clickChip(pairIdx)}
              disabled={checked || isUsed}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-all',
                checked || isUsed
                  ? 'opacity-40 border-cream-300 bg-cream-100 text-ink-500 cursor-default'
                  : activeCard !== null
                    ? 'border-apricot-300 bg-apricot-50 text-ink-800 cursor-pointer hover:bg-apricot-100 hover:border-apricot-500 shadow-soft'
                    : 'border-cream-200 bg-white text-ink-600 cursor-default',
              ].join(' ')}
            >
              {pairs[pairIdx].label[lang]}
            </button>
          );
        })}
      </div>

      {!checked && allAssigned && (
        <div className="text-center">
          <button
            onClick={() => setChecked(true)}
            className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
          >
            {t.pages.quiz.check}
          </button>
        </div>
      )}

      {checked && (
        <div className="text-center">
          <p className={`text-lg font-semibold mb-4 ${allCorrect ? 'text-grass-700' : 'text-pomegranate-600'}`}>
            {allCorrect
              ? `✓ ${t.pages.quiz.allCorrect}`
              : `${correctCount} / ${pairs.length} ${t.pages.quiz.pairsCorrect}`}
          </p>
          <button
            onClick={() => onDone(allCorrect)}
            className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
          >
            {t.pages.quiz.next}
          </button>
        </div>
      )}
    </div>
  );
}
