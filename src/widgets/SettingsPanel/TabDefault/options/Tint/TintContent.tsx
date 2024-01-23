import { Flex } from '@radix-ui/themes'

import { TintHeader } from './TintHeader'
import { ColorPicker } from '@ui/ColorPicker'
import { useTintStore } from '@stores/tint'
import { useConvertStore } from '@stores/convert'

export function TintContent() {
  const color = useTintStore(state => state.color)
  const isGrayscaleEnabled = useConvertStore(state => state.grayscale)

  const setColor = useTintStore(state => state.setColor)

  if (!color) {
    return null
  }

  return (
    <Flex direction='column' gap='2' width='100%'>
      <TintHeader />
      <ColorPicker color={color} setColor={setColor} disabled={isGrayscaleEnabled} />
    </Flex>
  )
}
