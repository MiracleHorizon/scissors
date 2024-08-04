import { DropdownMenu, Flex } from '@radix-ui/themes'

import { ThemeColorMenuItem } from './ThemeColorMenuItem'
import { useTheme } from '@hooks/useTheme'
import { setThemeColorServerCookie, type ThemeColor, themeColorItems } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

// eslint-disable-next-line no-unused-vars
type ChangeValueFunction = (value: string) => void
export const ThemeColorMenuContent = ({ className }: ClassNameProps) => {
  const { themeColor } = useTheme()

  const onValueChange = (value: ThemeColor) => setThemeColorServerCookie(value)

  return (
    <Flex direction='column' align='start' className={className}>
      <DropdownMenu.Label>Theme Color</DropdownMenu.Label>
      <DropdownMenu.RadioGroup
        value={themeColor}
        onValueChange={onValueChange as ChangeValueFunction}
      >
        {themeColorItems.map(({ key, color }) => (
          <ThemeColorMenuItem key={key} color={color} />
        ))}
      </DropdownMenu.RadioGroup>
    </Flex>
  )
}
