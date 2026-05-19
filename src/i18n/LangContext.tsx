// src/i18n/LangContext.tsx
//
// React Context для поточної мови UI. Тримає стан + персистить у localStorage.
// Використання:
//   const { t, lang, setLang } = useLang();
//   <h1>{t.pages.home.greeting}</h1>

import {createContext, type ReactNode, useContext, useEffect, useState} from 'react';
import {type Lang, translations, type Translations} from './translations';

const STORAGE_KEY = 'aybuben:lang';

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const LangContext = createContext<LangContextValue | null>(null);

function getInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'uk' || stored === 'ru' ? stored : 'uk';
}

export function LangProvider({children}: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{lang, setLang: setLangState, t: translations[lang]}}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
