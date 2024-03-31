import type { SVGProps } from 'react'

export interface AccessibleIconProps {
  label?: string
}

export type IconProps = SVGProps<SVGSVGElement> & AccessibleIconProps
