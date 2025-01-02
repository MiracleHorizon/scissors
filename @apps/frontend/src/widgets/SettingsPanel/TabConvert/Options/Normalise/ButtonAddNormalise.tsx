import { useCallback } from 'react'

import { Half2Icon } from '@scissors/react-icons/Half2Icon'

import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useNormaliseStore } from '@stores/normalise'

export const ButtonAddNormalise = () => {
  const addNormalise = useNormaliseStore(state => state.add)

  const handleAddNormalise = useCallback(() => addNormalise(), [addNormalise])

  return (
    <ButtonAddOption
      label='Add Normalisation'
      leadIcon={<Half2Icon width='18px' height='18px' label='add normalisation' />}
      data-cy='button-add-normalise'
      onClick={handleAddNormalise}
    />
  )
}
