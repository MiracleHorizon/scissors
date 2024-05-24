import { BlurIcon } from '@scissors/react-icons/BlurIcon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetBlurSigma } from './ButtonResetBlurSigma'
import { ButtonRemoveBlurSigma } from './ButtonRemoveBlurSigma'

interface Props {
  disabled: boolean
}

export const BlurSigmaHeader = ({ disabled }: Props) => (
  <OptionSectionHeader title='Sigma' icon={<BlurIcon width={18} height={18} />}>
    <>
      <ButtonResetBlurSigma disabled={disabled} />
      <ButtonRemoveBlurSigma disabled={disabled} />
    </>
  </OptionSectionHeader>
)
