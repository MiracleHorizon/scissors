import { AccessibleIcon } from '@radix-ui/react-accessible-icon'

import type { IconProps } from './types'

export const BotIcon = ({ label = 'bot', ...props }: IconProps) => (
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
      <path d='M12 8V4H8' />
      <rect width='16' height='12' x='4' y='8' rx='2' />
      <path d='M2 14h2' />
      <path d='M20 14h2' />
      <path d='M15 13v2' />
      <path d='M9 13v2' />
    </svg>
  </AccessibleIcon>
)
