'use client'

import { useTheme } from '@/src/hooks/usePixel'
import experienceData from '@/src/data/experience.json'

const tagColors: Record<string, string> = {
  PM:  'var(--pm-blue)',
  QA:  'var(--qa-magenta)',
  DEV: 'var(--pipe-green)',
}

const tagFormalColors: Record<string, string> = {
  PM:  'var(--formal-olive)',
  QA:  'var(--formal-olive2)',
  DEV: 'var(--formal-olive-lt)',
}

export default function Experience() {
  const { isPixel } = useTheme()

  if (isPixel) return (
    <section style={{ padding: '3rem 2rem', maxWidth: '860px', margin: '0 auto' }}>
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '14px', color: 'var(--coin-gold)', letterSpacing: '0.12em', marginBottom: '0.5rem' }}>
          ► CAREER LOG
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(14px, 2vw, 20px)', color: 'var(--fg-1)', letterSpacing: '0.08em' }}>
          EXPERIENCE
        </h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '4px solid var(--surface-3)', paddingLeft: '2rem' }}>
        {experienceData.map((job) => (
          <div key={job.id} style={{
            background: 'var(--surface-1)', border: '4px solid var(--surface-3)',
            boxShadow: 'var(--shadow-1)', padding: '1.8rem', position: 'relative',
            clipPath: 'polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)',
          }}>
            <div style={{ position: 'absolute', left: '-2.85rem', top: '1.8rem', width: '16px', height: '16px', background: 'var(--coin-gold)', border: '4px solid var(--bg-deep)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', color: 'var(--fg-1)', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>{job.role}</div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '18px', color: 'var(--coin-gold)' }}>{job.company}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--fg-3)', marginBottom: '0.4rem' }}>{job.period}</div>
                <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'flex-end' }}>
                  {job.tags.map((tag) => (
                    <span key={tag} style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: tagColors[tag], border: `2px solid ${tagColors[tag]}`, padding: '2px 6px' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {job.points.map((point, i) => (
                <li key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--fg-2)', lineHeight: '1.7', paddingLeft: '1.2rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--coin-gold)' }}>▸</span>
                  {point}
                </li>
              ))}
            </ul>
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
          Career
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 900, color: 'var(--formal-ink)', letterSpacing: '-0.5px' }}>
          Experience
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderLeft: '2px solid var(--formal-border)', paddingLeft: '2rem' }}>
        {experienceData.map((job) => (
          <div key={job.id} style={{
            background: 'var(--formal-white)',
            border: '1px solid var(--formal-border)',
            borderRadius: '14px',
            padding: '1.8rem',
            boxShadow: '0 2px 16px rgba(30,30,24,0.05)',
            position: 'relative',
            transition: 'box-shadow 280ms ease',
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute', left: '-2.6rem', top: '1.8rem',
              width: '12px', height: '12px', borderRadius: '50%',
              background: 'var(--formal-olive)',
              border: '3px solid var(--formal-bg)',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--formal-ink)', marginBottom: '0.2rem' }}>
                  {job.role}
                </div>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.85rem', color: 'var(--formal-olive2)', fontWeight: 600 }}>
                  {job.company}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'var(--font-inter)', fontSize: '0.78rem', color: 'var(--formal-mid)', marginBottom: '0.4rem' }}>
                  {job.period}
                </div>
                <div style={{ display: 'flex', gap: '0.35rem', justifyContent: 'flex-end' }}>
                  {job.tags.map((tag) => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-inter)', fontSize: '0.68rem', fontWeight: 700,
                      color: tagFormalColors[tag],
                      background: 'var(--formal-bg2)',
                      border: `1px solid var(--formal-border)`,
                      borderRadius: '20px', padding: '2px 8px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
              {job.points.map((point, i) => (
                <li key={i} style={{ fontFamily: 'var(--font-inter)', fontSize: '0.875rem', color: 'var(--formal-ink2)', lineHeight: '1.75', paddingLeft: '1.1rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--formal-olive-lt)', fontWeight: 700 }}>–</span>
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