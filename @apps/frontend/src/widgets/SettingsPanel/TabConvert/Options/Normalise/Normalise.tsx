import { lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { ButtonAddNormalise } from './ButtonAddNormalise'
import { NormaliseContentSkeleton } from './NormaliseContent/NormaliseContentSkeleton'
import { useNormaliseStore } from '@stores/normalise'

const NormaliseContent = lazy(() =>
  import('./NormaliseContent').then(mod => ({ default: mod.NormaliseContent }))
)

export const Normalise = () => {
  const isAdded = useNormaliseStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Suspense fallback={<NormaliseContentSkeleton />}>
            <NormaliseContent />
          </Suspense>
        ) : (
          <ButtonAddNormalise />
        )}
      </section>
    </Flex>
  )
}
