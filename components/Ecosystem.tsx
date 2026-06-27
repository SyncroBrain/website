'use client'

import { useI18n } from '@/lib/i18n/I18nProvider'

const productMeta = [
  { id: 'data-luminary', name: 'DataLuminary', color: '#f59e0b', href: 'https://github.com/dataluminary/platform', highlight: false },
  { id: 'syncrobrain', name: 'SyncroBrain', color: '#2563eb', href: '#hero', highlight: true },
  { id: 'blocky-edu', name: 'BlockyEdu', color: '#22c55e', href: 'https://github.com/blockyedu/platform', highlight: false },
  { id: 'doerflow', name: 'DoerFlow', color: '#8b5cf6', href: 'https://github.com/doerflow/platform', highlight: false },
  { id: 'vistaremote', name: 'VistaRemote', color: '#06b6d4', href: 'https://github.com/VistaRemote/vibeCode', highlight: false },
  { id: 'vistacast', name: 'VistaCast', color: '#ef4444', href: 'https://github.com/VistaCast/vistacast', highlight: false },
]

export default function Ecosystem() {
  const { t } = useI18n()
  const e = t.ecosystem

  return (
    <section id="ecosystem" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-block',
            padding: '4px 12px',
            borderRadius: 20,
            border: '1px solid rgba(245,158,11,0.4)',
            background: 'rgba(245,158,11,0.08)',
            fontSize: 11,
            fontWeight: 700,
            color: '#fbbf24',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.08em',
            marginBottom: 16,
          }}>
            {e.tag}
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            {e.title}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            {e.subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {productMeta.map((p, i) => {
            const copy = e.products[i]
            return (
              <a
                key={p.id}
                href={p.href}
                target={p.href.startsWith('http') ? '_blank' : undefined}
                rel={p.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    padding: 24,
                    borderRadius: 12,
                    background: p.highlight
                      ? 'rgba(37,99,235,0.12)'
                      : 'rgba(13,20,40,0.7)',
                    border: `1px solid ${p.highlight ? 'rgba(37,99,235,0.5)' : 'rgba(37,99,235,0.15)'}`,
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.25s',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={el => {
                    const target = el.currentTarget as HTMLDivElement
                    target.style.transform = 'translateY(-3px)'
                    target.style.borderColor = `${p.color}50`
                    target.style.boxShadow = `0 12px 28px -6px ${p.color}15`
                  }}
                  onMouseLeave={el => {
                    const target = el.currentTarget as HTMLDivElement
                    target.style.transform = 'translateY(0)'
                    target.style.borderColor = p.highlight ? 'rgba(37,99,235,0.5)' : 'rgba(37,99,235,0.15)'
                    target.style.boxShadow = 'none'
                  }}
                >
                  {p.highlight && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.15), transparent 70%)',
                      pointerEvents: 'none',
                    }} />
                  )}

                  {p.highlight && (
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      fontSize: 9,
                      fontWeight: 800,
                      color: '#2563eb',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                      padding: '2px 7px',
                      borderRadius: 4,
                      background: 'rgba(37,99,235,0.15)',
                      border: '1px solid rgba(37,99,235,0.3)',
                    }}>
                      {e.youAreHere}
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                    <div style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: p.color,
                      boxShadow: `0 0 8px ${p.color}60`,
                    }} />
                    <span style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: p.color,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.08em',
                    }}>
                      {copy.tagline.toUpperCase()}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: 6,
                    letterSpacing: '-0.01em',
                  }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>
                    {copy.desc}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a
            href="https://github.com/LuminaryWorks/LuminaryWorks"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 13,
              color: '#475569',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={ev => (ev.currentTarget.style.color = '#94a3b8')}
            onMouseLeave={ev => (ev.currentTarget.style.color = '#475569')}
          >
            {e.footer}
          </a>
        </div>
      </div>
    </section>
  )
}
