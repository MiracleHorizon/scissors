import { useNavigate } from 'react-router'
import { Button, Flex, Heading, Separator, Text } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'

import styles from './Page.module.css'

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

export const NotFoundPage = () => {
  const navigate = useNavigate()

  const navigateToHome = () => navigate('/', { replace: true })

  return (
    <Flex {...padding} justify='center' width='100dvw' height='var(--layout-content-height)'>
      <Flex asChild align='center' direction='column' maxWidth='500px'>
        <main>
          <article>
            <Heading as='h1' className={styles.heading404}>
              404
            </Heading>
          </article>

          <Flex asChild align='center' direction='column' mt='8' gap='3' maxWidth='430px'>
            <article>
              <Heading as='h2'>Page Not Found</Heading>

              <Text as='p' align='center' className={styles.information}>
                The page you are looking for might have been removed, had its name changed, or is
                temporarily unavailable.
              </Text>
            </article>
          </Flex>

          <Separator
            orientation='horizontal'
            size='4'
            mt='14px'
            mb='4'
            className={styles.separator}
          />

          <Button size='3' radius='large' onClick={navigateToHome}>
            Go to Homepage
          </Button>
        </main>
      </Flex>
    </Flex>
  )
}
