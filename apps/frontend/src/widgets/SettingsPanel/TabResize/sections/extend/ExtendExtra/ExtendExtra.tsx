import { Flex } from '@radix-ui/themes'

import { ExtendWith } from './ExtendWith'
import { ExtendDominantBackground } from './ExtendDominantBackground'
import { ExtendBackgroundPicker } from './ExtendBackgroundPicker'

export const ExtendExtra = () => (
  <Flex direction='column' gap='2' width='100%'>
    <ExtendWith />
    <Flex direction='column' gap='3' width='100%'>
      <ExtendBackgroundPicker />
      <ExtendDominantBackground />
    </Flex>
  </Flex>
)
