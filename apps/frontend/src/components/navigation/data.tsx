import { ReaderIcon } from '@scissors/react-icons/ReaderIcon'
import { ImageIcon } from '@scissors/react-icons/ImageIcon'

import { PATH_DOCS, PATH_GALLERY } from '@site/paths'
import type { NavigationItemModel } from './types'

export const navigationItems: NavigationItemModel[] = [
  {
    label: 'Documentation',
    href: PATH_DOCS,
    tooltipContent: 'Watch the documentation',
    icon: <ReaderIcon width='18px' height='18px' label='go to documentation' />
  },
  {
    label: 'Gallery',
    href: PATH_GALLERY,
    tooltipContent: 'Watch the gallery',
    icon: <ImageIcon width='18px' height='18px' label='go to gallery' />
  }
]
