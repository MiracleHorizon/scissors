import { AccessibleIcon } from '@radix-ui/themes'
import type { SVGProps } from 'react'

import type { AccessibleIconProps } from '@lib/theme'

export const CameraOffIcon = ({
  label = 'camera off',
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
      <line x1='2' x2='22' y1='2' y2='22' />
      <path d='M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16' />
      <path d='M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5' />
      <path d='M14.121 15.121A3 3 0 1 1 9.88 10.88' />
    </svg>
  </AccessibleIcon>
)
