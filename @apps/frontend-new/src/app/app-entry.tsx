import { RouterProvider } from 'react-router/dom'
import { ThemeProvider } from 'next-themes'
import { Theme } from '@radix-ui/themes'
import { HelmetProvider, Helmet } from 'react-helmet-async'

import { DEFAULT_THEME, THEME_STORAGE_KEY, getThemeColorCookie } from '@/entities/theme'
import { SITE_DESCRIPTION, SITE_KEYWORDS, SITE_TITLE } from '@/shared/seo'
import { SITE_DOMAIN } from '@/shared/config'
import { pathForSocial } from '@/shared/github'

import { createRouter } from './app-router'

const router = createRouter()

export const App = () => {
  const themeColor = getThemeColorCookie()

  return (
    <HelmetProvider>
      <Helmet>
        <title>{SITE_TITLE}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='keywords' content={SITE_KEYWORDS.join(', ')} />
        <link rel='canonical' href={SITE_DOMAIN} />
        <link
          rel='icon'
          href='/favicons/dark.png'
          type='image/png'
          sizes='180x180'
          media='(prefers-color-scheme: dark)'
        />
        <link
          rel='icon'
          href='/favicons/light.png'
          type='image/png'
          sizes='180x180'
          media='(prefers-color-scheme: light)'
        />
        <link
          rel='apple-touch-icon'
          href='/apple-touch-icon.png'
          type='image/png'
          sizes='180x180'
        />
        <link rel='icon' href='/android-chrome-192x192.png' type='image/png' sizes='192x192' />
        <link rel='icon' href='/android-chrome-512x512.png' type='image/png' sizes='512x512' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='robots' content='index, follow' />
        <meta property='og:title' content={SITE_TITLE} />
        <meta property='og:description' content={SITE_DESCRIPTION} />
        <meta property='og:image' content={pathForSocial('og-image-share.png')} />
        <meta property='og:image:width' content='1958' />
        <meta property='og:image:height' content='1044' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:url' content={SITE_DOMAIN} />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='en_US' />
        <meta property='twitter:url' content={SITE_DOMAIN} />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content={SITE_TITLE} />
        <meta property='twitter:description' content={SITE_DESCRIPTION} />
        <meta property='twitter:image' content={pathForSocial('og-image-share.png')} />
        <meta property='twitter:image:width' content='1958' />
        <meta property='twitter:image:height' content='1044' />
        <meta property='twitter:image:type' content='image/png' />
      </Helmet>

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
    </HelmetProvider>
  )
}
