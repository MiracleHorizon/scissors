'use client'

import { Flex } from '@radix-ui/themes'

import { TintHeader } from './TintHeader'
import { ButtonAddTint } from './ButtonAddTint'
import { PalettePopover } from '@components/PalettePopover'
import { useTintStore } from '@stores/tint'

export function Tint() {
  const isAdded = useTintStore(state => state.isAdded)
  const color = useTintStore(state => state.color)

  const setColor = useTintStore(state => state.setColor)

  return (
    <Flex asChild align='start' direction='column' gap='2'>
      <section>
        {isAdded && color ? (
          <Flex direction='column' gap='2' width='100%'>
            <TintHeader />
            <PalettePopover color={color} setColor={setColor} />
          </Flex>
        ) : (
          <ButtonAddTint />
        )}
      </section>
    </Flex>
  )
}
