import { clsx } from 'clsx'
import capitalize from 'lodash.capitalize'

import { ColorSwatch } from '@ui/ColorSwatch'
import { getRadixColorVar, setThemeColorCookie, type ThemeColorItem } from '@lib/theme'
import styles from './ThemeColorGridItem.module.css'

interface Props extends Pick<ThemeColorItem, 'color'> {
  isSelected: boolean
}

export const ThemeColorGridItem = ({ color, isSelected }: Props) => {
  const handleSetThemeColor = () => setThemeColorCookie(color)

  return (
    <ColorSwatch
      color={getRadixColorVar(color, 9)}
      tooltipContent={capitalize(color)}
      className={clsx(styles.root, {
        [styles.selected]: isSelected
      })}
      data-cy={`theme-color-grid-item-${color}`}
      onClick={handleSetThemeColor}
    />
  )
}
