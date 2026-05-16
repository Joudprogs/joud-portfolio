import experienceData from '@/src/data/experience.json'

const tagColors: Record<string, string> = {
  PM:  'var(--pm-blue)',
  QA:  'var(--qa-magenta)',
  DEV: 'var(--pipe-green)',
}

export default function Experience() {
  return (
    <section style={{
      padding: '3rem 2rem',
      maxWidth: '860px',
      margin: '0 auto',
    }}>

      {/* Section header */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: '14px',
          color: 'var(--coin-gold)',
          letterSpacing: '0.12em',
          marginBottom: '0.5rem',
        }}>
          ► CAREER LOG
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(14px, 2vw, 20px)',
          color: 'var(--fg-1)',
          letterSpacing: '0.08em',
        }}>
          EXPERIENCE
        </h2>
      </div>

      {/* Timeline */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        borderLeft: '4px solid var(--surface-3)',
        paddingLeft: '2rem',
      }}>
        {experienceData.map((job) => (
          <div key={job.id} style={{
            background: 'var(--surface-1)',
            border: '4px solid var(--surface-3)',
            boxShadow: 'var(--shadow-1)',
            padding: '1.8rem',
            position: 'relative',
            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
          }}>

            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-2.85rem',
              top: '1.8rem',
              width: '16px',
              height: '16px',
              background: 'var(--coin-gold)',
              border: '4px solid var(--bg-deep)',
            }} />

            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginBottom: '1rem',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--fg-1)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.3rem',
                }}>
                  {job.role}
                </div>
                <div style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '18px',
                  color: 'var(--coin-gold)',
                }}>
                  {job.company}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--fg-3)',
                  marginBottom: '0.4rem',
                }}>
                  {job.period}
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                  {job.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: tagColors[tag],
                      border: `2px solid ${tagColors[tag]}`,
                      padding: '2px 6px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Points */}
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}>
              {job.points.map((point, i) => (
                <li key={i} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--fg-2)',
                  lineHeight: '1.7',
                  paddingLeft: '1.2rem',
                  position: 'relative',
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--coin-gold)',
                  }}>▸</span>
                  {point}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>

    </section>
  )
}