import { Flex, type PaddingProps, Tabs } from '@radix-ui/themes'

import { TabResizeContent } from './TabResizeContent'
import { ButtonAddExtend } from './ButtonAddExtend'
import { ButtonAddResize } from './ButtonAddResize'
import { ToolbarTab } from '@stores/tabs'

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
export function TabResize() {
  return (
    <Tabs.Content value={ToolbarTab.RESIZE}>
      <Flex {...padding} direction='column' gap='2'>
        <Flex gap='2'>
          <ButtonAddResize />
          <ButtonAddExtend />
        </Flex>
        <TabResizeContent />
      </Flex>
    </Tabs.Content>
  )
}
