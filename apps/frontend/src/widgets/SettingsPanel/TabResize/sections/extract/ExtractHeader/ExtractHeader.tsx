import { CropIcon } from '@ui/icons/CropIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonExtractReset } from './ButtonExtractReset'

export const ExtractHeader = () => (
  <OptionSectionHeader
    title='Extract'
    icon={<CropIcon width='18px' height='18px' label='extract' />}
    isBeta
  >
    <ButtonExtractReset />
  </OptionSectionHeader>
)
