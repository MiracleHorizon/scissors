import { Flex, Separator } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './ToolbarSkeleton.module.css'

export const ToolbarSkeleton = () => (
  <Flex align='center' justify='between' className={styles.root}>
    <Flex align='center' gap='2' pl='3'>
      <Skeleton count={1} height={32} width={70} />
      <Skeleton count={1} height={32} width={70} />
    </Flex>

    <Flex align='center' justify='end' gap='1' py='2' px='3'>
      <Skeleton count={1} height={32} width={32} />
      <Skeleton count={1} height={32} width={32} />
      <Skeleton count={1} height={32} width={32} />

      <Separator orientation='vertical' mx='1' />

      <Skeleton count={1} height={32} width={32} />
      <Skeleton count={1} height={32} width={32} />
    </Flex>
  </Flex>
)
