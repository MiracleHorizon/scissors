import { Half2Icon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetTint } from './ButtonResetTint'
import { ButtonRemoveTint } from './ButtonRemoveTint'

export function TintHeader() {
  return (
    <OptionSectionHeader title='Tint' icon={<Half2Icon width='18px' height='18px' />}>
      <>
        <ButtonResetTint />
        <ButtonRemoveTint />
      </>
    </OptionSectionHeader>
  )
}
