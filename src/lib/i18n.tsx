import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { profile, type Lang, type T, type Tag } from '../content/cv'

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (x: T | Tag) => string }
const LangContext = createContext<Ctx | null>(null)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'it' || saved === 'en') return saved
  } catch { /* storage unavailable */ }
  return 'it'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)
  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch { /* ignore */ }
  }
  useEffect(() => {
    document.documentElement.lang = lang
    document.title = profile.pageTitle[lang]
  }, [lang])
  const t = (x: T | Tag) => (typeof x === 'string' ? x : x[lang])
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang outside LangProvider')
  return ctx
}
