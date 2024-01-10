import { Half2Icon } from '@ui/icons/Half2Icon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetTint } from './ButtonResetTint'
import { ButtonRemoveTint } from './ButtonRemoveTint'

export function TintHeader() {
  return (
    <OptionSectionHeader title='Tint' icon={<Half2Icon width='18px' height='18px' label='tint' />}>
      <>
        <ButtonResetTint />
        <ButtonRemoveTint />
      </>
    </OptionSectionHeader>
  )
}
