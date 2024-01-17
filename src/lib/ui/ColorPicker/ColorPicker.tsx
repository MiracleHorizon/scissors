'use client'

import dynamic from 'next/dynamic'
import { Button, Flex, Popover, Text } from '@radix-ui/themes'
import { DM_Mono as DMMono } from 'next/font/google'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { ColorSwatch } from '@ui/ColorSwatch'
import type { TextSize } from '@lib/theme'
import styles from './ColorPicker.module.css'

const dmMono = DMMono({
  subsets: ['latin'],
  weight: '500'
})

const ColorPickerContent = dynamic(
  () => import('./ColorPickerContent').then(mod => mod.ColorPickerContent),
  { ssr: false }
)

export const ColorPicker: FC<Props> = ({
  color,
  setColor,
  triggerLabel,
  triggerLabelSize = '3',
  disabled
}) => (
  <Popover.Root>
    <Popover.Trigger
      className={clsx(styles.triggerRoot, {
        [styles.disabled]: disabled
      })}
    >
      <Flex direction='column' gap='1'>
        {triggerLabel && <Text size={triggerLabelSize}>{triggerLabel}</Text>}

        <Button
          color='gray'
          radius='large'
          variant='outline'
          disabled={disabled}
          className={clsx(styles.button, dmMono.className)}
        >
          <ColorSwatch color={color} />
          {color}
        </Button>
      </Flex>
    </Popover.Trigger>

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
