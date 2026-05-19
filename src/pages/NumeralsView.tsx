// src/pages/NumeralsView.tsx
//
// Розкладка теми «Числа». Чотири секції:
//   1. Цифри 0-9              — сітка NumeralTile
//   2. Приклади з цифрами     — стек ExampleCard
//   3. Круглі (10-100, 1000)  — сітка NumeralTile
//   4. Приклади з великими    — стек ExampleCard
//
// Це не публічна сторінка з роутингу — її викликає ThemePage, коли kind='numerals'.

import {useLang} from '../i18n/LangContext';
import {NumeralTile} from '../components/NumeralTile';
import {ExampleCard} from '../components/ExampleCard';
import type {NumeralsTheme} from '../content/types';

type Props = { theme: NumeralsTheme };

export function NumeralsView({theme}: Props) {
  const {lang} = useLang();

  const headings = {
    digits: lang === 'uk' ? 'Цифри 0–9' : 'Цифры 0–9',
    digitExamples: lang === 'uk' ? 'Приклади з цифрами' : 'Примеры с цифрами',
    rounds: lang === 'uk' ? 'Десятки, сотні, тисяча' : 'Десятки, сотни, тысяча',
    roundExamples: lang === 'uk' ? 'Складені числа' : 'Составные числа',
  };

  return (
    <div className="mt-10 space-y-12">
      <Section title={headings.digits}>
        <div className="grid gap-5 auto-grid-240">
          {theme.digits.map((n) => (
            <NumeralTile key={n.value} numeral={n} lang={lang}/>
          ))}
        </div>
      </Section>

      <Section title={headings.digitExamples}>
        <div className="space-y-3">
          {theme.digitExamples.map((ex, i) => (
            <ExampleCard key={i} example={ex} lang={lang}/>
          ))}
        </div>
      </Section>

      <Section title={headings.rounds}>
        <div className="grid gap-5 auto-grid-240">
          {theme.rounds.map((n) => (
            <NumeralTile key={n.value} numeral={n} lang={lang}/>
          ))}
        </div>
      </Section>

      <Section title={headings.roundExamples}>
        <div className="space-y-3">
          {theme.roundExamples.map((ex, i) => (
            <ExampleCard key={i} example={ex} lang={lang}/>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({title, children}: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display vf-soft-md font-semibold text-2xl text-ink-900 -tracking-[0.01em] mb-5">
        {title}
      </h2>
      {children}
    </section>
  );
}