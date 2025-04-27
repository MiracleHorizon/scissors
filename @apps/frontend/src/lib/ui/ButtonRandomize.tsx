import { forwardRef } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { ShuffleIcon } from '@scissors/react-icons/ShuffleIcon'

import type { ButtonProps } from '@lib/theme'

interface Props extends ButtonProps, MarginProps {
  onClick: VoidFunction
  tooltipContent?: string
}

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
