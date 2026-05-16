import educationData from '@/src/data/education.json'

export default function Education() {
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
          color: 'var(--magic-purple)',
          letterSpacing: '0.12em',
          marginBottom: '0.5rem',
        }}>
          ► SKILL TREE
        </p>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(14px, 2vw, 20px)',
          color: 'var(--fg-1)',
          letterSpacing: '0.08em',
        }}>
          EDUCATION
        </h2>
      </div>

      {/* Education cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      }}>
        {educationData.map((edu) => (
          <div key={edu.id} style={{
            background: 'var(--surface-1)',
            border: '4px solid var(--magic-purple)',
            boxShadow: 'var(--shadow-2)',
            padding: '2rem',
            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
          }}>

            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '11px',
                  color: 'var(--fg-1)',
                  letterSpacing: '0.08em',
                  marginBottom: '0.4rem',
                  lineHeight: '1.8',
                }}>
                  {edu.degree}
                </div>
                <div style={{
                  fontFamily: 'var(--font-pixel)',
                  fontSize: '20px',
                  color: 'var(--magic-purple)',
                  marginBottom: '0.2rem',
                }}>
                  {edu.institution}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--fg-3)',
                }}>
                  {edu.faculty} · {edu.period}
                </div>
              </div>

              {/* GPA badge */}
              <div style={{
                background: 'var(--magic-purple)',
                border: '4px solid var(--magic-purple-deep)',
                boxShadow: 'var(--shadow-1)',
                padding: '1rem',
                textAlign: 'center',
                clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  color: '#0a0b1a',
                  marginBottom: '0.2rem',
                }}>
                  {edu.gpa}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: '#0a0b1a',
                }}>
                  {edu.honor}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              borderTop: '2px solid var(--surface-3)',
              marginBottom: '1.2rem',
            }} />

            {/* Courses */}
            <div>
              <p style={{
                fontFamily: 'var(--font-pixel)',
                fontSize: '13px',
                color: 'var(--fg-3)',
                marginBottom: '0.8rem',
                letterSpacing: '0.08em',
              }}>
                RELEVANT COURSES
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {edu.courses.map((course) => (
                  <span key={course} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--magic-purple)',
                    background: 'var(--surface-2)',
                    border: '2px solid var(--magic-purple)',
                    padding: '4px 10px',
                  }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}