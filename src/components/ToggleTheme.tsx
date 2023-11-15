'use client'

import { IconButton } from '@radix-ui/themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useIsClient } from 'usehooks-ts'

import { setThemeCookie, type Theme, themeColor } from '@shared/theme'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function ToggleTheme({ theme, className }: Props) {
  const isClient = useIsClient()

  const toggleTheme = () => setThemeCookie(theme === 'dark' ? 'light' : 'dark')

  if (!isClient) {
    return null
  }

  return (
    <IconButton
      size='3'
      variant='ghost'
      color={themeColor}
      className={className}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <MoonIcon width='20px' height='20px' />
      ) : (
        <SunIcon width='20px' height='20px' />
      )}
    </IconButton>
  )
}

interface Props extends ClassNameProps {
  theme: Theme
}
