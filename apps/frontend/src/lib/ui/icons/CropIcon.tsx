import { AccessibleIcon } from '@radix-ui/themes'
import type { SVGProps } from 'react'

import type { AccessibleIconProps } from '@lib/theme'

export const CropIcon = ({
  label = 'crop',
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
      <path d='M6 2v14a2 2 0 0 0 2 2h14' />
      <path d='M18 22V8a2 2 0 0 0-2-2H2' />
    </svg>
  </AccessibleIcon>
)
