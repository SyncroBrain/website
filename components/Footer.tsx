'use client'

import { GithubOutlined } from '@ant-design/icons'
import BrandLockup from '@/components/BrandLockup'
import { useI18n } from '@/lib/i18n/I18nProvider'

export default function Footer() {
  const { t } = useI18n()
  const f = t.footer

  const linkGroups = [
    {
      title: f.groups.product,
      items: [
        { label: f.links.features, href: '#features' },
        { label: f.links.architecture, href: '#architecture' },
        { label: f.links.compare, href: '#compare' },
        { label: f.links.industries, href: '#industries' },
        { label: f.links.pricing, href: '#pricing' },
      ],
    },
    {
      title: f.groups.developers,
      items: [
        { label: f.links.documentation, href: '#' },
        { label: f.links.github, href: 'https://github.com/syncrobrain' },
        { label: f.links.apiReference, href: '#' },
        { label: f.links.changelog, href: '#' },
        { label: f.links.status, href: '#' },
      ],
    },
    {
      title: f.groups.company,
      items: [
        { label: f.links.luminaryWorks, href: '#' },
        { label: f.links.about, href: '#' },
        { label: f.links.blog, href: '#' },
        { label: f.links.contact, href: 'mailto:hi@syncrobrain.com' },
        { label: f.links.privacyPolicy, href: '#' },
      ],
    },
  ]

  const bottomLinks = [
    { label: f.privacy, href: '#' },
    { label: f.terms, href: '#' },
    { label: f.security, href: '#' },
  ]

  return (
    <footer style={{
      borderTop: '1px solid rgba(37,99,235,0.12)',
      background: 'rgba(5,8,18,0.95)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px' }}>
        <div className="footer-grid" style={{ display: 'grid' }}>
          <div>
            <BrandLockup href="/" taglineColor="#475569" titleSize={15} style={{ marginBottom: 16 }} />

            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8, maxWidth: 280, marginBottom: 20 }}>
              {f.description}
            </p>

            <div style={{ display: 'flex', gap: 12 }}>
              <a
                href="https://github.com/syncrobrain"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  border: '1px solid rgba(37,99,235,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#64748b',
                  fontSize: 16,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = '#e2e8f0'
                  el.style.borderColor = 'rgba(37,99,235,0.5)'
                  el.style.background = 'rgba(37,99,235,0.08)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.color = '#64748b'
                  el.style.borderColor = 'rgba(37,99,235,0.2)'
                  el.style.background = 'transparent'
                }}
              >
                <GithubOutlined />
              </a>
            </div>
          </div>

          {linkGroups.map(group => (
            <div key={group.title}>
              <h4 style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#334155',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.1em',
                marginBottom: 16,
                textTransform: 'uppercase',
              }}>
                {group.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {group.items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      style={{
                        fontSize: 13,
                        color: '#475569',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        lineHeight: 1,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(37,99,235,0.08)',
        padding: '16px 24px',
        maxWidth: 1280,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span style={{ fontSize: 12, color: '#1e293b', fontFamily: 'var(--font-mono)' }}>
          {f.copyright}
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {bottomLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              style={{ fontSize: 12, color: '#1e293b', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#475569')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1e293b')}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
