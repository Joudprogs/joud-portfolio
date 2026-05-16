import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Joud Alshehri',
  description: 'Product Manager & QA Specialist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}