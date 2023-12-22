'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { ResetIcon } from '@radix-ui/react-icons'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonVariant } from '@lib/theme'

export function ButtonReset({ tooltipTitle, disabled, variant, onClick }: Props) {
  return (
    <Tooltip
      delayDuration={900}
      open={isTooltipOpen({
        content: tooltipTitle,
        isParentDisabled: disabled
      })}
      content={tooltipTitle}
    >
      <IconButton variant={variant} disabled={disabled} onClick={onClick}>
        <ResetIcon width='18px' height='18px' />
      </IconButton>
    </Tooltip>
  )
}

interface Props {
  tooltipTitle: string
  onClick: VoidFunction
  disabled?: boolean
  variant?: ButtonVariant
}
