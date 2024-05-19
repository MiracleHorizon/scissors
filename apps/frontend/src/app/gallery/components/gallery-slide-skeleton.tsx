import { Flex, Skeleton } from '@radix-ui/themes'

import styles from './gallery-slide-skeleton.module.css'

export const SliderSkeleton = () => (
  <Flex className={styles.slider}>
    <Skeleton />
  </Flex>
)

export const AsideSkeleton = () => (
  <Flex flexShrink='0' className={styles.sliderAside}>
    <Skeleton />
  </Flex>
)

export const GallerySlideSkeleton = () => (
  <Flex width='100%' justify='center' className={styles.root}>
    <SliderSkeleton />
    <AsideSkeleton />
  </Flex>
)
