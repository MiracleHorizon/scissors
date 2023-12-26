import type { ReactNode } from 'react'

export interface NavigationItemModel {
  label: string
  href: string
  tooltipContent: string
  icon: ReactNode
}
