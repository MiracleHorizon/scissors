import { Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ToolbarSkeleton.module.css'

export const ToolbarContentSkeleton = (props: ClassNameProps) => (
  <Flex {...props} align='center' justify='end' gap='1'>
    <Skeleton count={1} height={32} width={32} />
    <Skeleton count={1} height={32} width={32} />
    <Skeleton count={1} height={32} width={32} />

    <Separator orientation='vertical' mx='1' />

    <Skeleton count={1} height={32} width={32} />
  </Flex>
)

export const ToolbarDropdownMenuSkeleton = (props: ClassNameProps) => (
  <Flex {...props} align='center'>
    <Skeleton count={1} height={32} width={86.5} />
  </Flex>
)

const ToolbarTabMenuSkeleton = () => (
  <>
    <Flex align='center' gap='2' className={styles.toolbarTabMenu}>
      <Skeleton count={1} height={32} width={70} />
      <Skeleton count={1} height={32} width={70} />
      <Skeleton count={1} height={32} width={70} />
    </Flex>

    <Flex className={styles.toolbarTabMenuMobile}>
      <Skeleton count={1} height={32} width={82} />
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
