import type { Locale } from './types'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from './types'

const LOCALE_CODES: Locale[] = ['en', 'zh-CN', 'zh-TW', 'es', 'pt', 'nl', 'it', 'ja', 'ko']

export function isLocale(value: string): value is Locale {
  return LOCALE_CODES.includes(value as Locale)
}

function mapLanguageTag(tag: string): Locale | null {
  const normalized = tag.toLowerCase().replace('_', '-')

  if (normalized.startsWith('zh')) {
    if (
      normalized.includes('-tw') ||
      normalized.includes('-hk') ||
      normalized.includes('-mo') ||
      normalized.includes('hant')
    ) {
      return 'zh-TW'
    }
    return 'zh-CN'
  }

  if (normalized.startsWith('en')) return 'en'
  if (normalized.startsWith('es')) return 'es'
  if (normalized.startsWith('pt')) return 'pt'
  if (normalized.startsWith('nl')) return 'nl'
  if (normalized.startsWith('it')) return 'it'
  if (normalized.startsWith('ja')) return 'ja'
  if (normalized.startsWith('ko')) return 'ko'

  return null
}

export function detectBrowserLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored && isLocale(stored)) return stored

  const candidates = navigator.languages?.length
    ? navigator.languages
    : [navigator.language]

  for (const tag of candidates) {
    const mapped = mapLanguageTag(tag)
    if (mapped) return mapped
  }

  return DEFAULT_LOCALE
}

export function persistLocale(locale: Locale): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale)
  }
}
