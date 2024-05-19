import type { FC } from 'react'

import { BlurIcon } from '@scissors/react-icons/BlurIcon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetBlurSigma } from './button-reset-blur-sigma'
import { ButtonRemoveBlurSigma } from './button-remove-blur-sigma'

export const BlurSigmaHeader: FC<Props> = ({ disabled }) => (
  <OptionSectionHeader title='Sigma' icon={<BlurIcon width={18} height={18} />}>
    <>
      <ButtonResetBlurSigma disabled={disabled} />
      <ButtonRemoveBlurSigma disabled={disabled} />
    </>
  </OptionSectionHeader>
)

interface Props {
  disabled: boolean
}
