import { useState, type FC, useMemo } from 'react'
import { ThemeProviderContext, Theme, LOCAL_STORAGE_THEME_KEY } from './theme-context'

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme])
  return (
    <ThemeProviderContext.Provider value={defaultProps}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export default ThemeProvider
