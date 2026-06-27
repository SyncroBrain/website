'use client'

import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { GithubOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Compare', href: '#compare' },
  { label: 'Industries', href: '#industries' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: 'https://github.com/syncrobrain/platform/blob/main/ONBOARDING.md' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

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
        {/* Logo */}
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
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
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 16,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              SyncroBrain
            </div>
            <div style={{
              fontSize: 10,
              color: 'rgba(148,163,184,0.8)',
              lineHeight: 1.2,
              letterSpacing: '0.04em',
            }}>
              万物智脑
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
          {navLinks.map(link => (
            <a
              key={link.label}
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

        {/* CTA Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden md:flex">
          <a
            href="https://github.com/syncrobrain"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '6px 14px',
              color: 'rgba(148,163,184,0.9)',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 6,
              transition: 'all 0.2s',
              background: 'transparent',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#e2e8f0'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.6)'
              e.currentTarget.style.background = 'rgba(37,99,235,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(148,163,184,0.9)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.3)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <GithubOutlined style={{ fontSize: 15 }} />
            GitHub
          </a>
          <Button
            type="primary"
            size="small"
            href="#pricing"
            style={{
              background: '#2563eb',
              borderColor: '#2563eb',
              fontWeight: 600,
              fontSize: 14,
              height: 34,
              padding: '0 16px',
              borderRadius: 6,
            }}
          >
            Start Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
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
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(8,13,26,0.97)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(37,99,235,0.15)',
          padding: '16px 24px 24px',
        }}>
          {navLinks.map(link => (
            <a
              key={link.label}
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
          <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
            <Button
              type="primary"
              block
              style={{ background: '#2563eb', borderColor: '#2563eb', fontWeight: 600 }}
            >
              Start Free
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
