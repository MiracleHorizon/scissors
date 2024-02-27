'use client'

import { Popover } from '@radix-ui/themes'
import type { FC } from 'react'

import { ColorPickerTrigger } from './ColorPickerTrigger'
import { ColorPickerContent } from './ColorPickerContent'
import type { TextSize } from '@lib/theme'

export const ColorPicker: FC<Props> = ({
  color,
  setColor,
  triggerLabel,
  triggerLabelSize = '3',
  disabled
}) => (
  <Popover.Root>
    <ColorPickerTrigger
      color={color}
      label={triggerLabel}
      labelSize={triggerLabelSize}
      disabled={disabled}
    />
    <ColorPickerContent color={color} setColor={setColor} />
  </Popover.Root>
)

/* eslint no-unused-vars: 0 */
interface Props {
  color: string
  setColor: (color: string) => void
  triggerLabel?: string
  triggerLabelSize?: TextSize
  disabled?: boolean
}
