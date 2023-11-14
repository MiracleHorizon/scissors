import { Flex, Switch, Text } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'
import { themeColor } from '@shared/theme'

export function SwitchNegateAlpha() {
  const negate = useConvertStore(state => state.negate?.value)
  const negateAlpha = useConvertStore(state => state.negate?.alpha)
  const toggleNegateAlpha = useConvertStore(state => state.toggleNegateAlpha)

  const handleToggleNegateAlpha = () => toggleNegateAlpha()

  return (
    <Text as='label' size='3'>
      <Flex gap='2'>
        <Switch
          size='3'
          color={themeColor}
          checked={negateAlpha}
          disabled={!negate}
          onClick={handleToggleNegateAlpha}
        />{' '}
        Negate alpha
      </Flex>
    </Text>
  )
}
