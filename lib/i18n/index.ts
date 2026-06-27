import type { Locale, Translations } from './types'
import { en } from './locales/en'
import { zhCN } from './locales/zh-CN'
import { zhTW } from './locales/zh-TW'
import { es } from './locales/es'
import { pt } from './locales/pt'
import { nl } from './locales/nl'
import { it } from './locales/it'
import { ja } from './locales/ja'
import { ko } from './locales/ko'

export * from './types'
export { detectBrowserLocale, persistLocale, isLocale } from './detect'

export const translations: Record<Locale, Translations> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  es,
  pt,
  nl,
  it,
  ja,
  ko,
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en
}
