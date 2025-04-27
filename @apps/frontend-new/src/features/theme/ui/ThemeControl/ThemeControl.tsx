import { Flex, SegmentedControl } from '@radix-ui/themes'

import { SunIcon } from '@scissors/react-icons/SunIcon'
import { MoonIcon } from '@scissors/react-icons/MoonIcon'

import { useTheme, validateTheme, type Theme } from '@/entities/theme'

const getThemeValue = (theme: Theme): Theme => {
  const isValidTheme = validateTheme(theme)
  const isPreferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (theme === 'system' || !isValidTheme) {
    return isPreferredDark ? 'dark' : 'light'
  }

  return theme
}

export const ThemeControl = () => {
  const { theme, setTheme } = useTheme()

  return (
    <SegmentedControl.Root className='w-full' value={getThemeValue(theme)} onValueChange={setTheme}>
      <SegmentedControl.Item value='light' data-cy='theme-control-light'>
        <Flex align='center' gap='2'>
          <SunIcon width='16px' height='16px' />
          Light
        </Flex>
      </SegmentedControl.Item>

      <SegmentedControl.Item value='dark' data-cy='theme-control-dark'>
        <Flex align='center' gap='2'>
          <MoonIcon width='16px' height='16px' />
          Dark
        </Flex>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  )
}
