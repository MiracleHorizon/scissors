import { Flex, IconButton, Separator, Skeleton } from '@radix-ui/themes'
import type { FC } from 'react'

import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ToolbarSkeleton.module.css'

export const ToolbarContentSkeleton: FC<ClassNameProps> = props => (
  <Flex {...props} align='center' justify='end' gap='1'>
    <Skeleton height='32px' width='32px' />
    <Skeleton height='32px' width='32px' />
    <Skeleton height='32px' width='32px' />

    <Separator orientation='vertical' mx='1' />

    <Skeleton height='32px' width='32px' />
  </Flex>
)

export const ToolbarMobileMenuSkeleton: FC<ClassNameProps> = props => (
  <Skeleton width='32px' height='32px' {...props}>
    <IconButton radius='large' />
  </Skeleton>
)

const ToolbarTabMenuSkeleton = () => (
  <>
    <Flex align='center' gap='2' className={styles.toolbarTabMenu}>
      <Skeleton height='32px' width='70px' />
      <Skeleton height='32px' width='70px' />
      {/*<Skeleton height='32px' width='70px' />*/}
    </Flex>

    <Flex className={styles.toolbarTabMenuMobile}>
      <Skeleton height='32px' width='82px' />
    </Flex>
  </>
)

export const ToolbarSkeleton = () => (
  <Flex align='center' justify='between' py='2' px='3' className={styles.root}>
    <ToolbarTabMenuSkeleton />
    <ToolbarContentSkeleton className={styles.toolbarContent} />
    <ToolbarMobileMenuSkeleton className={styles.toolbarMobileMenu} />
  </Flex>
)
