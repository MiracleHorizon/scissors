import { isServer } from '@helpers/isServer'
import { themeColorSchema, themeSchema } from './schemas'
import { DEFAULT_THEME, DEFAULT_THEME_COLOR, THEME_COLOR_LS_KEY, THEME_LS_KEY } from './constants'
import type { Theme, ThemeColor } from './types'

export const validateTheme = (theme: Theme) => themeSchema.isValidSync(theme)
export const validateThemeColor = (themeColor: ThemeColor) =>
  themeColorSchema.isValidSync(themeColor)

export const getLocalStorageTheme = (): Theme | null => {
  if (isServer()) {
    return null
  }

  const theme = localStorage.getItem(THEME_LS_KEY) as Theme | null
  if (!theme) {
    return null
  }

  const isThemeValid = validateTheme(theme)
  if (!isThemeValid) {
    return null
  }

  return theme
}

export const getLocalStorageThemeColor = (): ThemeColor => {
  if (isServer()) {
    return DEFAULT_THEME_COLOR
  }

  const themeColor = localStorage.getItem(THEME_COLOR_LS_KEY) as ThemeColor | null
  if (!themeColor) {
    return DEFAULT_THEME_COLOR
  }

  const isThemeColorValid = validateThemeColor(themeColor)
  if (!isThemeColorValid) {
    return DEFAULT_THEME_COLOR
  }

  return themeColor
}

export const getClientThemeAppearance = () => {
  const theme = getLocalStorageTheme()
  const themeColor = getLocalStorageThemeColor()

  return {
    theme: theme ?? DEFAULT_THEME,
    themeColor: themeColor ?? DEFAULT_THEME_COLOR
  }
}
