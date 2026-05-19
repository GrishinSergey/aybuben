// src/components/PageStub.tsx
//
// Заглушка для сторінок без контенту (зараз — тільки Тести).

import {useLang} from '../i18n/LangContext';

type Props = {
  title: string;
  subtitle: string;
  icon?: string;
};

export function PageStub({title, subtitle, icon = '🚧'}: Props) {
  const {t} = useLang();
  return (
    <div>
      <h1 className="font-display vf-soft-hi font-semibold text-5xl text-ink-900 -tracking-[0.02em] mb-3">
        {title}
      </h1>
      <p className="text-ink-500 text-lg mb-12 max-w-[640px]">{subtitle}</p>

      <div className="bg-white rounded-card-lg shadow-card p-12 text-center">
        <div className="w-16 h-16 rounded-2xl bg-cream-100 grid place-items-center text-3xl mx-auto mb-6">
          {icon}
        </div>
        <p className="text-ink-500">{t.common.comingSoon}</p>
      </div>
    </div>
  );
}
