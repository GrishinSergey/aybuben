// src/pages/GrammarRulePage.tsx
//
// Сторінка окремого граматичного правила. Маршрут: /learn/topic/grammar/:ruleSlug
// Показує: вступ, картки правил (ը/ն), приклади з групами, джерела.

import { useParams, Link } from 'react-router-dom';
import { useLang } from '../i18n/LangContext';
import { findGrammarRule } from '../content/themes';

export function GrammarRulePage() {
  const { ruleSlug } = useParams<{ ruleSlug: string }>();
  const { t, lang } = useLang();
  const rule = ruleSlug ? findGrammarRule(ruleSlug) : undefined;

  if (!rule) {
    return (
      <div>
        <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 mb-6">
          {t.pages.notFound}
        </h1>
        <Link to="/learn/topic/grammar" className="text-apricot-600 font-semibold hover:underline">
          {t.pages.grammar.backToGrammar}
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[860px]">
      {/* Хлібні крихти */}
      <nav className="flex items-center gap-2 text-sm text-ink-500 mb-6">
        <Link to="/learn" className="hover:text-ink-700">
          {t.nav.learn}
        </Link>
        <span>/</span>
        <Link to="/learn/topic/grammar" className="hover:text-ink-700">
          {t.topics.grammar.title}
        </Link>
      </nav>

      {/* Заголовок */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl grid place-items-center text-4xl bg-gradient-to-br from-apricot-100 to-pomegranate-100 shrink-0">
          {rule.emoji}
        </div>
        <h1 className="font-display vf-soft-hi font-semibold text-4xl text-ink-900 -tracking-[0.02em] leading-tight">
          {rule.title[lang]}
        </h1>
      </div>

      {/* Вступ */}
      <p className="text-ink-600 text-lg leading-relaxed mb-10 max-w-[640px]">
        {rule.intro[lang]}
      </p>

      {/* Картки-пояснення */}
      <div className="grid gap-4 sm:grid-cols-3 mb-12">
        {rule.points.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-card-lg p-5 shadow-soft border border-cream-200"
          >
            {p.form && (
              <div className="font-hy text-4xl font-bold text-apricot-500 mb-3 leading-none">
                {p.form}
              </div>
            )}
            <div className="font-semibold text-ink-800 text-sm mb-2">
              {p.label[lang]}
            </div>
            <p className="text-ink-500 text-sm leading-relaxed">
              {p.description[lang]}
            </p>
          </div>
        ))}
      </div>

      {/* Таблиці-парадигми */}
      {rule.tables && rule.tables.length > 0 && (
        <>
          <h2 className="font-display vf-soft-md font-semibold text-2xl text-ink-900 -tracking-[0.01em] mb-6">
            {t.pages.grammar.tablesHeader}
          </h2>
          <div className="flex flex-col gap-8 mb-12">
            {rule.tables.map((table, ti) => (
              <div key={ti}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-ink-600 font-medium text-sm">
                    {table.caption[lang]}
                  </span>
                  {table.verified === false && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-400 bg-cream-100 px-2 py-0.5 rounded-full border border-cream-200">
                      {t.pages.grammar.unverified}
                    </span>
                  )}
                </div>
                <div className="overflow-x-auto rounded-card shadow-soft border border-cream-200">
                  <table className="w-full border-collapse bg-white text-sm">
                    <thead>
                      <tr className="bg-cream-100">
                        <th className="px-4 py-3" />
                        {table.columns.map((col, ci) => (
                          <th
                            key={ci}
                            className="text-left font-semibold text-ink-700 px-4 py-3 border-l border-cream-200"
                          >
                            {col[lang]}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, ri) => (
                        <tr key={ri} className="border-t border-cream-200">
                          <th className="text-left font-medium text-ink-500 px-4 py-3 whitespace-nowrap align-top">
                            {row.header[lang]}
                          </th>
                          {row.cells.map((cell, ci) => (
                            <td
                              key={ci}
                              className="px-4 py-3 border-l border-cream-200 align-top"
                            >
                              <span className="font-hy text-[17px] font-semibold text-ink-900">
                                {cell.hy}
                              </span>
                              {cell.translit && (
                                <span className="block text-[12px] text-ink-300 mt-0.5 tracking-wide">
                                  {cell.translit}
                                </span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Приклади за групами */}
      <h2 className="font-display vf-soft-md font-semibold text-2xl text-ink-900 -tracking-[0.01em] mb-6">
        {t.pages.grammar.examplesHeader}
      </h2>

      <div className="flex flex-col gap-10 mb-14">
        {rule.groups.map((group, gi) => (
          <div key={gi}>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-hy text-2xl font-bold text-apricot-500">
                {group.caseForm}
              </span>
              <span className="text-ink-600 font-medium text-sm">
                {group.label[lang]}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {group.examples.map((ex, ei) => (
                <div
                  key={ei}
                  className="bg-white rounded-card p-5 shadow-soft flex items-start gap-5 max-md:flex-col max-md:gap-3 relative"
                >
                  {ex.verified === false && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-[0.12em] text-ink-400 bg-cream-100 px-2 py-0.5 rounded-full border border-cream-200">
                      {t.pages.grammar.unverified}
                    </span>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-hy text-[22px] font-semibold text-ink-900 leading-snug">
                      {ex.hy}
                    </div>
                    <div className="text-[13px] text-ink-300 mt-1 tracking-wide">
                      {ex.translit}
                    </div>
                  </div>
                  <div className="hidden md:block self-stretch w-px bg-cream-200 shrink-0" />
                  <div className="text-ink-700 text-base font-medium md:min-w-[220px] md:text-right pr-8">
                    {ex[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Джерела */}
      <div className="border-t border-cream-200 pt-8">
        <h2 className="font-display vf-soft-md font-semibold text-xl text-ink-900 -tracking-[0.01em] mb-4">
          {t.pages.grammar.sourcesHeader}
        </h2>
        <ul className="flex flex-col gap-2">
          {rule.sources.map((src, i) => (
            <li key={i}>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-apricot-600 hover:text-apricot-700 hover:underline text-sm font-medium"
              >
                {src.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}