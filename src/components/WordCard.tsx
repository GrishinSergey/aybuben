// src/components/WordCard.tsx
//
// Картка лексичного слова. Емодзі у верхньому віконці, hy + translit + переклад нижче,
// POS-тег знизу.

import type { Word } from '../content/types';
import type { Lang } from '../i18n/translations';

type Props = {
  word: Word;
  lang: Lang;
};

export function WordCard({ word, lang }: Props) {
  return (
    <div className="bg-white rounded-card-lg p-5 shadow-card flex flex-col gap-3">
      {/* Віконце з емодзі — поки немає реальних картинок */}
      <div className="h-[140px] rounded-card grid place-items-center bg-gradient-to-br from-apricot-100 to-pomegranate-100">
        <span className="text-6xl leading-none">{word.emoji ?? '✦'}</span>
      </div>

      <div className="px-1">
        <div className="font-hy text-[28px] font-semibold text-ink-900 leading-tight">
          {word.hy}
        </div>
        <div className="text-[13px] text-ink-300 mt-1 tracking-wide">
          {word.translit}
        </div>
        <div className="mt-2.5 text-lg text-ink-700 font-medium">
          {word[lang]}
        </div>
      </div>

      <div className="flex justify-end pt-2 border-t border-dashed border-cream-300 mt-1">
        <span className="text-[11px] font-bold text-accent-500 bg-accent-100 px-2.5 py-1 rounded-full uppercase tracking-[0.08em]">
          {word.pos}
        </span>
      </div>
    </div>
  );
}