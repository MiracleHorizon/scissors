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
  disabled,
  ...props
}: Props) {
  const isTooltipOpen = () => {
    if (!disabled) return

    return false
  }

  return (
    <Tooltip open={isTooltipOpen()} content={tooltipTitle ?? title}>
      <Button {...props} disabled={disabled} radius='large' onClick={onClick}>
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
