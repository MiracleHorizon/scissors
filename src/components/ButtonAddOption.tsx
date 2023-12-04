'use client'

import { Button, type MarginProps, Tooltip } from '@radix-ui/themes'
import type { ReactNode } from 'react'

import { isTooltipOpen } from '@helpers/isTooltipOpen'

export function ButtonAddOption({
  title,
  tooltipTitle,
  onClick,
  leadIcon,
  endIcon,
  disabled,
  ...props
}: Props) {
  return (
    <Tooltip
      open={isTooltipOpen({
        content: tooltipTitle,
        isParentDisabled: disabled
      })}
      content={tooltipTitle ?? title}
    >
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
