import MediaQuery from 'react-responsive'

import { ToolbarTabList } from './toolbar-tab-list'
import { ToolbarTabDropdown } from './toolbar-tab-dropdown'
import { BREAKPOINTS_MAX_WIDTH, BREAKPOINTS_MIN_WIDTH } from '@lib/theme'

export const ToolbarTabMenu = () => (
  <>
    <MediaQuery minWidth={BREAKPOINTS_MIN_WIDTH.xs}>
      <ToolbarTabList />
    </MediaQuery>

    <MediaQuery maxWidth={BREAKPOINTS_MAX_WIDTH.xs}>
      <ToolbarTabDropdown />
    </MediaQuery>
  </>
)
