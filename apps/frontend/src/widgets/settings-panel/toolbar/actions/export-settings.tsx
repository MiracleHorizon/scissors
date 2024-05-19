import { DownloadIcon } from '@scissors/react-icons/DownloadIcon'

import { ButtonDownload } from '@ui/button-download'
import { ToolbarMobileMenuItem } from '../toolbar-mobile-menu'
import { useExportSettings } from '@stores/hooks/useExportSettings'
import { useTabsStore } from '@stores/tabs'

export function ButtonExportSettings() {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const { exportSettings } = useExportSettings(selectedTab)

  return <ButtonDownload tooltipContent='Export Settings' onClick={exportSettings} />
}

export function ItemExportSettings({ onClick }: ItemProps) {
  const selectedTab = useTabsStore(state => state.selectedTab)
  const { exportSettings } = useExportSettings(selectedTab)

  const handleClick = () => {
    exportSettings()
    onClick?.()
  }

  return (
    <ToolbarMobileMenuItem
      label='Export'
      icon={<DownloadIcon width='20px' height='20px' label='export settings' />}
      onClick={handleClick}
    />
  )
}

interface ItemProps {
  onClick?: VoidFunction
}
