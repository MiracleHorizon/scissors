import { Box, Tooltip } from '@radix-ui/themes'
import capitalize from 'lodash.capitalize'
import { clsx } from 'clsx'

import { setThemeColorCookie, THEME_COLOR_LS_KEY, type ThemeColorItem } from '@lib/theme'
import styles from './ThemeColorGridItem.module.css'

export function ThemeColorGridItem({ color, isSelected }: Props) {
  const handleSetThemeColor = () => {
    localStorage.setItem(THEME_COLOR_LS_KEY, color)
    const event = new StorageEvent('storage', {
      key: THEME_COLOR_LS_KEY,
      newValue: color
    })
    window.dispatchEvent(event)

    void setThemeColorCookie(color)
  }

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
