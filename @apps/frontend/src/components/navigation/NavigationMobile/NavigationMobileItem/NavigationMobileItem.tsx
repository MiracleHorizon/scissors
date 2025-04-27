import { Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

import { useSelectedPath } from '@hooks/useSelectedPath'
import type { NavigationItemModel } from '@components/navigation/types'
import styles from './NavigationMobileItem.module.css'

export const NavigationMobileItem = ({
  href,
  label,
  icon,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  tooltipContent: _,
  ...attributes
}: NavigationItemModel) => {
  const isSelected = useSelectedPath(href)

  return (
    <Link
      {...attributes}
      to={href}
      className={clsx(styles.root, {
        [styles.selected]: isSelected
      })}
    >
      {icon} <Text ml={icon ? '2' : '0'}>{label}</Text>
    </Link>
  )
}
