import { DropdownMenu } from '@radix-ui/themes'

import { DropdownItemImportSettings } from '../actions/import-settings'
import { DropdownItemExportSettings } from '../actions/export-settings'
import { DropdownItemResetSettings } from '../actions/reset-settings'
import { DropdownItemRemoveSettings } from '../actions/remove-settings'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import styles from './ToolbarDropdownMenuContent.module.css'

// TODO: Add randomize menu
export function ToolbarDropdownMenuContent({ onClose }: Props) {
  const selectedTab = useTabsStore(state => state.selectedTab)

  return (
    <DropdownMenu.Content
      size='2'
      className={styles.root}
      onEscapeKeyDown={onClose}
      onPointerDownOutside={onClose}
    >
      <DropdownItemImportSettings onClose={onClose} />
      <DropdownItemExportSettings onClose={onClose} />

      {selectedTab === TOOLBAR_TAB.CONVERT && (
        <>
          <DropdownMenu.Separator />

          <DropdownItemResetSettings onClose={onClose} />
          <DropdownItemRemoveSettings onClose={onClose} />
        </>
      )}
    </DropdownMenu.Content>
  )
}

interface Props {
  onClose: VoidFunction
}
