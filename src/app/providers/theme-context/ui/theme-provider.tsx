import { useEffect, useState, type FC } from 'react'
import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeProviderContext,
  type Theme
} from '../lib/theme-context'

interface IThemeProviderProps {
  children: React.ReactNode
  defaultTheme: Theme
  storageKey?: string
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children, defaultTheme }) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || defaultTheme
  )
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export { ThemeProvider }
