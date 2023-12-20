import { useCallback, useMemo } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Button, Flex, Popover } from '@radix-ui/themes'
import { DM_Mono as DMMono } from 'next/font/google'
import cn from 'classnames'

import { HexColorInput } from '@ui/HexColorInput'
import styles from './PalettePopover.module.css'

const dmMono = DMMono({
  subsets: ['latin'],
  weight: '500'
})

export function PalettePopover({ color, setColor, disabled }: Props) {
  const previewBoxStyle = useMemo(() => ({ backgroundColor: color }), [color])

  const onColorValueChange = useCallback((color: string) => setColor(color), [setColor])
  const onInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )

  return (
    <Popover.Root>
      <Popover.Trigger
        className={cn({
          [styles.disabled]: disabled
        })}
      >
        <Button
          color='gray'
          radius='large'
          variant='outline'
          disabled={disabled}
          className={cn(styles.button, dmMono.className)}
        >
          <div style={previewBoxStyle} className={cn(styles.previewBox)} />
          {color}
        </Button>
      </Popover.Trigger>

      <Popover.Content className={styles.content}>
        <Flex gap='3' direction='column' className='react-colorful-reassign'>
          <HexColorPicker
            color={color}
            className={styles.hexColorPicker}
            onChange={onColorValueChange}
          />
          <HexColorInput size='3' color={color} onChange={onInputValueChange} />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  color: string
  setColor: (color: string) => void
  disabled?: boolean
}
