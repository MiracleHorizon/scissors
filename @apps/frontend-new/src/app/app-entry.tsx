import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'
import { HelmetProvider } from 'react-helmet-async'

import { DEFAULT_THEME, THEME_STORAGE_KEY, getThemeColorCookie } from '@/entities/theme'

import { AppRouter } from './app-router'
import { AppQuery } from './app-query'
import { SEO } from './seo'

export const App = () => {
  const themeColor = getThemeColorCookie()

  return (
    <HelmetProvider>
      <SEO />

      <ThemeProvider
        attribute='class'
        defaultTheme={DEFAULT_THEME}
        storageKey={THEME_STORAGE_KEY}
        disableTransitionOnChange
      >
        <Theme accentColor={themeColor}>
          <AppQuery>
            <AppRouter />
          </AppQuery>
        </Theme>
      </ThemeProvider>
    </HelmetProvider>
  )
}
