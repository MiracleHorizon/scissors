'use client'

import { MoveIcon } from '@ui/icons/MoveIcon'
import { DirectionFormNumber } from '@components/DirectionForm'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'
import { useExtendStore } from '@stores/extend'

export function ExtendDirectionFormNumber() {
  const value = useExtendStore(state => state.extendValue)
  const setValue = useExtendStore(state => state.setExtendValue)

  return (
    <DirectionFormNumber
      {...DEFAULT_EXTEND_INPUT_PROPS}
      value={value}
      setValue={setValue}
      placeholder='Extend'
      icon={<MoveIcon />}
    />
  )
}
