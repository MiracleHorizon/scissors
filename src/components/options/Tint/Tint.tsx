'use client'

import { Flex } from '@radix-ui/themes'

import { PalettePopover } from '@components/PalettePopover'
import { ButtonAddTint } from './ButtonAddTint'
import { ButtonRemoveTint } from './ButtonRemoveTint'
import { useTintStore } from '@stores/tint'

export function Tint() {
  const isAdded = useTintStore(state => state.isAdded)
  const color = useTintStore(state => state.color)

  const setColor = useTintStore(state => state.setColor)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded && color ? (
          <Flex gap='4' align='center' width='100%'>
            <PalettePopover color={color} setColor={setColor} />
            <ButtonRemoveTint />
          </Flex>
        ) : (
          <ButtonAddTint />
        )}
      </section>
    </Flex>
  )
}
