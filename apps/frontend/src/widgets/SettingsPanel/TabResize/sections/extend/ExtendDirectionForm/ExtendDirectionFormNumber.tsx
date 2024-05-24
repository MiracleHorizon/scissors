import { MoveIcon } from '@scissors/react-icons/MoveIcon'

import { NumberInput } from '@components/NumberInput'
import { DEFAULT_EXTEND_INPUT_PROPS } from './constants'
import { useExtendStore } from '@stores/extend'

export function ExtendDirectionFormNumber() {
  const value = useExtendStore(state => state.extendValue)
  const setValue = useExtendStore(state => state.setExtendValue)

  return (
    <NumberInput
      {...DEFAULT_EXTEND_INPUT_PROPS}
      value={value}
      setValue={setValue}
      placeholder='Extend'
      icon={<MoveIcon label='extend value' />}
    />
  )
}
