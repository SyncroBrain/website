export type Locale = 'en' | 'zh-CN' | 'zh-TW' | 'es' | 'pt' | 'nl' | 'it' | 'ja' | 'ko'

export const DEFAULT_LOCALE: Locale = 'en'

export const LOCALE_STORAGE_KEY = 'syncrobrain-locale'

export const SUPPORTED_LOCALES: { code: Locale; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'zh-CN', label: '简体中文' },
  { code: 'zh-TW', label: '繁體中文' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'it', label: 'Italiano' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
]

export interface Translations {
  common: {
    brandTagline: string
    login: string
    language: string
    toggleMenu: string
  }
  nav: {
    features: string
    architecture: string
    compare: string
    industries: string
    pricing: string
    docs: string
  }
  hero: {
    headline1: string
    headline2: string
    subheadline: string
    subheadlineHighlight: string
    description: string
    startFree: string
    viewGithub: string
    statDevices: string
    statDevicesLabel: string
    statCost: string
    statCostLabel: string
    statUptime: string
    statUptimeLabel: string
    terminalTitle: string
    badges: string[]
  }
  features: {
    tag: string
    title: string
    subtitle: string
    items: {
      tag: string
      title: string
      subtitle: string
      description: string
      bullets: string[]
    }[]
  }
  architecture: {
    tag: string
    title: string
    subtitle: string
    protocols: string
    layers: {
      label: string
      title: string
      desc: string
    }[]
  }
  comparison: {
    tag: string
    title: string
    subtitle: string
    colFeature: string
    colTuya: string
    colSyncro: string
    footnote: string
    rows: {
      feature: string
      tuya: string
      syncro: string
    }[]
  }
  industries: {
    tag: string
    title: string
    subtitle: string
    items: {
      title: string
      subtitle: string
      description: string
      tags: string[]
    }[]
  }
  ecosystem: {
    tag: string
    title: string
    subtitle: string
    youAreHere: string
    products: {
      tagline: string
      desc: string
    }[]
    footer: string
  }
  pricing: {
    tag: string
    title: string
    subtitle: string
    footnote: string
    footnoteSuffix: string
    contactSales: string
    plans: {
      name: string
      chinese: string
      price: string
      priceNote: string
      cta: string
      badge?: string
      features: string[]
    }[]
  }
  footer: {
    description: string
    groups: {
      product: string
      developers: string
      company: string
    }
    links: {
      features: string
      architecture: string
      compare: string
      industries: string
      pricing: string
      documentation: string
      github: string
      apiReference: string
      changelog: string
      status: string
      luminaryWorks: string
      about: string
      blog: string
      contact: string
      privacyPolicy: string
    }
    copyright: string
    privacy: string
    terms: string
    security: string
  }
}
