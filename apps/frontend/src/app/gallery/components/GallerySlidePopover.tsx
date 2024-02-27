import { IconButton, Popover } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { GallerySlideInfo } from './GallerySlideInfo'
import { DotsHorizontalIcon } from '@ui/icons/DotsHorizontalIcon'
import styles from './GallerySlidePopover.module.css'

const GallerySlidePopoverTrigger = () => (
  <Popover.Trigger className={styles.trigger}>
    <IconButton color='gray' radius='large' variant='surface'>
      <DotsHorizontalIcon width='22px' height='22px' label='show slide information' />
    </IconButton>
  </Popover.Trigger>
)

export const GallerySlidePopover: FC<Props> = props => (
  <Popover.Root modal>
    <GallerySlidePopoverTrigger />

    <Popover.Content align='end' className={styles.content}>
      <GallerySlideInfo {...props} />
    </Popover.Content>
  </Popover.Root>
)

type Props = ComponentPropsWithoutRef<typeof GallerySlideInfo>
