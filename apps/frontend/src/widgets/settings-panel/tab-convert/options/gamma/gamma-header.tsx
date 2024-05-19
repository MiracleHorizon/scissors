import { ShadowIcon } from '@scissors/react-icons/ShadowIcon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetGamma } from './button-reset-gamma'
import { ButtonRemoveGamma } from './button-remove-gamma'
import { useGammaStore } from '@stores/gamma'

export function GammaHeader() {
  const gamma = useGammaStore(state => state.gamma)

  return (
    <OptionSectionHeader
      title={gamma !== null ? `Gamma: ${gamma}` : 'Gamma'}
      icon={<ShadowIcon width='18px' height='18px' label='gamma' />}
    >
      <>
        <ButtonResetGamma />
        <ButtonRemoveGamma />
      </>
    </OptionSectionHeader>
  )
}
