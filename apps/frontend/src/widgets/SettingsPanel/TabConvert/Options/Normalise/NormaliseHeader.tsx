import { Half2Icon } from '@scissors/react-icons/Half2Icon'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetNormalise } from './ButtonResetNormalise'
import { ButtonRemoveNormalise } from './ButtonRemoveNormalise'
import { useNormaliseStore } from '@stores/normalise'

export function NormaliseHeader() {
  const lower = useNormaliseStore(state => state.lower)
  const upper = useNormaliseStore(state => state.upper)

  return (
    <OptionSectionHeader
      title={`Normalise: ${lower} - ${upper}%`}
      icon={<Half2Icon width='18px' height='18px' label='normalisation' />}
    >
      <>
        <ButtonResetNormalise />
        <ButtonRemoveNormalise />
      </>
    </OptionSectionHeader>
  )
}
