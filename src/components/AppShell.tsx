// src/components/AppShell.tsx
//
// Топбар + контейнер для сторінок. Дві навігаційні кнопки по центру: Навчання, Тести.

import type { ReactNode } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';

export function AppShell() {
  const { t, lang, setLang } = useLang();

  return (
    <div className="min-h-screen">
      <header className="border-b border-cream-200 bg-cream-50/70 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between gap-6">
          {/* Лого — клік повертає на /learn */}
          <NavLink to="/learn" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-apricot-400 to-pomegranate-500 grid place-items-center text-white font-hy font-bold text-[22px] shadow-card group-hover:scale-105 transition-transform">
              Ա
            </div>
            <div className="font-display vf-soft-hi font-semibold text-xl text-ink-900 -tracking-[0.01em]">
              {t.appName}
            </div>
          </NavLink>

          {/* Дві кнопки центру */}
          <nav className="flex items-center gap-1 flex-1 justify-center">
            <NavItem to="/learn">{t.nav.learn}</NavItem>
            <NavItem to="/tests">{t.nav.tests}</NavItem>
          </nav>

          {/* Праворуч: streak (заглушка) + перемикач мови */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-soft font-semibold text-ink-700 text-sm">
              <span>🔥</span> 0
            </div>
            <button
              onClick={() => setLang(lang === 'uk' ? 'ru' : 'uk')}
              className="px-3 py-1.5 bg-white rounded-full shadow-soft font-semibold text-ink-700 text-sm hover:bg-cream-100 transition-colors uppercase tracking-wider"
              title={t.common.switchLanguage}
            >
              {lang}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-8 py-12">
        <Outlet />
      </main>
    </div>
  );
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'px-5 py-2 rounded-xl font-semibold text-sm transition-colors',
          isActive
            ? 'bg-apricot-100 text-apricot-700'
            : 'text-ink-500 hover:text-ink-700 hover:bg-cream-100',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  );
}