import { Flex } from '@radix-ui/themes'

import { ExtendWith } from './ExtendWith'
import { ExtendBackgroundPopover } from './ExtendBackgroundPopover'

export const ExtendExtra = () => (
  <Flex direction='column' gap='2' width='100%'>
    <ExtendWith />
    <ExtendBackgroundPopover />
  </Flex>
)
