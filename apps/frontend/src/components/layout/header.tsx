import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { NavigationDesktop } from '@components/navigation/navigation-desktop'
import { ButtonGithub } from '@components/button-github'
import { ThemeColorMenu } from '@components/theme/theme-color-menu'
import { IconButtonGhostSkeleton } from '@ui/skeletons/icon-button-ghost-skeleton'
import { AppLogo } from '@ui/app-logo'
import styles from './header.module.css'

const Drawer = dynamic(() => import('./drawer'), {
  ssr: false
})
const AppearancePopover = dynamic(() => import('@components/appearance-popover'), {
  ssr: false,
  loading: () => <IconButtonGhostSkeleton />
})
const ButtonToggleTheme = dynamic(() => import('@components/theme/button-toggle-theme'), {
  ssr: false,
  loading: () => <IconButtonGhostSkeleton />
})

// TODO: Optimize components imports and rendering
export const Header = () => (
  <Flex asChild align='center' justify='between' width='100%' px='4' py='2' className={styles.root}>
    <header>
      <div className={styles.themeMobileActions}>
        <ButtonToggleTheme />
        <ThemeColorMenu />
      </div>

      <AppLogo className={styles.logo} />

      <div className={styles.desktopContent}>
        <NavigationDesktop mr='4' />

        <Flex align='center' gap='4'>
          <ButtonGithub />
          <AppearancePopover />
        </Flex>
      </div>

      <Drawer />
    </header>
  </Flex>
)
