import { ButtonExport } from '@ui/ButtonExport'
import { useConvertSettings } from '@stores/hooks/useConvertSettings'

export function ButtonExportSettings() {
  const settings = useConvertSettings()

  const exportSettings = () => {
    const settingsJSON = JSON.stringify(settings, null, 2)
    const blob = new Blob([settingsJSON], {
      type: 'application/json'
    })

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'morph-settings.json'
    link.click()
  }

  return <ButtonExport tooltipContent='Export Settings' onClick={exportSettings} />
}
