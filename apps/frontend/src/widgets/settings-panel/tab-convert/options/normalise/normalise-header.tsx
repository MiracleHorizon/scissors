import { Half2Icon } from '@scissors/react-icons/Half2Icon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetNormalise } from './button-reset-normalise'
import { ButtonRemoveNormalise } from './button-remove-normalise'
import { useNormaliseStore } from '@stores/normalise'

export function NormaliseHeader() {
  const [lower, upper] = useNormaliseStore(state => [state.lower, state.upper])

  return (
    <OptionSectionHeader
      title={`Normalisation: ${lower} - ${upper}%`}
      icon={<Half2Icon width='18px' height='18px' label='normalisation' />}
    >
      <>
        <ButtonResetNormalise />
        <ButtonRemoveNormalise />
      </>
    </OptionSectionHeader>
  )
}
