import { Flex } from '@radix-ui/themes'

import { ExtendWith } from './extend-with'
import { ExtendDominantBackground } from './extend-dominant-background'
import { ExtendBackgroundPicker } from './extend-background-picker'

export const ExtendExtra = () => (
  <Flex direction='column' gap='2' width='100%'>
    <ExtendWith />
    <Flex direction='column' gap='3' width='100%'>
      <ExtendBackgroundPicker />
      <ExtendDominantBackground />
    </Flex>
  </Flex>
)
