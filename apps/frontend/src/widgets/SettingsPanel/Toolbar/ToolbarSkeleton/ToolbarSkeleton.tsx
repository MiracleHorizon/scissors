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

export const ToolbarSkeleton = () => (
  <Flex align='center' justify='between' py='2' px='3' className={styles.root}>
    <Flex align='center' gap='2' pl='2'>
      <Skeleton count={1} height={32} width={70} />
      <Skeleton count={1} height={32} width={70} />
    </Flex>

    <ToolbarContentSkeleton className={styles.toolbarContent} />
    <ToolbarDropdownMenuSkeleton className={styles.toolbarDropdownMenu} />
  </Flex>
)
