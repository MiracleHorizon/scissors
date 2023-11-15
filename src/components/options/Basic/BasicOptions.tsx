import { Flex } from '@radix-ui/themes'

import { SwitchFlip } from './SwitchFlip'
import { SwitchFlop } from './SwitchFlop'

export function BasicOptions() {
  return (
    <Flex asChild gap='3' direction='row'>
      <section>
        <SwitchFlip />
        <SwitchFlop />
      </section>
    </Flex>
  )
}
