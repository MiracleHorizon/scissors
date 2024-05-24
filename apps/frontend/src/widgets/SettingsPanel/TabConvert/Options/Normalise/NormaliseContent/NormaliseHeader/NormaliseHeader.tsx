import { Half2Icon } from '@scissors/react-icons/Half2Icon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetNormalise } from './ButtonResetNormalise'
import { ButtonRemoveNormalise } from './ButtonRemoveNormalise'
import { useNormaliseStore } from '@stores/normalise'

export const NormaliseHeader=()=> {
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
