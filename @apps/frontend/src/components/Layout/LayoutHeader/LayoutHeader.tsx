import { Flex } from '@radix-ui/themes'
import { lazy, Suspense } from 'react'
import { useLocation } from 'react-router'

import { AppLogo } from '@components/AppLogo'
import { ButtonGithub } from '@components/ButtonGithub'
import { NavigationDesktop } from '@components/navigation/NavigationDesktop'
import { ThemeColorMenu } from '@components/theme/ThemeColorMenu'
import { IconButtonGhostSkeleton } from '@ui/skeletons/IconButtonGhostSkeleton'
import { AiAssistantDialog } from '@components/ai-assistant'
import styles from './LayoutHeader.module.css'

const LayoutDrawer = lazy(() => import('../LayoutDrawer'))
const AppearancePopover = lazy(() => import('@components/AppearancePopover'))
const ButtonToggleTheme = lazy(() => import('@components/theme/ButtonToggleTheme'))

export const LayoutHeader = () => {
  const location = useLocation()

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
        <div className={styles.themeMobileActions}>
          <Suspense fallback={<IconButtonGhostSkeleton />}>
            <ButtonToggleTheme />
          </Suspense>
          <ThemeColorMenu />
          {location.pathname === '/' && process.env.NODE_ENV === 'development' && (
            <AiAssistantDialog />
          )}
        </div>

        <AppLogo className={styles.logo} />

        <div className={styles.desktopContent}>
          <NavigationDesktop mr='4' />

          <Flex align='center' gap='4'>
            {location.pathname === '/' && process.env.NODE_ENV === 'development' && (
              <AiAssistantDialog />
            )}
            <ButtonGithub />
            <Suspense fallback={<IconButtonGhostSkeleton />}>
              <AppearancePopover />
            </Suspense>
          </Flex>
        </div>

        <Suspense>
          <LayoutDrawer />
        </Suspense>
      </header>
    </Flex>
  )
}
