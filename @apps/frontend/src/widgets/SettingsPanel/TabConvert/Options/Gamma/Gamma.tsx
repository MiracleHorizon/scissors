import { lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { ButtonAddGamma } from './ButtonAddGamma'
import { GammaContentSkeleton } from './GammaContent/GammaContentSkeleton'
import { useGammaStore } from '@stores/gamma'

const GammaContent = lazy(() =>
  import('./GammaContent').then(mod => ({ default: mod.GammaContent }))
)

export const Gamma = () => {
  const isAdded = useGammaStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Suspense fallback={<GammaContentSkeleton />}>
            <GammaContent />
          </Suspense>
        ) : (
          <ButtonAddGamma />
        )}
      </section>
    </Flex>
  )
}
