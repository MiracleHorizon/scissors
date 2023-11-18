'use client'

import { useCallback, useMemo } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Box, Button, Flex, Popover, Tooltip } from '@radix-ui/themes'

import { HexColorInput } from '@ui/HexColorInput'
import { useConvertStore } from '@stores/convert'
import { DEFAULT_ROTATE_BACKGROUND } from '@libs/Sharp'
import { themeColor } from '@shared/theme'
import styles from './RotateBackgroundPopover.module.css'

export function RotateBackgroundPopover() {
  const background = useConvertStore(state => state.rotate?.background) ?? DEFAULT_ROTATE_BACKGROUND
  const setRotateBackground = useConvertStore(state => state.setRotateBackground)

  const previewBoxStyle = useMemo(() => ({ backgroundColor: background }), [background])

  const onColorPickerValueChange = useCallback(
    (background: string) => setRotateBackground(background),
    [setRotateBackground]
  )

  const onInputValueChange = useCallback(
    (background: string) => setRotateBackground(background),
    [setRotateBackground]
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
            color={background}
            className={styles.hexColorPicker}
            onChange={onColorPickerValueChange}
          />
          <HexColorInput size='3' color={background} onChange={onInputValueChange} />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}
