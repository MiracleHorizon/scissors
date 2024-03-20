'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Flex, type MarginProps } from '@radix-ui/themes'
import { clsx } from 'clsx'

import { PATH_ROOT } from '@site/paths'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './AppLogo.module.css'

export const testId = 'app-logo'

export function AppLogo({ style, className, ...props }: Props) {
  const router = useRouter()

  const navigateToHome = () => router.push(PATH_ROOT)

  return (
    <Flex
      {...props}
      data-testid={testId}
      align='center'
      justify='center'
      style={style}
      className={clsx(styles.root, className)}
      onClick={navigateToHome}
    >
      <Image
        src='/favicons/dark.png'
        alt='Scissors'
        width={34}
        height={34}
        priority
        className={styles.icon}
      />
    </Flex>
  )
}

type Props = ClassNameProps & StyleProps & MarginProps
