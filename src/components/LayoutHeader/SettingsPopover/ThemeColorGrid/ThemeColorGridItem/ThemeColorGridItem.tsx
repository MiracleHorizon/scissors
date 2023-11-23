'use client'

import { useMemo } from 'react'
import { Box, Tooltip } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'
import cn from 'classnames'

import { setThemeColorCookie, type ThemeColorItem } from '@shared/theme'
import styles from './ThemeColorGridItem.module.css'

export function ThemeColorGridItem({ color, isSelected }: Props) {
  const handleSetThemeColor = () => setThemeColorCookie(color)

  const style = useMemo(() => ({ backgroundColor: `var(--${color}-9)` }), [color])

  return (
    <Tooltip content={capitalize(color)}>
      <Box
        style={style}
        className={cn(styles.root, { [styles.selected]: isSelected })}
        onClick={handleSetThemeColor}
      />
    </Tooltip>
  )
}

interface Props extends Pick<ThemeColorItem, 'color'> {
  isSelected: boolean
}
