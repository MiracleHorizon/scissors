import { RowSpacingIcon } from '@scissors/react-icons/RowSpacingIcon'
import { ColumnSpacingIcon } from '@scissors/react-icons/ColumnSpacingIcon'

import { NumberInput } from '@components/NumberInput'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from './constants'

export const ExtendDirectionFormAxis = () => {
  const axisX = useExtendStore(state => state.getXAxis())
  const axisY = useExtendStore(state => state.getYAxis())

  const setAxisX = useExtendStore(state => state.setXAxis)
  const setAxisY = useExtendStore(state => state.setYAxis)

  return (
    <>
      <NumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={axisX}
        setValue={setAxisX}
        placeholder='X'
        icon={<ColumnSpacingIcon label='extend x axis' />}
      />
      <NumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={axisY}
        setValue={setAxisY}
        placeholder='Y'
        icon={<RowSpacingIcon label='extend y axis' />}
      />
    </>
  )
}
