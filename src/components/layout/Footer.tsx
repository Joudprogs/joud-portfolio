
'use client'
export default function Footer() {
  return (
    <footer style={{
      borderTop: '6px solid var(--coin-gold)',
        boxShadow: '0 -4px 24px rgba(255,210,63,0.15)',
        background: 'var(--bg-deep)',
      padding: '3rem 2rem',
      marginTop: '4rem',
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '2rem',
      }}>

        {/* Left — Logo + tagline */}
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '14px',
            color: 'var(--coin-gold)',
            marginBottom: '0.6rem',
          }}>
            JOUD.
          </div>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '16px',
            color: 'var(--fg-3)',
          }}>
            Product Manager & QA Specialist
          </div>
        </div>

        {/* Center — Nav links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '13px',
            color: 'var(--fg-dim)',
            marginBottom: '0.3rem',
            letterSpacing: '0.1em',
          }}>
            NAVIGATE
          </div>
          {[
            { label: 'HOME', href: '/' },
            { label: 'PRODUCT MANAGER', href: '/pm' },
            { label: 'QA SPECIALIST', href: '/qa' },
            { label: 'BLOG', href: '/blog' },
            { label: 'CONTACT', href: '/contact' },
          ].map((link) => (
            <a key={link.label} href={link.href} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--fg-2)',
              textDecoration: 'none',
              transition: 'color 160ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--coin-gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              ▸ {link.label}
            </a>
          ))}
        </div>

        {/* Right — Contact links */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: '13px',
            color: 'var(--fg-dim)',
            marginBottom: '0.3rem',
            letterSpacing: '0.1em',
          }}>
            CONNECT
          </div>
          {[
            { label: 'EMAIL', href: 'mailto:joudalshehri25@gmail.com' },
            { label: 'LINKEDIN', href: 'https://linkedin.com/in/joud-alshehri-2082822a3' },
            { label: 'GITHUB', href: 'https://github.com/Joudprogs' },
          ].map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--fg-2)',
              textDecoration: 'none',
              transition: 'color 160ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--sky-cyan)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-2)')}
            >
              ▸ {link.label}
            </a>
          ))}
        </div>

      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: '860px',
        margin: '2rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '2px solid var(--surface-3)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: 'var(--fg-dim)',
        }}>
          © 2025 JOUD ALSHEHRI. ALL RIGHTS RESERVED.
        </span>
        <span style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '13px',
          color: 'var(--fg-dim)',
        }}>
          BUILT WITH ♥ IN JEDDAH
        </span>
      </div>

    </footer>
  )
}