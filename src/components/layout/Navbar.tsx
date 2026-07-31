'use client'

import Link from 'next/link'
import { useTheme } from '@/src/hooks/usePixel'

export default function Navbar() {
  const { isPixel, toggleTheme } = useTheme()

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      backgroundColor: isPixel ? 'var(--bg-deep)' : 'var(--formal-white)',
      borderBottom: isPixel
        ? '4px solid var(--surface-3)'
        : '1px solid var(--formal-border)',
      boxShadow: isPixel
        ? '0 4px 0 0 #000'
        : '0 2px 20px rgba(30,30,24,0.06)',
      padding: '0 3rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'all 300ms ease',
    }}>

      {/* Logo */}
      <Link href="/" style={{
        fontFamily: isPixel ? 'var(--font-display)' : 'var(--font-serif)',
        fontSize: isPixel ? '14px' : '1.4rem',
        color: isPixel ? 'var(--coin-gold)' : 'var(--formal-olive)',
        textDecoration: 'none',
        fontWeight: 900,
        textShadow: isPixel ? 'var(--glow-gold)' : 'none',
        transition: 'all 300ms ease',
      }}>
        {isPixel ? 'JOUD.' : 'Joud.'}
      </Link>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'center',
        fontFamily: isPixel ? 'var(--font-mono)' : 'var(--font-inter)',
        fontSize: isPixel ? '13px' : '0.88rem',
        fontWeight: isPixel ? 400 : 500,
      }}>
        <Link href="/" style={{ color: isPixel ? 'var(--fg-2)' : 'var(--formal-mid)', textDecoration: 'none' }}>
          {isPixel ? 'HOME' : 'Home'}
        </Link>
        <Link href="/pm" style={{ color: isPixel ? 'var(--pm-blue)' : 'var(--formal-olive)', textDecoration: 'none' }}>
          {isPixel ? 'PM' : 'Product'}
        </Link>
        <Link href="/qa" style={{ color: isPixel ? 'var(--qa-magenta)' : 'var(--formal-olive)', textDecoration: 'none' }}>
          {isPixel ? 'QA' : 'QA'}
        </Link>
        <Link href="/blog" style={{ color: isPixel ? 'var(--fg-2)' : 'var(--formal-mid)', textDecoration: 'none' }}>
          {isPixel ? 'BLOG' : 'Blog'}
        </Link>
      </div>

      {/* Right side */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

        {/* Contact button */}
        <Link href="/contact" style={{
          fontFamily: isPixel ? 'var(--font-display)' : 'var(--font-inter)',
          fontSize: isPixel ? '10px' : '0.82rem',
          color: isPixel ? '#1a1d3a' : 'var(--formal-white)',
          backgroundColor: isPixel ? 'var(--coin-gold)' : 'var(--formal-olive)',
          border: isPixel ? '4px solid var(--coin-gold-deep)' : 'none',
          boxShadow: isPixel ? 'var(--shadow-1)' : '0 2px 12px rgba(61,90,42,0.25)',
          padding: isPixel ? '10px 16px' : '0.55rem 1.2rem',
          borderRadius: isPixel ? '0' : '6px',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'all 300ms ease',
        }}>
          {isPixel ? 'CONTACT' : 'Contact'}
        </Link>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title={isPixel ? 'Switch to Formal Mode' : 'Switch to Pixel Mode'}
          style={{
            background: isPixel ? 'var(--surface-2)' : 'var(--formal-bg2)',
            border: isPixel ? '3px solid var(--surface-3)' : '1.5px solid var(--formal-border)',
            borderRadius: isPixel ? '0' : '8px',
            padding: '6px 10px',
            cursor: 'pointer',
            fontSize: '18px',
            lineHeight: 1,
            transition: 'all 300ms ease',
            boxShadow: isPixel ? 'var(--shadow-1)' : '0 2px 8px rgba(0,0,0,0.06)',
            animation: !isPixel ? 'nudge 2s ease-in-out infinite' : 'none',
          }}
        >
          {isPixel ? '🌿' : '🎮'}
        </button>

      </div>
    </nav>
  )
}