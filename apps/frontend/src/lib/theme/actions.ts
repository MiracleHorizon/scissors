'use server'

import { cookies } from 'next/headers'

import {
  DEFAULT_THEME,
  DEFAULT_THEME_COLOR,
  THEME_COLOR_COOKIE_NAME,
  THEME_COOKIE_NAME
} from './constants'
import { validateTheme, validateThemeColor } from './helpers'
import type { Theme, ThemeColor } from './types'

export async function setThemeCookie(value: Theme): Promise<void> {
  const cookieStore = cookies()
  cookieStore.set(THEME_COOKIE_NAME, value)
}

export async function getThemeCookie(): Promise<Theme | null> {
  const cookieStore = cookies()

  const theme = cookieStore.get(THEME_COOKIE_NAME)
  if (!theme) {
    return null
  }

  const isThemeValid = validateTheme(theme.value as Theme)
  if (!isThemeValid) {
    return null
  }

  return theme.value as Theme
}

export async function setThemeColorCookie(value: ThemeColor): Promise<void> {
  const cookieStore = cookies()
  cookieStore.set(THEME_COLOR_COOKIE_NAME, value)
}

export async function getThemeColorCookie(): Promise<ThemeColor | null> {
  const cookieStore = cookies()

  const themeColor = cookieStore.get(THEME_COLOR_COOKIE_NAME)
  if (!themeColor) {
    return null
  }

  const isThemeColorValid = validateThemeColor(themeColor.value as ThemeColor)
  if (!isThemeColorValid) {
    return null
  }

  return themeColor.value as ThemeColor
}

export async function getThemeAppearance() {
  const theme = await getThemeCookie()
  const themeColor = await getThemeColorCookie()

  return {
    theme: theme ?? DEFAULT_THEME,
    themeColor: themeColor ?? DEFAULT_THEME_COLOR
  }
}
