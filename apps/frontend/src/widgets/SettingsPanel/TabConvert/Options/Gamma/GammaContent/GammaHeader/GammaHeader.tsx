import { ShadowIcon } from '@scissors/react-icons/ShadowIcon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetGamma } from './ButtonResetGamma'
import { ButtonRemoveGamma } from './ButtonRemoveGamma'
import { useGammaStore } from '@stores/gamma'

export const GammaHeader = () => {
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
