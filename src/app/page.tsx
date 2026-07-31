import Hero from '@/src/components/home/Hero'
import Experience from '@/src/components/home/Experience'
import Education from '@/src/components/home/Education'
import Tools from '@/src/components/home/Tools'


export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Tools />
      <Education />
    </main>
  )
}