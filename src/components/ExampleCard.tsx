// src/components/ExampleCard.tsx
//
// Картка прикладу: вірменська фраза великим, переклад менше, транслітерація світло-сірим.
// Лежить у вертикальному стеку (одна під одною), на повну ширину контейнера.

import type {NumeralExample} from '../content/types';
import type {Lang} from '../i18n/translations';

type Props = {
  example: NumeralExample;
  lang: Lang;
};

export function ExampleCard({example, lang}: Props) {
  return (
    <div
      className="bg-white rounded-card p-5 shadow-soft flex items-center gap-5 max-md:flex-col max-md:items-start max-md:gap-3">
      {/* Вірменський — головний акцент */}
      <div className="flex-1 min-w-0">
        <div className="font-hy text-[26px] font-semibold text-ink-900 leading-tight">
          {example.hy}
        </div>
        <div className="text-[13px] text-ink-300 mt-1 tracking-wide">
          {example.translit}
        </div>
      </div>

      {/* Розділювач і переклад */}
      <div className="hidden md:block h-12 w-px bg-cream-300"/>
      <div className="text-ink-700 text-base font-medium md:text-right md:min-w-[200px]">
        {example[lang]}
      </div>
    </div>
  );
}