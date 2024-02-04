import dynamic from 'next/dynamic'
import MediaQuery from 'react-responsive'

import { ToolbarContentSkeleton, ToolbarDropdownMenuSkeleton } from '@ui/skeletons/ToolbarSkeleton'
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
  return (
    <>
      <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.xs}>
        <ToolbarMenu />
      </MediaQuery>

      <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>
        <ToolbarDropdownMenu />
      </MediaQuery>
    </>
  )
}
