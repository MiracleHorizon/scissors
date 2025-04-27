import { lazy, Suspense } from 'react'
import { Flex } from '@radix-ui/themes'

import { ButtonAddModulate } from './ButtonAddModulate'
import { ModulateContentSkeleton } from './ModulateContent/ModulateContentSkeleton'
import { useModulateStore } from '@stores/modulate'

const ModulateContent = lazy(() =>
  import('./ModulateContent').then(mod => ({ default: mod.ModulateContent }))
)

export const Modulate = () => {
  const isAdded = useModulateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Suspense fallback={<ModulateContentSkeleton />}>
            <ModulateContent />
          </Suspense>
        ) : (
          <ButtonAddModulate />
        )}
      </section>
    </Flex>
  )
}
