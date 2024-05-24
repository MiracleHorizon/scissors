import { Popover } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { GallerySlideInfo } from '../GallerySlideInfo'
import { GallerySlidePopoverTrigger } from './GallerySlidePopoverTrigger'
import styles from './GallerySlidePopover.module.css'

type Props = ComponentPropsWithoutRef<typeof GallerySlideInfo>

export const GallerySlidePopover: FC<Props> = props => (
  <Popover.Root modal>
    <GallerySlidePopoverTrigger />

    <Popover.Content align='end' minWidth='120px' maxWidth='170px' className={styles.content}>
      <GallerySlideInfo {...props} />
    </Popover.Content>
  </Popover.Root>
)
