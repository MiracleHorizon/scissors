'use client'

import { forwardRef } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

import { ResetIcon } from '@ui/icons/ResetIcon'
import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ButtonReset = forwardRef<HTMLButtonElement, Props>(
  ({ tooltipContent, disabled, variant = 'outline', color = 'red', ...props }, ref) => (
    <Tooltip
      delayDuration={500}
      open={isTooltipOpen({
        content: tooltipContent,
        isParentDisabled: disabled
      })}
      content={tooltipContent}
    >
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
    </Tooltip>
  )
)

ButtonReset.displayName = 'ButtonReset'

interface Props extends ButtonProps, ClassNameProps {
  tooltipContent: string
  onClick?: VoidFunction
  disabled?: boolean
}
