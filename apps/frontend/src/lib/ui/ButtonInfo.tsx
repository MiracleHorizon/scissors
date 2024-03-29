'use client'

import { forwardRef } from 'react'
import { IconButton } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { InfoCircledIcon } from '@ui/icons/InfoCircledIcon'
import type { Radius } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ButtonInfo = forwardRef<HTMLButtonElement, Props>(
  ({ radius = 'large', ...props }, ref) => (
    <IconButton
      ref={ref}
      variant='ghost'
      size='1'
      color='gray'
      radius={radius}
      data-accent-color='gray'
      {...props}
    >
      <InfoCircledIcon width='18px' height='18px' color='gray' />
    </IconButton>
  )
)

ButtonInfo.displayName = 'ButtonInfo'

interface Props extends MarginProps, ClassNameProps {
  radius?: Radius
  onClick?: VoidFunction
}
