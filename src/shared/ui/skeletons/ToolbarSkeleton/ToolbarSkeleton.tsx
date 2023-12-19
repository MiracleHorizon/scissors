import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import styles from './ToolbarSkeleton.module.css'

export function ToolbarSkeleton() {
  return (
    <Flex align='center' justify='end' gap='1' py='2' px='3' width='100%' className={styles.root}>
      <Skeleton count={1} height={32} width={32} />
      <Skeleton count={1} height={32} width={32} />
    </Flex>
  )
}
