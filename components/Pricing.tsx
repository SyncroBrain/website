'use client'

import { Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'
import { useI18n } from '@/lib/i18n/I18nProvider'

const planMeta = [
  { color: '#3b82f6', ctaHref: 'https://github.com/syncrobrain', highlight: false },
  { color: '#2563eb', ctaHref: '#contact', highlight: true },
  { color: '#8b5cf6', ctaHref: 'mailto:sales@syncrobrain.com', highlight: false },
]

export default function Pricing() {
  const { t } = useI18n()
  const p = t.pricing

  return (
    <section id="pricing" style={{
      padding: '100px 0',
      background: 'rgba(8,13,26,0.8)',
      borderTop: '1px solid rgba(37,99,235,0.08)',
    }}>
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
            {p.tag}
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            {p.title}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            {p.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {p.plans.map((plan, i) => {
            const meta = planMeta[i]
            return (
              <div
                key={plan.name}
                style={{
                  padding: 32,
                  borderRadius: 16,
                  background: meta.highlight ? 'rgba(37,99,235,0.1)' : 'rgba(13,20,40,0.7)',
                  border: `1px solid ${meta.highlight ? 'rgba(37,99,235,0.45)' : 'rgba(37,99,235,0.15)'}`,
                  backdropFilter: 'blur(12px)',
                  position: 'relative',
                  overflow: 'hidden',
                  transform: meta.highlight ? 'scale(1.02)' : 'scale(1)',
                  boxShadow: meta.highlight ? '0 24px 48px -12px rgba(37,99,235,0.25)' : 'none',
                }}
              >
                {meta.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, #2563eb, transparent)',
                  }} />
                )}

                {plan.badge && (
                  <div style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontSize: 9,
                    fontWeight: 800,
                    color: '#60a5fa',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.08em',
                    padding: '3px 8px',
                    borderRadius: 4,
                    background: 'rgba(37,99,235,0.2)',
                    border: '1px solid rgba(37,99,235,0.4)',
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 2 }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: 12, color: meta.color, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {plan.chinese}
                  </p>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <div style={{
                    fontSize: i === 2 ? 26 : 40,
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: 1.1,
                    letterSpacing: '-0.03em',
                  }}>
                    {plan.price}
                  </div>
                  <div style={{ fontSize: 13, color: '#475569', marginTop: 4 }}>
                    {plan.priceNote}
                  </div>
                </div>

                <div style={{ marginBottom: 28 }}>
                  {meta.highlight ? (
                    <Button
                      type="primary"
                      block
                      size="large"
                      href={meta.ctaHref}
                      style={{
                        background: '#2563eb',
                        borderColor: '#2563eb',
                        fontWeight: 700,
                        height: 44,
                        borderRadius: 8,
                      }}
                    >
                      {plan.cta}
                    </Button>
                  ) : (
                    <a
                      href={meta.ctaHref}
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        padding: '10px 20px',
                        borderRadius: 8,
                        border: `1px solid ${meta.color}40`,
                        color: meta.color,
                        fontSize: 15,
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `${meta.color}10`
                        e.currentTarget.style.borderColor = `${meta.color}70`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.borderColor = `${meta.color}40`
                      }}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>

                <div style={{ height: 1, background: 'rgba(37,99,235,0.1)', marginBottom: 24 }} />

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <CheckOutlined style={{
                        color: meta.color,
                        fontSize: 13,
                        marginTop: 2,
                        flexShrink: 0,
                      }} />
                      <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p style={{
          textAlign: 'center',
          marginTop: 40,
          fontSize: 13,
          color: '#334155',
          lineHeight: 1.7,
        }}>
          {p.footnote}{' '}
          <a href="mailto:sales@syncrobrain.com" style={{ color: '#3b82f6', textDecoration: 'none' }}>
            {p.contactSales}
          </a>{' '}
          {p.footnoteSuffix}
        </p>
      </div>
    </section>
  )
}
