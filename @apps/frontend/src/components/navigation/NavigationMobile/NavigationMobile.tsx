'use client'

import { Flex } from '@radix-ui/themes'

import { NavigationMobileItem } from './NavigationMobileItem'
import { PATH_ROOT } from '@site/paths'
import { navigationItems } from '../data'
import type { NavigationItemModel } from '../types'
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
