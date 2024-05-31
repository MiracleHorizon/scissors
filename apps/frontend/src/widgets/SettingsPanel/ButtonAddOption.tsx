'use client'

import { type HTMLAttributes, memo, type ReactNode } from 'react'
import { Button } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

interface Props extends Omit<HTMLAttributes<HTMLButtonElement>, 'color'>, MarginProps {
  label: string
  disabled?: boolean
  leadIcon?: ReactNode
  endIcon?: ReactNode
}

export const ButtonAddOption = memo(({ label, leadIcon, endIcon, disabled, ...props }: Props) => (
  <Button {...props} disabled={disabled} radius='large'>
    {leadIcon}
    {label}
    {endIcon}
  </Button>
))

ButtonAddOption.displayName = 'ButtonAddOption'
