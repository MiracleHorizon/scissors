'use client'

import Link from 'next/link'
import { Flex, Text, Link as RadixLink } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { navigationItems } from './data'
import { useSelectedPath } from '@hooks/useSelectedPath'
import { PATH_ROOT } from '@site/paths'
import type { NavigationItemModel } from './types'
import styles from './NavigationMobile.module.css'

const items: NavigationItemModel[] = [
  {
    label: 'Homepage',
    href: PATH_ROOT
  },
  ...navigationItems.map(item => ({
    ...item,
    icon: undefined
  }))
]

export const NavigationMobile = () => (
  <Flex asChild direction='column' width='100%' className={styles.root}>
    <nav>
      {items.map(item => (
        <NavigationMobileItem key={item.label} {...item} />
      ))}
    </nav>
  </Flex>
)

export const NavigationMobileItem: FC<NavigationItemModel> = ({
  href,
  label,
  icon,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  tooltipContent: _,
  ...attributes
}) => {
  const isSelected = useSelectedPath(href)

  return (
    <RadixLink
      asChild
      size='3'
      className={clsx(styles.item, {
        [styles.selected]: isSelected
      })}
    >
      <Link {...attributes} href={href}>
        {icon} <Text ml={icon ? '2' : '0'}>{label}</Text>
      </Link>
    </RadixLink>
  )
}
