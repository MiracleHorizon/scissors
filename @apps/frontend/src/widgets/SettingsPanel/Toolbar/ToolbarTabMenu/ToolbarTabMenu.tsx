import MediaQuery from 'react-responsive'

import { ToolbarTabList } from './ToolbarTabList'
import { ToolbarTabDropdown } from './ToolbarTabDropdown'
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
