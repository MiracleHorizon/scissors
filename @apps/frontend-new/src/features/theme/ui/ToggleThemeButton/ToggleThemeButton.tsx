import { IconButton } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { getThemeIcon, useTheme } from '@/entities/theme'

const basicStyles: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

export const ToggleThemeButton = () => {
  const { theme, toggleTheme } = useTheme()
  const { Component: Icon, props: iconProps } = getThemeIcon(theme)

  return (
    <IconButton
      variant='ghost'
      radius='large'
      color='gray'
      style={basicStyles}
      onClick={toggleTheme}
    >
      <Icon {...iconProps} />
    </IconButton>
  )
}
