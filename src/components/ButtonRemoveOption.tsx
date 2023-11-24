'use client'

import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'

export function ButtonRemoveOption({ tooltipTitle, isTooltipOpen, disabled, onClick }: Props) {
  return (
    <Tooltip open={isTooltipOpen} content={tooltipTitle}>
      <ButtonDelete disabled={disabled} onClick={onClick} />
    </Tooltip>
  )
}

interface Props {
  tooltipTitle: string
  onClick: VoidFunction
  isTooltipOpen?: boolean
  disabled?: boolean
}
