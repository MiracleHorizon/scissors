import { useCallback } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import type { UseThemeProps } from 'next-themes/dist/types'

import { getThemeColorClientCookie, type ThemeColor } from '@lib/theme'

interface Returns extends UseThemeProps {
  themeColor: ThemeColor
  toggleTheme: VoidFunction
}

export const useTheme = (): Returns => {
  const { theme, setTheme, ...themeRest } = useNextTheme()
  const themeColor = getThemeColorClientCookie()

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
