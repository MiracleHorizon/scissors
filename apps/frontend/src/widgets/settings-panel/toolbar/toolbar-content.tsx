import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'

import { ToolbarContentSkeleton, ToolbarMobileMenuSkeleton } from './toolbar-skeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme'

const ToolbarMenu = dynamic(() => import('./toolbar-menu').then(mod => mod.ToolbarMenu), {
  ssr: false,
  loading: () => <ToolbarContentSkeleton />
})
const ToolbarMobileMenu = dynamic(
  () => import('./toolbar-mobile-menu').then(mod => mod.ToolbarMobileMenu),
  {
    ssr: false,
    loading: () => <ToolbarMobileMenuSkeleton />
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
        {selectedTab !== TOOLBAR_TAB.METADATA && <ToolbarMobileMenu ml='auto' />}
      </MediaQuery>
    </>
  )
}
