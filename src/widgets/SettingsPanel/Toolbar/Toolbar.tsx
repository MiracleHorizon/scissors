import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'
import { Flex } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ToolbarContentSkeleton, ToolbarDropdownMenuSkeleton } from '@ui/skeletons/ToolbarSkeleton'
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

    <MediaQuery minWidth={520}>
      <ToolbarContent />
    </MediaQuery>

    <MediaQuery maxWidth={519}>
      <ToolbarDropdownMenu />
    </MediaQuery>
  </Flex>
)
