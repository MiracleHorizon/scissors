'use client'

import { MoveIcon } from '@ui/icons/MoveIcon'
import { OptionNumberInput } from '@components/OptionNumberInput'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'

export function ExtendDirectionsFormNumber() {
  const value = useExtendStore(state => state.extendValue)
  const setExtendValue = useExtendStore(state => state.setExtendValue)
  const resetExtendValue = useExtendStore(state => state.resetExtendValue)

  return (
    <OptionNumberInput
      {...DEFAULT_EXTEND_INPUT_PROPS}
      value={value}
      setValue={setExtendValue}
      resetValue={resetExtendValue}
      placeholder='Extend'
      icon={<MoveIcon />}
    />
  )
}
