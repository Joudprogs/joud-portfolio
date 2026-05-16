'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: 'var(--bg-deep)',
      borderBottom: '4px solid var(--surface-3)',
      boxShadow: '0 4px 0 0 #000',
      padding: '0 2rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>

      {/* Logo */}
      <Link href="/" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '14px',
        color: 'var(--coin-gold)',
        textDecoration: 'none',
        textShadow: 'var(--glow-gold)',
      }}>
        JOUD.
      </Link>

      {/* Links */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
      }}>
        <Link href="/" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>HOME</Link>
        <Link href="/pm" style={{ color: 'var(--pm-blue)', textDecoration: 'none' }}>PM</Link>
        <Link href="/qa" style={{ color: 'var(--qa-magenta)', textDecoration: 'none' }}>QA</Link>
        <Link href="/blog" style={{ color: 'var(--fg-2)', textDecoration: 'none' }}>BLOG</Link>
      </div>

      {/* Contact button */}
      <Link href="/contact" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '10px',
        color: '#1a1d3a',
        backgroundColor: 'var(--coin-gold)',
        border: '4px solid var(--coin-gold-deep)',
        boxShadow: 'var(--shadow-1)',
        padding: '10px 16px',
        textDecoration: 'none',
        textTransform: 'uppercase',
      }}>
        CONTACT
      </Link>

    </nav>
  )
}