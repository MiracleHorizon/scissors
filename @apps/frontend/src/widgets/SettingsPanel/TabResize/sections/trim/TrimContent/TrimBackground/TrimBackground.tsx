import { Flex } from '@radix-ui/themes'
import { DEFAULT_TRIM_BACKGROUND } from '@scissors/sharp'

import { Checkbox } from '@lib/ui/Checkbox'
import { TrimBackgroundPicker } from './TrimBackgroundPicker'
import { TrimBackgroundInfoPopover } from './TrimBackgroundInfoPopover'
import { useTrimStore } from '@stores/trim'

export const TrimBackground = () => {
  const background = useTrimStore(state => state.background)
  const setBackground = useTrimStore(state => state.setBackground)

  const handleToggleBackground = () => setBackground(background ? null : DEFAULT_TRIM_BACKGROUND)

  return (
    <Flex direction='column' gap='2'>
      <Flex gap='2'>
        <Checkbox
          label='Use custom background'
          onClick={handleToggleBackground}
          checked={!!background}
        />
        <TrimBackgroundInfoPopover />
      </Flex>

      {background && <TrimBackgroundPicker background={background} />}
    </Flex>
  )
}
