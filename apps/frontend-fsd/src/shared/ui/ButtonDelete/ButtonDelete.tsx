import { forwardRef } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { TrashIcon } from '@scissors/react-icons/TrashIcon'

import type { ButtonProps } from '@/entities/theme'

interface Props extends ButtonProps, MarginProps {
  tooltipDelay?: number
  tooltipContent?: string
  disabled?: boolean
}

export const ButtonDelete = forwardRef<HTMLButtonElement, Props>(
  (
    { tooltipDelay, tooltipContent, disabled, variant = 'outline', color = 'red', ...props },
    ref
  ) => {
    const Button = (
      <IconButton {...props} ref={ref} color={color} variant={variant} disabled={disabled}>
        <TrashIcon width='24px' height='24px' label='delete' />
      </IconButton>
    )

    if (!tooltipContent) {
      return Button
    }

    return (
      <Tooltip
        open={disabled ? false : undefined}
        delayDuration={tooltipDelay}
        content={tooltipContent}
      >
        {Button}
      </Tooltip>
    )
  }
)

ButtonDelete.displayName = 'ButtonDelete'
