import { Flex, Tabs } from '@radix-ui/themes'

import { TabResizeCallout } from './tab-resize-callout'
import { TabResizeControl } from './tab-resize-control'
import { TabResizeContent } from './tab-resize-content'
import { TOOLBAR_TAB } from '@stores/tabs'

export const TabResize = () => (
  <Tabs.Content value={TOOLBAR_TAB.RESIZE}>
    <Flex direction='column' gap='2'>
      <TabResizeCallout />
      <TabResizeControl />
      <TabResizeContent />
    </Flex>
  </Tabs.Content>
)
