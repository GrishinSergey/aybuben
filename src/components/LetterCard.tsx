// src/components/LetterCard.tsx
//
// Картка літери алфавіту. Окрема від WordCard, щоб можна було тримати
// своє співвідношення сторін для рукописної SVG (квадрат, з повітрям),
// і свою компоновку тіла (велика + мала разом).

import type { Letter } from '../content/types';
import type { Lang } from '../i18n/translations';

type Props = {
  letter: Letter;
  lang: Lang;
};

export function LetterCard({ letter, lang }: Props) {
  const pron = lang === 'uk' ? letter.pronUk : letter.pronRu;

  return (
    <div className="bg-white rounded-card-lg p-5 shadow-card flex flex-col gap-4">
      {/* Квадратне віконце для рукопису. aspect-square тримає 1:1
          незалежно від ширини картки. p-6 дає літері дихати. */}
      <div className="aspect-square rounded-card overflow-hidden bg-gradient-to-br from-apricot-50 to-pomegranate-50 grid place-items-center p-6">
        <img
          src={letter.imageUrl}
          alt={`${letter.upper} ${letter.lower}`}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Друкована велика + мала */}
      <div className="px-1">
        <div className="flex items-baseline gap-3 leading-none">
          <span className="font-hy text-[44px] font-semibold text-ink-900">
            {letter.upper}
          </span>
          <span className="font-hy text-[44px] font-medium text-apricot-500">
            {letter.lower}
          </span>
        </div>

        {/* Назва латиницею */}
        <div className="text-sm text-ink-300 mt-2 tracking-wide">
          {letter.name}
        </div>

        {/* Підказка вимови */}
        <div className="mt-3 text-base text-ink-700 font-medium leading-snug">
          {pron}
        </div>
      </div>
    </div>
  );
}
