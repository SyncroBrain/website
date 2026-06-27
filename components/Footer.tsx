'use client'

import { GithubOutlined } from '@ant-design/icons'

const links = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Compare', href: '#compare' },
    { label: 'Industries', href: '#industries' },
    { label: 'Pricing', href: '#pricing' },
  ],
  Developers: [
    { label: 'Documentation', href: '#' },
    { label: 'GitHub', href: 'https://github.com/syncrobrain' },
    { label: 'API Reference', href: '#' },
    { label: 'Changelog', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Company: [
    { label: 'LuminaryWorks', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: 'mailto:hi@syncrobrain.com' },
    { label: 'Privacy Policy', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(37,99,235,0.12)',
      background: 'rgba(5,8,18,0.95)',
    }}>
      {/* Main Footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px' }}>
        <div
          className="footer-grid"
          style={{ display: 'grid' }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 700,
                color: 'white',
                flexShrink: 0,
              }}>
                S
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'white', lineHeight: 1.1 }}>SyncroBrain</div>
                <div style={{ fontSize: 10, color: '#475569', letterSpacing: '0.04em' }}>万物智脑</div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.8, maxWidth: 280, marginBottom: 20 }}>
              An AI-native operating system for connected devices. Open source, sovereign, and built for enterprise.
            </p>

            {/* Social */}
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

          {/* Link Columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#334155',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.1em',
                marginBottom: 16,
                textTransform: 'uppercase',
              }}>
                {group}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {items.map(item => (
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

      {/* Bottom Bar */}
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
          © 2026 LuminaryWorks · syncrobrain.com
        </span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Privacy', 'Terms', 'Security'].map(l => (
            <a
              key={l}
              href="#"
              style={{ fontSize: 12, color: '#1e293b', textDecoration: 'none', fontFamily: 'var(--font-mono)', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#475569')}
              onMouseLeave={e => (e.currentTarget.style.color = '#1e293b')}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
