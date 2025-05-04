import { Flex } from '@radix-ui/themes'

import { ToggleThemeButton } from '@/features/theme'
import { GithubButton } from '@/features/github'
import { BadgeBeta } from '@/shared/ui'
import { AppLogo } from '../AppLogo/AppLogo'
import { NavigationDesktop } from '../navigation/NavigationDesktop/NavigationDesktop'
import styles from './LayoutHeader.module.css'

export const LayoutHeader = () => (
  <Flex asChild align='center' justify='between' width='100%' px='4' py='2' className={styles.root}>
    <header>
      <div className={styles.mobile}>
        <ToggleThemeButton />
      </div>

      <Flex align='center' gap='3'>
        <AppLogo className={styles.logo} />
        <BadgeBeta />
      </Flex>

      <div className={styles.desktop}>
        <NavigationDesktop mr='4' />

        <Flex align='center' gap='4'>
          <GithubButton />
          <ToggleThemeButton />
        </Flex>
      </div>
    </header>
  </Flex>
)
