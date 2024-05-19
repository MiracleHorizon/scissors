import { CropIcon } from '@scissors/react-icons/CropIcon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetExtract } from './button-reset-extract'

export const ExtractHeader = () => (
  <OptionSectionHeader
    title='Extract'
    icon={<CropIcon width='18px' height='18px' label='extract' />}
    isBeta
  >
    <ButtonResetExtract />
  </OptionSectionHeader>
)
