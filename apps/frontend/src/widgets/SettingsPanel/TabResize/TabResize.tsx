import { Flex, Tabs } from '@radix-ui/themes'

import { TabResizeCallout } from './TabResizeCallout'
import { TabResizeControl } from './TabResizeControl'
import { TabResizeContent } from './TabResizeContent'
import { TOOLBAR_TAB } from '@stores/tabs'
import { tabResizePadding } from './styles'

export const TabResize = () => (
  <Tabs.Content value={TOOLBAR_TAB.RESIZE}>
    <Flex {...tabResizePadding} direction='column' gap='2'>
      <TabResizeCallout />
      <TabResizeControl />
      <TabResizeContent />
    </Flex>
  </Tabs.Content>
)
