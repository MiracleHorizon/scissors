import { IconButton } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { getThemeIcon } from './utils'
import { useTheme, type Theme } from '@/entities/theme'
import type { StyleProps, ClassNameProps } from '@/shared/lib'

const basicStyle: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

export const ToggleTheme = ({ className, style }: ClassNameProps & StyleProps) => {
  const { theme, toggleTheme } = useTheme()
  const { Component: Icon, props: iconProps } = getThemeIcon(theme as Theme)

  return (
    <IconButton
      variant='ghost'
      radius='large'
      color='gray'
      style={{
        ...basicStyle,
        ...style
      }}
      data-cy='button-toggle-theme'
      className={className}
      onClick={toggleTheme}
    >
      <Icon {...iconProps} />
    </IconButton>
  )
}
