import { Flex } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ButtonSettingsRemove } from './ButtonSettingsRemove'
import { ButtonSettingsReset } from './ButtonSettingsReset'
import styles from './Toolbar.module.css'

export function Toolbar({ activeTab }: Props) {
  return (
    <Flex align='center' justify='between' pl='3' className={styles.root}>
      <ToolbarTabList />

      {activeTab === 'default' && (
        <Flex align='center' justify='end' gap='1' py='2' px='3'>
          <ButtonSettingsReset />
          <ButtonSettingsRemove />
        </Flex>
      )}
    </Flex>
  )
}

interface Props {
  activeTab: string
}
