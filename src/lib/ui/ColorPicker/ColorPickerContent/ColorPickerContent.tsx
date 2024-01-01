import { useCallback } from 'react'
import { Flex, Popover } from '@radix-ui/themes'
import { HexColorPicker } from 'react-colorful'

import { ButtonClipboardCopy } from '@ui/ButtonClipboardCopy'
import { HexColorInput } from '../HexColorInput'
import styles from './ColorPickerContent.module.css'

export function ColorPickerContent({ color, setColor }: Props) {
  const onColorValueChange = useCallback((color: string) => setColor(color), [setColor])
  const onHexInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )

  return (
    <Popover.Content size='1' className={styles.root}>
      <Flex gap='3' direction='column'>
        <HexColorPicker
          color={color}
          className={styles.reactColorfulColorPicker}
          onChange={onColorValueChange}
        />
        <Flex justify='between' gap='1' width='100%'>
          <HexColorInput size='2' color={color} onChange={onHexInputValueChange} />
          <ButtonClipboardCopy copyValue={color} size='2' variant='outline' />
        </Flex>
      </Flex>
    </Popover.Content>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  color: string
  setColor: (color: string) => void
}
