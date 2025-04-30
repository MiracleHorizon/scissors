import { AccessibleIcon } from '@radix-ui/react-accessible-icon'

import type { IconProps } from './types'

export const EyeOffIcon = ({ label = 'eye off', ...props }: IconProps) => (
  <AccessibleIcon label={label}>
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49' />
      <path d='M14.084 14.158a3 3 0 0 1-4.242-4.242' />
      <path d='M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143' />
      <path d='m2 2 20 20' />
    </svg>
  </AccessibleIcon>
)
