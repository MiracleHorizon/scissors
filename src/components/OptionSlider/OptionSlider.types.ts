import type { ReactNode } from 'react'

export type Props = SliderProps & {
  valueSign?: string
  disabled?: boolean
} & (WithHeader | WithoutHeader)

interface WithHeader {
  title: string
  titleIcon?: ReactNode
  infoContent?: ReactNode
}

interface WithoutHeader {
  title?: never
  titleIcon?: never
  infoContent?: never
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
