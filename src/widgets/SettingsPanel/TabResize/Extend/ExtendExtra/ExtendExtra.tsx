import { Flex } from '@radix-ui/themes'

import { ExtendWith } from './ExtendWith/ExtendWith'
import { ExtendBackgroundPopover } from './ExtendBackgroundPopover'

export function ExtendExtra() {
  return (
    <Flex direction='column' gap='2' width='100%'>
      <ExtendWith />
      <ExtendBackgroundPopover />
    </Flex>
  )
}
