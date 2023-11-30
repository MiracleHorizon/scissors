import type { ReactNode } from 'react'

export type Props = SliderProps & {
  disabled?: boolean
} & (WithHeader | WithoutHeader)

interface WithHeader {
  title: string
  titleIcon?: ReactNode
  infoContent?: ReactNode
  valueSign?: string
}

interface WithoutHeader {
  title?: never
  titleIcon?: never
  infoContent?: never
  valueSign?: never
}

/* eslint no-unused-vars: 0 */
interface SliderProps {
  value: number[]
  defaultValue: number[]
  min: number
  max: number
  onValueChange: (value: number[]) => void
  step?: number
  minStepsBetweenThumbs?: number
}
