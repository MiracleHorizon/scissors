import { Flex } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ToolbarContent } from './ToolbarContent'
import { ToolbarDropdownMenu } from './ToolbarDropdownMenu'
import styles from './Toolbar.module.css'

// TODO: dynamic import with react-responsive / react-device-detect
export const Toolbar = () => (
  <Flex px='3' align='center' justify='between' className={styles.root}>
    <ToolbarTabList />
    <ToolbarContent className={styles.content} />
    <ToolbarDropdownMenu triggerClassName={styles.dropdownMenuTrigger} />
  </Flex>
)
