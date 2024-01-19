import { Flex, IconButton } from '@radix-ui/themes'

import { MoonIcon } from '@ui/icons/MoonIcon'
import { SunIcon } from '@ui/icons/SunIcon'
import { AppearancePopoverTitle } from './AppearancePopoverTitle'
import { setThemeCookie, type Theme, THEME_LS_KEY, type ThemeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

function getThemeIcon(theme: Theme) {
  const Icon = theme === 'dark' ? MoonIcon : SunIcon
  const iconLabel = theme === 'dark' ? 'dark theme' : 'light theme'

  return <Icon width='18px' height='18px' label={iconLabel} />
}

export function ToggleTheme({ theme, className }: Props) {
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    localStorage.setItem(THEME_LS_KEY, newTheme)
    const event = new StorageEvent('storage', {
      key: THEME_LS_KEY,
      newValue: newTheme
    })
    window.dispatchEvent(event)

    void setThemeCookie(newTheme)
  }

  return (
    <Flex align='center' justify='between' width='100%'>
      <AppearancePopoverTitle title='Theme' />
      <IconButton size='2' color='gray' variant='ghost' className={className} onClick={toggleTheme}>
        {getThemeIcon(theme)}
      </IconButton>
    </Flex>
  )
}

type Props = Pick<ThemeProps, 'theme'> & ClassNameProps
