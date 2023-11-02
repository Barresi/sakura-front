import { createContext } from 'react'

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}
interface ThemeProviderState {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeProviderContext = createContext<ThemeProviderState>({})
