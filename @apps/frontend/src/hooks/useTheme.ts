import { useCallback } from 'react'
import { useTheme as useNextTheme, type UseThemeProps } from 'next-themes'

import { getThemeColorCookie, type ThemeColor } from '@lib/theme'

interface Returns extends UseThemeProps {
  themeColor: ThemeColor
  toggleTheme: VoidFunction
}

export const useTheme = (): Returns => {
  const { theme, setTheme, ...themeRest } = useNextTheme()
  const themeColor = getThemeColorCookie()

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    setTheme(newTheme)
  }, [theme, setTheme])

  return {
    ...themeRest,
    theme,
    themeColor,
    setTheme,
    toggleTheme
  }
}
