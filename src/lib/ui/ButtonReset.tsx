'use client'

import { memo } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import { ResetIcon } from '@radix-ui/react-icons'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ButtonReset = memo(({ tooltipTitle, disabled, ...props }: Props) => (
  <Tooltip
    delayDuration={800}
    open={isTooltipOpen({
      content: tooltipTitle,
      isParentDisabled: disabled
    })}
    content={tooltipTitle}
  >
    <IconButton {...props} disabled={disabled}>
      <ResetIcon width='18px' height='18px' />
    </IconButton>
  </Tooltip>
))

ButtonReset.displayName = 'ButtonReset'

interface Props extends ButtonProps, ClassNameProps {
  tooltipTitle: string
  onClick: VoidFunction
  disabled?: boolean
}
