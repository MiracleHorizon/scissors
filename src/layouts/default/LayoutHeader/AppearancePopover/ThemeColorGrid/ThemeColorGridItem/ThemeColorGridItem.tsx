import { Box, Tooltip } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'
import { clsx } from 'clsx'

import { setThemeColorCookie, type ThemeColorItem } from '@lib/theme'
import styles from './ThemeColorGridItem.module.css'

export function ThemeColorGridItem({ color, isSelected }: Props) {
  const handleSetThemeColor = () => setThemeColorCookie(color)

  return (
    <Tooltip content={capitalize(color)}>
      <Box
        style={{ backgroundColor: `var(--${color}-9)` }}
        className={clsx(styles.root, {
          [styles.selected]: isSelected
        })}
        onClick={handleSetThemeColor}
      />
    </Tooltip>
  )
}

interface Props extends Pick<ThemeColorItem, 'color'> {
  isSelected: boolean
}
