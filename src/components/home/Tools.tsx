import toolsData from '../../data/tools.json'

const categories = [
  { key: 'product',    label: 'PRODUCT',    color: 'var(--pm-blue)'     },
  { key: 'qa',         label: 'QA',         color: 'var(--qa-magenta)'  },
  { key: 'ai',         label: 'AI TOOLS',   color: 'var(--coin-gold)'   },
  { key: 'automation', label: 'AUTOMATION', color: 'var(--pipe-green)'  },
  { key: 'technical',  label: 'TECHNICAL',  color: 'var(--sky-cyan)'    },
]

export default function Tools() {
  return (
    <section style={{
      padding: '3rem 2rem',
      maxWidth: '860px',
      margin: '0 auto',
    }}>

      {/* Section header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '14px',
          color: 'var(--pipe-green)',
          letterSpacing: '0.12em',
          marginBottom: '0.5rem',
        }}>
          ► INVENTORY
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(14px, 2vw, 20px)',
          color: 'var(--fg-1)',
          letterSpacing: '0.08em',
        }}>
          TOOLS & SKILLS
        </h2>
      </div>

      {/* Categories grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.2rem',
      }}>
        {categories.map((cat) => {
          const items = toolsData[cat.key as keyof typeof toolsData] as string[]
          return (
            <div key={cat.key} style={{
              background: 'var(--surface-1)',
              border: `4px solid ${cat.color}`,
              boxShadow: 'var(--shadow-1)',
              padding: '1.4rem',
              clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
            }}>

              {/* Category label */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '10px',
                color: cat.color,
                letterSpacing: '0.1em',
                marginBottom: '1rem',
                paddingBottom: '0.6rem',
                borderBottom: `2px solid var(--surface-3)`,
              }}>
                {cat.label}
              </div>

              {/* Items */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.45rem',
              }}>
                {items.map((item) => (
                  <div key={item} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--fg-2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
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
}