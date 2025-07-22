import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'
import { useNavigate } from 'react-router'

import styles from './AppLogo.module.css'

export const AppLogo = ({ className }: { className?: string }) => {
  const navigate = useNavigate()

  /**
   * Currently /convert route is basic route for application.
   */
  const navigateToHome = () => navigate('/convert')

  return (
    <Flex
      align='center'
      justify='center'
      className={clsx(styles.root, className)}
      onClick={navigateToHome}
    >
      <img
        src='/favicons/dark.png'
        alt='Scissors logo'
        width='34'
        height='34'
        className={styles.icon}
      />
    </Flex>
  )
}
