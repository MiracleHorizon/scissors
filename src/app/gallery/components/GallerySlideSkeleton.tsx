import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './GallerySlideSkeleton.module.css'

export const GallerySlideSkeleton = () => (
  <Flex width='100%' justify='center' className={styles.root}>
    <Flex className={styles.slider}>
      <Skeleton />
    </Flex>

    <Flex className={styles.sliderAside}>
      <Skeleton />
    </Flex>
  </Flex>
)
