'use client'

import { Flex, IconButton } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { MoonIcon } from '@ui/icons/MoonIcon'
import { SunIcon } from '@ui/icons/SunIcon'
import { AppearancePopoverTitle } from '../AppearancePopoverTitle'
import { setThemeCookie, type Theme, type ThemeProps } from '@lib/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ToggleTheme.module.css'

function getThemeIcon(theme: Theme) {
  const Icon = theme === 'dark' ? MoonIcon : SunIcon
  const iconLabel = theme === 'dark' ? 'dark theme' : 'light theme'

  return <Icon width='18px' height='18px' label={iconLabel} />
}

export function ToggleTheme({ theme, className }: Props) {
  const toggleTheme = () => setThemeCookie(theme === 'dark' ? 'light' : 'dark')

  return (
    <Flex align='center' justify='between' width='100%'>
      <AppearancePopoverTitle title='Theme' />
      <IconButton
        size='2'
        color='gray'
        variant='ghost'
        className={clsx(styles.root, className)}
        onClick={toggleTheme}
      >
        {getThemeIcon(theme)}
      </IconButton>
    </Flex>
  )
}

type Props = Pick<ThemeProps, 'theme'> & ClassNameProps
