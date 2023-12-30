import { MoveIcon } from '@ui/icons/MoveIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ExtendToolbar } from './ExtendToolbar'

export function ExtendHeader() {
  return (
    <OptionSectionHeader isBeta title='Extend' icon={<MoveIcon width='18px' height='18px' />}>
      <ExtendToolbar />
    </OptionSectionHeader>
  )
}
