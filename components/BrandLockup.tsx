'use client'

import type { CSSProperties } from 'react'
import Logo from '@/components/Logo'
import { useI18n } from '@/lib/i18n/I18nProvider'

interface BrandLockupProps {
  href?: string
  taglineColor?: string
  titleSize?: number
  style?: CSSProperties
}

export default function BrandLockup({
  href = '/',
  taglineColor = 'rgba(148,163,184,0.8)',
  titleSize = 16,
  style,
}: BrandLockupProps) {
  const { t } = useI18n()

  const content = (
    <>
      <Logo size={36} variant="mark" />
      <div>
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: titleSize,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          SyncroBrain
        </div>
        <div
          style={{
            fontSize: 10,
            color: taglineColor,
            lineHeight: 1.2,
            letterSpacing: '0.04em',
          }}
        >
          {t.common.brandTagline}
        </div>
      </div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          ...style,
        }}
      >
        {content}
      </a>
    )
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, ...style }}>
      {content}
    </div>
  )
}
