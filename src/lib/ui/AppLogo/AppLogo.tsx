'use client'

import { useRouter } from 'next/navigation'
import { Flex } from '@radix-ui/themes'

import { LogoIcon } from '@ui/icons/LogoIcon'
import { PATH_ROOT } from '@site/paths'
import styles from './AppLogo.module.css'

export const testId = 'app-logo'

export function AppLogo() {
  const router = useRouter()

  const navigateToHome = () => router.push(PATH_ROOT)

  return (
    <Flex
      data-testid={testId}
      align='center'
      justify='center'
      className={styles.root}
      onClick={navigateToHome}
    >
      <LogoIcon width='26px' height='26px' className={styles.icon} />
    </Flex>
  )
}
