import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { ButtonAddNormalise } from './ButtonAddNormalise'
import { NormaliseContentSkeleton } from './NormaliseContent/NormaliseContentSkeleton'
import { useNormaliseStore } from '@stores/normalise'

const NormaliseContent = dynamic(
  () => import('./NormaliseContent').then(mod => mod.NormaliseContent),
  {
    ssr: false,
    loading: () => <NormaliseContentSkeleton />
  }
)

export const Normalise = () => {
  const isAdded = useNormaliseStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <NormaliseContent /> : <ButtonAddNormalise />}</section>
    </Flex>
  )
}
