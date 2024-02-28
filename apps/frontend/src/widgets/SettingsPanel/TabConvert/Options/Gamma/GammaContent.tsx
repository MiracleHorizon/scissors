import { Flex } from '@radix-ui/themes'

import { GammaHeader } from './GammaHeader'
import { SliderGamma } from './SliderGamma'

export const GammaContent = () => (
  <Flex direction='column' gap='2' width='100%'>
    <GammaHeader />
    <SliderGamma />
  </Flex>
)
