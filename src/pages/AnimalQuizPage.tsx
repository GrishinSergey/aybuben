// src/pages/AnimalQuizPage.tsx

import {useState} from 'react';
import {Link} from 'react-router-dom';
import type {Word} from '../content/types';
import type {Lang} from '../i18n/translations';
import {useLang} from '../i18n/LangContext';
import {domesticAnimals} from '../content/themes/domestic-animals';
import {wildAnimals} from '../content/themes/wild-animals';

/* ── types ──────────────────────────────────────────────────────── */

type PickQ = { kind: 'pick'; animal: Word; options: Word[] };
type MatchQ = { kind: 'match'; animals: Word[]; options: Word[] };
type Question = PickQ | MatchQ;

/* ── utils ──────────────────────────────────────────────────────── */

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestions(words: Word[]): Question[] {
  const TOTAL = 13;
  const MATCH_COUNT = 4;

  const types = shuffle<'match' | 'pick'>([
    ...Array(MATCH_COUNT).fill('match'),
    ...Array(TOTAL - MATCH_COUNT).fill('pick'),
  ]);

  return types.map<Question>((type) => {
    const pool = shuffle(words);
    if (type === 'match') {
      const animals = pool.slice(0, 4);
      const distractor = pool.find(w => !animals.some(a => a.hy === w.hy))!;
      return {kind: 'match', animals, options: shuffle([...animals, distractor])};
    }
    const animal = pool[0];
    const distractors = pool.slice(1, 4);
    return {kind: 'pick', animal, options: shuffle([animal, ...distractors])};
  });
}

/* ── Intro ──────────────────────────────────────────────────────── */

function Intro({onStart, lang}: { onStart: () => void; lang: Lang }) {
  return (
    <div className="text-center py-12">
      <div className="text-7xl mb-5">🦁🐄</div>
      <h2 className="font-display vf-soft-hi font-semibold text-3xl text-ink-900 mb-3">
        {lang === 'uk' ? 'Тварини' : 'Животные'}
      </h2>
      <p className="text-ink-500 max-w-sm mx-auto mb-10 leading-relaxed">
        {lang === 'uk'
          ? '13 питань: свійські та дикі тварини вперемішку. Два типи: вибери назву тварини або поєднай пари.'
          : '13 вопросов: домашние и дикие животные вперемешку. Два типа: выбери название или сопоставь пары.'}
      </p>
      <button
        onClick={onStart}
        className="bg-apricot-400 text-white font-semibold text-lg px-10 py-4 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
      >
        {lang === 'uk' ? 'Почати' : 'Начать'}
      </button>
    </div>
  );
}

/* ── Result ─────────────────────────────────────────────────────── */

function Result({score, total, onRetry, lang}: {
  score: number; total: number; onRetry: () => void; lang: Lang;
}) {
  const pct = score / total;
  const emoji = pct >= 0.9 ? '🏆' : pct >= 0.7 ? '🎉' : pct >= 0.5 ? '👍' : '💪';

  return (
    <div className="text-center py-12">
      <div className="text-7xl mb-4">{emoji}</div>
      <h2 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 mb-2">
        {score} / {total}
      </h2>
      <p className="text-ink-500 mb-10">
        {lang === 'uk'
          ? `${Math.round(pct * 100)}% правильних відповідей`
          : `${Math.round(pct * 100)}% правильных ответов`}
      </p>
      <button
        onClick={onRetry}
        className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
      >
        {lang === 'uk' ? 'Спробувати знову' : 'Попробовать снова'}
      </button>
    </div>
  );
}

/* ── PickQuestion ────────────────────────────────────────────────── */

function PickQuestion({question, lang, onDone}: {
  question: PickQ; lang: Lang; onDone: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<Word | null>(null);
  const answered = selected !== null;
  const isCorrect = selected?.hy === question.animal.hy;

  function optionClass(opt: Word): string {
    const base = 'rounded-card p-4 text-center transition-all border-2 shadow-soft';
    if (!answered)
      return `${base} bg-white border-transparent hover:border-apricot-200 hover:shadow-card hover:-translate-y-0.5 cursor-pointer`;
    if (opt.hy === question.animal.hy)
      return `${base} bg-grass-50 border-grass-500 cursor-default`;
    if (opt.hy === selected?.hy)
      return `${base} bg-pomegranate-50 border-pomegranate-500 cursor-default`;
    return `${base} bg-white border-transparent opacity-40 cursor-default`;
  }

  return (
    <div>
      {/* Картка тварини */}
      <div className="text-center mb-8">
        <div
          className="w-36 h-36 rounded-card-lg bg-gradient-to-br from-apricot-100 to-pomegranate-100 grid place-items-center mx-auto mb-3 shadow-card">
          <span className="text-7xl leading-none">{question.animal.emoji ?? '✦'}</span>
        </div>
        <p className="text-ink-500 text-sm">
          {lang === 'uk' ? 'Що це за тварина?' : 'Что это за животное?'}
        </p>
      </div>

      {/* 4 варіанти — 2×2 */}
      <div className="grid grid-cols-2 gap-3 mb-6 max-w-xl mx-auto">
        {question.options.map(opt => (
          <button
            key={opt.hy}
            onClick={() => {
              if (!answered) setSelected(opt);
            }}
            className={optionClass(opt)}
          >
            <div className="font-hy font-semibold text-ink-900 text-xl leading-tight">{opt.hy}</div>
            {answered && (
              <div className="text-[13px] text-ink-400 mt-1">{opt[lang]}</div>
            )}
          </button>
        ))}
      </div>

      {answered && (
        <div className="text-center">
          <p className={`text-lg font-semibold mb-4 ${isCorrect ? 'text-grass-700' : 'text-pomegranate-600'}`}>
            {isCorrect
              ? (lang === 'uk' ? '✓ Правильно!' : '✓ Правильно!')
              : (lang === 'uk' ? '✗ Неправильно' : '✗ Неправильно')}
          </p>
          <button
            onClick={() => onDone(isCorrect)}
            className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
          >
            {lang === 'uk' ? 'Далі →' : 'Далее →'}
          </button>
        </div>
      )}
    </div>
  );
}

/* ── MatchQuestion ───────────────────────────────────────────────── */

function MatchQuestion({question, lang, onDone}: {
  question: MatchQ; lang: Lang; onDone: (correct: boolean) => void;
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [pairings, setPairings] = useState<(Word | null)[]>(() =>
    Array(question.animals.length).fill(null)
  );
  const [checked, setChecked] = useState(false);

  const usedHys = new Set(pairings.filter(Boolean).map(w => w!.hy));
  const allPaired = pairings.every(p => p !== null);

  const correctCount = pairings.filter((p, i) => p?.hy === question.animals[i].hy).length;
  const allCorrect = correctCount === question.animals.length;

  function clickAnimal(idx: number) {
    if (checked) return;
    setActiveIdx(prev => (prev === idx ? null : idx));
  }

  function clickOption(word: Word) {
    if (checked || activeIdx === null) return;
    const capturedIdx = activeIdx;
    setPairings(prev => {
      const next = [...prev];
      const prevIdx = next.findIndex(p => p?.hy === word.hy);
      if (prevIdx !== -1) next[prevIdx] = null;
      next[capturedIdx] = word;
      return next;
    });
    setActiveIdx(null);
  }

  return (
    <div>
      <p className="text-ink-500 text-center text-sm mb-6">
        {lang === 'uk'
          ? 'Вибери тварину → потім вибери її назву'
          : 'Выбери животное → затем выбери его название'}
      </p>

      {/* Картки тварин */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {question.animals.map((animal, idx) => {
          const paired = pairings[idx];
          const isActive = activeIdx === idx;
          const isRight = checked && paired?.hy === animal.hy;
          const isWrong = checked && paired !== null && paired.hy !== animal.hy;

          return (
            <button
              key={animal.hy}
              onClick={() => clickAnimal(idx)}
              className={[
                'rounded-card-lg p-4 text-center border-2 transition-all',
                isRight ? 'bg-grass-50 border-grass-500' :
                  isWrong ? 'bg-pomegranate-50 border-pomegranate-500' :
                    isActive ? 'bg-apricot-50 border-apricot-400 shadow-card' :
                      'bg-cream-50 border-transparent',
                !checked ? 'cursor-pointer hover:bg-cream-100' : 'cursor-default',
              ].join(' ')}
            >
              <div className="text-4xl mb-2">{animal.emoji ?? '✦'}</div>
              {/* Назва під карткою */}
              <div className="min-h-[2.5rem] flex flex-col items-center justify-center text-xs leading-snug">
                {!checked && paired  && <span className="font-hy text-apricot-700 font-semibold text-sm">{paired.hy}</span>}
                {!checked && !paired && <span className="text-ink-300">—</span>}
                {checked && isRight  && (
                  <>
                    <span className="font-hy text-grass-700 font-semibold text-sm">{paired!.hy}</span>
                    <span className="text-[11px] text-grass-600">{animal[lang]}</span>
                  </>
                )}
                {checked && isWrong  && (
                  <>
                    <span className="font-hy text-pomegranate-500 text-xs line-through">{paired!.hy}</span>
                    <span className="font-hy text-grass-700 font-semibold text-sm">✓ {animal.hy}</span>
                    <span className="text-[11px] text-grass-600">{animal[lang]}</span>
                  </>
                )}
                {checked && !paired  && (
                  <>
                    <span className="font-hy text-grass-700 font-semibold text-sm">✓ {animal.hy}</span>
                    <span className="text-[11px] text-grass-600">{animal[lang]}</span>
                  </>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Чіпи з назвами */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {question.options.map(word => {
          const isUsed = usedHys.has(word.hy);
          return (
            <button
              key={word.hy}
              onClick={() => clickOption(word)}
              disabled={checked || isUsed}
              className={[
                'px-4 py-2 rounded-full text-sm font-medium border transition-all',
                checked || isUsed
                  ? 'opacity-40 border-cream-300 bg-cream-100 text-ink-500 cursor-default'
                  : activeIdx !== null
                    ? 'border-apricot-300 bg-apricot-50 text-ink-800 cursor-pointer hover:bg-apricot-100 hover:border-apricot-500 shadow-soft'
                    : 'border-cream-200 bg-white text-ink-600 cursor-default',
              ].join(' ')}
            >
              <span className="font-hy">{word.hy}</span>
            </button>
          );
        })}
      </div>

      {!checked && allPaired && (
        <div className="text-center">
          <button
            onClick={() => setChecked(true)}
            className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
          >
            {lang === 'uk' ? 'Перевірити' : 'Проверить'}
          </button>
        </div>
      )}

      {checked && (
        <div className="text-center">
          <p className={`text-lg font-semibold mb-4 ${allCorrect ? 'text-grass-700' : 'text-pomegranate-600'}`}>
            {allCorrect
              ? (lang === 'uk' ? '✓ Всі правильно!' : '✓ Все правильно!')
              : (lang === 'uk'
                ? `${correctCount} з ${question.animals.length} правильно`
                : `${correctCount} из ${question.animals.length} правильно`)}
          </p>
          <button
            onClick={() => onDone(allCorrect)}
            className="bg-apricot-400 text-white font-semibold px-8 py-3 rounded-card shadow-press-apricot active:translate-y-0.5 active:shadow-press-apricot-sm transition-all"
          >
            {lang === 'uk' ? 'Далі →' : 'Далее →'}
          </button>
        </div>
      )}
    </div>
  );
}

/* ── Main page ───────────────────────────────────────────────────── */

const ALL_ANIMALS = [...domesticAnimals.words, ...wildAnimals.words];

export function AnimalQuizPage() {
  const {lang} = useLang();
  const [phase, setPhase] = useState<'intro' | 'playing' | 'done'>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  function start() {
    setQuestions(generateQuestions(ALL_ANIMALS));
    setCurrentQ(0);
    setScore(0);
    setPhase('playing');
  }

  function handleDone(correct: boolean) {
    const next = correct ? score + 1 : score;
    setScore(next);
    if (currentQ + 1 >= questions.length) {
      setPhase('done');
    } else {
      setCurrentQ(q => q + 1);
    }
  }

  const navLabel = lang === 'uk' ? 'Тести' : 'Тесты';

  return (
    <div>
      <Link
        to="/tests"
        className="inline-flex items-center gap-1 text-sm text-ink-500 hover:text-ink-700 mb-6"
      >
        ← {navLabel}
      </Link>

      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-14 h-14 rounded-2xl grid place-items-center text-3xl bg-gradient-to-br from-apricot-100 to-pomegranate-100">
          🦁
        </div>
        <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 -tracking-[0.02em]">
          {lang === 'uk' ? 'Тварини' : 'Животные'}
        </h1>
      </div>

      {phase === 'intro' && <Intro onStart={start} lang={lang}/>}

      {phase === 'playing' && questions.length > 0 && (() => {
        const q = questions[currentQ];
        return (
          <div>
            {/* Прогрес */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-ink-500 mb-2">
                <span>
                  {lang === 'uk' ? 'Питання' : 'Вопрос'} {currentQ + 1} / {questions.length}
                </span>
                <span>🏆 {score}</span>
              </div>
              <div className="h-2 bg-cream-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-apricot-400 rounded-full transition-all duration-500"
                  style={{width: `${(currentQ / questions.length) * 100}%`}}
                />
              </div>
            </div>

            {q.kind === 'pick' && (
              <PickQuestion key={currentQ} question={q} lang={lang} onDone={handleDone}/>
            )}
            {q.kind === 'match' && (
              <MatchQuestion key={currentQ} question={q} lang={lang} onDone={handleDone}/>
            )}
          </div>
        );
      })()}

      {phase === 'done' && (
        <Result score={score} total={questions.length} onRetry={start} lang={lang}/>
      )}
    </div>
  );
}
