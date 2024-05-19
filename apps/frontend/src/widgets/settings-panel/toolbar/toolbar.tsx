import { Flex } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'

import { ToolbarTabMenu } from './toolbar-tab-menu'
import { ToolbarContent } from './toolbar-content'
import styles from './toolbar.module.css'

const padding: PaddingProps = {
  pl: '3',
  pr: {
    initial: '4',
    md: '3'
  }
} as const

export const Toolbar = () => (
  <Flex {...padding} align='center' justify='between' className={styles.root}>
    <ToolbarTabMenu />
    <ToolbarContent />
  </Flex>
)
