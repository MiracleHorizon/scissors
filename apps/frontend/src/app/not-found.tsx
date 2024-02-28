import { Flex, Heading, type PaddingProps, Separator, Text } from '@radix-ui/themes'
import type { Metadata } from 'next'

import { ButtonHome } from '@components/ButtonHome'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Not Found'
}

const padding: PaddingProps = {
  px: {
    initial: '4',
    sm: '6'
  },
  pb: '6'
}

export const NotFound = () => (
  <Flex {...padding} asChild align='start' justify='center' className={styles.root}>
    <div>
      <Flex asChild align='center' direction='column' className={styles.content}>
        <main>
          <article>
            <Heading as='h1' className={styles.heading404}>
              404
            </Heading>
          </article>

          <Flex asChild align='center' direction='column' mt='7' gap='3'>
            <article>
              <Heading as='h2' size='6'>
                Page Not Found
              </Heading>

              <Text as='p' align='center' className={styles.information}>
                The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.
              </Text>
            </article>
          </Flex>

          <Separator orientation='horizontal' mb='4' className={styles.separator} />

          <ButtonHome size='3' />
        </main>
      </Flex>
    </div>
  </Flex>
)

export default NotFound
