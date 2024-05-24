import type { InputHTMLAttributes, ReactNode } from 'react'

/* eslint no-unused-vars: 0 */
export interface Props extends InputAttributes {
  value: number | null
  setValue: (value: number | null) => void
  min: number
  max: number
  label?: string
  icon?: ReactNode
  allowFloat?: boolean
  maxFractionDigits?: number
}

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'min'
  | 'max'
  | 'value'
  | 'type'
  | 'pattern'
  | 'color'
  | 'size'
  | 'onChange'
  | 'onKeyDown'
  | 'defaultValue'
>
