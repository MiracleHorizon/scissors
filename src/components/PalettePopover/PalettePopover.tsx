import { useCallback, useMemo } from 'react'
import { HexColorPicker } from 'react-colorful'
import { Box, Button, Flex, Popover, Tooltip } from '@radix-ui/themes'
import cn from 'classnames'

import { HexColorInput } from '@ui/HexColorInput'
import { isTooltipOpen } from '@helpers/isTooltipOpen'
import styles from './PalettePopover.module.css'

export function PalettePopover({ color, setColor, disabled }: Props) {
  const previewBoxStyle = useMemo(() => ({ backgroundColor: color }), [color])

  const onColorValueChange = useCallback((color: string) => setColor(color), [setColor])
  const onInputValueChange = useCallback(
    (color: string) => setColor(!color.startsWith('#') ? `#${color}` : color),
    [setColor]
  )

  return (
    <Popover.Root>
      <Popover.Trigger className={cn({ [styles.disabled]: disabled })}>
        <Flex>
          <Button disabled={disabled}>Background</Button>
          <Tooltip
            open={isTooltipOpen({
              content: 'Select background',
              isParentDisabled: disabled
            })}
            delayDuration={600}
            align='center'
            content='Select background'
          >
            <Box
              width='6'
              height='6'
              style={previewBoxStyle}
              className={cn(styles.previewBox, {
                [styles.disabledPreviewBox]: disabled
              })}
            />
          </Tooltip>
        </Flex>
      </Popover.Trigger>
      <Popover.Content>
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
