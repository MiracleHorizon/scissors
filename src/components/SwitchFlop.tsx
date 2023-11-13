import { Flex, Switch, Text } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'

export function SwitchFlop() {
  const flop = useConvertStore(state => state.flop)
  const toggleFlop = useConvertStore(state => state.toggleFlop)

  const handleToggleFlop = () => toggleFlop()

  return (
    <Text as='label' size='3'>
      <Flex gap='2'>
        <Switch size='3' color={themeColor} checked={flop} onClick={handleToggleFlop} /> Flop
      </Flex>
    </Text>
  )
}
