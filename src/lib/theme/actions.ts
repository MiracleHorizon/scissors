'use server'

import { cookies } from 'next/headers'

import { THEME_COLOR_COOKIE_NAME, THEME_COOKIE_NAME } from './constants'
import type { Theme } from './types'
import type { RadixThemeColor } from '@lib/theme'

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

  return theme.value as Theme
}

export async function setThemeColorCookie(value: RadixThemeColor): Promise<void> {
  const cookieStore = cookies()
  cookieStore.set(THEME_COLOR_COOKIE_NAME, value)
}

export async function getThemeColorCookie(): Promise<RadixThemeColor | null> {
  const cookieStore = cookies()
  const themeColor = cookieStore.get(THEME_COLOR_COOKIE_NAME)

  if (!themeColor) {
    return null
  }

  return themeColor.value as RadixThemeColor
}

export async function getThemeAppearance() {
  const DEFAULT_THEME: Theme = 'dark'
  const DEFAULT_THEME_COLOR: RadixThemeColor = 'gray'

  const theme = await getThemeCookie()
  const themeColor = await getThemeColorCookie()

  return {
    theme: theme ?? DEFAULT_THEME,
    themeColor: themeColor ?? DEFAULT_THEME_COLOR
  }
}
