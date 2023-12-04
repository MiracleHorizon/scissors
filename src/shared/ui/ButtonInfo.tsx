'use client'

import { forwardRef } from 'react'
import { IconButton, type MarginProps } from '@radix-ui/themes'
import { InfoCircledIcon } from '@radix-ui/react-icons'

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
