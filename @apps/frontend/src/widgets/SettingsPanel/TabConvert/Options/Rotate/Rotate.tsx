import { lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { ButtonAddRotate } from './ButtonAddRotate'
import { RotateContentSkeleton } from './RotateContent/RotateContentSkeleton'
import { useRotateStore } from '@stores/rotate'

const RotateContent = lazy(() =>
  import('./RotateContent').then(mod => ({ default: mod.RotateContent }))
)

export const Rotate = () => {
  const isAdded = useRotateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Suspense fallback={<RotateContentSkeleton />}>
            <RotateContent />
          </Suspense>
        ) : (
          <ButtonAddRotate />
        )}
      </section>
    </Flex>
  )
}
