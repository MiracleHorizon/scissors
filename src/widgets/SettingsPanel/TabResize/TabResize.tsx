import { Flex, type PaddingProps, Tabs } from '@radix-ui/themes'

import { TabResizeCallout } from './TabResizeCallout'
import { TabResizeActions } from './TabResizeActions'
import { TabResizeContent } from './TabResizeContent'
import { TOOLBAR_TAB } from '@stores/tabs'

const padding: PaddingProps = {
  pt: '3',
  pb: '2',
  pl: {
    initial: '3',
    md: '2'
  },
  pr: '3'
}

// TODO: Dynamic imports
export const TabResize = () => (
  <Tabs.Content value={TOOLBAR_TAB.RESIZE}>
    <Flex {...padding} direction='column' gap='2'>
      <TabResizeCallout />
      <TabResizeActions />
      <TabResizeContent />
    </Flex>
  </Tabs.Content>
)
