import Link from 'next/link'
import { Text, Link as RadixLink } from '@radix-ui/themes'
import { clsx } from 'clsx'

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
    <RadixLink
      asChild
      size='3'
      className={clsx(styles.root, {
        [styles.selected]: isSelected
      })}
    >
      <Link {...attributes} href={href}>
        {icon} <Text ml={icon ? '2' : '0'}>{label}</Text>
      </Link>
    </RadixLink>
  )
}
