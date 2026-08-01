'use client'

import { useTheme } from '@/src/hooks/usePixel'

const links = [
  { label: 'Home',    formalLabel: 'Home',    href: '/' },
  { label: 'PM',      formalLabel: 'Product', href: '/pm' },
  { label: 'QA',      formalLabel: 'QA',      href: '/qa' },
  { label: 'BLOG',    formalLabel: 'Blog',    href: '/blog' },
  { label: 'CONTACT', formalLabel: 'Contact', href: '/contact' },
]

const socials = [
  { label: 'EMAIL',    href: 'mailto:joudalshehri25@gmail.com' },
  { label: 'LINKEDIN', href: 'https://linkedin.com/in/joud-alshehri-2082822a3' },
  { label: 'GITHUB',   href: 'https://github.com/Joudprogs' },
]

export default function Footer() {
  const { isPixel } = useTheme()

  if (isPixel) return (
    <footer style={{
      borderTop: '6px solid var(--coin-gold)',
      boxShadow: '0 -4px 24px rgba(255,210,63,0.15)',
      background: 'var(--bg-deep)',
      padding: '3rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', color: 'var(--coin-gold)', marginBottom: '0.6rem' }}>JOUD.</div>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '16px', color: 'var(--fg-3)' }}>Product Manager & QA Specialist</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '13px', color: 'var(--fg-dim)', marginBottom: '0.3rem', letterSpacing: '0.1em' }}>NAVIGATE</div>
          {links.map((link) => (
            <a key={link.label} href={link.href}
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-2)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--coin-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              ▸ {link.label}
            </a>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '13px', color: 'var(--fg-dim)', marginBottom: '0.3rem', letterSpacing: '0.1em' }}>CONNECT</div>
          {socials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-2)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--sky-cyan)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              ▸ {link.label}
            </a>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: '860px', margin: '2rem auto 0', paddingTop: '1.5rem', borderTop: '2px solid var(--surface-3)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-dim)' }}>© 2025 JOUD ALSHEHRI. ALL RIGHTS RESERVED.</span>
        <span style={{ fontFamily: 'var(--font-pixel)', fontSize: '13px', color: 'var(--fg-dim)' }}>BUILT WITH ♥ IN JEDDAH</span>
      </div>
    </footer>
  )

  // ── FORMAL MODE ──
  return (
    <footer style={{
      borderTop: '1px solid var(--formal-border)',
      background: 'var(--formal-bg2)',
      padding: '4rem 2rem 2rem',
      marginTop: '0rem',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}>

        {/* Left */}
        <div style={{ maxWidth: '260px' }}>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 900, color: 'var(--formal-olive)', marginBottom: '0.5rem' }}>
            Joud.
          </div>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--formal-mid)', lineHeight: 1.7 }}>
            Product Manager & QA Specialist based in Jeddah, Saudi Arabia.
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--formal-mid)', marginBottom: '0.3rem' }}>
            Navigate
          </div>
          {links.map((link) => (
            <a key={link.formalLabel} href={link.href}
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--formal-ink2)', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--formal-olive)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--formal-ink2)')}
            >
              {link.formalLabel}
            </a>
          ))}
        </div>

        {/* Connect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
          <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--formal-mid)', marginBottom: '0.3rem' }}>
            Connect
          </div>
          {socials.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
              style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--formal-ink2)', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--formal-olive)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--formal-ink2)')}
            >
              {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{ maxWidth: '860px', margin: '2.5rem auto 0', paddingTop: '1.5rem', borderTop: '1px solid var(--formal-border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--formal-mid)' }}>
          © 2025 Joud Alshehri. All rights reserved.
        </span>
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '0.75rem', color: 'var(--formal-mid)' }}>
          Built with ♥ in Jeddah
        </span>
      </div>
    </footer>
  )
}