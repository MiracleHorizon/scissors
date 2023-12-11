'use client'

import { Button, type MarginProps } from '@radix-ui/themes'
import type { ReactNode } from 'react'

export function ButtonAddOption({ title, onClick, leadIcon, endIcon, disabled, ...props }: Props) {
  return (
    <Button {...props} disabled={disabled} radius='large' onClick={onClick}>
      {leadIcon}
      {title}
      {endIcon}
    </Button>
  )
}

interface Props extends MarginProps {
  title: string
  onClick: VoidFunction
  disabled?: boolean
  leadIcon?: ReactNode
  endIcon?: ReactNode
}
