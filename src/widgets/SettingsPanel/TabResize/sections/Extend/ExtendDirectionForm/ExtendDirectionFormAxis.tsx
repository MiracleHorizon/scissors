import { RowSpacingIcon } from '@ui/icons/RowSpacingIcon'
import { ColumnSpacingIcon } from '@ui/icons/ColumnSpacingIcon'
import { OptionNumberInput } from '@components/OptionNumberInput'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'

export function ExtendDirectionFormAxis() {
  const axisX = useExtendStore(state => state.getXAxis())
  const axisY = useExtendStore(state => state.getYAxis())

  const setAxisX = useExtendStore(state => state.setXAxis)
  const setAxisY = useExtendStore(state => state.setYAxis)

  return (
    <>
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={axisX}
        setValue={setAxisX}
        placeholder='X'
        icon={<ColumnSpacingIcon label='extend x axis' />}
      />
      <OptionNumberInput
        {...DEFAULT_EXTEND_INPUT_PROPS}
        value={axisY}
        setValue={setAxisY}
        placeholder='Y'
        icon={<RowSpacingIcon label='extend y axis' />}
      />
    </>
  )
}
