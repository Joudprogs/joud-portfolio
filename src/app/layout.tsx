import type { Metadata } from 'next'
import { JetBrains_Mono, Playfair_Display, Inter } from 'next/font/google'
import Navbar from '@/src/components/layout/Navbar'
import Footer from '@/src/components/layout/Footer'
import { ThemeProvider } from '@/src/hooks/usePixel'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
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
      <body className={`${jetbrainsMono.variable} ${playfair.variable} ${inter.variable}`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}