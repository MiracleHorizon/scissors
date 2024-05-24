import { Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { GallerySlideInfo } from '../GallerySlideInfo'
import styles from './GallerySlideAside.module.css'

type Props = ComponentPropsWithoutRef<typeof GallerySlideInfo>

export const GallerySlideAside = (props: Props) => (
  <Flex asChild direction='column' flexShrink='0' width='var(--slide-aside-w)' pl='2' pb='2'>
    <aside>
      <GallerySlideInfo {...props} className={styles.info} />
    </aside>
  </Flex>
)
