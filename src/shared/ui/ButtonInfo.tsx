'use client'

import { forwardRef } from 'react'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { IconButton } from '@radix-ui/themes'

import type { MarginProps } from '@libs/radix'

export const ButtonInfo = forwardRef<HTMLButtonElement, MarginProps>((props, ref) => (
  <IconButton
    ref={ref}
    variant='ghost'
    size='1'
    radius='large'
    color='gray'
    data-accent-color='gray'
    {...props}
  >
    <InfoCircledIcon width='18px' height='18px' color='gray' />
  </IconButton>
))

ButtonInfo.displayName = 'ButtonInfo'
