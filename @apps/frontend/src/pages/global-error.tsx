import { Button, Flex, Heading, Text, Theme } from '@radix-ui/themes'
import { ThemeProvider } from 'next-themes'
import type { Metadata } from 'next'

import { SITE_TITLE } from '@site/config'
import { getThemeColorCookie } from '@lib/theme/helpers'
import { THEME_STORAGE_KEY } from '@lib/theme/constants'
import { geistSans } from './fonts'
import type { ErrorPageProps } from '@app-types/next'

export const metadata: Metadata = {
  title: SITE_TITLE
}

const GlobalError = ({ error, reset }: ErrorPageProps) => {
  const themeColor = getThemeColorCookie()

  console.log(error)

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={geistSans.variable}>
        <ThemeProvider storageKey={THEME_STORAGE_KEY}>
          <Theme accentColor={themeColor}>
            <Flex
              align='center'
              justify='start'
              direction='column'
              gap='4'
              width='100%'
              pb='8'
              height='100dvh'
              pt='30dvh'
            >
              <Flex asChild align='center' direction='column' gap='2'>
                <article>
                  <Heading as='h1' size='8'>
                    Something went wrong
                  </Heading>

                  <Text
                    as='p'
                    style={{
                      color: 'var(--gray-a11)'
                    }}
                  >
                    Please try reloading the page or try again later.
                  </Text>
                </article>
              </Flex>

              <Flex align='center' justify='between' gap='3'>
                <Button size='3' radius='large' onClick={reset}>
                  Try again
                </Button>
              </Flex>
            </Flex>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default GlobalError
