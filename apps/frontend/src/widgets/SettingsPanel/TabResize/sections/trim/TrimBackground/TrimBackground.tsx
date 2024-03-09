import { Flex } from '@radix-ui/themes'

import { OptionCheckbox } from '@components/OptionCheckbox'
import { TrimBackgroundPicker } from './TrimBackgroundPicker'
import { TrimBackgroundInfoPopover } from './TrimBackgroundInfoPopover'
import { DEFAULT_TRIM_BACKGROUND } from '@server/sharp'
import { useTrimStore } from '@stores/trim'

export function TrimBackground() {
  const background = useTrimStore(state => state.background)
  const setBackground = useTrimStore(state => state.setBackground)

  const handleToggleBackground = () => setBackground(background ? null : DEFAULT_TRIM_BACKGROUND)

  return (
    <Flex direction='column' gap='2'>
      <Flex gap='2'>
        <OptionCheckbox
          title='Use custom background'
          onClick={handleToggleBackground}
          checked={!!background}
        />
        <TrimBackgroundInfoPopover />
      </Flex>

      {background && <TrimBackgroundPicker background={background} />}
    </Flex>
  )
}
