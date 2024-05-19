'use client'

import { Flex, SegmentedControl } from '@radix-ui/themes'

import { SunIcon } from '@scissors/react-icons/SunIcon'
import { MoonIcon } from '@scissors/react-icons/MoonIcon'

import { useTheme } from '@hooks/useTheme'
import { type Theme, validateTheme } from '@lib/theme'

const getThemeValue = (theme: Theme): Theme => {
  const isValidTheme = validateTheme(theme)
  const isPreferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (theme === 'system' || !isValidTheme) {
    return isPreferredDark ? 'dark' : 'light'
  }

  return theme
}

export function ThemeControl() {
  const { theme, setTheme } = useTheme()

  return (
    <SegmentedControl.Root
      value={getThemeValue(theme as Theme)}
      onValueChange={setTheme}
      className='w-full'
    >
      <SegmentedControl.Item value='light'>
        <Flex align='center' gap='2'>
          <SunIcon width='16px' height='16px' />
          Light
        </Flex>
      </SegmentedControl.Item>
      <SegmentedControl.Item value='dark'>
        <Flex align='center' gap='2'>
          <MoonIcon width='16px' height='16px' />
          Dark
        </Flex>
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  )
}
