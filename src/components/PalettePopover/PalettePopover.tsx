import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import { Button, Flex, Popover, Text } from '@radix-ui/themes'
import { DM_Mono as DMMono } from 'next/font/google'
import { clsx } from 'clsx'

import type { TextSize } from '@lib/theme'
import styles from './PalettePopover.module.css'

const PalettePopoverContent = dynamic(
  () => import('./PalettePopoverContent').then(mod => mod.PalettePopoverContent),
  { ssr: false }
)

const dmMono = DMMono({
  subsets: ['latin'],
  weight: '500'
})

export function PalettePopover({
  color,
  setColor,
  triggerLabel,
  triggerLabelSize,
  disabled
}: Props) {
  const previewBoxStyle = useMemo(() => ({ backgroundColor: color }), [color])

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx({
          [styles.disabled]: disabled
        })}
      >
        <Flex direction='column' gap='1'>
          {triggerLabel && <Text size={triggerLabelSize ?? '3'}>{triggerLabel}</Text>}
          <Button
            color='gray'
            radius='large'
            variant='outline'
            disabled={disabled}
            className={clsx(styles.button, dmMono.className)}
          >
            <div style={previewBoxStyle} className={styles.previewBox} />
            {color}
          </Button>
        </Flex>
      </Popover.Trigger>

      <PalettePopoverContent color={color} setColor={setColor} />
    </Popover.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  color: string
  setColor: (color: string) => void
  triggerLabel?: string
  triggerLabelSize?: TextSize
  disabled?: boolean
}
