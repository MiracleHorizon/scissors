import { IconButton, Popover } from '@radix-ui/themes'

import { DotsHorizontalIcon } from '@scissors/react-icons/DotsHorizontalIcon'

import styles from './GallerySlidePopoverTrigger.module.css'

export const GallerySlidePopoverTrigger = () => (
  <Popover.Trigger className={styles.root}>
    <IconButton color='gray' radius='large' variant='surface'>
      <DotsHorizontalIcon width='22px' height='22px' label='show slide information' />
    </IconButton>
  </Popover.Trigger>
)
