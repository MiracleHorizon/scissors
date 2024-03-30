import type { FC } from 'react'

import { BlurIcon } from '@scissors/react-icons/BlurIcon'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetBlurSigma } from './ButtonResetBlurSigma'
import { ButtonRemoveBlurSigma } from './ButtonRemoveBlurSigma'

export const BlurSigmaHeader: FC<Props> = ({ disabled }) => (
  <OptionSectionHeader title='Blur Sigma' icon={<BlurIcon width={18} height={18} />}>
    <>
      <ButtonResetBlurSigma disabled={disabled} />
      <ButtonRemoveBlurSigma disabled={disabled} />
    </>
  </OptionSectionHeader>
)

interface Props {
  disabled: boolean
}
