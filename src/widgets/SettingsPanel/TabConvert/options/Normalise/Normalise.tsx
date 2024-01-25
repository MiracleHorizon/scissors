import { Flex } from '@radix-ui/themes'

import { NormaliseContent } from './NormaliseContent'
import { ButtonAddNormalise } from './ButtonAddNormalise'
import { useNormaliseStore } from '@stores/normalise'

export function Normalise() {
  const isAdded = useNormaliseStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <NormaliseContent /> : <ButtonAddNormalise />}</section>
    </Flex>
  )
}
