'use client'

import { forwardRef } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { TrashIcon } from '@scissors/react-icons/TrashIcon'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'

export const ButtonDelete = forwardRef<HTMLButtonElement, Props>(
  (
    { tooltipDelay, tooltipContent, disabled, variant = 'outline', color = 'red', ...props },
    ref
  ) => {
    const Button = (
      <IconButton {...props} color={color} variant={variant} disabled={disabled} ref={ref}>
        <TrashIcon width='24px' height='24px' label='delete' />
      </IconButton>
    )

    if (!tooltipContent) {
      return Button
    }

    return (
      <Tooltip
        delayDuration={tooltipDelay}
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
  tooltipDelay?: number
  tooltipContent?: string
  disabled?: boolean
  onClick?: VoidFunction
}
