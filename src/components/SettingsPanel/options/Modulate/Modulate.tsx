'use client'

import { Flex } from '@radix-ui/themes'

import { ModulateContent } from './ModulateContent'
import { ButtonAddModulate } from './ButtonAddModulate'
import { useModulateStore } from '@stores/modulate'

export function Modulate() {
  const isAdded = useModulateStore(state => state.isAdded)

  return (
    <Flex asChild align='start' direction='column' p='0'>
      <section>{isAdded ? <ModulateContent /> : <ButtonAddModulate />}</section>
    </Flex>
  )
}
