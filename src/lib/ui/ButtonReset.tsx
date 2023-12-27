'use client'

import { memo } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import { ResetIcon } from '@radix-ui/react-icons'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ButtonReset = memo(({ tooltipContent, disabled, ...props }: Props) => (
  <Tooltip
    delayDuration={800}
    open={isTooltipOpen({
      content: tooltipContent,
      isParentDisabled: disabled
    })}
    content={tooltipContent}
  >
    <IconButton {...props} disabled={disabled}>
      <ResetIcon width='18px' height='18px' />
    </IconButton>
  </Tooltip>
))

ButtonReset.displayName = 'ButtonReset'

interface Props extends ButtonProps, ClassNameProps {
  tooltipContent: string
  onClick: VoidFunction
  disabled?: boolean
}
