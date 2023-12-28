import { Flex } from '@radix-ui/themes'

import { ButtonReset } from '@ui/ButtonReset'
import { ToolbarTabList } from './ToolbarTabList'
import { ButtonRemoveSettings } from './ButtonRemoveSettings'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import styles from './Toolbar.module.css'

export function Toolbar({ activeTab }: Props) {
  const { handleReset } = useResetSettings()

  return (
    <Flex align='center' justify='between' pl='3' className={styles.root}>
      <ToolbarTabList />

      {activeTab === 'default' && (
        <Flex align='center' justify='end' gap='1' py='2' px='3'>
          <ButtonReset tooltipContent='Reset All Settings' onClick={handleReset} />
          <ButtonRemoveSettings />
        </Flex>
      )}
    </Flex>
  )
}

interface Props {
  activeTab: string
}
