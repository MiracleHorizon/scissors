import { Flex } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'
import type { FC } from 'react'

import { NavigationItem } from './navigation-item'
import { navigationItems } from './data'
import styles from './navigation-desktop.module.css'

export const NavigationDesktop: FC<MarginProps> = props => (
  <Flex {...props} asChild align='center' gap='4' className={styles.root}>
    <nav>
      {navigationItems.map(item => (
        <NavigationItem key={item.label} {...item} />
      ))}
    </nav>
  </Flex>
)
