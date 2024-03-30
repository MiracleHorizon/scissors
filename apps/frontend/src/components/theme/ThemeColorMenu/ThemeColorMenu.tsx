'use client'

import { DropdownMenu, IconButton, Text } from '@radix-ui/themes'
import { clsx } from 'clsx'
import type { FC } from 'react'

import { ColorSwatch } from '@ui/ColorSwatch'
import { PaletteIcon } from '@ui/icons/PaletteIcon'
import { useTheme } from '@hooks/useTheme'
import {
  getRadixColorVar,
  setThemeColorCookie,
  THEME_COLOR_LS_KEY,
  type ThemeColor,
  themeColorItems
} from '@lib/theme'
import styles from './ThemeColorMenu.module.css'

export const ThemeColorMenu: FC<Props> = ({ triggerClassName, contentClassName }) => {
  const { themeColor } = useTheme()

  const onValueChange = (value: ThemeColor) => {
    localStorage.setItem(THEME_COLOR_LS_KEY, value)
    const event = new StorageEvent('storage', {
      key: THEME_COLOR_LS_KEY,
      newValue: value
    })
    window.dispatchEvent(event)

    void setThemeColorCookie(value)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton
          color='gray'
          radius='large'
          variant='ghost'
          className={clsx(styles.trigger, triggerClassName)}
        >
          <PaletteIcon width='20px' height='20px' />
        </IconButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className={clsx(styles.content, contentClassName)}>
        <DropdownMenu.Label>Theme Color</DropdownMenu.Label>
        {/* @typescript-eslint/ban-ts-comment
          @ts-ignore */}
        <DropdownMenu.RadioGroup value={themeColor} onValueChange={onValueChange}>
          {themeColorItems.map(({ key, color }) => (
            <DropdownMenu.RadioItem key={key} value={color}>
              <Text className={styles.itemText}>{color}</Text>

              <ColorSwatch color={getRadixColorVar(color, 9)} />
            </DropdownMenu.RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

interface Props {
  triggerClassName?: string
  contentClassName?: string
}
