import { AccessibleIcon } from '@radix-ui/react-accessible-icon'

import type { IconProps } from './types'

export const RatioIcon = ({ label = 'aspect ratio', ...props }: IconProps) => (
  <AccessibleIcon label={label}>
    <svg
      xmlns='http://www.w3.org/2000/svg'
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
      <rect width='12' height='20' x='6' y='2' rx='2' />
      <rect width='20' height='12' x='2' y='6' rx='2' />
    </svg>
  </AccessibleIcon>
)
