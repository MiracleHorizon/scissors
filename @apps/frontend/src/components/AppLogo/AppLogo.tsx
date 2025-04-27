import { clsx } from 'clsx'
import { Flex } from '@radix-ui/themes'
import { useNavigate } from 'react-router'
import type { MarginProps } from '@radix-ui/themes/props'

import { PATH_ROOT } from '@site/paths'
import type { StyleProps } from '@app-types/StyleProps'
import type { ClassNameProps } from '@app-types/ClassNameProps'
import styles from './AppLogo.module.css'

export const testId = 'app-logo'

type Props = ClassNameProps & StyleProps & MarginProps

export const AppLogo = ({ style, className, ...props }: Props) => {
  const navigate = useNavigate()

  const navigateToHome = () => navigate(PATH_ROOT)

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
