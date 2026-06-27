'use client'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { useI18n } from '@/lib/i18n/I18nProvider'

export default function Comparison() {
  const { t } = useI18n()
  const c = t.comparison

  return (
    <section id="compare" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: 20,
            border: '1px solid rgba(37,99,235,0.4)',
            background: 'rgba(37,99,235,0.08)',
            fontSize: 11,
            fontWeight: 700,
            color: '#60a5fa',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            marginBottom: 16,
          }}>
            {c.tag}
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            {c.title}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            {c.subtitle}
          </p>
        </div>

        <div style={{
          borderRadius: 16,
          border: '1px solid rgba(37,99,235,0.18)',
          overflow: 'hidden',
          background: 'rgba(13,20,40,0.7)',
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            background: 'rgba(37,99,235,0.08)',
            borderBottom: '1px solid rgba(37,99,235,0.18)',
          }}>
            <div style={{ padding: '16px 24px', fontSize: 12, fontWeight: 700, color: '#475569', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              {c.colFeature}
            </div>
            <div style={{ padding: '16px 24px', fontSize: 13, fontWeight: 700, color: '#ef4444', borderLeft: '1px solid rgba(37,99,235,0.1)' }}>
              {c.colTuya}
            </div>
            <div style={{
              padding: '16px 24px',
              fontSize: 13,
              fontWeight: 700,
              color: '#22c55e',
              borderLeft: '1px solid rgba(37,99,235,0.1)',
              background: 'rgba(37,99,235,0.05)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <span style={{
                display: 'inline-block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#2563eb',
              }} />
              {c.colSyncro}
            </div>
          </div>

          {c.rows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < c.rows.length - 1 ? '1px solid rgba(37,99,235,0.08)' : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,99,235,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{
                padding: '16px 24px',
                fontSize: 14,
                color: '#94a3b8',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
              }}>
                {row.feature}
              </div>

              <div style={{
                padding: '16px 24px',
                borderLeft: '1px solid rgba(37,99,235,0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <CloseOutlined style={{ color: '#ef4444', fontSize: 13, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: '#64748b' }}>{row.tuya}</span>
              </div>

              <div style={{
                padding: '16px 24px',
                borderLeft: '1px solid rgba(37,99,235,0.08)',
                background: 'rgba(37,99,235,0.03)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <CheckOutlined style={{ color: '#22c55e', fontSize: 13, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: '#e2e8f0', fontWeight: 500 }}>{row.syncro}</span>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: 24,
          fontSize: 13,
          color: '#475569',
          fontFamily: 'var(--font-mono)',
        }}>
          {c.footnote}
        </p>
      </div>
    </section>
  )
}
