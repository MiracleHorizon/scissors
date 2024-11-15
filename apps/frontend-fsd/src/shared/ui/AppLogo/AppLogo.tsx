import { useRouter } from 'next/navigation'
import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'
import type { MarginProps } from '@radix-ui/themes/props'

import type { ClassNameProps, StyleProps } from '@/shared/lib'
import styles from './AppLogo.module.css'

export const testId = 'app-logo'

type Props = ClassNameProps & StyleProps & MarginProps

export const AppLogo = ({ style, className, ...props }: Props) => {
  const router = useRouter()

  const navigateToHome = () => router.push('/')

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
      <img src='/favicons/dark.png' alt='Scissors' width={34} height={34} className={styles.icon} />
    </Flex>
  )
}
