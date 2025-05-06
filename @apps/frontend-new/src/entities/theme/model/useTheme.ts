import { useCallback } from 'react'
import { useTheme as useNextTheme, type UseThemeProps } from 'next-themes'

import { getThemeColorCookie } from '../lib/utils'
import type { Theme, ThemeColor } from './types'

export const useTheme = (): UseThemeProps & {
  theme: Theme
  themeColor: ThemeColor
  toggleTheme: VoidFunction
} => {
  const { theme, setTheme, ...themeRest } = useNextTheme()
  const themeColor = getThemeColorCookie()

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
  }, [theme, setTheme])

  return {
    ...themeRest,
    theme: theme as Theme,
    themeColor,
    setTheme,
    toggleTheme
  }
}
