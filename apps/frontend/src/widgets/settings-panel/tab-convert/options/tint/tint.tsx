import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddTint } from './button-add-tint'
import { TintContentSkeleton } from './tint-content-skeleton'
import { useTintStore } from '@stores/tint'

const TintContent = dynamic(() => import('./tint-content').then(mod => mod.TintContent), {
  ssr: false,
  loading: () => <TintContentSkeleton />
})

export function Tint() {
  const isAdded = useTintStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <TintContent /> : <ButtonAddTint />}</section>
    </Flex>
  )
}
