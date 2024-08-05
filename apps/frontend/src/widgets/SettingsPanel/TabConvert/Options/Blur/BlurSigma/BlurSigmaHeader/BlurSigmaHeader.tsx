import { BlurIcon } from '@scissors/react-icons/BlurIcon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetBlurSigma } from './ButtonResetBlurSigma'
import { ButtonRemoveBlurSigma } from './ButtonRemoveBlurSigma'

interface Props {
  value: number | null
  disabled: boolean
}

export const BlurSigmaHeader = ({ value, disabled }: Props) => (
  <OptionSectionHeader
    title={value === null ? 'Sigma' : `Sigma: ${value}`}
    icon={<BlurIcon width={18} height={18} />}
  >
    <>
      <ButtonResetBlurSigma disabled={disabled} />
      <ButtonRemoveBlurSigma disabled={disabled} />
    </>
  </OptionSectionHeader>
)
