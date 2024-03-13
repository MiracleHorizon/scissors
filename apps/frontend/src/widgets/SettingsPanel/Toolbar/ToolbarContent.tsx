import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'

import { ToolbarContentSkeleton, ToolbarDropdownMenuSkeleton } from './ToolbarSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme'

const ToolbarMenu = dynamic(() => import('./ToolbarMenu').then(mod => mod.ToolbarMenu), {
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

export function ToolbarContent() {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <>
      <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.xs}>
        <ToolbarMenu />
      </MediaQuery>

      <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>
        {selectedTab !== TOOLBAR_TAB.METADATA && <ToolbarDropdownMenu />}
      </MediaQuery>
    </>
  )
}
