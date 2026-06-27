'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import {
  detectBrowserLocale,
  getTranslations,
  persistLocale,
  type Locale,
  type Translations,
} from '@/lib/i18n'

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const detected = detectBrowserLocale()
    setLocaleState(detected)
    document.documentElement.lang = detected
    setMounted(true)
  }, [])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    persistLocale(next)
    document.documentElement.lang = next
  }

  const t = getTranslations(locale)

  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: 'en', setLocale, t: getTranslations('en') }}>
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
