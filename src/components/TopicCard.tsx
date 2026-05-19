// src/components/TopicCard.tsx
//
// Картка на сторінці /learn. Підтримує два режими:
//   - звичайна (з href) — клік веде на /learn/topic/:slug
//   - disabled — приглушена, без переходу, з підписом "Скоро"

import {Link} from 'react-router-dom';
import {useLang} from '../i18n/LangContext';

type Props = {
  emoji: string;
  title: string;
  hyName?: string;
  countLabel?: string;
  href?: string;
  disabled?: boolean;
};

export function TopicCard({emoji, title, hyName, countLabel, href, disabled}: Props) {
  const {t} = useLang();

  const inner = (
    <div
      className={[
        'bg-white rounded-card-lg p-6 shadow-soft transition-all h-full relative',
        disabled
          ? 'opacity-60'
          : 'cursor-pointer hover:-translate-y-0.5 hover:shadow-card',
      ].join(' ')}
    >
      <div
        className="w-16 h-16 rounded-2xl grid place-items-center text-4xl mb-4 bg-gradient-to-br from-apricot-100 to-pomegranate-100">
        {emoji}
      </div>
      <div className="font-display vf-soft-lo font-semibold text-[22px] text-ink-900 -tracking-[0.01em] mb-1">
        {title}
        {hyName && (
          <span className="font-hy text-apricot-500 ml-1.5 text-lg">{hyName}</span>
        )}
      </div>
      {countLabel && (
        <div className="text-[13px] text-ink-500">{countLabel}</div>
      )}
      {disabled && (
        <span
          className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-500 bg-cream-100 px-2 py-1 rounded-full">
          {t.common.comingSoon}
        </span>
      )}
    </div>
  );

  if (disabled || !href) return inner;
  return (
    <Link to={href} className="block h-full">
      {inner}
    </Link>
  );
}