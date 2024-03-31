'use client'

import { AccessibleIcon } from '@radix-ui/react-accessible-icon'
import type { FC } from 'react'

import type { IconProps } from './types'

export const FileIcon: FC<IconProps> = ({ label = 'file', ...props }) => (
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
      <path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z' />
      <path d='M14 2v4a2 2 0 0 0 2 2h4' />
    </svg>
  </AccessibleIcon>
)
