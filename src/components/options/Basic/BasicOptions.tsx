import { Flex } from '@radix-ui/themes'

import { SwitchFlip } from './SwitchFlip'
import { SwitchFlop } from './SwitchFlop'
import { SwitchGrayscale } from './SwitchGrayscale'
import type { FlexDirection } from '@libs/radix'

const direction: FlexDirection = {
  initial: 'column',
  xs: 'row',
  md: 'column'
}

export function BasicOptions() {
  return (
    <Flex asChild gap='3' direction={direction}>
      <section>
        <SwitchFlip />
        <SwitchFlop />
        <SwitchGrayscale />
      </section>
    </Flex>
  )
}
