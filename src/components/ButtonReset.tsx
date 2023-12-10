'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { ResetIcon } from '@radix-ui/react-icons'

import { isTooltipOpen } from '@helpers/isTooltipOpen'

export function ButtonReset({ tooltipTitle, disabled, onClick }: Props) {
  return (
    <Tooltip
      delayDuration={900}
      open={isTooltipOpen({
        content: tooltipTitle,
        isParentDisabled: disabled
      })}
      content={tooltipTitle}
    >
      <IconButton variant='solid' disabled={disabled} size='2' onClick={onClick}>
        <ResetIcon width='18px' height='18px' />
      </IconButton>
    </Tooltip>
  )
}

interface Props {
  tooltipTitle: string
  onClick: VoidFunction
  disabled?: boolean
}
