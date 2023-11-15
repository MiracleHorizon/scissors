import { Flex } from '@radix-ui/themes'

import { SwitchNegate } from './SwitchNegate'
import { SwitchNegateAlpha } from './SwitchNegateAlpha'

export function Negate() {
  return (
    <Flex asChild gap='2'>
      <section>
        <SwitchNegate />
        <SwitchNegateAlpha />
      </section>
    </Flex>
  )
}
