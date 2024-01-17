'use client'

import { useCallback, useState } from 'react'
import dynamic from 'next/dynamic'

import { ButtonImport } from '@ui/ButtonImport'
import { TOOLBAR_TAB, useTabsStore } from '@stores/tabs'
import { useSettingsSetters } from '@stores/hooks/useSettingsSetters'
import { YupSettingsValidator } from '@utils/YupSettingsValidator'

const ConfirmAlert = dynamic(
  () => import('@components/alerts/ConfirmAlert').then(mod => mod.ConfirmAlert),
  { ssr: false }
)

export function ButtonImportSettings() {
  const [data, setData] = useState<unknown>(null)
  const [isConfirmAlertOpen, setIsConfirmAlertOpen] = useState(false)
  const [isValidationAlertOpen, setIsValidationAlertOpen] = useState(false)
  const selectedTab = useTabsStore(state => state.selectedTab)

  const { setters } = useSettingsSetters()

  const handleOpenConfirmAlert = () => setIsConfirmAlertOpen(true)
  const handleCloseConfirmAlert = () => setIsConfirmAlertOpen(false)

  const handleOpenValidationAlert = () => setIsValidationAlertOpen(true)
  const handleCloseValidationAlert = () => setIsValidationAlertOpen(false)

  const validateSettings = useCallback(
    (settings: unknown) => {
      switch (selectedTab) {
        case TOOLBAR_TAB.DEFAULT:
          return YupSettingsValidator.validateConvert(settings)
        case TOOLBAR_TAB.RESIZE:
          return YupSettingsValidator.validateResize(settings)
        default:
          return false
      }
    },
    [selectedTab]
  )

  const handleImport = async (file: File | null): Promise<void> => {
    if (!file) return

    const fileReader = new FileReader()
    const fileReaderPromise = new Promise<string>((resolve, reject) => {
      fileReader.onload = () => {
        const result = fileReader.result

        if (!result) {
          reject('Failed to read file')
        }

        resolve(result as string)
      }

      fileReader.onerror = reject
    })

    fileReader.readAsText(file)

    try {
      const settingsJSON = await fileReaderPromise
      const settings = JSON.parse(settingsJSON)
      const isValid = validateSettings(settings)

      if (!isValid) {
        handleCloseConfirmAlert()
        handleOpenValidationAlert()

        return Promise.reject(new Error('Invalid settings'))
      }

      setData(settings)
      handleOpenConfirmAlert()
    } catch {
      handleOpenValidationAlert()
    }
  }

  const handleConfirmImport = () => {
    handleCloseConfirmAlert()

    if (!data) return

    for (const [key, value] of Object.entries(data)) {
      if (!(key in setters)) continue

      // eslint-disable-next-line
      // @ts-expect-error
      setters[key](value)
    }
  }

  const handleCancelImport = () => {
    handleCloseConfirmAlert()
    setData(null)
  }

  return (
    <>
      <ButtonImport accept='.json' tooltipContent='Import Settings' setFile={handleImport} />

      {isConfirmAlertOpen && (
        <ConfirmAlert
          open={isConfirmAlertOpen}
          title='Confirm Import'
          description='Are you sure? All settings will be overwritten!'
          onConfirm={handleConfirmImport}
          onCancel={handleCancelImport}
        />
      )}

      {isValidationAlertOpen && (
        <ConfirmAlert
          open={isValidationAlertOpen}
          title='Invalid Settings'
          description='Please check the JSON format'
          canselLabel='Close'
          withTitleExclamation
          onCancel={handleCloseValidationAlert}
        />
      )}
    </>
  )
}
