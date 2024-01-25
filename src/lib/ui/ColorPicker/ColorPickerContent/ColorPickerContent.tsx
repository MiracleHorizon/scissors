import { useCallback } from 'react'
import { Flex, Popover } from '@radix-ui/themes'
import { HexColorPicker } from 'react-colorful'

import { ButtonClipboardCopy } from '@ui/ButtonClipboardCopy'
import { ButtonRandomize } from '@ui/ButtonRandomize'
import { HexColorInput } from '../HexColorInput'
import { getRandomHexColor } from '@lib/helpers/colors'
import styles from './ColorPickerContent.module.css'

export function ColorPickerContent({ color, setColor }: Props) {
  const handleValueChange = useCallback((color: string) => setColor(color), [setColor])
  const handleInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )
  const handleRandomize = () => setColor(getRandomHexColor())

  return (
    <Popover.Content size='1' className={styles.root}>
      <Flex gap='3' direction='column'>
        <HexColorPicker
          color={color}
          className={styles.reactColorfulColorPicker}
          onChange={handleValueChange}
        />

        <Flex justify='between' gap='1' width='100%'>
          <HexColorInput size='2' color={color} onChange={handleInputValueChange} />
          <ButtonClipboardCopy copyValue={color} size='2' variant='outline' />
          <ButtonRandomize variant='solid' onClick={handleRandomize} />
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
