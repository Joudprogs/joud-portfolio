'use client'

import { useTheme } from '@/src/hooks/usePixel'
import toolsData from '@/src/data/tools.json'

const categories = [
  { key: 'product',    label: 'PRODUCT',    formalLabel: 'Product',    color: 'var(--pm-blue)',    formalColor: 'var(--formal-olive)'  },
  { key: 'qa',         label: 'QA',         formalLabel: 'QA',         color: 'var(--qa-magenta)', formalColor: 'var(--formal-olive2)' },
  { key: 'ai',         label: 'AI TOOLS',   formalLabel: 'AI Tools',   color: 'var(--coin-gold)',  formalColor: 'var(--formal-olive)'  },
  { key: 'automation', label: 'AUTOMATION', formalLabel: 'Automation', color: 'var(--pipe-green)', formalColor: 'var(--formal-olive2)' },
  { key: 'technical',  label: 'TECHNICAL',  formalLabel: 'Technical',  color: 'var(--sky-cyan)',   formalColor: 'var(--formal-olive)'  },
]

export default function Tools() {
  const { isPixel } = useTheme()

  if (isPixel) return (
    <section style={{ padding: '3rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px', color: 'var(--pipe-green)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
          ► INVENTORY
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 2vw, 20px)', color: 'var(--fg-1)', letterSpacing: '0.08em' }}>
          TOOLS & SKILLS
        </h2>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem' }}>
        {categories.map((cat) => {
          const items = toolsData[cat.key as keyof typeof toolsData] as string[]
          return (
            <div key={cat.key} style={{
              background: 'var(--surface-1)', border: `4px solid ${cat.color}`,
              boxShadow: 'var(--shadow-1)', padding: '1.4rem',
              clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '10px', color: cat.color, letterSpacing: '0.1em', marginBottom: '1rem', paddingBottom: '0.6rem', borderBottom: '2px solid var(--surface-3)' }}>
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {items.map((item) => (
                  <div key={item} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-2)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: cat.color, fontSize: '10px' }}>▸</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )

  // ── FORMAL MODE ──
  return (
  <section style={{ padding: '5rem 2rem', maxWidth: '860px', margin: '0 auto', background: 'var(--formal-bg)' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--formal-olive2)', marginBottom: '0.5rem' }}>
          Toolkit
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, color: 'var(--formal-ink)', letterSpacing: '-0.5px' }}>
          Tools & Skills
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.1rem' }}>
        {categories.map((cat) => {
          const items = toolsData[cat.key as keyof typeof toolsData] as string[]
          return (
            <div key={cat.key} style={{
              background: 'var(--formal-white)',
              border: '1px solid var(--formal-border)',
              borderRadius: '14px',
              padding: '1.4rem',
              boxShadow: '0 2px 12px rgba(30,30,24,0.05)',
            }}>
              <div style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.68rem', fontWeight: 800,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: cat.formalColor,
                marginBottom: '0.9rem', paddingBottom: '0.6rem',
                borderBottom: '1.5px solid var(--formal-border)',
              }}>
                {cat.formalLabel}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.42rem' }}>
                {items.map((item) => (
                  <div key={item} style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '0.82rem', color: 'var(--formal-ink2)',
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: cat.formalColor, flexShrink: 0, display: 'inline-block' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}