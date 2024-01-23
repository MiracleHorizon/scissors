import { Flex } from '@radix-ui/themes'

import { SwitchNegate } from './SwitchNegate'
import { SwitchNegateAlpha } from './SwitchNegateAlpha'
import type { FlexDirection } from '@lib/theme'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row',
  md: 'column'
}

export const Negate = () => (
  <Flex asChild direction={direction} gap='2'>
    <section>
      <SwitchNegate />
      <SwitchNegateAlpha />
    </section>
  </Flex>
)
