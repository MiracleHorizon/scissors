'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Flex } from '@radix-ui/themes'

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
      <Image src='/favicons/dark.png' alt='Logo' width={34} height={34} className={styles.icon} />
    </Flex>
  )
}
