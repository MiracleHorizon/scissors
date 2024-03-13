import { Flex } from '@radix-ui/themes'

import { ToolbarTabMenu } from './ToolbarTabMenu'
import { ToolbarContent } from './ToolbarContent'
import styles from './Toolbar.module.css'

export const Toolbar = () => (
  <Flex px='3' align='center' justify='between' className={styles.root}>
    <ToolbarTabMenu />
    <ToolbarContent />
  </Flex>
)
