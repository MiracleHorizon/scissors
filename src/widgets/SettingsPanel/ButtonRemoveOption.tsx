'use client'

import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { isTooltipOpen } from '@helpers/isTooltipOpen'

export function ButtonRemoveOption({ tooltipContent, disabled, onClick }: Props) {
  return (
    <Tooltip
      open={isTooltipOpen({
        content: tooltipContent,
        isParentDisabled: disabled
      })}
      content={tooltipContent}
    >
      <ButtonDelete disabled={disabled} onClick={onClick} />
    </Tooltip>
  )
}

interface Props {
  tooltipContent: string
  onClick: VoidFunction
  disabled?: boolean
}
