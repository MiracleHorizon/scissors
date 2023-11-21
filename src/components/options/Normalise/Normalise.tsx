import { Flex } from '@radix-ui/themes'

import { SliderNormalise } from './SliderNormalise'
import { ButtonAddNormalise } from './ButtonAddNormalise'
import { ButtonRemoveNormalise } from './ButtonRemoveNormalise'
import { useConvertStore } from '@stores/convert'

export function Normalise() {
  const normalise = useConvertStore(state => state.normalise)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {normalise ? (
          <Flex gap='4' align='center' width='100%'>
            <SliderNormalise />
            <ButtonRemoveNormalise />
          </Flex>
        ) : (
          <ButtonAddNormalise />
        )}
      </section>
    </Flex>
  )
}
