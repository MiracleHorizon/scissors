import { type FC, memo, type ReactNode } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'

export const SortableSectionButton: FC<Props> = memo(
  ({
    icon,
    isDisabled,
    tooltipContent,
    isTooltipDisabled,
    size = '1',
    radius = 'large',
    color = 'gray',
    variant = 'surface',
    onClick,
    listeners
  }) => (
    <Tooltip
      content={tooltipContent}
      open={isTooltipOpen({
        isParentDisabled: isDisabled || isTooltipDisabled,
        content: tooltipContent
      })}
    >
      <IconButton
        disabled={isDisabled}
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        onClick={onClick}
        {...listeners}
      >
        {icon}
      </IconButton>
    </Tooltip>
  )
)

SortableSectionButton.displayName = 'SortableSectionButton'

type Props = ButtonProps &
  Actions & {
    icon: ReactNode
    tooltipContent: string
    isDisabled?: boolean
    isTooltipDisabled?: boolean
  }

type Actions = WithClick | WithListeners

interface WithClick {
  onClick: VoidFunction
  listeners?: never
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Listeners = Record<string, Function>

interface WithListeners {
  listeners: Listeners | undefined
  onClick?: never
}
