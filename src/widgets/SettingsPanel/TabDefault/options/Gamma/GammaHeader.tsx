import { ShadowIcon } from '@ui/icons/ShadowIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetGamma } from './ButtonResetGamma'
import { ButtonRemoveGamma } from './ButtonRemoveGamma'
import type { GammaOptions } from '@server/sharp'

export function GammaHeader({ gamma }: Props) {
  return (
    <OptionSectionHeader
      title={`Gamma: ${gamma.value}`}
      icon={<ShadowIcon width='18px' height='18px' label='gamma' />}
    >
      <>
        <ButtonResetGamma />
        <ButtonRemoveGamma />
      </>
    </OptionSectionHeader>
  )
}

interface Props {
  gamma: GammaOptions
}
