import { AccessibleIcon } from '@radix-ui/themes'
import type { SVGProps } from 'react'

import type { AccessibleIconProps } from '@lib/theme'

export const DiceSixIcon = ({
  label = 'dice six',
  ...props
}: SVGProps<SVGSVGElement> & AccessibleIconProps) => (
  <AccessibleIcon label={label}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <rect strokeWidth='1.3' width='18' height='18' x='3' y='3' rx='2' ry='2' />
      <path d='M16 8h.01' />
      <path d='M16 12h.01' />
      <path d='M16 16h.01' />
      <path d='M8 8h.01' />
      <path d='M8 12h.01' />
      <path d='M8 16h.01' />
    </svg>
  </AccessibleIcon>
)
