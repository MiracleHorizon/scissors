import { Flex } from '@radix-ui/themes'

import { SwitchProgressive } from './SwitchProgressive'
import { SwitchAdaptiveFiltering } from './SwitchAdaptiveFiltering'

export function FormatPNG() {
  return (
    <Flex direction='column' gap='2'>
      <SwitchAdaptiveFiltering />
      <SwitchProgressive />
    </Flex>
  )
}
