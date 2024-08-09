import { Flex, Tabs } from '@radix-ui/themes'

import { DrawToolbox } from './DrawToolbox'
import { TOOLBAR_TAB } from '@stores/tabs'

export const TabDraw = () => (
  <Tabs.Content value={TOOLBAR_TAB.DRAW}>
    <Flex direction='column'>
      <DrawToolbox />
    </Flex>
  </Tabs.Content>
)
