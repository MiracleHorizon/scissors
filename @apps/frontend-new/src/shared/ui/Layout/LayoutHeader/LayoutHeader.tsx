import { Flex } from '@radix-ui/themes'

import { ToggleThemeButton } from '@/features/theme'
import { GithubButton } from '@/features/github'
import { AppLogo } from './AppLogo/AppLogo'
import { NavigationDesktop } from './navigation/NavigationDesktop/NavigationDesktop'
// import { AppearancePopover } from './AppearancePopover/AppearancePopover'
import styles from './LayoutHeader.module.css'

export const LayoutHeader = () => (
  <Flex asChild align='center' justify='between' width='100%' px='4' py='2' className={styles.root}>
    <header>
      <div className={styles.mobile}>
        <ToggleThemeButton />
      </div>

      <AppLogo className={styles.logo} />

      <div className={styles.desktop}>
        <NavigationDesktop mr='4' />

        <Flex align='center' gap='4'>
          <GithubButton />
          <ToggleThemeButton />
          {/* <AppearancePopover /> */}
        </Flex>
      </div>

      {/* <LayoutDrawer /> */}
    </header>
  </Flex>
)
