import { AccessibleIcon } from '@radix-ui/react-accessible-icon'

import type { IconProps } from './types'

export const ChevronRightIcon = ({ label = 'chevron right', ...props }: IconProps) => (
  <AccessibleIcon label={label}>
    <svg
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
      <path d='m9 18 6-6-6-6' />
    </svg>
  </AccessibleIcon>
)
