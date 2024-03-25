'use client'

import { IconButton } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { MoonIcon } from '@ui/icons/MoonIcon'
import { SunIcon } from '@ui/icons/SunIcon'
import { setThemeCookie, type Theme, THEME_LS_KEY, type ThemeProps } from '@lib/theme'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'

function getThemeIcon(theme: Theme) {
  const Icon = theme === 'dark' ? MoonIcon : SunIcon
  const iconLabel = theme === 'dark' ? 'dark theme' : 'light theme'

  return <Icon width='18px' height='18px' label={iconLabel} />
}

const style: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

export function ButtonToggleTheme({ theme, className }: Props) {
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem(THEME_LS_KEY, newTheme)
    const event = new StorageEvent('storage', {
      key: THEME_LS_KEY,
      newValue: newTheme
    })
    window.dispatchEvent(event)

    void setThemeCookie(newTheme)
  }

  return (
    <IconButton
      variant='ghost'
      color='gray'
      style={style}
      className={className}
      onClick={toggleTheme}
    >
      {getThemeIcon(theme)}
    </IconButton>
  )
}

type Props = Pick<ThemeProps, 'theme'> & ClassNameProps & StyleProps
