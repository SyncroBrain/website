'use client'

const features = [
  {
    tag: 'SYNCRO PIPE',
    title: 'Syncro Pipe',
    subtitle: 'MQTT Pipeline Engine',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="10" width="24" height="8" rx="4" stroke="#06b6d4" strokeWidth="1.5" fill="rgba(6,182,212,0.1)"/>
        <circle cx="8" cy="14" r="2.5" fill="#06b6d4" />
        <circle cx="14" cy="14" r="2.5" fill="#06b6d4" opacity="0.6" />
        <circle cx="20" cy="14" r="2.5" fill="#06b6d4" opacity="0.3" />
      </svg>
    ),
    color: '#06b6d4',
    description: 'EMQX-powered MQTT broker with B2B low-frequency telemetry. Handle millions of device connections with sub-10ms latency. Built-in QoS, TLS, and bridge support.',
    bullets: ['EMQX 5.x cluster', 'B2B telemetry protocol', 'Rule engine & data routing', 'WebSocket + MQTT 5.0'],
  },
  {
    tag: 'AI BRAIN',
    title: 'AI Brain',
    subtitle: 'Intelligence Layer',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="8" stroke="#2563eb" strokeWidth="1.5" fill="rgba(37,99,235,0.1)"/>
        <circle cx="14" cy="14" r="3" fill="#2563eb" />
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180
          const x2 = 14 + 8 * Math.cos(rad)
          const y2 = 14 + 8 * Math.sin(rad)
          return <line key={i} x1="14" y1="14" x2={x2.toFixed(1)} y2={y2.toFixed(1)} stroke="#2563eb" strokeWidth="1" opacity="0.5" />
        })}
      </svg>
    ),
    color: '#2563eb',
    description: 'ThingsBoard rules engine + DataLuminary BI analytics + DoerFlow AI agent marketplace. Turn raw telemetry into actionable intelligence without leaving your perimeter.',
    bullets: ['ThingsBoard dashboards', 'DataLuminary BI reports', 'DoerFlow AI agents', 'Custom LLM integrations'],
  },
  {
    tag: 'SOVEREIGN CLOUD',
    title: 'Sovereign Cloud',
    subtitle: 'Private Deployment',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 3L25 9V19L14 25L3 19V9L14 3Z" stroke="#8b5cf6" strokeWidth="1.5" fill="rgba(139,92,246,0.1)"/>
        <path d="M14 8L20 11.5V18.5L14 22L8 18.5V11.5L14 8Z" stroke="#8b5cf6" strokeWidth="1" opacity="0.5"/>
        <circle cx="14" cy="15" r="3" fill="#8b5cf6" opacity="0.8" />
      </svg>
    ),
    color: '#8b5cf6',
    description: 'Full on-prem deployment — Kubernetes, Docker Compose, or bare metal. Your data never leaves your region. GDPR, NIS2, and sector-specific compliance out of the box.',
    bullets: ['On-prem / private cloud', 'Data sovereignty guaranteed', 'GDPR + NIS2 compliant', 'Air-gapped deployment'],
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
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
            CORE MODULES
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Three layers. One unified platform.
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Edge to intelligence in one stack. Replace five vendor bills with a single open-source deployment.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
        }}>
          {features.map((f) => (
            <div
              key={f.tag}
              className="sb-glass"
              style={{
                padding: 32,
                transition: 'all 0.3s ease',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = `${f.color}40`
                el.style.boxShadow = `0 20px 40px -10px ${f.color}15`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(37,99,235,0.18)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Background glow */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: 120,
                height: 120,
                background: `radial-gradient(circle at top right, ${f.color}08, transparent 70%)`,
                borderRadius: '0 12px 0 0',
                pointerEvents: 'none',
              }} />

              {/* Icon + Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 12,
                  background: `${f.color}15`,
                  border: `1px solid ${f.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {f.icon}
                </div>
                <span style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: f.color,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.1em',
                  opacity: 0.8,
                }}>
                  {f.tag}
                </span>
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 700, color: 'white', marginBottom: 4, letterSpacing: '-0.01em' }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 13, color: f.color, marginBottom: 14, fontWeight: 500 }}>
                {f.subtitle}
              </p>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 20 }}>
                {f.description}
              </p>

              {/* Bullets */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {f.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#94a3b8' }}>
                    <span style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: f.color,
                      flexShrink: 0,
                    }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
