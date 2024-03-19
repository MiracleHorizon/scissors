'use client'

import { forwardRef } from 'react'
import { IconButton, type MarginProps, Tooltip } from '@radix-ui/themes'

import { ShuffleIcon } from './icons/ShuffleIcon'
import type { ButtonProps } from '@lib/theme'

export const ButtonRandomize = forwardRef<HTMLButtonElement, Props>(
  ({ tooltipContent, onClick, size = '2', variant = 'outline', ...props }, ref) => {
    const buttonJSX = (
      <IconButton ref={ref} {...props} size={size} variant={variant} onClick={onClick}>
        <ShuffleIcon width='18' height='18' label='randomize settings' />
      </IconButton>
    )

    if (!tooltipContent) {
      return buttonJSX
    }

    return <Tooltip content={tooltipContent}>{buttonJSX}</Tooltip>
  }
)

ButtonRandomize.displayName = 'ButtonRandomize'

interface Props extends ButtonProps, MarginProps {
  onClick: VoidFunction
  tooltipContent?: string
}
