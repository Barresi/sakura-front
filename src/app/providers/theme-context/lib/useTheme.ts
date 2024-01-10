import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeProviderContext } from './theme-context'

import { useContext } from 'react'

export interface useThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): useThemeResult => {
  const { theme, setTheme } = useContext(ThemeProviderContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    if (setTheme) setTheme(newTheme)
  }
  return { theme, toggleTheme } as useThemeResult
}
