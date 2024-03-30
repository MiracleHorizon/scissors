'use client'

import { IconButton } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { MoonIcon } from '@scissors/react-icons/MoonIcon'
import { SunIcon } from '@scissors/react-icons/SunIcon'

import { useTheme } from '@hooks/useTheme'
import type { Theme } from '@lib/theme'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'

function getThemeIcon(theme: Theme) {
  let Icon
  let iconLabel

  if (theme === 'system') {
    const isPreferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    Icon = isPreferredDark ? MoonIcon : SunIcon
    iconLabel = isPreferredDark ? 'set light theme' : 'set dark theme'
  } else {
    Icon = theme === 'dark' ? MoonIcon : SunIcon
    iconLabel = theme === 'dark' ? 'set light theme' : 'set dark theme'
  }

  return <Icon width='18px' height='18px' label={iconLabel} />
}

const basicStyle: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

export default function ButtonToggleTheme({ className, style }: ClassNameProps & StyleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <IconButton
      variant='ghost'
      radius='large'
      color='gray'
      style={{
        ...basicStyle,
        ...style
      }}
      className={className}
      onClick={toggleTheme}
    >
      {getThemeIcon(theme as Theme)}
    </IconButton>
  )
}
