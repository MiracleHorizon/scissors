import type { InputHTMLAttributes, PropsWithChildren, ReactNode } from 'react'

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

export type LabelProps = PropsWithChildren<{
  id: string
  label: string
}>

type InputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'min' | 'max' | 'value' | 'type' | 'pattern' | 'color' | 'size' | 'onChange' | 'onKeyDown'
>
