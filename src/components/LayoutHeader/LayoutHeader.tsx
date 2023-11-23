import Link from 'next/link'
import { Box, Flex } from '@radix-ui/themes'

import { Navigation } from './Navigation'
import { SettingsPopover, type SettingsPopoverProps } from '@components/SettingsPopover'
import { Route } from '@shared/router'
import styles from './LayoutHeader.module.css'

export function LayoutHeader(settingsPopoverProps: SettingsPopoverProps) {
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
        <Box asChild width='6' height='6' className={styles.logo}>
          <Link href={Route.HOME} />
        </Box>
        <Navigation />
        <SettingsPopover {...settingsPopoverProps} />
      </header>
    </Flex>
  )
}
