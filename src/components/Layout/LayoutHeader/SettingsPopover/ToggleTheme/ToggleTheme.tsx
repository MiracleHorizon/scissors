'use client'

import { Flex, IconButton } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import cn from 'classnames'

import { SettingsPopoverTitle } from '../SettingsPopoverTitle'
import { setThemeCookie, type Theme, type ThemeProps } from '@shared/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './ToggleTheme.module.css'

function getThemeIcon(theme: Theme) {
  const Icon = theme === 'dark' ? MoonIcon : SunIcon

  return <Icon width='18px' height='18px' />
}

export function ToggleTheme({ theme, className }: Props) {
  const toggleTheme = () => setThemeCookie(theme === 'dark' ? 'light' : 'dark')

  return (
    <Flex align='center' justify='between' width='100%'>
      <SettingsPopoverTitle title='Theme' />
      <IconButton
        size='2'
        color='gray'
        variant='ghost'
        className={cn(styles.root, className)}
        onClick={toggleTheme}
      >
        {getThemeIcon(theme)}
      </IconButton>
    </Flex>
  )
}

type Props = Pick<ThemeProps, 'theme'> & ClassNameProps
