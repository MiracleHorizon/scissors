import { Flex } from '@radix-ui/themes'

import { TintHeader } from './TintHeader'
import { PalettePopover } from '@components/PalettePopover'
import { useTintStore } from '@stores/tint'

export function TintContent() {
  const color = useTintStore(state => state.color)

  const setColor = useTintStore(state => state.setColor)

  if (!color) {
    return null
  }

  return (
    <Flex direction='column' gap='2' width='100%'>
      <TintHeader />
      <PalettePopover color={color} setColor={setColor} />
    </Flex>
  )
}
