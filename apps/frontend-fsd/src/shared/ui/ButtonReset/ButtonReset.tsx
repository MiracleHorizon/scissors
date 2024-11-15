import { forwardRef } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

import { ResetIcon } from '@scissors/react-icons/ResetIcon'

import type { ButtonProps } from '@/entities/theme'

interface Props extends ButtonProps {
  tooltipDelay?: number
  tooltipContent?: string
  disabled?: boolean
}

export const ButtonReset = forwardRef<HTMLButtonElement, Props>(
  (
    { tooltipDelay, tooltipContent, disabled, variant = 'outline', color = 'red', ...props },
    ref
  ) => {
    const Button = (
      <IconButton
        {...props}
        ref={ref}
        color={color}
        variant={variant}
        disabled={disabled}
        data-id='button-reset'
      >
        <ResetIcon width='18px' height='18px' />
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

ButtonReset.displayName = 'ButtonReset'
