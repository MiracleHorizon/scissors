import type { ReactNode } from 'react'

export interface Props extends SliderProps {
  title: string
  titleIcon?: ReactNode
  disabled?: boolean
  infoContent?: ReactNode
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
