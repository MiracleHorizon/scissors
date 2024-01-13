import { MoveIcon } from '@ui/icons/MoveIcon'
import { OptionNumberInput } from '@components/OptionNumberInput'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'
import { useExtendStore } from '@stores/extend'

export function ExtendDirectionFormNumber() {
  const value = useExtendStore(state => state.extendValue)
  const setValue = useExtendStore(state => state.setExtendValue)

  return (
    <OptionNumberInput
      {...DEFAULT_EXTEND_INPUT_PROPS}
      value={value}
      setValue={setValue}
      placeholder='Extend'
      icon={<MoveIcon label='extend value' />}
    />
  )
}
