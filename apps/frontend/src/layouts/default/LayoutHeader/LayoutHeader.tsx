import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'
import type { FC } from 'react'

import { AppLogo } from '@ui/AppLogo'
import { NavigationDesktop } from './navigation/NavigationDesktop'
import { NavigationDrawer } from './navigation/NavigationDrawer'
import { AppearancePopoverSkeleton } from './AppearancePopover'
import { ButtonGithub } from './ButtonGithub'
import { ButtonToggleTheme } from '@components/theme/ButtonToggleTheme'
import { ThemeColorMenu } from '@components/theme/ThemeColorMenu'
import type { ThemeProps } from '@lib/theme'
import styles from './LayoutHeader.module.css'

const AppearancePopover = dynamic(() => import('./AppearancePopover'), {
  ssr: false,
  loading: () => <AppearancePopoverSkeleton />
})

// TODO: Optimize components imports and rendering
export const LayoutHeader: FC<ThemeProps> = themeProps => (
  <Flex asChild align='center' justify='between' width='100%' px='4' py='2' className={styles.root}>
    <header>
      <div className={styles.themeMobileActions}>
        <ButtonToggleTheme {...themeProps} />
        <ThemeColorMenu themeColor={themeProps.themeColor} />
      </div>

      <AppLogo className={styles.logo} />

      <div className={styles.desktopContent}>
        <NavigationDesktop mr='4' />

        <Flex align='center' gap='4'>
          <ButtonGithub />
          <AppearancePopover {...themeProps} />
        </Flex>
      </div>

      <NavigationDrawer />
    </header>
  </Flex>
)
