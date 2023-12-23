'use client'

import { forwardRef } from 'react'
import { IconButton, type MarginProps } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'

import type { ButtonVariant } from '@lib/theme'

export const ButtonDelete = forwardRef<HTMLButtonElement, Props>(
  ({ variant, ...props }: Props, ref) => (
    <IconButton variant={variant ?? 'solid'} ref={ref} size='2' {...props}>
      <TrashIcon width='24px' height='24px' />
    </IconButton>
  )
)

ButtonDelete.displayName = 'ButtonDelete'

interface Props extends MarginProps {
  onClick: VoidFunction
  variant?: ButtonVariant
  disabled?: boolean
}
