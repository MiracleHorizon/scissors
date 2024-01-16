import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ScissorsIcon } from '@ui/icons/ScissorsIcon'
import { ButtonTrimReset } from './ButtonTrimReset'

export const TrimHeader = () => (
  <OptionSectionHeader
    isBeta
    title='Trim'
    icon={<ScissorsIcon width='18px' height='18px' label='trim' />}
  >
    <ButtonTrimReset />
  </OptionSectionHeader>
)
