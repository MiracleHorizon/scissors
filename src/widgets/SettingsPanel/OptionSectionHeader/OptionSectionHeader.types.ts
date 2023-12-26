import type { PropsWithChildren, ReactNode } from 'react'
import type { MarginProps } from '@radix-ui/themes'

export type Props = PropsWithChildren<
  MarginProps & {
    title: string
    href?: string
    icon?: ReactNode
  }
>
