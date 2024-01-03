import type { ReactNode } from 'react'

import { DirectionForm } from './DirectionForm'
import { OptionNumberInput, type OptionNumberInputProps } from '@components/OptionNumberInput'

export const DirectionFormAxis = ({
  xAxisValue,
  yAxisValue,
  setAxisX,
  setAxisY,
  iconX,
  iconY,
  ...inputProps
}: Props) => (
  <DirectionForm columns='2'>
    <OptionNumberInput
      {...inputProps}
      value={xAxisValue}
      setValue={setAxisX}
      placeholder='X'
      icon={iconX}
    />
    <OptionNumberInput
      {...inputProps}
      value={yAxisValue}
      setValue={setAxisY}
      placeholder='Y'
      icon={iconY}
    />
  </DirectionForm>
)

/* eslint-disable no-unused-vars */
interface Props extends Pick<OptionNumberInputProps, 'min' | 'max' | 'step'> {
  xAxisValue: number | null
  yAxisValue: number | null
  setAxisX: (value: number | null) => void
  setAxisY: (value: number | null) => void
  iconX: ReactNode
  iconY: ReactNode
}
