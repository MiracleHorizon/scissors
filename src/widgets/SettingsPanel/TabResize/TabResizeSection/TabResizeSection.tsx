import { Flex, type PaddingProps } from '@radix-ui/themes'
import type { FC, PropsWithChildren } from 'react'

import styles from './TabResizeSection.module.css'

const padding: PaddingProps = {
  pr: {
    initial: '0',
    sm: '3'
  }
}

export const TabResizeSection: FC<PropsWithChildren> = ({ children }) => (
  <Flex
    {...padding}
    asChild
    align='start'
    direction='column'
    gap='2'
    width='100%'
    data-id='tab-resize-section'
    className={styles.root}
  >
    <section>{children}</section>
  </Flex>
)
