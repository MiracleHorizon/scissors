'use server'

import { cookies } from 'next/headers'

import { THEME_COOKIE_NAME } from './constants'
import type { Theme } from './types'

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
