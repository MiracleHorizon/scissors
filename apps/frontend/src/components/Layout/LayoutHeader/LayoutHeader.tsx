import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { AppLogo } from '@ui/AppLogo'
import { ButtonGithub } from '@components/ButtonGithub'
import { NavigationDesktop } from '@components/navigation/NavigationDesktop'
import { ThemeColorMenu } from '@components/theme/ThemeColorMenu'
import { IconButtonGhostSkeleton } from '@ui/skeletons/IconButtonGhostSkeleton'
import styles from './LayoutHeader.module.css'

const LayoutDrawer = dynamic(() => import('../LayoutDrawer'), {
  ssr: false
})
const AppearancePopover = dynamic(() => import('@components/AppearancePopover'), {
  ssr: false,
  loading: () => <IconButtonGhostSkeleton />
})
const ButtonToggleTheme = dynamic(() => import('@components/theme/ButtonToggleTheme'), {
  ssr: false,
  loading: () => <IconButtonGhostSkeleton />
})

// TODO: Optimize components imports and rendering
export const LayoutHeader = () => (
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

      <LayoutDrawer />
    </header>
  </Flex>
)
