import { Flex, Separator, Skeleton } from '@radix-ui/themes'

import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ToolbarSkeleton.module.css'

export const ToolbarContentSkeleton = (props: ClassNameProps) => (
  <Flex {...props} align='center' justify='end' gap='1'>
    <Skeleton height='32px' width='32px' />
    <Skeleton height='32px' width='32px' />
    <Skeleton height='32px' width='32px' />

    <Separator orientation='vertical' mx='1' />

    <Skeleton height='32px' width='32px' />
  </Flex>
)

export const ToolbarDropdownMenuSkeleton = (props: ClassNameProps) => (
  <Flex {...props} align='center'>
    <Skeleton height='32px' width='86.5px' />
  </Flex>
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
    <ToolbarDropdownMenuSkeleton className={styles.toolbarDropdownMenu} />
  </Flex>
)
