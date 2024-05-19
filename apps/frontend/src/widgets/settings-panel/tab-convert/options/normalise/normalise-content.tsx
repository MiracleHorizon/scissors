import { Flex } from '@radix-ui/themes'

import { NormaliseHeader } from './normalise-header'
import { SliderNormalise } from './slider-normalise'

export const NormaliseContent = () => (
  <Flex direction='column' align='center' gap='4' width='100%'>
    <NormaliseHeader />
    <SliderNormalise />
  </Flex>
)
