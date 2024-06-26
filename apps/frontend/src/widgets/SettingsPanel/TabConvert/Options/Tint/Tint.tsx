import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddTint } from './ButtonAddTint'
import { TintContentSkeleton } from './TintContent/TintContentSkeleton'
import { useTintStore } from '@stores/tint'

const TintContent = dynamic(() => import('./TintContent').then(mod => mod.TintContent), {
  ssr: false,
  loading: () => <TintContentSkeleton />
})

export const Tint = () => {
  const isAdded = useTintStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <TintContent /> : <ButtonAddTint />}</section>
    </Flex>
  )
}
