import { Flex, type PaddingProps } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ToolbarContent } from './ToolbarContent'
import { ToolbarDropdownMenu } from './ToolbarDropdownMenu'
import styles from './Toolbar.module.css'

const padding: PaddingProps = {
  pl: '3',
  pr: {
    initial: '3',
    xs: '0'
  }
}

// TODO: dynamic import with react-responsive / react-device-detect
export const Toolbar = () => (
  <Flex {...padding} align='center' justify='between' className={styles.root}>
    <ToolbarTabList />
    <ToolbarContent className={styles.content} />
    <ToolbarDropdownMenu triggerClassName={styles.dropdownMenuTrigger} />
  </Flex>
)
