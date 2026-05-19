// src/components/TextCard.tsx
//
// Картка з міні-текстом: вірменський абзац, транслітерація, переклад.

import type { Lang } from '../i18n/translations';

type Passage = { hy: string; translit: string; uk: string; ru: string };

type Props = {
  passage: Passage;
  lang: Lang;
};

export function TextCard({ passage, lang }: Props) {
  return (
    <div className="bg-white rounded-card-lg p-7 shadow-card">
      <div className="font-hy text-[22px] leading-relaxed text-ink-900">
        {passage.hy}
      </div>
      <div className="text-[13px] text-ink-300 mt-3 leading-relaxed tracking-wide">
        {passage.translit}
      </div>
      <div className="mt-5 pt-5 border-t border-dashed border-cream-300">
        <p className="text-ink-700 text-base font-medium leading-relaxed">
          {passage[lang]}
        </p>
      </div>
    </div>
  );
}