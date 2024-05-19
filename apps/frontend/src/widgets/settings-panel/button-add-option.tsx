'use client'

import { memo, type ReactNode } from 'react'
import { Button } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

export const ButtonAddOption = memo(
  ({ label, onClick, leadIcon, endIcon, disabled, ...props }: Props) => (
    <Button {...props} disabled={disabled} radius='large' onClick={onClick}>
      {leadIcon}
      {label}
      {endIcon}
    </Button>
  )
)

ButtonAddOption.displayName = 'ButtonAddOption'

interface Props extends MarginProps {
  label: string
  onClick: VoidFunction
  disabled?: boolean
  leadIcon?: ReactNode
  endIcon?: ReactNode
}
