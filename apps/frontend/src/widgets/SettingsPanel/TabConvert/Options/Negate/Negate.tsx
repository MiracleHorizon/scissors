import { Flex } from '@radix-ui/themes'

import { SwitchNegate } from './switches/SwitchNegate'
import { SwitchNegateAlpha } from './switches/SwitchNegateAlpha'
import type { FlexDirection } from '@lib/theme'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row',
  md: 'column'
} as const

export const Negate = () => (
  <Flex asChild direction={direction} gap='2'>
    <section>
      <SwitchNegate />
      <SwitchNegateAlpha />
    </section>
  </Flex>
)
