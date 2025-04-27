import { lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { ButtonAddTint } from './ButtonAddTint'
import { TintContentSkeleton } from './TintContent/TintContentSkeleton'
import { useTintStore } from '@stores/tint'

const TintContent = lazy(() => import('./TintContent').then(mod => ({ default: mod.TintContent })))

export const Tint = () => {
  const isAdded = useTintStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Suspense fallback={<TintContentSkeleton />}>
            <TintContent />
          </Suspense>
        ) : (
          <ButtonAddTint />
        )}
      </section>
    </Flex>
  )
}
