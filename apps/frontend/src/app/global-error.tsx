'use client'

import { Button, Flex, Heading, Text, Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'

import { SITE_TITLE } from '@site/config'
import { getClientThemeAppearance } from '@lib/theme/helpers'
import { geistSans } from './fonts'
import type { ErrorPageProps } from '@app-types/next'

export const metadata: Metadata = {
  title: SITE_TITLE
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  const { theme, themeColor } = getClientThemeAppearance()

  // eslint-disable-next-line no-console
  console.log(error)

  const handleReset = () => reset()

  return (
    <html lang='en' suppressHydrationWarning>
      <body className={geistSans.variable}>
        <Theme accentColor={themeColor} appearance={theme}>
          <Flex
            align='center'
            justify='start'
            direction='column'
            gap='4'
            width='100%'
            pb='8'
            style={{
              height: '100dvh',
              paddingTop: '30dvh'
            }}
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
              <Button size='3' radius='large' onClick={handleReset}>
                Try again
              </Button>
            </Flex>
          </Flex>
        </Theme>
      </body>
    </html>
  )
}
