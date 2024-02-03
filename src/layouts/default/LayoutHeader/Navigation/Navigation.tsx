import { Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { ReaderIcon } from '@ui/icons/ReaderIcon'
import { NavigationItem } from './NavigationItem'
import { PATH_DOCS, PATH_GALLERY } from '@site/paths'
import { TOUR_STEP } from '@lib/tour'
import { ImageIcon } from '@ui/icons/ImageIcon'

const items: ComponentPropsWithoutRef<typeof NavigationItem>[] = [
  {
    label: 'Documentation',
    href: PATH_DOCS,
    tooltipContent: 'Watch the documentation',
    icon: <ReaderIcon width='18px' height='18px' label='go to documentation' />,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    'data-tourstep': TOUR_STEP.DOCUMENTATION_LINK
  },
  {
    label: 'Gallery',
    href: PATH_GALLERY,
    tooltipContent: 'Watch the gallery',
    icon: <ImageIcon width='18px' height='18px' label='go to gallery' />
  }
]

export const Navigation = () => (
  <Flex asChild align='center' gap='3' mr='4'>
    <nav>
      {items.map(item => (
        <NavigationItem key={item.label} {...item} />
      ))}
    </nav>
  </Flex>
)
