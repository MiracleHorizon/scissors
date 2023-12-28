'use client'

import { forwardRef } from 'react'
import { IconButton, type MarginProps, Tooltip } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'

export const ButtonDelete = forwardRef<HTMLButtonElement, Props>(
  ({ tooltipContent, disabled, ...props }, ref) => {
    const Button = (
      <IconButton {...props} disabled={disabled} ref={ref}>
        <TrashIcon width='24px' height='24px' />
      </IconButton>
    )

    if (!tooltipContent) {
      return Button
    }

    return (
      <Tooltip
        delayDuration={800}
        open={isTooltipOpen({
          content: tooltipContent,
          isParentDisabled: disabled
        })}
        content={tooltipContent}
      >
        {Button}
      </Tooltip>
    )
  }
)

ButtonDelete.displayName = 'ButtonDelete'

interface Props extends ButtonProps, MarginProps {
  tooltipContent?: string
  disabled?: boolean
  onClick?: VoidFunction
}
