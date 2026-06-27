'use client'

import { useEffect, useState } from 'react'
import { Button } from 'antd'
import { GithubOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useI18n } from '@/lib/i18n/I18nProvider'

function NeuralNetwork() {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 60)
    return () => clearInterval(id)
  }, [])

  const nodes = [
    { id: 'e1', x: 60,  y: 80,  label: 'ESP32',    color: '#06b6d4', r: 18 },
    { id: 'e2', x: 60,  y: 180, label: 'Sensor',   color: '#06b6d4', r: 18 },
    { id: 'e3', x: 60,  y: 280, label: 'Gateway',  color: '#06b6d4', r: 18 },
    { id: 'p1', x: 200, y: 130, label: 'EMQX',     color: '#3b82f6', r: 22 },
    { id: 'p2', x: 200, y: 230, label: 'MQTT',     color: '#3b82f6', r: 22 },
    { id: 'brain', x: 340, y: 180, label: 'AI Brain', color: '#2563eb', r: 32 },
    { id: 'c1', x: 480, y: 100, label: 'Console',  color: '#8b5cf6', r: 18 },
    { id: 'c2', x: 480, y: 180, label: 'BI',       color: '#8b5cf6', r: 18 },
    { id: 'c3', x: 480, y: 260, label: 'Agents',   color: '#8b5cf6', r: 18 },
  ]

  const edges = [
    { from: 'e1', to: 'p1' },
    { from: 'e2', to: 'p1' },
    { from: 'e2', to: 'p2' },
    { from: 'e3', to: 'p2' },
    { from: 'p1', to: 'brain' },
    { from: 'p2', to: 'brain' },
    { from: 'brain', to: 'c1' },
    { from: 'brain', to: 'c2' },
    { from: 'brain', to: 'c3' },
  ]

  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <svg viewBox="0 0 560 360" style={{ width: '100%', height: '100%', overflow: 'visible' }} aria-hidden="true">
      <defs>
        <radialGradient id="brainGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx={340} cy={180} r={60} fill="url(#brainGlow)" />

      {edges.map((edge, i) => {
        const from = nodeMap[edge.from]
        const to = nodeMap[edge.to]
        const phase = ((tick + i * 15) % 60) / 60
        const px = from.x + (to.x - from.x) * phase
        const py = from.y + (to.y - from.y) * phase
        return (
          <g key={edge.from + edge.to}>
            <line
              x1={from.x} y1={from.y} x2={to.x} y2={to.y}
              stroke="rgba(37,99,235,0.25)"
              strokeWidth={1.5}
              strokeDasharray="4 4"
            />
            <circle cx={px} cy={py} r={3} fill={from.color} opacity={0.9} filter="url(#glow)" />
          </g>
        )
      })}

      {nodes.map(n => (
        <g key={n.id} filter={n.id === 'brain' ? 'url(#glow)' : undefined}>
          <circle cx={n.x} cy={n.y} r={n.r + 4} fill="none" stroke={n.color} strokeWidth={1} opacity={0.3} />
          <circle cx={n.x} cy={n.y} r={n.r} fill={`${n.color}20`} stroke={n.color} strokeWidth={n.id === 'brain' ? 2 : 1.5} />
          <text x={n.x} y={n.y - 2} textAnchor="middle" dominantBaseline="middle" fill={n.color} fontSize={n.id === 'brain' ? 10 : 8} fontFamily="var(--font-mono)" fontWeight={700}>
            {n.id === 'brain' ? 'BRAIN' : n.label.substring(0, 3).toUpperCase()}
          </text>
          <text x={n.x} y={n.y + n.r + 12} textAnchor="middle" fill="rgba(148,163,184,0.7)" fontSize={8} fontFamily="var(--font-mono)">
            {n.label}
          </text>
        </g>
      ))}

      {[
        { x: 50, y: 360, text: 'EDGE', color: '#06b6d4' },
        { x: 195, y: 360, text: 'PIPE', color: '#3b82f6' },
        { x: 335, y: 360, text: 'BRAIN', color: '#2563eb' },
        { x: 475, y: 360, text: 'CLIENT', color: '#8b5cf6' },
      ].map(lbl => (
        <text key={lbl.text} x={lbl.x} y={lbl.y} textAnchor="middle" fill={lbl.color} fontSize={9} fontFamily="var(--font-mono)" fontWeight={700} opacity={0.6} letterSpacing={2}>
          {lbl.text}
        </text>
      ))}
    </svg>
  )
}

export default function Hero() {
  const { t } = useI18n()
  const h = t.hero

  const stats = [
    { value: h.statDevices, label: h.statDevicesLabel },
    { value: h.statCost, label: h.statCostLabel },
    { value: h.statUptime, label: h.statUptimeLabel },
  ]

  return (
    <section
      id="hero"
      className="sb-grid-bg"
      style={{
        minHeight: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 72,
        paddingBottom: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 520,
        height: 520,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gap: 32,
            alignItems: 'center',
            minHeight: '58vh',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <h1 style={{
                fontSize: 'clamp(32px, 4.5vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                color: 'white',
                marginBottom: 0,
              }}>
                {h.headline1}{' '}
                <span className="gradient-text">{h.headline2}</span>
              </h1>
            </div>

            <div style={{
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: 500,
            }}>
              {h.subheadline}{' '}
              <span style={{ color: '#60a5fa' }}>{h.subheadlineHighlight}</span>
            </div>

            <p style={{
              fontSize: 14,
              color: '#64748b',
              lineHeight: 1.6,
              maxWidth: 460,
              margin: 0,
            }}>
              {h.description}
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', paddingTop: 4 }}>
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                style={{
                  background: '#2563eb',
                  borderColor: '#2563eb',
                  fontWeight: 700,
                  fontSize: 14,
                  height: 44,
                  padding: '0 24px',
                  borderRadius: 8,
                }}
                href="#pricing"
              >
                {h.startFree}
              </Button>
              <a
                href="https://github.com/syncrobrain"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  height: 44,
                  padding: '0 20px',
                  borderRadius: 8,
                  border: '1px solid rgba(37,99,235,0.35)',
                  color: '#e2e8f0',
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  background: 'transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'rgba(37,99,235,0.35)'
                }}
              >
                <GithubOutlined style={{ fontSize: 16 }} />
                {h.viewGithub}
              </a>
            </div>

            <div style={{ display: 'flex', gap: 28, paddingTop: 4, flexWrap: 'wrap' }}>
              {stats.map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#60a5fa', lineHeight: 1.1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 320,
          }}>
            <div
              className="animate-float"
              style={{
                width: '100%',
                maxWidth: 520,
                aspectRatio: '3/2',
                background: 'rgba(13,20,40,0.6)',
                border: '1px solid rgba(37,99,235,0.2)',
                borderRadius: 16,
                padding: '20px 14px',
                position: 'relative',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                marginBottom: 12,
                paddingBottom: 10,
                borderBottom: '1px solid rgba(37,99,235,0.12)',
              }}>
                {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                  <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                ))}
                <span style={{ marginLeft: 8, fontSize: 11, color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  {h.terminalTitle}
                </span>
              </div>
              <NeuralNetwork />
            </div>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(37,99,235,0.12)',
        borderBottom: '1px solid rgba(37,99,235,0.12)',
        background: 'rgba(13,20,40,0.5)',
        padding: '10px 0',
        marginTop: 32,
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {h.badges.map(b => (
            <span key={b} style={{
              fontSize: 11,
              fontWeight: 600,
              color: '#94a3b8',
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}>
              <span style={{
                display: 'inline-block',
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#2563eb',
              }} />
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
