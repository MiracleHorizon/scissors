import { useCallback } from 'react'
import { Flex, Popover } from '@radix-ui/themes'
import { HexColorPicker } from 'react-colorful'

import { ButtonClipboardCopy } from '@ui/ButtonClipboardCopy'
import { ButtonRandomize } from '@ui/ButtonRandomize'
import { EyeDropper } from '@ui/EyeDropper'
import { HexColorInput } from './HexColorInput'
import { ColorPickerSwatches } from './ColorPickerSwatches'
import { useEyeDropper } from '@hooks/useEyeDropper'
import { getRandomHexColor } from '@lib/helpers/colors'
import styles from './ColorPickerContent.module.css'

export function ColorPickerContent({ color, setColor }: Props) {
  const { isSupported: isEyeDropperSupported } = useEyeDropper()

  const handleValueChange = useCallback((color: string) => setColor(color), [setColor])
  const handleInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )
  const handleRandomize = () => setColor(getRandomHexColor())

  return (
    <Popover.Content size='1' width='210px' className={styles.root}>
      <Flex gap='3' direction='column'>
        <HexColorPicker
          color={color}
          className={styles.reactColorfulColorPicker}
          onChange={handleValueChange}
        />

        <Flex justify='between' gap='1' width='100%'>
          <HexColorInput size='2' color={color} onChange={handleInputValueChange} />

          {isEyeDropperSupported && <EyeDropper color='gray' setColor={setColor} />}
          <ButtonClipboardCopy copyValue={color} size='2' variant='outline' />
          <ButtonRandomize
            color='gray'
            tooltipContent='Randomize Color'
            onClick={handleRandomize}
          />
        </Flex>

        <ColorPickerSwatches setColor={setColor} />
      </Flex>
    </Popover.Content>
  )
}

/* eslint no-unused-vars: 0 */
interface Props {
  color: string
  setColor: (color: string) => void
}
