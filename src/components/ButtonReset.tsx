'use client'

import { Button, IconButton, Tooltip } from '@radix-ui/themes'
import { ResetIcon } from '@radix-ui/react-icons'

import { isTooltipOpen } from '@helpers/isTooltipOpen'

export function ButtonReset({ title, tooltipTitle, disabled, onClick }: Props) {
  return (
    <Tooltip
      delayDuration={900}
      open={isTooltipOpen({
        content: tooltipTitle,
        isParentDisabled: disabled
      })}
      content={tooltipTitle}
    >
      {title ? (
        <Button size='2' variant='outline' disabled={disabled} onClick={onClick}>
          {title}
          <ResetIcon width='16px' height='16px' />
        </Button>
      ) : (
        <IconButton variant='outline' disabled={disabled} size='2' onClick={onClick}>
          <ResetIcon width='18px' height='18px' />
        </IconButton>
      )}
    </Tooltip>
  )
}

interface Props {
  tooltipTitle: string
  onClick: VoidFunction
  title?: string
  disabled?: boolean
}
