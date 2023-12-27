import { MoveIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetExtend } from './ButtonResetExtend'

export function ExtendHeader() {
  return (
    <OptionSectionHeader title='Extend' icon={<MoveIcon width='18px' height='18px' />}>
      <ButtonResetExtend />
    </OptionSectionHeader>
  )
}
