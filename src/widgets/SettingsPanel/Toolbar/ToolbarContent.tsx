import { Flex, Separator } from '@radix-ui/themes'

import { ButtonImportSettings } from './actions/import-settings'
import { ButtonExportSettings } from './actions/export-settings'
import { ButtonSettingsReset } from './actions/reset-settings'
import { ButtonSettingsRemove } from './actions/remove-settings'
import { ToolbarRandomizeMenu } from './ToolbarRandomizeMenu'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { TOUR_STEP } from '@lib/tour'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function ToolbarContent(props: ClassNameProps) {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex
      data-tourstep={TOUR_STEP.TOOLBAR_ACTIONS}
      align='center'
      justify='end'
      gap='1'
      py='2'
      {...props}
    >
      <Flex align='center' gap='1'>
        <ButtonImportSettings />
        <ButtonExportSettings />

        {selectedTab === TOOLBAR_TAB.CONVERT && <ToolbarRandomizeMenu />}
      </Flex>

      {selectedTab === TOOLBAR_TAB.CONVERT && (
        <>
          <Separator orientation='vertical' mx='1' />

          <Flex align='center' gap='1'>
            <ButtonSettingsReset />
            <ButtonSettingsRemove />
          </Flex>
        </>
      )}
    </Flex>
  )
}