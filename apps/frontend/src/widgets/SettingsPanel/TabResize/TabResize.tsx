import { Flex, Tabs } from '@radix-ui/themes'

import { TabResizeCallout } from './TabResizeCallout'
import { TabResizeActions } from './TabResizeActions'
import { TabResizeContent } from './TabResizeContent'
import { TOOLBAR_TAB } from '@stores/tabs'
import { tabResizePadding } from './styles'

// TODO: Dynamic imports
export const TabResize = () => (
  <Tabs.Content value={TOOLBAR_TAB.RESIZE}>
    <Flex {...tabResizePadding} direction='column' gap='2'>
      <TabResizeCallout />
      <TabResizeActions />
      <TabResizeContent />
    </Flex>
  </Tabs.Content>
)
