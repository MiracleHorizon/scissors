import { memo, type ReactNode } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'

import { isTooltipOpen } from '@helpers/isTooltipOpen'
import type { ButtonProps } from '@lib/theme'

export const SortableSectionButton = memo(
  ({
    icon,
    tooltipContent,
    tooltipDisabled,
    isDisabled,
    size = '1',
    radius = 'large',
    color = 'gray',
    variant = 'surface',
    onClick,
    listeners
  }: Props) => (
    <Tooltip
      content={tooltipContent}
      open={isTooltipOpen({
        isParentDisabled: tooltipDisabled,
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
    tooltipDisabled?: boolean
    isDisabled?: boolean
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
