import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'
import { useNavigate } from 'react-router'
import type { MarginProps } from '@radix-ui/themes/props'

import styles from './AppLogo.module.css'

export const testId = 'app-logo'

export const AppLogo = ({
  className,
  ...props
}: MarginProps & {
  className?: string
}) => {
  const navigate = useNavigate()

  const navigateToHome = () => navigate('/')

  return (
    <Flex
      {...props}
      data-testid={testId}
      align='center'
      justify='center'
      className={clsx(styles.root, className)}
      onClick={navigateToHome}
    >
      <img src='/favicons/dark.png' alt='Scissors' width={34} height={34} className={styles.icon} />
    </Flex>
  )
}
