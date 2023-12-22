import { Flex } from '@radix-ui/themes'

import { SwitchNegate } from './SwitchNegate'
import { SwitchNegateAlpha } from './SwitchNegateAlpha'
import type { FlexDirection } from '@lib/theme'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row',
  md: 'column'
}

export function Negate() {
  return (
    <Flex asChild gap='2' direction={direction}>
      <section>
        <SwitchNegate />
        <SwitchNegateAlpha />
      </section>
    </Flex>
  )
}
