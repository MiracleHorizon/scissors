import { MoveIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ExtendToolbar } from './ExtendToolbar'

export function ExtendHeader() {
  return (
    <OptionSectionHeader isBeta title='Extend' icon={<MoveIcon width='18px' height='18px' />}>
      <ExtendToolbar />
    </OptionSectionHeader>
  )
}
