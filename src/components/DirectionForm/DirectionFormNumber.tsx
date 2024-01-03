import type { ReactNode } from 'react'

import { DirectionForm } from './DirectionForm'
import { OptionNumberInput, type OptionNumberInputProps } from '@components/OptionNumberInput'

export const DirectionFormNumber = (props: Props) => (
  <DirectionForm columns='1'>
    <OptionNumberInput {...props} />
  </DirectionForm>
)

interface Props extends Omit<OptionNumberInputProps, 'placeholder' | 'icon'> {
  placeholder: string
  icon: ReactNode
}
