import { useCallback, useState } from 'react'

import { useSettingsSetters } from './useSettingsSetters'
import { SettingsValidator } from '@utility/SettingsValidator'
import { readJSONFile } from '@utility/json-file'
import { NULL_CONVERT_SETTINGS } from '@server/sharp'
import { TOOLBAR_TAB, type ToolbarTab } from '@stores/tabs'

export function useImportSettings(selectedTab: ToolbarTab) {
  const [data, setData] = useState<unknown>(null)
  const { setters } = useSettingsSetters()

  const [isConfirmAlertOpen, setIsConfirmAlertOpen] = useState(false)
  const [isValidationAlertOpen, setIsValidationAlertOpen] = useState(false)

  const handleOpenConfirmAlert = () => setIsConfirmAlertOpen(true)
  const handleCloseConfirmAlert = () => setIsConfirmAlertOpen(false)

  const handleOpenValidationAlert = () => setIsValidationAlertOpen(true)
  const handleCloseValidationAlert = () => setIsValidationAlertOpen(false)

  function parseSettings(settingsJSON: string): string | null {
    try {
      return JSON.parse(settingsJSON)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Failed to parse settings JSON', err)

      return null
    }
  }

  const validateSettings = useCallback(
    (settings: unknown) => {
      switch (selectedTab) {
        case TOOLBAR_TAB.CONVERT:
          return SettingsValidator.validateConvert(settings)
        case TOOLBAR_TAB.RESIZE:
          return SettingsValidator.validateResize(settings)
        default:
          return false
      }
    },
    [selectedTab]
  )

  async function handleImport(file: File | null): Promise<void> {
    if (!file) return

    try {
      const settingsJSON = await readJSONFile(file)

      const settings = parseSettings(settingsJSON)
      if (!settings) {
        handleCloseConfirmAlert()
        handleOpenValidationAlert()

        return Promise.reject(new Error('Invalid settings JSON file'))
      }

      const isValid = validateSettings({
        ...NULL_CONVERT_SETTINGS,
        settings
      })
      if (!isValid) {
        handleCloseConfirmAlert()
        handleOpenValidationAlert()

        return Promise.reject(new Error('Invalid settings'))
      }

      setData(settings)
      handleOpenConfirmAlert()
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Failed to import settings', err)

      handleOpenValidationAlert()
    }
  }

  function applySettings() {
    if (!data) return

    for (const [key, value] of Object.entries(data)) {
      if (!(key in setters)) continue

      // eslint-disable-next-line
      // @ts-expect-error
      setters[key](value)
    }
  }

  function handleConfirmImport() {
    handleCloseConfirmAlert()
    applySettings()
  }

  function handleCancelImport() {
    handleCloseConfirmAlert()
    setData(null)
  }

  return {
    isConfirmAlertOpen,
    isValidationAlertOpen,
    handleImport,
    handleConfirmImport,
    handleCancelImport,
    handleCloseValidationAlert
  }
}
