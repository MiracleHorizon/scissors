'use client'

import { Flex } from '@radix-ui/themes'

import { TintContent } from './TintContent'
import { ButtonAddTint } from './ButtonAddTint'
import { useTintStore } from '@stores/tint'

export function Tint() {
  const isAdded = useTintStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>{isAdded ? <TintContent /> : <ButtonAddTint />}</section>
    </Flex>
  )
}
