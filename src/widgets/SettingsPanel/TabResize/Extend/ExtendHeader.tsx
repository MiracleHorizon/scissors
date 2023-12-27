import { MoveIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonExtendReset } from './ButtonExtendReset'

export function ExtendHeader() {
  return (
    <OptionSectionHeader title='Extend' icon={<MoveIcon width='18px' height='18px' />}>
      <ButtonExtendReset />
    </OptionSectionHeader>
  )
}
