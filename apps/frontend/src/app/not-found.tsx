import { Flex, Heading, Separator, Text } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'
import type { Metadata } from 'next'

import { ButtonHome } from '@components/button-home'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Not Found'
}

const padding: PaddingProps = {
  pt: {
    initial: '100px',
    xs: '200px'
  },
  px: {
    initial: '4',
    sm: '6'
  },
  pb: '6'
} as const

export const NotFound = () => (
  <Flex {...padding} justify='center' width='100dvw' height='var(--layout-content-height)'>
    <Flex asChild align='center' direction='column' maxWidth='500px'>
      <main>
        <article>
          <Heading as='h1' className={styles.heading404}>
            404
          </Heading>
        </article>

        <Flex asChild align='center' direction='column' mt='7' gap='3'>
          <article>
            <Heading as='h2'>Page Not Found</Heading>

            <Text as='p' align='center' className={styles.information}>
              The page you are looking for might have been removed, had its name changed, or is
              temporarily unavailable.
            </Text>
          </article>
        </Flex>

        <Separator orientation='horizontal' mt='14px' mb='4' className={styles.separator} />

        <ButtonHome size='3' />
      </main>
    </Flex>
  </Flex>
)

export default NotFound
