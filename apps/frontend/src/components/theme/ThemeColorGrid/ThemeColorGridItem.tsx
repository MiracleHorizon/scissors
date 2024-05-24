'use client'

import { clsx } from 'clsx'
import capitalize from 'lodash.capitalize'

import { ColorSwatch } from '@ui/ColorSwatch'
import {
  getRadixColorVar,
  setThemeColorCookie,
  THEME_COLOR_LS_KEY,
  type ThemeColorItem
} from '@lib/theme'
import styles from './ThemeColorGridItem.module.css'

interface Props extends Pick<ThemeColorItem, 'color'> {
  isSelected: boolean
}

export const ThemeColorGridItem = ({ color, isSelected }: Props) => {
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
      className={clsx(styles.root, {
        [styles.selected]: isSelected
      })}
      onClick={handleSetThemeColor}
    />
  )
}
