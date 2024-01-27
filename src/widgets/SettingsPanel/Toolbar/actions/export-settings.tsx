import { DropdownMenu } from '@radix-ui/themes'

import { ButtonExport } from '@ui/ButtonExport'
import { DownloadIcon } from '@ui/icons/DownloadIcon'
import { useTabsStore } from '@stores/tabs'
import { useExportSettings } from '@stores/hooks/useExportSettings'

export function ButtonExportSettings() {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const { exportSettings } = useExportSettings(selectedTab)

  return <ButtonExport tooltipContent='Export Settings' onClick={exportSettings} />
}

export function DropdownItemExportSettings({ onClose }: DropdownItemProps) {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const { exportSettings } = useExportSettings(selectedTab)

  const handleClick = (ev: Event) => {
    /*
     * Prevent the DropdownMenu from closing after clicking on the item.
     */
    ev.preventDefault()

    exportSettings()
    onClose()
  }

  return (
    <DropdownMenu.Item onSelect={handleClick}>
      Export <DownloadIcon width='16px' height='16px' label='export settings' />
    </DropdownMenu.Item>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
