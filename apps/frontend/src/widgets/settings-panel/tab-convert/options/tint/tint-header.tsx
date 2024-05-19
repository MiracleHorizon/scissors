import { PaintbrushIcon } from '@scissors/react-icons/PaintbrushIcon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetTint } from './button-reset-tint'
import { ButtonRemoveTint } from './button-remove-tint'

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
