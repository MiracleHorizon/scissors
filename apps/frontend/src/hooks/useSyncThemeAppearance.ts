'use client'

import { useEffect } from 'react'

import { useTheme } from '@hooks/useTheme'
import {
  setThemeColorCookie,
  THEME_COLOR_LS_KEY,
  type ThemeColor,
  themeColorItems
} from '@lib/theme'

export const useSyncThemeAppearance = () => {
  const { theme, themeColor } = useTheme()

  useEffect(() => {
    const handleChangeThemeColor = (ev: StorageEvent) => {
      if (ev.key !== THEME_COLOR_LS_KEY) return

      const newThemeColor = ev.newValue
      if (!newThemeColor) return
      const isValidThemeColor = themeColorItems
        .map(v => v.color)
        .includes(newThemeColor as ThemeColor)
      if (!isValidThemeColor) return

      if (themeColor !== newThemeColor) {
        void setThemeColorCookie(newThemeColor as ThemeColor)
      }
    }

    window.addEventListener('storage', handleChangeThemeColor)

    return () => {
      window.removeEventListener('storage', handleChangeThemeColor)
    }
  }, [theme, themeColor])
}
