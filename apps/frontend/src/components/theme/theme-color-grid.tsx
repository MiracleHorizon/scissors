import { Grid } from '@radix-ui/themes'
import type { FC } from 'react'

import { clsx } from 'clsx'
import capitalize from 'lodash.capitalize'

import { ColorSwatch } from '@ui/color-swatch'
import {
  type GridProps,
  themeColorItems,
  getRadixColorVar,
  setThemeColorCookie,
  THEME_COLOR_LS_KEY,
  type ThemeColorItem
} from '@lib/theme'
import { useTheme } from '@hooks/useTheme'
import styles from './theme-color-grid.module.css'

export const ThemeColorGrid: FC<Props> = ({ rows = 4, ...props }) => {
  const { themeColor } = useTheme()

  return (
    <Grid
      columns={Math.floor(themeColorItems.length / rows).toString()}
      justify='center'
      gapY='6px'
      width='100%'
      {...props}
    >
      {themeColorItems.map(({ key, color }) => (
        <ThemeColorGridItem key={key} isSelected={themeColor === color} color={color} />
      ))}
    </Grid>
  )
}

interface Props extends Omit<GridProps, 'rows'> {
  rows?: number
}

export function ThemeColorGridItem({ color, isSelected }: ItemProps) {
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
    <ColorSwatch
      color={getRadixColorVar(color, 9)}
      tooltipContent={capitalize(color)}
      className={clsx(styles.item, {
        [styles.itemSelected]: isSelected
      })}
      onClick={handleSetThemeColor}
    />
  )
}

interface ItemProps extends Pick<ThemeColorItem, 'color'> {
  isSelected: boolean
}
