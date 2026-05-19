// src/i18n/plural.ts
//
// Слов'янські плюрали для UK і RU. Тримаємо тут, бо потрібно і в LearnPage
// (картки тем: "11 слів"), і в ThemePage, і всюди, де числа.
//
// Використання:
//   plural(11, ['слово', 'слова', 'слів']) → 'слів'
//   `${n} ${plural(n, t.common.cardForms)}` → '11 слів' / '11 слов'

export function plural(n: number, forms: [string, string, string]): string {
  const abs = Math.abs(n) % 100;
  const last = abs % 10;
  if (abs >= 11 && abs <= 19) return forms[2];
  if (last === 1) return forms[0];
  if (last >= 2 && last <= 4) return forms[1];
  return forms[2];
}