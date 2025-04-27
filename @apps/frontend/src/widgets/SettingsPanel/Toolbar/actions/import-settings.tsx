import { UploadIcon } from '@scissors/react-icons/UploadIcon'

import { ToolbarMobileMenuItem } from '../ToolbarMobileMenu'
import { FileUploader } from '@components/FileUploader'
import { ButtonUpload } from '@ui/ButtonUpload'
import { useTabsStore } from '@stores/tabs'
import { useImportSettings } from '@stores/hooks/useImportSettings'
import { ConfirmAlert } from '@components/alerts/ConfirmAlert'

const ConfirmImportAlert = (props: {
  open: boolean
  onConfirm: VoidFunction
  onCancel: VoidFunction
}) => (
  <ConfirmAlert
    {...props}
    title='Import settings'
    description='All your selected settings will be overwritten. Are you sure you want to proceed?'
    confirmLabel='Import'
    maxWidth='390px'
  />
)

const ValidationAlert = (props: { open: boolean; onCancel: VoidFunction }) => (
  <ConfirmAlert
    {...props}
    title='Invalid settings'
    description='The file may have been corrupted. Please check it and try again'
    canselLabel='Close'
    withTitleExclamation
  />
)

export const ButtonImportSettings = () => {
  const selectedTab = useTabsStore(state => state.selectedTab)

  const {
    isConfirmAlertOpen,
    isValidationAlertOpen,
    handleImport,
    handleConfirmImport,
    handleCancelImport,
    handleCloseValidationAlert
  } = useImportSettings(selectedTab)

  return (
    <>
      <ButtonUpload accept='.json' tooltipContent='Import Settings' setFile={handleImport} />

      {isConfirmAlertOpen && (
        <ConfirmImportAlert open onConfirm={handleConfirmImport} onCancel={handleCancelImport} />
      )}

      {isValidationAlertOpen && <ValidationAlert open onCancel={handleCloseValidationAlert} />}
    </>
  )
}

interface ItemProps {
  onClick?: VoidFunction
}

export const ItemImportSettings = ({ onClick }: ItemProps) => {
  const selectedTab = useTabsStore(state => state.selectedTab)

  const {
    isConfirmAlertOpen,
    isValidationAlertOpen,
    handleImport,
    handleConfirmImport,
    handleCancelImport,
    handleCloseValidationAlert
  } = useImportSettings(selectedTab)

  const handleConfirm = () => {
    handleConfirmImport()
    onClick?.()
  }

  const handleCancel = () => {
    handleCancelImport()
    onClick?.()
  }

  const handleCloseValidation = () => {
    handleCloseValidationAlert()
    onClick?.()
  }

  return (
    <>
      <FileUploader accept='.json' setFile={handleImport}>
        <ToolbarMobileMenuItem
          label='Import'
          icon={<UploadIcon width='20px' height='20px' label='import settings' />}
        />
      </FileUploader>

      {isConfirmAlertOpen && (
        <ConfirmImportAlert open onConfirm={handleConfirm} onCancel={handleCancel} />
      )}

      {isValidationAlertOpen && <ValidationAlert open onCancel={handleCloseValidation} />}
    </>
  )
}
