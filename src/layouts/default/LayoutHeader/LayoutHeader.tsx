import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Flex } from '@radix-ui/themes'

import { LogoIcon } from '@ui/icons'
import { ButtonGithub } from './ButtonGithub'
import { Navigation } from './Navigation'
import { AppearancePopoverSkeleton } from './AppearancePopover'
import { Route } from '@lib/router'
import type { ThemeProps } from '@lib/theme'
import styles from './LayoutHeader.module.css'

const AppearancePopover = dynamic(
  () => import('./AppearancePopover').then(mod => mod.AppearancePopover),
  {
    ssr: false,
    loading: () => <AppearancePopoverSkeleton />
  }
)

export function LayoutHeader(themeProps: ThemeProps) {
  return (
    <Flex
      asChild
      align='center'
      justify='between'
      width='100%'
      height='8'
      pl={{
        initial: '3',
        xs: '4'
      }}
      pr='4'
      py='2'
      className={styles.root}
    >
      <header>
        <Flex asChild align='center' justify='center' className={styles.logo}>
          <Link href={Route.HOME}>
            <LogoIcon width='26px' height='26px' />
          </Link>
        </Flex>
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
}
