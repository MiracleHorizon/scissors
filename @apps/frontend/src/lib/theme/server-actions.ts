'use server'

import { cookies } from 'next/headers'

import { validateThemeColor } from './helpers'
import { DEFAULT_THEME_COLOR, THEME_COLOR_STORAGE_KEY } from './constants'
import type { ThemeColor } from './types'

export const setThemeColorServerCookie = async (value: ThemeColor): Promise<void> => {
  const cookieStore = cookies()
  cookieStore.set(THEME_COLOR_STORAGE_KEY, value)
}

export const getThemeColorServerCookie = async (): Promise<ThemeColor> => {
  const cookieStore = cookies()

  const themeColor = cookieStore.get(THEME_COLOR_STORAGE_KEY)
  if (!themeColor) {
    return DEFAULT_THEME_COLOR
  }

  const isThemeColorValid = validateThemeColor(themeColor.value)
  if (!isThemeColorValid) {
    return DEFAULT_THEME_COLOR
  }

  return themeColor.value as ThemeColor
}
