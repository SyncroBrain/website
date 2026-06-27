'use client'

import { useEffect, useState } from 'react'
import { useI18n } from '@/lib/i18n/I18nProvider'

const layerMeta = [
  { id: 'edge', color: '#06b6d4', items: ['ESPHome', 'Arduino SDK', 'Modbus RTU', 'BACnet/IP', 'OPC-UA'] },
  { id: 'pipe', color: '#3b82f6', items: ['EMQX Broker', 'MQTT 5.0', 'Rule Engine', 'TLS 1.3', 'Webhooks'] },
  { id: 'brain', color: '#2563eb', items: ['ThingsBoard', 'AI Gateway', 'DoerFlow Agents', 'TimescaleDB', 'Redis'] },
  { id: 'client', color: '#8b5cf6', items: ['Web Console', 'Mobile App', 'DataLuminary BI', 'REST API', 'gRPC'] },
]

const protocols = ['MQTT 5.0', 'CoAP', 'AMQP', 'HTTP/REST', 'WebSocket', 'gRPC', 'Modbus', 'BACnet', 'OPC-UA']

export default function Architecture() {
  const { t } = useI18n()
  const a = t.architecture
  const [activeDot, setActiveDot] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveDot(d => (d + 1) % 3), 800)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="architecture" style={{
      padding: '100px 0',
      background: 'rgba(8,13,26,0.8)',
      borderTop: '1px solid rgba(37,99,235,0.08)',
      borderBottom: '1px solid rgba(37,99,235,0.08)',
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
            {a.tag}
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            {a.title}
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            {a.subtitle}
          </p>
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: 0,
          overflowX: 'auto',
          paddingBottom: 8,
        }}>
          {a.layers.map((layer, i) => {
            const meta = layerMeta[i]
            return (
              <div key={meta.id} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 200 }}>
                <div
                  className="sb-glass"
                  style={{
                    flex: 1,
                    padding: '24px 20px',
                    borderColor: `${meta.color}25`,
                    transition: 'all 0.3s',
                    position: 'relative',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = `${meta.color}50`
                    el.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.borderColor = `${meta.color}25`
                    el.style.transform = 'scale(1)'
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 10,
                    fontWeight: 700,
                    color: meta.color,
                    letterSpacing: '0.12em',
                    marginBottom: 12,
                    opacity: 0.7,
                  }}>
                    {layer.label}
                  </div>

                  <h3 style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: 6,
                  }}>
                    {layer.title}
                  </h3>
                  <p style={{ fontSize: 12, color: '#475569', marginBottom: 16, lineHeight: 1.5 }}>
                    {layer.desc}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {meta.items.map(item => (
                      <div key={item} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '5px 10px',
                        borderRadius: 6,
                        background: `${meta.color}0a`,
                        border: `1px solid ${meta.color}20`,
                      }}>
                        <span style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: meta.color,
                          flexShrink: 0,
                        }} />
                        <span style={{
                          fontSize: 12,
                          color: '#94a3b8',
                          fontFamily: 'var(--font-mono)',
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {i < a.layers.length - 1 && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 8px',
                    gap: 4,
                    flexShrink: 0,
                  }}>
                    {[0, 1, 2].map(d => (
                      <div
                        key={d}
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: activeDot === d ? '#2563eb' : 'rgba(37,99,235,0.2)',
                          transition: 'all 0.3s',
                          transform: activeDot === d ? 'scale(1.4)' : 'scale(1)',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div style={{
          marginTop: 40,
          padding: '16px 24px',
          borderRadius: 10,
          background: 'rgba(13,20,40,0.6)',
          border: '1px solid rgba(37,99,235,0.12)',
          display: 'flex',
          gap: 24,
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <span style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-mono)' }}>{a.protocols}</span>
          {protocols.map(p => (
            <span key={p} style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#60a5fa',
              fontFamily: 'var(--font-mono)',
              padding: '3px 8px',
              borderRadius: 4,
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.15)',
            }}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
