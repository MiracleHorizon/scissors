import { Flex, Switch, Text } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'

export function SwitchFlip() {
  const flip = useConvertStore(state => state.flip)
  const toggleFlip = useConvertStore(state => state.toggleFlip)

  const handleToggleFlip = () => toggleFlip()

  return (
    <Text as='label' size='3'>
      <Flex gap='2'>
        <Switch size='3' color={themeColor} checked={flip} onClick={handleToggleFlip} /> Flip
      </Flex>
    </Text>
  )
}
