import { Flex, Switch, Text } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'

export function SwitchNegate() {
  const negate = useConvertStore(state => state.negate?.value)
  const toggleNegate = useConvertStore(state => state.toggleNegate)

  const handleToggleNegate = () => toggleNegate()

  return (
    <Text as='label' size='3'>
      <Flex gap='2'>
        <Switch size='3' color={themeColor} checked={negate} onClick={handleToggleNegate} /> Negate
      </Flex>
    </Text>
  )
}
