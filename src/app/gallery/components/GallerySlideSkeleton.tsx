import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './GallerySlideSkeleton.module.css'

export const SliderSkeleton = () => (
  <Flex className={styles.slider}>
    <Skeleton />
  </Flex>
)

export const AsideSkeleton = () => (
  <Flex shrink='0' className={styles.sliderAside}>
    <Skeleton />
  </Flex>
)

export const GallerySlideSkeleton = () => (
  <Flex width='100%' justify='center' className={styles.root}>
    <SliderSkeleton />
    <AsideSkeleton />
  </Flex>
)
