import MediaQuery from 'react-responsive'

// import { ToolbarContentSkeleton, ToolbarMobileMenuSkeleton } from './ToolbarSkeleton'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme'
import { ToolbarMenu } from './ToolbarMenu'
import { ToolbarMobileMenu } from './ToolbarMobileMenu'

// const ToolbarMenu = dynamic(() => import('./ToolbarMenu').then(mod => mod.ToolbarMenu), {
//   ssr: false,
//   loading: () => <ToolbarContentSkeleton />
// })
// const ToolbarMobileMenu = dynamic(
//   () => import('./ToolbarMobileMenu').then(mod => mod.ToolbarMobileMenu),
//   {
//     ssr: false,
//     loading: () => <ToolbarMobileMenuSkeleton />
//   }
// )

export const ToolbarContent = () => {
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
