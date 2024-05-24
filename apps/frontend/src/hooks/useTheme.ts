import { useCallback } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import type { UseThemeProps } from 'next-themes/dist/types'

import { getLocalStorageThemeColor, type ThemeColor } from '@lib/theme'

export const useTheme = (): Returns => {
  const { theme, setTheme, ...themeRest } = useNextTheme()
  const themeColor = getLocalStorageThemeColor()

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

interface Returns extends UseThemeProps {
  themeColor: ThemeColor | null
  toggleTheme: VoidFunction
}
