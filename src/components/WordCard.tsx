// src/components/WordCard.tsx

import { useState } from 'react';
import type { Word } from '../content/types';
import type { Lang } from '../i18n/translations';

type Props = {
  word: Word;
  lang: Lang;
};

export function WordCard({ word, lang }: Props) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const unverifiedLabel = lang === 'uk' ? 'Не перевірено' : 'Не проверено';
  const showImg = !!word.imageUrl && !imgError;

  return (
    <div className="bg-white rounded-card-lg p-5 shadow-card flex flex-col gap-3">
      {/* Зображення або емодзі */}
      <div className="h-[160px] rounded-card overflow-hidden bg-gradient-to-br from-apricot-100 to-pomegranate-100 relative">
        {/* Emoji — базовий шар, видимий поки картинка вантажиться або якщо її немає */}
        <div
          className={`grid place-items-center h-full transition-opacity duration-200 ${imgLoaded && showImg ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="text-6xl leading-none">{word.emoji ?? '✦'}</span>
        </div>

        {showImg && (
          <img
            src={word.imageUrl}
            alt={word[lang]}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        )}

        {word.verified === false && (
          <span className="absolute top-2 right-2 text-[10px] font-bold bg-amber-100 text-amber-700 border border-amber-300 px-2 py-0.5 rounded-full leading-none">
            {unverifiedLabel}
          </span>
        )}
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