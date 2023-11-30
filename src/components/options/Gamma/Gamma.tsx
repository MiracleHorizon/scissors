'use client'

import { Flex } from '@radix-ui/themes'

import { GammaHeader } from './GammaHeader'
import { SliderGamma } from './SliderGamma'
import { ButtonAddGamma } from './ButtonAddGamma'
import { useGammaStore } from '@stores/gamma'

export function Gamma() {
  const gamma = useGammaStore(state => state.gamma)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {gamma ? (
          <Flex direction='column' gap='2' width='100%'>
            <GammaHeader gamma={gamma} />
            <SliderGamma />
          </Flex>
        ) : (
          <ButtonAddGamma />
        )}
      </section>
    </Flex>
  )
}
