import dynamic from 'next/dynamic'
import { Flex, type PaddingProps } from '@radix-ui/themes'
import type { FC } from 'react'

import { AppLogo } from '@ui/AppLogo'
import { ButtonGithub } from './ButtonGithub'
import { Navigation } from './Navigation'
import { AppearancePopoverSkeleton } from './AppearancePopover'
import type { ThemeProps } from '@lib/theme'
import styles from './LayoutHeader.module.css'

const AppearancePopover = dynamic(() => import('./AppearancePopover'), {
  ssr: false,
  loading: () => <AppearancePopoverSkeleton />
})

const padding: PaddingProps = {
  pl: {
    initial: '3',
    xs: '4'
  },
  pr: '4',
  py: '2'
}

export const LayoutHeader: FC<ThemeProps> = themeProps => (
  <Flex
    {...padding}
    asChild
    align='center'
    justify='between'
    width='100%'
    className={styles.root}
  >
    <header>
      <AppLogo />

      <Flex align='center' height='100%'>
        <Navigation />

        <Flex align='center' gap='4'>
          <ButtonGithub />
          <AppearancePopover {...themeProps} />
        </Flex>
      </Flex>
    </header>
  </Flex>
)
