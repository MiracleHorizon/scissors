'use client'

import { forwardRef } from 'react'
import { IconButton, Tooltip, type MarginProps } from '@radix-ui/themes'

import { DiceSixIcon } from './icons/DiceSixIcon'
import type { ButtonProps } from '@lib/theme'

export const ButtonRandomize = forwardRef<HTMLButtonElement, Props>(
  ({ tooltipContent, onClick, size = '2', variant = 'outline', ...props }, ref) => {
    const buttonJSX = (
      <IconButton ref={ref} {...props} size={size} variant={variant} onClick={onClick}>
        <DiceSixIcon label='randomize' />
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
