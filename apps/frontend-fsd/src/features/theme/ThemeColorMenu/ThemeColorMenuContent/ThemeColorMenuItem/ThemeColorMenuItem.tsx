import { DropdownMenu, Text } from '@radix-ui/themes'

import { ColorSwatch } from '@/shared/ui'
import { getRadixColorVar } from '@lib/theme'
import styles from './ThemeColorMenuItem.module.css'

interface Props {
  color: string
}

export const ThemeColorMenuItem = ({ color }: Props) => (
  <DropdownMenu.RadioItem
    value={color}
    data-cy={`theme-color-menu-item-${color}`}
    className={styles.root}
  >
    <Text className={styles.text}>{color}</Text>

    <ColorSwatch color={getRadixColorVar(color, 9)} />
  </DropdownMenu.RadioItem>
)
