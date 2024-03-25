import { Flex } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef, FC } from 'react'

import { GallerySlideInfo } from './GallerySlideInfo'
import styles from './GallerySlideAside.module.css'

export const GallerySlideAside: FC<Props> = props => (
  <Flex asChild direction='column' flexShrink='0' width='var(--slide-aside-w)' pl='2' pb='2'>
    <aside>
      <GallerySlideInfo {...props} className={styles.info} />
    </aside>
  </Flex>
)

type Props = ComponentPropsWithoutRef<typeof GallerySlideInfo>
