'use client'

const industries = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="20" width="6" height="8" rx="2" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="13" y="14" width="6" height="14" rx="2" fill="rgba(34,197,94,0.1)" stroke="#22c55e" strokeWidth="1.5"/>
        <rect x="22" y="8" width="6" height="20" rx="2" fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="1.5"/>
        <path d="M2 28h28" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="7" cy="18" r="2" fill="#22c55e"/>
        <circle cx="16" cy="12" r="2" fill="#22c55e"/>
        <circle cx="25" cy="6" r="2" fill="#22c55e"/>
      </svg>
    ),
    color: '#22c55e',
    title: 'EV Charging & Energy Storage',
    subtitle: '充电桩 · 储能系统',
    description: 'Real-time OCPP integration, smart charging schedules, grid balancing, and battery health analytics across distributed charging networks.',
    tags: ['OCPP 2.0.1', 'V2G Protocol', 'BMS Monitoring', 'Grid Analytics'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 12h20v14a2 2 0 01-2 2H8a2 2 0 01-2-2V12z" fill="rgba(6,182,212,0.1)" stroke="#06b6d4" strokeWidth="1.5"/>
        <path d="M4 12l4-6h16l4 6" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12v8m8-8v8" stroke="#06b6d4" strokeWidth="1" strokeDasharray="2 2"/>
        <circle cx="16" cy="19" r="3" fill="rgba(6,182,212,0.2)" stroke="#06b6d4" strokeWidth="1.5"/>
        <path d="M16 4v2" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 5l1 1.5" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
        <path d="M22 5l-1 1.5" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    color: '#06b6d4',
    title: 'Cold Chain Logistics',
    subtitle: '冷链物流',
    description: 'End-to-end temperature monitoring from warehouse to last-mile delivery. HACCP compliance, alert automation, and blockchain-anchored audit trails.',
    tags: ['Temperature IoT', 'HACCP', 'GPS Tracking', 'Alert Rules'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="12" height="12" rx="2" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="17" y="3" width="12" height="12" rx="2" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="3" y="17" width="12" height="12" rx="2" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5"/>
        <rect x="17" y="17" width="12" height="12" rx="2" fill="rgba(59,130,246,0.2)" stroke="#3b82f6" strokeWidth="2"/>
        <path d="M21 23l2 2 4-4" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#3b82f6',
    title: 'Industrial Sensors',
    subtitle: '工业传感器 · 解码器',
    description: 'Modbus RTU/TCP and BACnet protocol decoders for legacy industrial equipment. Vibration, pressure, and environmental sensors with anomaly detection.',
    tags: ['Modbus RTU/TCP', 'BACnet/IP', 'OPC-UA', 'Anomaly AI'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="10" fill="rgba(139,92,246,0.1)" stroke="#8b5cf6" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="4" fill="rgba(139,92,246,0.3)" stroke="#8b5cf6" strokeWidth="1.5"/>
        <path d="M16 6v2m0 16v2M6 16h2m16 0h2" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 9l1.5 1.5m11-1.5L20 10.5M9 23l1.5-1.5m11 1.5L20 21.5" stroke="#8b5cf6" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    color: '#8b5cf6',
    title: 'White-label OEM Global',
    subtitle: '品牌定制 · 出海',
    description: 'Full white-label platform for OEMs expanding globally. Custom branding, multi-tenant architecture, region-specific compliance (CE, FCC, GDPR, CCC).',
    tags: ['White-label', 'Multi-tenant', 'CE/FCC/GDPR', 'Global Deploy'],
  },
]

export default function Industries() {
  return (
    <section id="industries" style={{
      padding: '100px 0',
      background: 'rgba(8,13,26,0.6)',
      borderTop: '1px solid rgba(37,99,235,0.08)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
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
            VERTICALS
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Built for demanding industries
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Pre-built protocol decoders, compliance templates, and industry-specific dashboards.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: 24,
        }}>
          {industries.map(ind => (
            <div
              key={ind.title}
              className="sb-glass"
              style={{
                padding: 28,
                transition: 'all 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(-4px)'
                el.style.borderColor = `${ind.color}40`
                el.style.boxShadow = `0 16px 32px -8px ${ind.color}12`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.transform = 'translateY(0)'
                el.style.borderColor = 'rgba(37,99,235,0.18)'
                el.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: 12,
                background: `${ind.color}12`,
                border: `1px solid ${ind.color}25`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
                {ind.icon}
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 700, color: 'white', marginBottom: 4, letterSpacing: '-0.01em' }}>
                {ind.title}
              </h3>
              <p style={{ fontSize: 12, color: ind.color, marginBottom: 12, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                {ind.subtitle}
              </p>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.7, marginBottom: 18 }}>
                {ind.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {ind.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: ind.color,
                    fontFamily: 'var(--font-mono)',
                    padding: '3px 8px',
                    borderRadius: 4,
                    background: `${ind.color}0f`,
                    border: `1px solid ${ind.color}25`,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
