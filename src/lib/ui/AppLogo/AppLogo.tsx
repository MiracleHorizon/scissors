import Link from 'next/link'
import { Flex } from '@radix-ui/themes'

import { LogoIcon } from '@ui/icons'
import { Route } from '@lib/router'
import styles from './AppLogo.module.css'

export function AppLogo() {
  return (
    <Flex asChild align='center' justify='center' className={styles.root}>
      <Link href={Route.HOME}>
        <LogoIcon width='26px' height='26px' className={styles.icon} />
      </Link>
    </Flex>
  )
}
