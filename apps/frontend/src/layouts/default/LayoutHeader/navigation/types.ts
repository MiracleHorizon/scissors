import type { HTMLAttributeAnchorTarget, HTMLAttributes, ReactNode } from 'react'

export interface NavigationItemModel extends Omit<HTMLAttributes<HTMLAnchorElement>, 'href'> {
  label: string
  href: string
  icon?: ReactNode
  tooltipContent?: string
  target?: HTMLAttributeAnchorTarget
}
