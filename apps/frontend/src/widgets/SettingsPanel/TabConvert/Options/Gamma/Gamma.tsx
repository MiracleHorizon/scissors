import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddGamma } from './ButtonAddGamma'
import { GammaContentSkeleton } from './GammaContent/GammaContentSkeleton'
import { useGammaStore } from '@stores/gamma'

const GammaContent = dynamic(() => import('./GammaContent').then(mod => mod.GammaContent), {
  ssr: false,
  loading: () => <GammaContentSkeleton />
})

export function Gamma() {
  const isAdded = useGammaStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <GammaContent /> : <ButtonAddGamma />}</section>
    </Flex>
  )
}
