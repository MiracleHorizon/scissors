import { useCallback } from 'react'
import { Flex, Popover } from '@radix-ui/themes'
import { HexColorPicker } from 'react-colorful'

import { HexColorInput } from '@ui/HexColorInput'
import styles from './PalettePopoverContent.module.css'

export function PalettePopoverContent({ color, setColor }: Props) {
  const onColorValueChange = useCallback((color: string) => setColor(color), [setColor])
  const onInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )

  return (
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
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  color: string
  setColor: (color: string) => void
}
