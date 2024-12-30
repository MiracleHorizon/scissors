'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import { PATH_ROOT } from '@site/paths'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './AppLogo.module.css'

export const testId = 'app-logo'

type Props = ClassNameProps & StyleProps & MarginProps

export const AppLogo = ({ style, className, ...props }: Props) => {
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
