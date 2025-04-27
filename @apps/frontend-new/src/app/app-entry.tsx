import { RouterProvider } from 'react-router/dom'
import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'

import { DEFAULT_THEME, THEME_STORAGE_KEY, getThemeColorCookie } from '@/entities/theme'
import { createRouter } from './app-router'

const router = createRouter()

export const App = () => {
  const themeColor = getThemeColorCookie()

  return (
    <ThemeProvider
      attribute='class'
      defaultTheme={DEFAULT_THEME}
      storageKey={THEME_STORAGE_KEY}
      disableTransitionOnChange
    >
      <Theme accentColor={themeColor}>
        <RouterProvider router={router} />
      </Theme>
    </ThemeProvider>
  )
}
