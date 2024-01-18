'use client'

import { useRouter } from 'next/navigation'
import { Flex } from '@radix-ui/themes'

import { LogoIcon } from '@ui/icons/LogoIcon'
import { ROUTE } from '@lib/router'
import styles from './AppLogo.module.css'

export function AppLogo() {
  const router = useRouter()

  const navigateToHome = () => router.replace(ROUTE.HOME)

  return (
    <Flex align='center' justify='center' className={styles.root} onClick={navigateToHome}>
      <LogoIcon width='26px' height='26px' className={styles.icon} />
    </Flex>
  )
}
