import { clsx } from 'clsx'
import { Button, Flex, Popover, Text } from '@radix-ui/themes'
import type { FC } from 'react'

import { ColorSwatch } from '@ui/ColorSwatch'
import type { TextSize } from '@lib/theme'
import { geistMono } from '@app/fonts'
import styles from './ColorPickerTrigger.module.css'

export const ColorPickerTrigger: FC<Props> = ({ color, label, labelSize, disabled }) => (
  <Popover.Trigger
    className={clsx(styles.root, {
      [styles.disabled]: disabled
    })}
  >
    <Flex direction='column' gap='1'>
      {label && <Text size={labelSize}>{label}</Text>}

      <Button
        color='gray'
        radius='large'
        variant='outline'
        disabled={disabled}
        className={clsx(styles.button, geistMono.className)}
      >
        <ColorSwatch color={color} />
        {color}
      </Button>
    </Flex>
  </Popover.Trigger>
)

// TODO: Props limitations
interface Props {
  color: string
  label?: string
  labelSize?: TextSize
  disabled?: boolean
}
