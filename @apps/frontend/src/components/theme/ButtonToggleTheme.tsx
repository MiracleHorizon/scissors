import { IconButton } from '@radix-ui/themes'
import type { CSSProperties } from 'react'

import { useTheme } from '@hooks/useTheme'
import { getThemeIcon } from './utils'
import type { Theme } from '@lib/theme'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'

const basicStyle: CSSProperties = {
  width: '20px',
  height: '20px'
} as const

const ButtonToggleTheme = ({ className, style }: ClassNameProps & StyleProps) => {
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

export default ButtonToggleTheme
