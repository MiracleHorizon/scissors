import { Flex } from '@radix-ui/themes'

import { GammaHeader } from './GammaHeader'
import { SliderGamma } from './SliderGamma'
import { useGammaStore } from '@stores/gamma'

export function GammaContent() {
  const gamma = useGammaStore(state => state.gamma)

  if (!gamma) {
    return null
  }

  return (
    <Flex direction='column' gap='2' width='100%'>
      <GammaHeader gamma={gamma} />
      <SliderGamma />
    </Flex>
  )
}
