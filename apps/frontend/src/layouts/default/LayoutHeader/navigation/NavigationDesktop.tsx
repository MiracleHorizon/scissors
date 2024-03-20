import { Flex, type MarginProps } from '@radix-ui/themes'
import type { FC } from 'react'

import { NavigationItem } from './NavigationItem'
import { navigationItems } from './data'
import styles from './NavigationDesktop.module.css'

export const NavigationDesktop: FC<MarginProps> = props => (
  <Flex {...props} asChild align='center' gap='4' className={styles.root}>
    <nav>
      {navigationItems.map(item => (
        <NavigationItem key={item.label} {...item} />
      ))}
    </nav>
  </Flex>
)
