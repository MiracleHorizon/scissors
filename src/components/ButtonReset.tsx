'use client'

import { Button, IconButton, Tooltip } from '@radix-ui/themes'
import { ResetIcon } from '@radix-ui/react-icons'

export function ButtonReset({ title, tooltipTitle, disabled, onClick }: Props) {
  const isTooltipOpen = () => {
    if (!disabled) return

    return false
  }

  return (
    <Tooltip delayDuration={900} open={isTooltipOpen()} content={tooltipTitle}>
      {title ? (
        <Button variant='outline' disabled={disabled} size='2' onClick={onClick}>
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
