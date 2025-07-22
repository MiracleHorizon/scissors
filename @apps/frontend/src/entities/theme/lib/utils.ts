import { readCookieValue, writeCookieValue } from '@/shared/browser'
import { DEFAULT_THEME_COLOR, THEME_COLOR_STORAGE_KEY } from './constants'
import { themeColorSchema, themeSchema } from '../model/schemas'
import type { ThemeColor } from '../model/types'

export const validateTheme = (value: unknown) => themeSchema.isValidSync(value)
export const validateThemeColor = (value: unknown) => themeColorSchema.isValidSync(value)

export const getThemeColorCookie = (): ThemeColor => {
  const themeColor = readCookieValue(THEME_COLOR_STORAGE_KEY)
  if (!themeColor) {
    return DEFAULT_THEME_COLOR
  }

  const isThemeColorValid = validateThemeColor(themeColor)
  if (!isThemeColorValid) {
    return DEFAULT_THEME_COLOR
  }

  return themeColor as ThemeColor
}

export const setThemeColorCookie = (themeColor: ThemeColor): void => {
  writeCookieValue({
    key: THEME_COLOR_STORAGE_KEY,
    value: themeColor
  })

  window.dispatchEvent(
    new StorageEvent('storage', {
      key: THEME_COLOR_STORAGE_KEY,
      newValue: themeColor
    })
  )
}
