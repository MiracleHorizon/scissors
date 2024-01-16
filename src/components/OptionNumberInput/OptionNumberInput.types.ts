import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

/* eslint no-unused-vars: 0 */
export interface Props extends InputAttributes {
  value: number | null
  setValue: (value: number | null) => void
  min: number
  max: number
  step: number
  label?: string
  icon?: ReactNode
}

export type LabelProps = PropsWithChildren<{
  id: string
  label: string
}>

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
