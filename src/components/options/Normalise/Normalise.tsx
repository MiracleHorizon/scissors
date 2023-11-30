'use client'

import { Flex } from '@radix-ui/themes'

import { NormaliseHeader } from './NormaliseHeader'
import { SliderNormalise } from './SliderNormalise'
import { ButtonAddNormalise } from './ButtonAddNormalise'
import { useNormaliseStore } from '@stores/normalise'

export function Normalise() {
  const isAdded = useNormaliseStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded ? (
          <Flex direction='column' align='center' gap='4' width='100%'>
            <NormaliseHeader />
            <SliderNormalise />
          </Flex>
        ) : (
          <ButtonAddNormalise />
        )}
      </section>
    </Flex>
  )
}
