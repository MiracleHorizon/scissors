import { Flex } from '@radix-ui/themes'

import { ButtonReset } from '@components/ButtonReset'
import { useResetSettings } from '@stores/hooks/useResetSettings'

export function Toolbar() {
  const { handleReset } = useResetSettings()

  return (
    <Flex align='center' justify='end' width='100%' mt='4'>
      <ButtonReset title='Reset' tooltipTitle='Reset all settings' onClick={handleReset} />
    </Flex>
  )
}
