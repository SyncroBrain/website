'use client'

import { Button } from 'antd'
import { CheckOutlined } from '@ant-design/icons'

const plans = [
  {
    name: 'Community',
    chinese: '社区版',
    price: 'Free',
    priceNote: 'Self-hosted · Open source',
    color: '#3b82f6',
    cta: 'Start Free',
    ctaHref: 'https://github.com/syncrobrain',
    highlight: false,
    features: [
      'Unlimited device connections',
      'MQTT + REST API',
      'ThingsBoard dashboards',
      'Community support',
      'Apache 2.0 license',
      'Docker Compose deploy',
      '1 workspace',
    ],
  },
  {
    name: 'Professional',
    chinese: '专业版',
    price: '¥XX,XXX',
    priceNote: 'One-time · Self-host',
    color: '#2563eb',
    cta: 'Get License',
    ctaHref: '#contact',
    highlight: true,
    badge: 'MOST POPULAR',
    features: [
      'Everything in Community',
      'DataLuminary BI integration',
      'DoerFlow agent marketplace',
      'White-label branding',
      'SLA 99.5% uptime',
      'Email + chat support',
      'Unlimited workspaces',
      'GDPR compliance pack',
    ],
  },
  {
    name: 'Enterprise',
    chinese: '企业版',
    price: 'Contact Sales',
    priceNote: 'Custom SLA · Private deploy',
    color: '#8b5cf6',
    cta: 'Talk to Sales',
    ctaHref: 'mailto:sales@syncrobrain.com',
    highlight: false,
    features: [
      'Everything in Professional',
      'Dedicated infrastructure',
      'Air-gapped deployment',
      'Custom protocol decoders',
      'SLA 99.9% + penalty',
      '24/7 dedicated support',
      'Training & onboarding',
      'NIS2 / sector compliance',
      'Source code escrow',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" style={{
      padding: '100px 0',
      background: 'rgba(8,13,26,0.8)',
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
            PRICING
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: 16,
          }}>
            No device fees. No surprises.
          </h2>
          <p style={{ fontSize: 17, color: '#64748b', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
            Pay once, own forever. Replace ¥数十万/yr SaaS bills with a one-time self-hosted deployment.
          </p>
        </div>

        {/* Plans */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {plans.map(plan => (
            <div
              key={plan.name}
              style={{
                padding: 32,
                borderRadius: 16,
                background: plan.highlight ? 'rgba(37,99,235,0.1)' : 'rgba(13,20,40,0.7)',
                border: `1px solid ${plan.highlight ? 'rgba(37,99,235,0.45)' : 'rgba(37,99,235,0.15)'}`,
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
                transform: plan.highlight ? 'scale(1.02)' : 'scale(1)',
                boxShadow: plan.highlight ? '0 24px 48px -12px rgba(37,99,235,0.25)' : 'none',
              }}
            >
              {/* Highlight glow */}
              {plan.highlight && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: 'linear-gradient(90deg, transparent, #2563eb, transparent)',
                }} />
              )}

              {/* Badge */}
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

              {/* Plan name */}
              <div style={{ marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: 'white', marginBottom: 2 }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: 12, color: plan.color, fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {plan.chinese}
                </p>
              </div>

              {/* Price */}
              <div style={{ marginBottom: 28 }}>
                <div style={{
                  fontSize: plan.price === 'Contact Sales' ? 26 : 40,
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

              {/* CTA */}
              <div style={{ marginBottom: 28 }}>
                {plan.highlight ? (
                  <Button
                    type="primary"
                    block
                    size="large"
                    href={plan.ctaHref}
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
                    href={plan.ctaHref}
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '10px 20px',
                      borderRadius: 8,
                      border: `1px solid ${plan.color}40`,
                      color: plan.color,
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = `${plan.color}10`
                      e.currentTarget.style.borderColor = `${plan.color}70`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.borderColor = `${plan.color}40`
                    }}
                  >
                    {plan.cta}
                  </a>
                )}
              </div>

              {/* Divider */}
              <div style={{ height: 1, background: 'rgba(37,99,235,0.1)', marginBottom: 24 }} />

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckOutlined style={{
                      color: plan.color,
                      fontSize: 13,
                      marginTop: 2,
                      flexShrink: 0,
                    }} />
                    <span style={{ fontSize: 13, color: '#94a3b8', lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{
          textAlign: 'center',
          marginTop: 40,
          fontSize: 13,
          color: '#334155',
          lineHeight: 1.7,
        }}>
          All plans include full source code access. No per-device fees. No usage caps.{' '}
          <a href="mailto:sales@syncrobrain.com" style={{ color: '#3b82f6', textDecoration: 'none' }}>
            Contact sales
          </a>{' '}
          for custom deployments and procurement.
        </p>
      </div>
    </section>
  )
}
