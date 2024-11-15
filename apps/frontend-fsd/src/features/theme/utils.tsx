import { MoonIcon } from '@scissors/react-icons/MoonIcon'
import { SunIcon } from '@scissors/react-icons/SunIcon'

import type { Theme } from '@lib/theme'

export const getThemeIcon = (theme?: Theme) => {
  let Component
  let label

  if (theme === 'system') {
    const isPreferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    Component = isPreferredDark ? MoonIcon : SunIcon
    label = isPreferredDark ? 'set light theme' : 'set dark theme'
  } else {
    Component = theme === 'dark' ? MoonIcon : SunIcon
    label = theme === 'dark' ? 'set light theme' : 'set dark theme'
  }

  return {
    Component: Component,
    props: {
      width: '18px',
      height: '18px',
      label
    }
  }
}
