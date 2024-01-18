import { Flex } from '@radix-ui/themes'

import { ReaderIcon } from '@ui/icons/ReaderIcon'
import { NavigationItem } from './NavigationItem'
import { ROUTE } from '@lib/router'
import type { Gap } from '@lib/theme'
import type { NavigationItemModel } from './Navigation.types'

const items: NavigationItemModel[] = [
  {
    label: 'Documentation',
    href: ROUTE.DOCS,
    tooltipContent: 'Watch the documentation',
    icon: <ReaderIcon width='18px' height='18px' label='go to documentation' />
  }
]

const gap: Gap = {
  initial: '2',
  xs: '3'
}

export const Navigation = () => (
  <Flex asChild align='center' gap={gap} mr='4'>
    <nav>
      {items.map(item => (
        <NavigationItem key={item.label} {...item} />
      ))}
    </nav>
  </Flex>
)
