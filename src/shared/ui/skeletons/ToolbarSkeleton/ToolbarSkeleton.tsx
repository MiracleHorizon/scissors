import { Flex } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'

import { toolbarPadding } from '@components/SettingsPanel/Toolbar'
import styles from './ToolbarSkeleton.module.css'

export function ToolbarSkeleton() {
  return (
    <Flex
      align='center'
      justify='end'
      gap='1'
      width='100%'
      {...toolbarPadding}
      className={styles.root}
    >
      <Skeleton count={1} height={32} width={85} />
      <Skeleton count={1} height={32} width={105} />
    </Flex>
  )
}
