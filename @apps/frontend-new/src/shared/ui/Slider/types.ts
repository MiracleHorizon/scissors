import type { NonEmptyArray } from '@/shared/model'
import type { CSSProperties, ReactNode } from 'react'

export type Props = {
  value: NonEmptyArray<number | null>
  defaultValue: NonEmptyArray<number>
  min: number
  max: number
  step?: number
  valueSign?: string
  disabled?: boolean
  allowFloat?: boolean
  maxFractionDigits?: number
  sliderStyle?: CSSProperties
  sliderClassName?: string
  minStepsBetweenThumbs?: number
  onValueChange: (value: number[]) => void
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
