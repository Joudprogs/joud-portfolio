'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useTheme } from '@/src/hooks/usePixel'

const players = [
  {
    id: 'pm',
    href: '/pm',
    title: 'PRODUCT MANAGER',
    formalTitle: 'Product Manager',
    subtitle: 'The Strategist',
    formalSubtitle: 'Strategy · Discovery · Delivery',
    color: 'var(--pm-blue)',
    formalColor: 'var(--formal-olive)',
    colorDeep: 'var(--pm-blue-deep)',
    glow: '0 0 24px rgba(78,168,255,0.5), 0 0 48px rgba(78,168,255,0.25)',
    skills: ['ROADMAP', 'PRD', 'AGILE', 'DISCOVERY', 'USER STORY'],
    formalSkills: ['Roadmap', 'PRD Writing', 'Agile', 'Discovery', 'User Stories'],
    icon: '📋',
  },
  {
    id: 'qa',
    href: '/qa',
    title: 'QA SPECIALIST',
    formalTitle: 'QA Specialist',
    subtitle: 'The Bug Hunter',
    formalSubtitle: 'Testing · Quality · Precision',
    color: 'var(--qa-magenta)',
    formalColor: 'var(--formal-olive)',
    colorDeep: 'var(--qa-magenta-deep)',
    glow: '0 0 24px rgba(255,92,200,0.5), 0 0 48px rgba(255,92,200,0.25)',
    skills: ['MANUAL TEST', 'TEST PLAN', 'UAT', 'CYPRESS'],
    formalSkills: ['Manual Testing', 'Test Planning', 'UAT', 'Cypress'],
    icon: '🔍',
  },
]

export default function Hero() {
  const [hovered, setHovered] = useState<string | null>(null)
  const { isPixel } = useTheme()

  if (isPixel) return (
    <section style={{
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 2rem 4rem',
      gap: '3rem',
    }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '22px',
          color: 'var(--fg-3)',
          marginBottom: '1rem',
          letterSpacing: '0.15em',
        }}>
          ► INSERT COIN TO CONTINUE ◄
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(16px, 3vw, 28px)',
          color: 'var(--coin-gold)',
          textShadow: 'var(--glow-gold)',
          letterSpacing: '0.08em',
          lineHeight: '1.6',
        }}>
          CHOOSE YOUR PLAYER
        </h1>
      </div>

      <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {players.map((player) => (
          <Link
            key={player.id}
            href={player.href}
            onMouseEnter={() => setHovered(player.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.2rem',
              background: 'var(--surface-1)',
              border: `4px solid ${player.color}`,
              boxShadow: hovered === player.id ? player.glow : 'var(--shadow-2)',
              padding: '2rem 2.5rem',
              width: '380px',
              cursor: 'pointer',
              transform: hovered === player.id ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'all 160ms cubic-bezier(0.4,0,0.6,1)',
              clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(8, 16px)',
              gridTemplateRows: 'repeat(8, 16px)',
              gap: '2px',
              margin: '0.5rem 0',
            }}>
              {(player.id === 'pm' ? [
                0,1,1,1,1,1,1,0,
                0,1,0,1,1,0,1,0,
                1,1,1,1,1,1,1,1,
                1,0,1,1,1,1,0,1,
                0,1,1,0,0,1,1,0,
                0,0,1,1,1,1,0,0,
                0,1,0,0,0,0,1,0,
                1,1,0,0,0,0,1,1,
              ] : [
                0,0,1,1,1,1,0,0,
                0,1,1,0,0,1,1,0,
                1,1,1,1,1,1,1,1,
                1,0,1,1,1,1,0,1,
                0,1,1,1,1,1,1,0,
                0,0,1,0,0,1,0,0,
                0,1,1,0,0,1,1,0,
                1,1,0,0,0,0,1,1,
              ]).map((cell, i) => (
                <div key={i} style={{
                  width: '16px', height: '16px',
                  backgroundColor: cell ? player.color : 'transparent',
                  boxShadow: cell && hovered === player.id ? `0 0 4px ${player.color}` : 'none',
                }} />
              ))}
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: player.color, letterSpacing: '0.08em', marginBottom: '0.3rem' }}>
                {player.title}
              </div>
              <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '20px', color: 'var(--fg-3)' }}>
                {player.subtitle}
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
              {player.skills.map((skill) => (
                <span key={skill} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '10px',
                  color: player.color, background: 'var(--surface-2)',
                  border: `2px solid ${player.color}`, padding: '3px 8px',
                }}>
                  {skill}
                </span>
              ))}
            </div>

            <div style={{
              fontFamily: 'var(--font-display)', fontSize: '10px',
              color: '#1a1d3a', background: player.color,
              border: `4px solid ${player.colorDeep}`,
              boxShadow: hovered === player.id ? 'var(--shadow-1)' : 'none',
              padding: '10px 20px', marginTop: '0.5rem', letterSpacing: '0.08em',
            }}>
              {hovered === player.id ? '► SELECT ◄' : 'SELECT'}
            </div>
          </Link>
        ))}
      </div>

      <p style={{
        fontFamily: 'var(--font-pixel)', fontSize: '16px',
        color: 'var(--fg-dim)', letterSpacing: '0.1em',
        animation: 'blink 1s steps(2) infinite',
      }}>
        ▼ SCROLL TO EXPLORE ▼
      </p>
    </section>
  )

  // ── FORMAL MODE ──
  return (
    <section style={{
      minHeight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 2rem 5rem',
      gap: '3rem',
      background: 'var(--formal-bg)',
    }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', maxWidth: '600px' }}>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '0.82rem',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--formal-olive2)',
          marginBottom: '1rem',
        }}>
          Associate Product Manager & QA Specialist
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 900,
          color: 'var(--formal-ink)',
          lineHeight: 1.1,
          letterSpacing: '-1px',
          marginBottom: '1rem',
        }}>
          Choose your path.
        </h1>
        <p style={{
          fontFamily: 'var(--font-inter)',
          fontSize: '1rem',
          color: 'var(--formal-mid)',
          lineHeight: 1.75,
        }}>
          Two disciplines. One person. Explore the work.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        {players.map((player) => (
          <Link
            key={player.id}
            href={player.href}
            onMouseEnter={() => setHovered(player.id)}
            onMouseLeave={() => setHovered(null)}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.2rem',
              background: 'var(--formal-white)',
              border: `1.5px solid ${hovered === player.id ? 'var(--formal-olive)' : 'var(--formal-border)'}`,
              borderRadius: '16px',
              boxShadow: hovered === player.id
                ? '0 16px 40px rgba(61,90,42,0.12)'
                : '0 2px 16px rgba(30,30,24,0.06)',
              padding: '2.5rem',
              width: '340px',
              cursor: 'pointer',
              transform: hovered === player.id ? 'translateY(-5px)' : 'translateY(0)',
              transition: 'all 280ms ease',
            }}
          >
            {/* Icon */}
            <div style={{
              fontSize: '3rem',
              transition: 'transform 280ms ease',
              transform: hovered === player.id ? 'scale(1.15)' : 'scale(1)',
            }}>
              {player.icon}
            </div>

            {/* Title */}
            <div>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--formal-ink)',
                marginBottom: '0.3rem',
              }}>
                {player.formalTitle}
              </div>
              <div style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.82rem',
                color: 'var(--formal-olive2)',
                fontWeight: 500,
              }}>
                {player.formalSubtitle}
              </div>
            </div>

            {/* Divider */}
            <div style={{ borderTop: '1px solid var(--formal-border)' }} />

            {/* Skills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {player.formalSkills.map((skill) => (
                <span key={skill} style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--formal-olive)',
                  background: 'var(--formal-bg2)',
                  border: '1px solid var(--formal-border)',
                  borderRadius: '20px',
                  padding: '3px 10px',
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div style={{
              fontFamily: 'var(--font-inter)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: hovered === player.id ? 'var(--formal-white)' : 'var(--formal-olive)',
              background: hovered === player.id ? 'var(--formal-olive)' : 'transparent',
              border: '1.5px solid var(--formal-olive)',
              borderRadius: '8px',
              padding: '0.65rem 1.2rem',
              textAlign: 'center',
              marginTop: 'auto',
              transition: 'all 280ms ease',
            }}>
              {hovered === player.id ? 'Explore →' : 'View Work'}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}