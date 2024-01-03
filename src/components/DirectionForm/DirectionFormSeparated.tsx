import type { ReactNode } from 'react'

import { DirectionForm } from './DirectionForm'
import { OptionNumberInput, type OptionNumberInputProps } from '@components/OptionNumberInput'

export const DirectionFormSeparated = ({
  top,
  bottom,
  left,
  right,
  setTop,
  setBottom,
  setLeft,
  setRight,
  icons,
  ...inputProps
}: Props) => (
  <DirectionForm columns='2'>
    <OptionNumberInput
      {...inputProps}
      value={left}
      setValue={setLeft}
      placeholder='Left'
      icon={icons.left}
    />
    <OptionNumberInput
      {...inputProps}
      value={right}
      setValue={setRight}
      placeholder='Right'
      icon={icons.right}
    />
    <OptionNumberInput
      {...inputProps}
      value={top}
      setValue={setTop}
      placeholder='Top'
      icon={icons.top}
    />
    <OptionNumberInput
      {...inputProps}
      value={bottom}
      setValue={setBottom}
      placeholder='Bottom'
      icon={icons.bottom}
    />
  </DirectionForm>
)

/* eslint-disable no-unused-vars */
export interface Props extends Pick<OptionNumberInputProps, 'min' | 'max' | 'step'> {
  top: number | null
  bottom: number | null
  left: number | null
  right: number | null
  setTop: (top: number | null) => void
  setBottom: (bottom: number | null) => void
  setLeft: (left: number | null) => void
  setRight: (right: number | null) => void
  icons: {
    left: ReactNode
    right: ReactNode
    top: ReactNode
    bottom: ReactNode
  }
}
