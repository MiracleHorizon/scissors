'use client'

import { forwardRef } from 'react'
import { IconButton, type MarginProps } from '@radix-ui/themes'

import { InfoCircledIcon } from '@ui/icons/InfoCircledIcon'
import type { Radius } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ButtonInfo = forwardRef<HTMLButtonElement, Props>(({ radius, ...props }, ref) => (
  <IconButton
    ref={ref}
    variant='ghost'
    size='1'
    radius={radius ?? 'large'}
    color='gray'
    data-accent-color='gray'
    {...props}
  >
    <InfoCircledIcon width='18px' height='18px' color='gray' />
  </IconButton>
))

ButtonInfo.displayName = 'ButtonInfo'

interface Props extends MarginProps, ClassNameProps {
  radius?: Radius
}
