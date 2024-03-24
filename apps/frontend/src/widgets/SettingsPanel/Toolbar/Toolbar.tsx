import { Flex } from '@radix-ui/themes'
import type { PaddingProps } from '@radix-ui/themes/props'

import { ToolbarTabMenu } from './ToolbarTabMenu'
import { ToolbarContent } from './ToolbarContent'
import styles from './Toolbar.module.css'

const padding: PaddingProps = {
  pl: '3',
  pr: {
    initial: '4',
    md: '3'
  }
}

export const Toolbar = () => (
  <Flex {...padding} align='center' justify='between' className={styles.root}>
    <ToolbarTabMenu />
    <ToolbarContent />
  </Flex>
)
