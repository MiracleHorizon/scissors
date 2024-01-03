import type { InputHTMLAttributes, ReactNode } from 'react'

/* eslint no-unused-vars: 0 */
export interface Props extends InputAttributes {
  value: number | null
  setValue: (value: number | null) => void
  min: number
  max: number
  step: number
  icon?: ReactNode
}

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'min'
  | 'max'
  | 'step'
  | 'value'
  | 'type'
  | 'pattern'
  | 'color'
  | 'size'
  | 'onChange'
  | 'onKeyDown'
>
