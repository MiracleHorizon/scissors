import { Flex } from '@radix-ui/themes'

import { SwitchFlip } from './SwitchFlip'
import { SwitchFlop } from './SwitchFlop'
import { SwitchGrayscale } from './SwitchGrayscale'
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
