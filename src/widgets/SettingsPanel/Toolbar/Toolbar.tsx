import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'
import { Flex } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ToolbarContentSkeleton, ToolbarDropdownMenuSkeleton } from '@ui/skeletons/ToolbarSkeleton'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme'
import styles from './Toolbar.module.css'

const ToolbarContent = dynamic(() => import('./ToolbarContent').then(mod => mod.ToolbarContent), {
  ssr: false,
  loading: () => <ToolbarContentSkeleton />
})
const ToolbarDropdownMenu = dynamic(
  () => import('./ToolbarDropdownMenu').then(mod => mod.ToolbarDropdownMenu),
  {
    ssr: false,
    loading: () => <ToolbarDropdownMenuSkeleton />
  }
)

export const Toolbar = () => (
  <Flex px='3' align='center' justify='between' className={styles.root}>
    <ToolbarTabList />

    <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.xs}>
      <ToolbarContent />
    </MediaQuery>

    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>
      <ToolbarDropdownMenu />
    </MediaQuery>
  </Flex>
)
