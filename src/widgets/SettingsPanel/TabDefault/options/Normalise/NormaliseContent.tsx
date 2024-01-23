import { Flex } from '@radix-ui/themes'

import { NormaliseHeader } from './NormaliseHeader'
import { SliderNormalise } from './SliderNormalise'

export const NormaliseContent = () => (
  <Flex direction='column' align='center' gap='4' width='100%'>
    <NormaliseHeader />
    <SliderNormalise />
  </Flex>
)
