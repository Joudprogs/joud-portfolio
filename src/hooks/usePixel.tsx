'use client'

import { createContext, useContext, useState } from 'react'

type Theme = 'formal' | 'pixel'

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  isPixel: boolean
}

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('formal')

  const toggleTheme = () => {
    setTheme(prev => prev === 'formal' ? 'pixel' : 'formal')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isPixel: theme === 'pixel' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}