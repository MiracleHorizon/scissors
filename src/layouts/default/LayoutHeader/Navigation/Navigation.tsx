import { Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { ReaderIcon } from '@ui/icons/ReaderIcon'
import { NavigationItem } from './NavigationItem'
import { ROUTE } from '@lib/router'
import { TOUR_STEP } from '@lib/tour'
import type { Gap } from '@lib/theme'

const items: ComponentPropsWithoutRef<typeof NavigationItem>[] = [
  {
    label: 'Documentation',
    href: ROUTE.DOCS,
    tooltipContent: 'Watch the documentation',
    icon: <ReaderIcon width='18px' height='18px' label='go to documentation' />,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    'data-tourstep': TOUR_STEP.DOCUMENTATION_LINK
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
