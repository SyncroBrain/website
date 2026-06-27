'use client'

import { useEffect, useState } from 'react'

const layers = [
  {
    id: 'edge',
    label: 'EDGE',
    title: 'Edge Layer',
    color: '#06b6d4',
    items: ['ESPHome', 'Arduino SDK', 'Modbus RTU', 'BACnet/IP', 'OPC-UA'],
    desc: 'Device firmware & protocol decoders',
  },
  {
    id: 'pipe',
    label: 'PIPE',
    title: 'Pipe Layer',
    color: '#3b82f6',
    items: ['EMQX Broker', 'MQTT 5.0', 'Rule Engine', 'TLS 1.3', 'Webhooks'],
    desc: 'Scalable telemetry pipeline',
  },
  {
    id: 'brain',
    label: 'BRAIN',
    title: 'Brain Layer',
    color: '#2563eb',
    items: ['ThingsBoard', 'AI Gateway', 'DoerFlow Agents', 'TimescaleDB', 'Redis'],
    desc: 'Intelligence & storage core',
  },
  {
    id: 'client',
    label: 'CLIENT',
    title: 'Client Layer',
    color: '#8b5cf6',
    items: ['Web Console', 'Mobile App', 'DataLuminary BI', 'REST API', 'gRPC'],
    desc: 'Management & analytics interfaces',
  },
]

const arrows = ['→', '→', '→']

export default function Architecture() {
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
            ARCHITECTURE
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            Edge → Pipe → Brain → Client
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            A clean, four-layer architecture built on open standards. No vendor lock-in. Migrate anytime.
          </p>
        </div>

        {/* Architecture Flow */}
        <div style={{
          display: 'flex',
          alignItems: 'stretch',
          gap: 0,
          overflowX: 'auto',
          paddingBottom: 8,
        }}>
          {layers.map((layer, i) => (
            <div key={layer.id} style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 200 }}>
              {/* Layer Card */}
              <div
                className="sb-glass"
                style={{
                  flex: 1,
                  padding: '24px 20px',
                  borderColor: `${layer.color}25`,
                  transition: 'all 0.3s',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${layer.color}50`
                  el.style.transform = 'scale(1.02)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${layer.color}25`
                  el.style.transform = 'scale(1)'
                }}
              >
                {/* Layer tag */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10,
                  fontWeight: 700,
                  color: layer.color,
                  letterSpacing: '0.12em',
                  marginBottom: 12,
                  opacity: 0.7,
                }}>
                  {layer.label}
                </div>

                {/* Title */}
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

                {/* Stack items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {layer.items.map(item => (
                    <div key={item} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      padding: '5px 10px',
                      borderRadius: 6,
                      background: `${layer.color}0a`,
                      border: `1px solid ${layer.color}20`,
                    }}>
                      <span style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: layer.color,
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

              {/* Arrow connector */}
              {i < layers.length - 1 && (
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
          ))}
        </div>

        {/* Protocol strip */}
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
          <span style={{ fontSize: 12, color: '#475569', fontFamily: 'var(--font-mono)' }}>PROTOCOLS:</span>
          {['MQTT 5.0', 'CoAP', 'AMQP', 'HTTP/REST', 'WebSocket', 'gRPC', 'Modbus', 'BACnet', 'OPC-UA'].map(p => (
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
