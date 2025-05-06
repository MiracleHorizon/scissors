import { ReaderIcon } from '@scissors/react-icons/ReaderIcon'
import { ImageIcon } from '@scissors/react-icons/ImageIcon'

import type { NavigationItemModel } from './types'

export const navigationItems: NavigationItemModel[] = [
  {
    label: 'Documentation',
    href: '/docs',
    tooltipContent: 'Watch the documentation',
    icon: <ReaderIcon width='18px' height='18px' label='go to documentation' />
  },
  {
    label: 'Gallery',
    href: '/gallery',
    tooltipContent: 'Watch the gallery',
    icon: <ImageIcon width='18px' height='18px' label='go to gallery' />
  }
]
