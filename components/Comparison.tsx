'use client'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'

const rows = [
  {
    feature: 'Deployment Model',
    tuya: 'Closed SaaS only',
    syncro: 'Open source · Private Deploy',
    tuyaOk: false,
  },
  {
    feature: 'Data Sovereignty',
    tuya: 'Data leaves your region',
    syncro: 'Data never leaves your infra',
    tuyaOk: false,
  },
  {
    feature: 'Core Capabilities',
    tuya: 'Device management only',
    syncro: 'AI + BI + Agent marketplace',
    tuyaOk: false,
  },
  {
    feature: 'Protocol Support',
    tuya: 'Proprietary Tuya protocol',
    syncro: 'MQTT / REST · Migrate anytime',
    tuyaOk: false,
  },
  {
    feature: 'White-label OEM',
    tuya: 'Limited, platform branded',
    syncro: 'Full white-label, your brand',
    tuyaOk: false,
  },
  {
    feature: 'Pricing Model',
    tuya: '¥数十万/yr + device fees',
    syncro: 'Self-host from ¥XX,XXX one-time',
    tuyaOk: false,
  },
  {
    feature: 'AI / LLM Integration',
    tuya: 'None',
    syncro: 'DoerFlow agents + custom LLM',
    tuyaOk: false,
  },
  {
    feature: 'Compliance (GDPR, NIS2)',
    tuya: 'Varies by region',
    syncro: 'Built-in · Air-gapped available',
    tuyaOk: false,
  },
  {
    feature: 'Source Code Access',
    tuya: 'Closed source',
    syncro: 'Open source (Apache 2.0)',
    tuyaOk: false,
  },
]

export default function Comparison() {
  return (
    <section id="compare" style={{ padding: '100px 0' }}>
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
            COMPARISON
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            SyncroBrain vs. Closed Platforms
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Why enterprises are moving away from Tuya, Alibaba IoT, and other closed SaaS IoT platforms.
          </p>
        </div>

        {/* Table */}
        <div style={{
          borderRadius: 16,
          border: '1px solid rgba(37,99,235,0.18)',
          overflow: 'hidden',
          background: 'rgba(13,20,40,0.7)',
        }}>
          {/* Table Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            background: 'rgba(37,99,235,0.08)',
            borderBottom: '1px solid rgba(37,99,235,0.18)',
          }}>
            <div style={{ padding: '16px 24px', fontSize: 12, fontWeight: 700, color: '#475569', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              FEATURE
            </div>
            <div style={{ padding: '16px 24px', fontSize: 13, fontWeight: 700, color: '#ef4444', borderLeft: '1px solid rgba(37,99,235,0.1)' }}>
              Tuya / Closed SaaS
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
              SyncroBrain
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                borderBottom: i < rows.length - 1 ? '1px solid rgba(37,99,235,0.08)' : 'none',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,99,235,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {/* Feature */}
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

              {/* Tuya */}
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

              {/* SyncroBrain */}
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

        {/* Bottom note */}
        <p style={{
          textAlign: 'center',
          marginTop: 24,
          fontSize: 13,
          color: '#475569',
          fontFamily: 'var(--font-mono)',
        }}>
          * Based on publicly available pricing and feature documentation. Last updated June 2025.
        </p>
      </div>
    </section>
  )
}
