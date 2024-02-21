import { PaintbrushIcon } from '@ui/icons/PaintbrushIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetTint } from './ButtonResetTint'
import { ButtonRemoveTint } from './ButtonRemoveTint'

export const TintHeader = () => (
  <OptionSectionHeader
    title='Tint'
    icon={<PaintbrushIcon width='18px' height='18px' label='tint' />}
  >
    <>
      <ButtonResetTint />
      <ButtonRemoveTint />
    </>
  </OptionSectionHeader>
)
