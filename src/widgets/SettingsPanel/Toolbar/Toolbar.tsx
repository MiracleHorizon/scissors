import { Flex } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ToolbarContent } from './ToolbarContent'
import styles from './Toolbar.module.css'

export const Toolbar = () => (
  <Flex px='3' align='center' justify='between' className={styles.root}>
    <ToolbarTabList />
    <ToolbarContent />
  </Flex>
)
