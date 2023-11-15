import { Flex } from '@radix-ui/themes'

import { ToggleTheme } from '@components/ToggleTheme'
import type { Theme } from '@shared/theme'
import styles from './LayoutHeader.module.css'

export function LayoutHeader({ theme }: Props) {
  return (
    <Flex
      asChild
      align='center'
      justify='end'
      width='100%'
      height='8'
      px='4'
      py='2'
      className={styles.root}
    >
      <header>
        <ToggleTheme theme={theme} />
      </header>
    </Flex>
  )
}

interface Props {
  theme: Theme
}
