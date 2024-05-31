import type { CSSProperties, ReactNode } from 'react'

import type { NonEmptyArray } from '@app-types/NonEmptyArray'

export type Props = SliderProps & {
  valueSign?: string
  disabled?: boolean
  allowFloat?: boolean
  maxFractionDigits?: number
  sliderStyle?: CSSProperties
  sliderClassName?: string
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
  value: NonEmptyArray<number | null>
  defaultValue: NonEmptyArray<number>
  min: number
  max: number
  onValueChange: (value: number[]) => void
  step?: number
  minStepsBetweenThumbs?: number
  cySelector?: string
}
