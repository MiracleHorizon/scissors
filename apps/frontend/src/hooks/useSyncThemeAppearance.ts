import { useEffect } from 'react'

import {
  type RadixThemeColor,
  setThemeColorCookie,
  setThemeCookie,
  THEME_COLOR_LS_KEY,
  THEME_LS_KEY,
  themeColorItems,
  type ThemeProps
} from '@lib/theme'

/**
 * Sync theme appearance between browser windows
 * @param theme - current theme from cookies (on server)
 * @param themeColor - current theme color from cookies (on server)
 */
export function useSyncThemeAppearance({ theme, themeColor }: ThemeProps) {
  useEffect(() => {
    function handleChangeTheme(ev: StorageEvent) {
      if (ev.key !== THEME_LS_KEY) return

      const newTheme = ev.newValue
      if (!newTheme) return
      const isValidTheme = newTheme === 'light' || newTheme === 'dark'
      if (!isValidTheme) return

      if (theme !== newTheme) {
        void setThemeCookie(newTheme)
      }
    }

    function handleChangeThemeColor(ev: StorageEvent) {
      if (ev.key !== THEME_COLOR_LS_KEY) return

      const newThemeColor = ev.newValue
      if (!newThemeColor) return
      const isValidThemeColor = themeColorItems
        .map(v => v.color)
        .includes(newThemeColor as RadixThemeColor)
      if (!isValidThemeColor) return

      if (themeColor !== newThemeColor) {
        void setThemeColorCookie(newThemeColor as RadixThemeColor)
      }
    }

    window.addEventListener('storage', handleChangeTheme)
    window.addEventListener('storage', handleChangeThemeColor)

    return () => {
      window.removeEventListener('storage', handleChangeTheme)
      window.removeEventListener('storage', handleChangeThemeColor)
    }
  }, [theme, themeColor])
}
