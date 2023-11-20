'use client'

import { Flex } from '@radix-ui/themes'

import { ButtonAddGamma } from './ButtonAddGamma'
import { ButtonRemoveGamma } from './ButtonRemoveGamma'
import { SliderGamma } from './SliderGamma'
import { useConvertStore } from '@stores/convert'

export function Gamma() {
  const gamma = useConvertStore(state => state.gamma)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {gamma ? (
          <Flex gap='4' align='center' width='100%'>
            <SliderGamma />
            <ButtonRemoveGamma />
          </Flex>
        ) : (
          <ButtonAddGamma />
        )}
      </section>
    </Flex>
  )
}
