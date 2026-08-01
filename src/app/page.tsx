


'use client'

import { useTheme } from '@/src/hooks/usePixel'
import Hero from '@/src/components/home/Hero'
import Experience from '@/src/components/home/Experience'
import Education from '@/src/components/home/Education'
import Tools from '@/src/components/home/Tools'

export default function Home() {
  const { isPixel } = useTheme()

  return (
    <main style={{
      background: isPixel ? 'var(--bg-deep)' : 'var(--formal-bg)',
      minHeight: '100vh',
    }}>
      <Hero />
      <Experience />
      <Tools />
      <Education />
    </main>
  )
}