import { Flex, Separator } from '@radix-ui/themes'

import { ToolbarTabList } from './ToolbarTabList'
import { ButtonImportSettings } from './ButtonImportSettings'
import { ButtonExportSettings } from './ButtonExportSettings'
import { ButtonSettingsRemove } from './ButtonSettingsRemove'
import { ButtonSettingsReset } from './ButtonSettingsReset'
import { ToolbarRandomizeMenu } from './ToolbarRandomizeMenu'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import styles from './Toolbar.module.css'

export function Toolbar() {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex align='center' justify='between' pl='3' className={styles.root}>
      <ToolbarTabList />

      <Flex align='center' justify='end' gap='1' py='2' px='3'>
        <ButtonImportSettings />
        <ButtonExportSettings />

        {selectedTab === TOOLBAR_TAB.CONVERT && (
          <>
            <ToolbarRandomizeMenu />

            <Separator orientation='vertical' mx='1' />

            <ButtonSettingsReset />
            <ButtonSettingsRemove />
          </>
        )}
      </Flex>
    </Flex>
  )
}
