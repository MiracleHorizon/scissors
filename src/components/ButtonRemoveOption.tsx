'use client'

import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { isTooltipOpen } from '@helpers/isTooltipOpen'

export function ButtonRemoveOption({ tooltipTitle, disabled, onClick }: Props) {
  return (
    <Tooltip
      open={isTooltipOpen({
        content: tooltipTitle,
        isParentDisabled: disabled
      })}
      content={tooltipTitle}
    >
      <ButtonDelete disabled={disabled} onClick={onClick} />
    </Tooltip>
  )
}

interface Props {
  tooltipTitle: string
  onClick: VoidFunction
  disabled?: boolean
}
