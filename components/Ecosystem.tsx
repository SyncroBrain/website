'use client'

const products = [
  {
    id: 'data-luminary',
    name: 'DataLuminary',
    tagline: 'See',
    desc: 'BI analytics & reporting for IoT telemetry data',
    color: '#f59e0b',
    href: 'https://github.com/dataluminary/platform',
    highlight: false,
  },
  {
    id: 'syncrobrain',
    name: 'SyncroBrain',
    tagline: 'Connect',
    desc: 'AI-native IoT PaaS — you are here',
    color: '#2563eb',
    href: '#hero',
    highlight: true,
    badge: 'YOU ARE HERE',
  },
  {
    id: 'blocky-edu',
    name: 'BlockyEdu',
    tagline: 'Learn',
    desc: 'Visual programming education platform',
    color: '#22c55e',
    href: 'https://github.com/blockyedu/platform',
    highlight: false,
  },
  {
    id: 'doerflow',
    name: 'DoerFlow',
    tagline: 'Earn',
    desc: 'AI agent marketplace & workflow automation',
    color: '#8b5cf6',
    href: 'https://github.com/doerflow/platform',
    highlight: false,
  },
  {
    id: 'vistaremote',
    name: 'VistaRemote',
    tagline: 'Control',
    desc: 'Remote device management console',
    color: '#06b6d4',
    href: 'https://github.com/VistaRemote/vibeCode',
    highlight: false,
  },
  {
    id: 'vistacast',
    name: 'VistaCast',
    tagline: 'Watch',
    desc: 'Live stream & media management platform',
    color: '#ef4444',
    href: 'https://github.com/VistaCast/vistacast',
    highlight: false,
  },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
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
            LUMINARYWORKS ECOSYSTEM
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Part of LuminaryWorks
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            SyncroBrain is one module in the LuminaryWorks product family — an integrated suite for the intelligent enterprise.
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 20,
        }}>
          {products.map(p => (
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
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(-3px)'
                  el.style.borderColor = `${p.color}50`
                  el.style.boxShadow = `0 12px 28px -6px ${p.color}15`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.transform = 'translateY(0)'
                  el.style.borderColor = p.highlight ? 'rgba(37,99,235,0.5)' : 'rgba(37,99,235,0.15)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Highlight glow */}
                {p.highlight && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.15), transparent 70%)',
                    pointerEvents: 'none',
                  }} />
                )}

                {/* Badge */}
                {p.badge && (
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
                    {p.badge}
                  </div>
                )}

                {/* Tagline dot */}
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
                    {p.tagline.toUpperCase()}
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
                  {p.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Parent link */}
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
            onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
            onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
          >
            Part of LuminaryWorks &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
