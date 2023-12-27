import type { PropsWithChildren, ReactNode } from 'react'
import type { MarginProps } from '@radix-ui/themes'

export type Props = MarginProps &
  Status &
  PropsWithChildren<{
    title: string
    href?: string
    icon?: ReactNode
  }>

type Status = WithBeta | WithNew

// Status for badges
type WithBeta = {
  isBeta?: boolean
  isNew?: never
}

type WithNew = {
  isNew?: boolean
  isBeta?: never
}
