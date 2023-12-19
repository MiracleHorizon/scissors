import { Flex } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ButtonReset } from '@components/ButtonReset'
import { ButtonRemoveSettings } from '@components/ButtonRemoveSettings'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import styles from './Toolbar.module.css'

export function Toolbar({ activeTab }: Props) {
  const { handleReset } = useResetSettings()

  return (
    <Flex justify='between' className={styles.root}>
      <ToolbarTabList />

      {activeTab === 'default' && (
        <Flex align='center' justify='end' gap='1' py='2' px='3'>
          <ButtonReset tooltipTitle='Reset all settings' onClick={handleReset} />
          <ButtonRemoveSettings />
        </Flex>
      )}
    </Flex>
  )
}

interface Props {
  activeTab: string
}
