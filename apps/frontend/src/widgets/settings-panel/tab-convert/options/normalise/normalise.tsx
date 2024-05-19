import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddNormalise } from './button-add-normalise'
import { NormaliseContentSkeleton } from './normalise-content-skeleton'
import { useNormaliseStore } from '@stores/normalise'

const NormaliseContent = dynamic(
  () => import('./normalise-content').then(mod => mod.NormaliseContent),
  {
    ssr: false,
    loading: () => <NormaliseContentSkeleton />
  }
)

export function Normalise() {
  const isAdded = useNormaliseStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <NormaliseContent /> : <ButtonAddNormalise />}</section>
    </Flex>
  )
}
