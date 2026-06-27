'use client'

import { useState, useEffect } from 'react'
import { UserOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'
import type { CSSProperties } from 'react'
import BrandLockup from '@/components/BrandLockup'
import LanguageSwitcher, { LOGIN_URL } from '@/components/LanguageSwitcher'
import { useI18n } from '@/lib/i18n/I18nProvider'

const navActionStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 12px',
  color: 'rgba(148,163,184,0.9)',
  fontSize: 13,
  fontWeight: 500,
  textDecoration: 'none',
  border: '1px solid rgba(37,99,235,0.25)',
  borderRadius: 6,
  transition: 'all 0.2s',
  background: 'transparent',
  lineHeight: 1,
}

export default function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.architecture, href: '#architecture' },
    { label: t.nav.compare, href: '#compare' },
    { label: t.nav.industries, href: '#industries' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.docs, href: 'https://github.com/syncrobrain/platform/blob/main/ONBOARDING.md' },
  ]

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(8, 13, 26, 0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(37,99,235,0.15)' : '1px solid transparent',
      }}
    >
      <div style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <BrandLockup />

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                padding: '6px 14px',
                color: 'rgba(148,163,184,0.9)',
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: 6,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e2e8f0')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(148,163,184,0.9)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden md:flex">
          <LanguageSwitcher />
          <a
            href={LOGIN_URL}
            style={navActionStyle}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.5)'
              e.currentTarget.style.background = 'rgba(37,99,235,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(148,163,184,0.9)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <UserOutlined style={{ fontSize: 14 }} />
            {t.common.login}
          </a>
        </div>

        <button
          className="flex md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            fontSize: 20,
            padding: 4,
          }}
          aria-label={t.common.toggleMenu}
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{
          background: 'rgba(8,13,26,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(37,99,235,0.15)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                color: '#94a3b8',
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid rgba(37,99,235,0.08)',
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: 16, display: 'flex', gap: 10, alignItems: 'center' }}>
            <LanguageSwitcher />
            <a
              href={LOGIN_URL}
              style={{ ...navActionStyle, flex: 1, justifyContent: 'center' }}
            >
              <UserOutlined style={{ fontSize: 14 }} />
              {t.common.login}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
