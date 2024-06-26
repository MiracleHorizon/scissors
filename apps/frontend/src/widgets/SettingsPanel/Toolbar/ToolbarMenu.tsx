import { Flex, Separator } from '@radix-ui/themes'

import { ButtonImportSettings } from './actions/import-settings'
import { ButtonExportSettings } from './actions/export-settings'
import { ButtonRandomizeSettings } from './actions/randomize-settings'
import { ButtonSettingsReset } from './actions/reset-settings'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { TOUR_STEP } from '@lib/tour'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export const ToolbarMenu = (props: ClassNameProps) => {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <Flex
      data-tourstep={TOUR_STEP.TOOLBAR_MENU}
      align='center'
      justify='end'
      gap='1'
      py='2'
      {...props}
    >
      <Flex align='center' gap='1'>
        {selectedTab !== TOOLBAR_TAB.METADATA && (
          <>
            <ButtonImportSettings />
            <ButtonExportSettings />
          </>
        )}

        {selectedTab === TOOLBAR_TAB.CONVERT && <ButtonRandomizeSettings />}
      </Flex>

      {selectedTab !== TOOLBAR_TAB.METADATA && (
        <>
          <Separator orientation='vertical' mx='1' />

          <ButtonSettingsReset />
        </>
      )}
    </Flex>
  )
}
