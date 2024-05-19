import { Flex } from '@radix-ui/themes'

import { SwitchFlip } from './switch-flip'
import { SwitchFlop } from './switch-flop'
import { SwitchGrayscale } from './switch-grayscale'
import type { FlexDirection } from '@lib/theme'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row',
  md: 'column'
} as const

export const BasicOptions = () => (
  <Flex asChild gap='2' direction={direction}>
    <section>
      <SwitchFlip />
      <SwitchFlop />
      <SwitchGrayscale />
    </section>
  </Flex>
)
