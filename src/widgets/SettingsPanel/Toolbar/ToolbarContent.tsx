import { Flex, Separator } from '@radix-ui/themes'

import { ButtonImportSettings } from './actions/import-settings'
import { ButtonExportSettings } from './actions/export-settings'
import { ButtonSettingsReset } from './actions/reset-settings'
import { ButtonSettingsRemove } from './actions/remove-settings'
import { ToolbarRandomizeMenu } from './ToolbarRandomizeMenu'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function ToolbarContent(props: ClassNameProps) {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex align='center' justify='end' gap='1' py='2' px='3' {...props}>
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
  )
}
