'use client'

import { AccessibleIcon } from '@radix-ui/react-accessible-icon'

import type { IconProps } from './types'

export const AllSidesIcon = ({ label = 'all sides', ...props }: IconProps) => (
  <AccessibleIcon label={label}>
    <svg
      width='15'
      height='15'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.5 0.75L9.75 3H5.25L7.5 0.75ZM7.5 14.25L9.75 12H5.25L7.5 14.25ZM3 5.25L0.75 7.5L3 9.75V5.25ZM14.25 7.5L12 5.25V9.75L14.25 7.5Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
      />
    </svg>
  </AccessibleIcon>
)
