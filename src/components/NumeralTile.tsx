// src/components/NumeralTile.tsx
//
// Плитка числа: велика цифра у віконці, hy + translit + переклад нижче.
// Опційно — порядкова форма як акцентний рядок під кількісним.

import type { Numeral } from '../content/types';
import type { Lang } from '../i18n/translations';

type Props = {
  numeral: Numeral;
  lang: Lang;
};

export function NumeralTile({ numeral, lang }: Props) {
  return (
    <div className="bg-white rounded-card-lg p-5 shadow-card flex flex-col gap-3">
      {/* Велика цифра у пастельному віконці. Квадрат — щоб не плисти. */}
      <div className="aspect-square rounded-card grid place-items-center bg-gradient-to-br from-apricot-100 to-pomegranate-100">
        <span className="font-display vf-soft-hi font-semibold text-[88px] leading-none text-ink-900 -tracking-[0.04em] tabular-nums">
          {numeral.digit}
        </span>
      </div>

      <div className="px-1">
        {/* Кількісний — головне */}
        <div className="font-hy text-[26px] font-semibold text-ink-900 leading-tight">
          {numeral.hy}
        </div>
        <div className="text-[13px] text-ink-300 mt-1 tracking-wide">
          {numeral.translit}
        </div>
        <div className="mt-2 text-base text-ink-700 font-medium">
          {numeral[lang]}
        </div>

        {/* Порядковий — акцент знизу, якщо є */}
        {numeral.ordinalHy && (
          <div className="mt-3 pt-3 border-t border-dashed border-cream-300">
            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-apricot-600 mb-1">
              {lang === 'uk' ? 'Порядковий' : 'Порядковый'}
            </div>
            <div className="font-hy text-[18px] font-semibold text-ink-900 leading-tight">
              {numeral.ordinalHy}
            </div>
            {numeral.ordinalTranslit && (
              <div className="text-[12px] text-ink-300 mt-0.5 tracking-wide">
                {numeral.ordinalTranslit}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}