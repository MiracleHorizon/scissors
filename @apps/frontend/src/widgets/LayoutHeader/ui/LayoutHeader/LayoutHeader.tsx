import { Flex } from '@radix-ui/themes'
import { useLocation } from 'react-router'

import { ToggleThemeButton } from '@/features/theme/toggle'
import { AiAssistantDialog } from '@/features/ai/ask'
import { GithubButton } from '@/entities/github'
import { BadgeBeta } from '@/shared/ui'
import { AppLogo } from '../AppLogo/AppLogo'
import { NavigationDesktop } from '../navigation/NavigationDesktop/NavigationDesktop'
import styles from './LayoutHeader.module.css'

export const LayoutHeader = () => {
  const { pathname } = useLocation()

  return (
    <Flex
      asChild
      align='center'
      justify='between'
      width='100%'
      px='4'
      py='2'
      className={styles.root}
    >
      <header>
        <div className={styles.mobile}>
          <ToggleThemeButton />
          {(pathname === '/' || pathname === '/convert') && import.meta.env.DEV && (
            <AiAssistantDialog />
          )}
        </div>

        <Flex align='center' gap='3'>
          <AppLogo className={styles.logo} />
          <BadgeBeta />
        </Flex>

        <div className={styles.desktop}>
          <NavigationDesktop mr='4' />

          <Flex align='center' gap='4'>
            {(pathname === '/' || pathname === '/convert') && import.meta.env.DEV && (
              <AiAssistantDialog />
            )}
            <GithubButton />
            <ToggleThemeButton />
          </Flex>
        </div>
      </header>
    </Flex>
  )
}
