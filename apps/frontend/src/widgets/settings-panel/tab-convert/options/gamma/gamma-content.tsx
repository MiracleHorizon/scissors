import { Flex } from '@radix-ui/themes'

import { GammaHeader } from './gamma-header'
import { SliderGamma } from './slider-gamma'

export const GammaContent = () => (
  <Flex direction='column' gap='2' width='100%'>
    <GammaHeader />
    <SliderGamma />
  </Flex>
)
