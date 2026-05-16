'use client'

import Link from 'next/link'
import { useState } from 'react'

const players = [
  {
    id: 'pm',
    href: '/pm',
    title: 'PRODUCT MANAGER',
    subtitle: 'The Strategist',
    color: 'var(--pm-blue)',
    colorDeep: 'var(--pm-blue-deep)',
    glow: '0 0 24px rgba(78,168,255,0.5), 0 0 48px rgba(78,168,255,0.25)',
    sprite: `
      ⬛⬛🟦🟦🟦🟦⬛⬛
      ⬛🟦🟦🟦🟦🟦🟦⬛
      🟦🟦⬜⬜🟦⬜⬜🟦
      🟦🟦🟦🟦🟦🟦🟦🟦
      ⬛🟦🟦🟦🟦🟦🟦⬛
      ⬛⬛🟦🟦🟦🟦⬛⬛
    `,
    skills: ['ROADMAP', 'PRD', 'AGILE', 'DISCOVERY', 'USER STORY'],
  },
  {
    id: 'qa',
    href: '/qa',
    title: 'QA SPECIALIST',
    subtitle: 'The Bug Hunter',
    color: 'var(--qa-magenta)',
    colorDeep: 'var(--qa-magenta-deep)',
    glow: '0 0 24px rgba(255,92,200,0.5), 0 0 48px rgba(255,92,200,0.25)',
    sprite: `
      ⬛⬛🟪🟪🟪🟪⬛⬛
      ⬛🟪🟪🟪🟪🟪🟪⬛
      🟪🟪⬜⬜🟪⬜⬜🟪
      🟪🟪🟪🟪🟪🟪🟪🟪
      ⬛🟪🟪🟪🟪🟪🟪⬛
      ⬛⬛🟪🟪🟪🟪⬛⬛
    `,
    
    skills: ['MANUAL TEST', 'TEST PLAN','TEST CASES', 'UAT'],
  },
]

export default function Hero() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 2rem 4rem',
      gap: '3rem',
    }}>

      {/* Title */}
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

      {/* Player cards */}
      <div style={{
        display: 'flex',
        gap: '3rem',
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
              alignItems: 'center',
              gap: '1.2rem',
              background: 'var(--surface-1)',
              border: `4px solid ${player.color}`,
              boxShadow: hovered === player.id
                ? player.glow
                : 'var(--shadow-2)',
              padding: '2rem 2.5rem',
              width: '380px',
              cursor: 'pointer',
              transform: hovered === player.id ? 'translateY(-6px)' : 'translateY(0)',
              transition: 'all 160ms cubic-bezier(0.4,0,0.6,1)',
              clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
            }}
          >
           {/* Sprite */}
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
                width: '16px',
                height: '16px',
                backgroundColor: cell ? player.color : 'transparent',
                boxShadow: cell && hovered === player.id ? `0 0 4px ${player.color}` : 'none',
                }} />
            ))}
            </div>

            {/* Name */}
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                color: player.color,
                letterSpacing: '0.08em',
                marginBottom: '0.3rem',
              }}>
                {player.title}
              </div>
              <div style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '20px',
                color: 'var(--fg-3)',
              }}>
                {player.subtitle}
              </div>
            </div>


            {/* Skills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              justifyContent: 'center',
            }}>
              {player.skills.map((skill) => (
                <span key={skill} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: player.color,
                  background: 'var(--surface-2)',
                  border: `2px solid ${player.color}`,
                  padding: '3px 8px',
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Select button */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '10px',
              color: '#1a1d3a',
              background: player.color,
              border: `4px solid ${player.colorDeep}`,
              boxShadow: hovered === player.id ? 'var(--shadow-1)' : 'none',
              padding: '10px 20px',
              marginTop: '0.5rem',
              letterSpacing: '0.08em',
            }}>
              {hovered === player.id ? '► SELECT ◄' : 'SELECT'}
            </div>

          </Link>
        ))}
      </div>

      {/* Scroll hint */}
      <p style={{
        fontFamily: 'var(--font-pixel)',
        fontSize: '16px',
        color: 'var(--fg-dim)',
        letterSpacing: '0.1em',
        animation: 'blink 1s steps(2) infinite',
      }}>
        ▼ SCROLL TO EXPLORE ▼
      </p>

    </section>
  )
}