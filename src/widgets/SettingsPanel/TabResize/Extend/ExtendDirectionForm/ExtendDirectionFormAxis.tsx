'use client'

import { RowSpacingIcon } from '@ui/icons/RowSpacingIcon'
import { ColumnSpacingIcon } from '@ui/icons/ColumnSpacingIcon'
import { DirectionFormAxis } from '@components/DirectionForm'
import { useExtendStore } from '@stores/extend'
import { DEFAULT_EXTEND_INPUT_PROPS } from '@server/Sharp'

export function ExtendDirectionFormAxis() {
  const axisX = useExtendStore(state => state.getXAxis())
  const axisY = useExtendStore(state => state.getYAxis())

  const setAxisX = useExtendStore(state => state.setXAxis)
  const setAxisY = useExtendStore(state => state.setYAxis)

  return (
    <DirectionFormAxis
      {...DEFAULT_EXTEND_INPUT_PROPS}
      xAxisValue={axisX}
      yAxisValue={axisY}
      setAxisX={setAxisX}
      setAxisY={setAxisY}
      iconX={<ColumnSpacingIcon label='extend x axis' />}
      iconY={<RowSpacingIcon label='extend y axis' />}
    />
  )
}
