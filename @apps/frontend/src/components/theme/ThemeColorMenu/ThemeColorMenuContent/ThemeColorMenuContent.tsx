import { DropdownMenu, Flex } from '@radix-ui/themes'

import { ThemeColorMenuItem } from './ThemeColorMenuItem'
import { useTheme } from '@hooks/useTheme'
import { setThemeColorCookie, type ThemeColor, themeColorItems } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ThemeColorMenuContent = ({ className }: ClassNameProps) => {
  const { themeColor } = useTheme()

  const onValueChange = (value: ThemeColor) => setThemeColorCookie(value)

  return (
    <Flex direction='column' align='start' className={className}>
      <DropdownMenu.Label>Theme Color</DropdownMenu.Label>
      <DropdownMenu.RadioGroup
        value={themeColor}
        // eslint-disable-next-line no-unused-vars
        onValueChange={onValueChange as (value: string) => void}
      >
        {themeColorItems.map(({ key, color }) => (
          <ThemeColorMenuItem key={key} color={color} />
        ))}
      </DropdownMenu.RadioGroup>
    </Flex>
  )
}
