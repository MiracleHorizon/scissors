import { Flex } from '@radix-ui/themes'

import { GammaContent } from './GammaContent'
import { ButtonAddGamma } from './ButtonAddGamma'
import { useGammaStore } from '@stores/gamma'

export function Gamma() {
  const isAdded = useGammaStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <GammaContent /> : <ButtonAddGamma />}</section>
    </Flex>
  )
}
