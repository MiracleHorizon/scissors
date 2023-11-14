import { Flex } from '@radix-ui/themes'

import { SwitchNegate } from './SwitchNegate'
import { SwitchNegateAlpha } from './SwitchNegateAlpha'

export function NegateOptions() {
  return (
    <Flex gap='2'>
      <SwitchNegate />
      <SwitchNegateAlpha />
    </Flex>
  )
}
