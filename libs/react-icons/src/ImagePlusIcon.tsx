'use client'

import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import type { FC } from 'react'

import type { IconProps } from './types'

export const ImagePlusIcon: FC<IconProps> = ({ label = 'image plus', ...props }) => (
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
      <path d='M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7' />
      <line x1='16' x2='22' y1='5' y2='5' />
      <line x1='19' x2='19' y1='2' y2='8' />
      <circle cx='9' cy='9' r='2' />
      <path d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21' />
    </svg>
  </AccessibleIcon>
)
