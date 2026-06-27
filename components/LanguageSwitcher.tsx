'use client'

import { Dropdown } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'
import type { CSSProperties } from 'react'
import { useI18n } from '@/lib/i18n/I18nProvider'
import { SUPPORTED_LOCALES, type Locale } from '@/lib/i18n'

const navActionStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px',
  color: 'rgba(148,163,184,0.9)',
  fontSize: 13,
  fontWeight: 500,
  textDecoration: 'none',
  border: '1px solid rgba(37,99,235,0.25)',
  borderRadius: 6,
  transition: 'all 0.2s',
  background: 'transparent',
  cursor: 'pointer',
  lineHeight: 1,
}

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()
  const current = SUPPORTED_LOCALES.find(l => l.code === locale)

  const items = SUPPORTED_LOCALES.map(({ code, label }) => ({
    key: code,
    label,
    onClick: () => setLocale(code as Locale),
  }))

  return (
    <Dropdown menu={{ items, selectedKeys: [locale] }} trigger={['click']} placement="bottomRight">
      <button
        type="button"
        aria-label={t.common.language}
        style={navActionStyle}
        onMouseEnter={e => {
          e.currentTarget.style.color = '#e2e8f0'
          e.currentTarget.style.borderColor = 'rgba(37,99,235,0.5)'
          e.currentTarget.style.background = 'rgba(37,99,235,0.08)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = 'rgba(148,163,184,0.9)'
          e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'
          e.currentTarget.style.background = 'transparent'
        }}
      >
        <GlobalOutlined style={{ fontSize: 14 }} />
        <span>{current?.label ?? 'English'}</span>
      </button>
    </Dropdown>
  )
}

export const LOGIN_URL = process.env.NEXT_PUBLIC_LOGIN_URL ?? 'https://console.syncrobrain.com'
