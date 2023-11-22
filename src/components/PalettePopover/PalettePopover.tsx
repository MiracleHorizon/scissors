import { useCallback, useMemo } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Box, Button, Flex, Popover, Tooltip } from '@radix-ui/themes'

import { HexColorInput } from '@ui/HexColorInput'
import { themeColor } from '@shared/theme'
import styles from './PalettePopover.module.css'

export function PalettePopover({ color, setColor }: Props) {
  const previewBoxStyle = useMemo(() => ({ backgroundColor: color }), [color])

  const onColorValueChange = useCallback((color: string) => setColor(color), [setColor])
  const onInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Flex>
          <Button color={themeColor}>Background</Button>
          <Tooltip delayDuration={600} align='center' content='Select background'>
            <Box width='6' height='6' style={previewBoxStyle} className={styles.previewBox} />
          </Tooltip>
        </Flex>
      </Popover.Trigger>
      <Popover.Content color={themeColor}>
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
}
