import { Flex } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { NavigationItem } from './NavigationItem'
import { navigationItems } from '../data'
import styles from './NavigationDesktop.module.css'

export const NavigationDesktop = (props: MarginProps) => (
  <Flex {...props} asChild align='center' gap='4' className={styles.root}>
    <nav>
      {navigationItems.map(item => (
        <NavigationItem key={item.label} {...item} />
      ))}
    </nav>
  </Flex>
)
