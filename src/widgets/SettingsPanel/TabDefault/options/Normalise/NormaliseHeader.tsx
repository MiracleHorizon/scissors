'use client'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetNormalise } from './ButtonResetNormalise'
import { ButtonRemoveNormalise } from './ButtonRemoveNormalise'
import { useNormaliseStore } from '@stores/normalise'

export function NormaliseHeader() {
  const lower = useNormaliseStore(state => state.lower)
  const upper = useNormaliseStore(state => state.upper)

  return (
    <OptionSectionHeader title={`Normalise: ${lower} - ${upper}%`}>
      <>
        <ButtonResetNormalise />
        <ButtonRemoveNormalise />
      </>
    </OptionSectionHeader>
  )
}
