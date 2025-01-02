import { Flex } from '@radix-ui/themes'

import { TintHeader } from './TintHeader'
import { ColorField } from '@ui/ColorField'
import { useTintStore } from '@stores/tint'
import { useConvertStore } from '@stores/convert'

export const TintContent = () => {
  const color = useTintStore(state => state.color)
  const isGrayscaleEnabled = useConvertStore(state => state.grayscale)

  const setColor = useTintStore(state => state.setColor)

  if (!color) {
    return null
  }

  return (
    <Flex direction='column' gap='2' width='100%'>
      <TintHeader />
      <ColorField value={color} disabled={isGrayscaleEnabled} onValueChange={setColor} />
    </Flex>
  )
}
