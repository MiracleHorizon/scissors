import { DropdownMenu, Flex } from '@radix-ui/themes'

import { ThemeColorMenuItem } from './ThemeColorMenuItem'
import { useTheme } from '@hooks/useTheme'
import {
  setThemeColorCookie,
  THEME_COLOR_LS_KEY,
  type ThemeColor,
  themeColorItems
} from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ThemeColorMenuContent = ({ className }: ClassNameProps) => {
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
    <Flex direction='column' align='start' className={className}>
      <DropdownMenu.Label>Theme Color</DropdownMenu.Label>
      {/* @typescript-eslint/ban-ts-comment
          @ts-ignore */}
      <DropdownMenu.RadioGroup value={themeColor} onValueChange={onValueChange}>
        {themeColorItems.map(({ key, color }) => (
          <ThemeColorMenuItem key={key} color={color} />
        ))}
      </DropdownMenu.RadioGroup>
    </Flex>
  )
}
