'use client'

import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'

export function ButtonRemoveOption({ tooltipTitle, disabled, onClick }: Props) {
  const isTooltipOpen = () => {
    if (!disabled) return

    return false
  }

  return (
    <Tooltip open={isTooltipOpen()} content={tooltipTitle}>
      <ButtonDelete disabled={disabled} onClick={onClick} />
    </Tooltip>
  )
}

interface Props {
  tooltipTitle: string
  onClick: VoidFunction
  disabled?: boolean
}
