// src/components/LetterCard.tsx
//
// Приклад того, як showcase-картка літери стає справжнім React-компонентом.
// Жодного хардкоду кольорів — усе через токени з tailwind.config.js.

export type Letter = {
  order: number;
  printUpper: string;     // 'Ա'
  printLower: string;     // 'ա'
  nameHy: string;         // 'այբ'
  nameTranslit: string;   // 'ayb'
  ipa: string;            // '/ɑ/'
  hint?: string;          // 'як «а» в «мама»'
};

type Props = {
  letter: Letter;
  onPlayAudio?: () => void;
  onPractice?: () => void;
};

export function LetterCard({letter, onPlayAudio, onPractice}: Props) {
  return (
    <div
      className="
        bg-white rounded-card-lg pt-8 px-6 pb-6 shadow-card
        relative overflow-hidden cursor-pointer
        transition-all hover:-translate-y-1 hover:shadow-card-lg
        before:content-[''] before:absolute before:top-0 before:left-0 before:right-0
        before:h-1.5 before:bg-gradient-to-r before:from-apricot-400 before:to-pomegranate-500
      "
    >
      <span className="absolute top-3.5 right-4 text-[11px] font-bold text-ink-300 tracking-[0.1em]">
        {String(letter.order).padStart(2, '0')} / 39
      </span>

      <div className="flex items-baseline justify-center gap-[18px] mt-4 mb-6">
        <span className="font-hy text-[96px] leading-none font-medium text-ink-900">
          {letter.printUpper}
        </span>
        <span className="font-hy text-[56px] leading-none font-normal text-apricot-500">
          {letter.printLower}
        </span>
      </div>

      <div className="text-center mb-[18px]">
        <span className="font-display vf-soft-lo font-semibold text-[22px] text-ink-900 -tracking-[0.01em]">
          {letter.nameTranslit}
          <span className="font-hy text-ink-700 ml-2 font-medium">{letter.nameHy}</span>
        </span>
        <div className="mt-1.5 text-sm text-ink-500">
          IPA{' '}
          <code className="font-sans bg-cream-100 px-2 py-0.5 rounded-md text-ink-700 font-medium">
            {letter.ipa}
          </code>
          {letter.hint && <> · {letter.hint}</>}
        </div>
      </div>

      <div className="flex gap-2 pt-[18px] border-t border-dashed border-cream-300">
        <button
          onClick={onPlayAudio}
          className="flex-1 px-3 py-2.5 bg-cream-100 rounded-xl font-semibold text-[13px] text-ink-700 transition-colors hover:bg-apricot-100 hover:text-apricot-700"
        >
          🔊 Звук
        </button>
        <button
          onClick={onPractice}
          className="flex-1 px-3 py-2.5 bg-apricot-400 text-white rounded-xl font-semibold text-[13px] shadow-press-apricot-sm hover:bg-apricot-500"
        >
          Практика
        </button>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------
 * ВИКОРИСТАННЯ:
 *
 *   import { LetterCard } from './components/LetterCard';
 *
 *   <div className="grid gap-6 auto-grid-280">
 *     <LetterCard letter={{ order: 1, printUpper: 'Ա', printLower: 'ա',
 *                            nameHy: 'այբ', nameTranslit: 'ayb',
 *                            ipa: '/ɑ/', hint: 'як «а» в «мама»' }} />
 *     <LetterCard letter={{ ... }} />
 *   </div>
 *
 * Примітка: довгі className рядки розбиті на template-літерали для читабельності.
 * Якщо подобається коротко — стисни в один рядок, ESLint/Prettier не заперечать.
 * ----------------------------------------------------------- */
