import { Flex } from '@radix-ui/themes'

import { SwitchFlip } from './SwitchFlip'
import { SwitchFlop } from './SwitchFlop'
import { SwitchGrayscale } from './SwitchGrayscale'

export function BasicOptions() {
  return (
    <Flex asChild gap='3' direction='row'>
      <section>
        <SwitchFlip />
        <SwitchFlop />
        <SwitchGrayscale />
      </section>
    </Flex>
  )
}
