'use client'

import { useTheme } from '@/src/hooks/usePixel'
import educationData from '@/src/data/education.json'

export default function Education() {
  const { isPixel } = useTheme()

  if (isPixel) return (
    <section style={{ padding: '3rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px', color: 'var(--magic-purple)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
          ► SKILL TREE
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 2vw, 20px)', color: 'var(--fg-1)', letterSpacing: '0.08em' }}>
          EDUCATION
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {educationData.map((edu) => (
          <div key={edu.id} style={{
            background: 'var(--surface-1)', border: '4px solid var(--magic-purple)',
            boxShadow: 'var(--shadow-2)', padding: '2rem',
            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--fg-1)', letterSpacing: '0.08em', marginBottom: '0.4rem', lineHeight: '1.8' }}>
                  {edu.degree}
                </div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '20px', color: 'var(--magic-purple)', marginBottom: '0.2rem' }}>
                  {edu.institution}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-3)' }}>
                  {edu.faculty} · {edu.period}
                </div>
              </div>
              <div style={{
                background: 'var(--magic-purple)', border: '4px solid #7a2ec9',
                boxShadow: 'var(--shadow-1)', padding: '1rem', textAlign: 'center',
                clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
              }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', color: '#0a0b1a', marginBottom: '0.2rem' }}>{edu.gpa}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#0a0b1a' }}>{edu.honor}</div>
              </div>
            </div>
            <div style={{ borderTop: '2px solid var(--surface-3)', marginBottom: '1.2rem' }} />
            <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '13px', color: 'var(--fg-3)', marginBottom: '0.8rem', letterSpacing: '0.08em' }}>
              RELEVANT COURSES
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {edu.courses.map((course) => (
                <span key={course} style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px',
                  color: 'var(--magic-purple)', background: 'var(--surface-2)',
                  border: '2px solid var(--magic-purple)', padding: '4px 10px',
                }}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )

  // ── FORMAL MODE ──
  return (
  <section style={{ padding: '5rem 2rem', maxWidth: '860px', margin: '0 auto', background: 'var(--formal-bg)' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--formal-olive2)', marginBottom: '0.5rem' }}>
          Academic Background
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, color: 'var(--formal-ink)', letterSpacing: '-0.5px' }}>
          Education
        </h2>
      </div>

      {educationData.map((edu) => (
        <div key={edu.id} style={{
          background: 'var(--formal-white)',
          border: '1px solid var(--formal-border)',
          borderRadius: '16px',
          padding: '2.2rem',
          boxShadow: '0 2px 16px rgba(30,30,24,0.05)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.8rem' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 700, color: 'var(--formal-ink)', marginBottom: '0.3rem' }}>
                {edu.degree}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.9rem', color: 'var(--formal-olive2)', fontWeight: 600, marginBottom: '0.2rem' }}>
                {edu.institution}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'var(--formal-mid)' }}>
                {edu.faculty} · {edu.period}
              </div>
            </div>

            {/* GPA badge */}
            <div style={{
              background: 'var(--formal-olive)',
              borderRadius: '12px',
              padding: '1rem 1.4rem',
              textAlign: 'center',
              boxShadow: '0 4px 16px rgba(61,90,42,0.2)',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 900, color: '#fff', marginBottom: '0.15rem' }}>
                {edu.gpa}
              </div>
              <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                {edu.honor}
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--formal-border)', marginBottom: '1.2rem' }} />

          <p style={{ fontFamily: 'var(--font-inter)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--formal-mid)', marginBottom: '0.8rem' }}>
            Relevant Courses
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
            {edu.courses.map((course) => (
              <span key={course} style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '0.75rem', fontWeight: 500,
                color: 'var(--formal-olive)',
                background: 'var(--formal-bg2)',
                border: '1px solid var(--formal-border)',
                borderRadius: '20px', padding: '3px 10px',
              }}>
                {course}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}