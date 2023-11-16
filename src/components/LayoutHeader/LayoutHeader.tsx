import Link from 'next/link'
import { Box, Flex } from '@radix-ui/themes'

import { Navigation } from './Navigation'
import { ToggleTheme } from '@components/ToggleTheme'
import { type Theme, themeColor } from '@shared/theme'
import { Route } from '@shared/router'
import styles from './LayoutHeader.module.css'

export function LayoutHeader({ theme }: Props) {
  return (
    <Flex
      asChild
      align='center'
      justify='between'
      width='100%'
      height='8'
      px='4'
      py='2'
      className={styles.root}
    >
      <header>
        <Box asChild width='6' height='6' data-accent-color={themeColor} className={styles.logo}>
          <Link href={Route.HOME} />
        </Box>
        <Navigation />
        <ToggleTheme theme={theme} />
      </header>
    </Flex>
  )
}

interface Props {
  theme: Theme
}
