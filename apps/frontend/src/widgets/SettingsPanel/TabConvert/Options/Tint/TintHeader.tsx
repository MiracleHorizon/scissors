import { PaintbrushIcon } from '@scissors/react-icons/PaintbrushIcon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
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
