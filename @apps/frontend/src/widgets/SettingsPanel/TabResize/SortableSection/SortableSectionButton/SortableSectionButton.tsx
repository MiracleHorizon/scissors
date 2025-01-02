import { memo, type ReactNode } from 'react'
import { IconButton, Tooltip } from '@radix-ui/themes'
import { clsx } from 'clsx'

import type { ButtonProps } from '@lib/theme'
import styles from './SortableSectionButton.module.css'

type Props = {
  icon: ReactNode
  tooltipContent: string
  isDisabled?: boolean
  isTooltipDisabled?: boolean
} & ButtonProps &
  Actions

type Actions = WithClick | WithListeners

interface WithClick {
  onClick: VoidFunction
  listeners?: never
}

// TODO: Listeners??
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
type Listeners = Record<string, Function>

interface WithListeners {
  listeners: Listeners | undefined
  onClick?: never
}

export const SortableSectionButton = memo(
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
  }: Props) => {
    const Button = (
      <IconButton
        disabled={isDisabled}
        variant={variant}
        color={color}
        size={size}
        radius={radius}
        onClick={onClick}
        className={clsx(isDisabled && styles.disabled)}
        {...listeners}
      >
        {icon}
      </IconButton>
    )

    if (!tooltipContent) {
      return Button
    }

    return (
      <Tooltip content={tooltipContent} open={isDisabled || isTooltipDisabled ? false : undefined}>
        {Button}
      </Tooltip>
    )
  }
)

SortableSectionButton.displayName = 'SortableSectionButton'
