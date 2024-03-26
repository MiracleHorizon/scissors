'use server'

import { cookies } from 'next/headers'

import { validateThemeColor } from './helpers'
import { THEME_COLOR_COOKIE_NAME } from './constants'
import type { ThemeColor } from './types'

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
