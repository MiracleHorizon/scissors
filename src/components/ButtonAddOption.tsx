'use client'

import { Button, Tooltip } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import type { MarginProps } from '@libs/radix'

export function ButtonAddOption({
  title,
  tooltipTitle,
  onClick,
  leadIcon,
  endIcon,
  ...props
}: Props) {
  return (
    <Tooltip content={tooltipTitle ?? title}>
      <Button {...props} radius='large' onClick={onClick}>
        {leadIcon}
        {title}
        {endIcon}
      </Button>
    </Tooltip>
  )
}

interface Props extends MarginProps {
  title: string
  onClick: VoidFunction
  tooltipTitle?: string
  disabled?: boolean
  leadIcon?: ReactNode
  endIcon?: ReactNode
}
