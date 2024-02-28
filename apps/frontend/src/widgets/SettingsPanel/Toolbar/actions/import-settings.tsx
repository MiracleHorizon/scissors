import dynamic from 'next/dynamic'
import { DropdownMenu } from '@radix-ui/themes'
import type { FC } from 'react'

import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { UploadIcon } from '@ui/icons/UploadIcon'
import { ButtonUpload } from '@ui/ButtonUpload'
import { useTabsStore } from '@stores/tabs'
import { useImportSettings } from '@stores/hooks/useImportSettings'

const ConfirmAlert = dynamic(
  () => import('@components/alerts/ConfirmAlert').then(mod => mod.ConfirmAlert),
  { ssr: false }
)

const ConfirmImportAlert: FC<{
  open: boolean
  onConfirm: VoidFunction
  onCancel: VoidFunction
}> = props => (
  <ConfirmAlert
    {...props}
    title='Import settings'
    description='All your selected settings will be overwritten. Are you sure you want to proceed?'
    confirmLabel='Import'
    maxWidth={390}
  />
)

const ValidationAlert: FC<{
  open: boolean
  onCancel: VoidFunction
}> = props => (
  <ConfirmAlert
    {...props}
    title='Invalid settings'
    description='The file may have been corrupted. Please check it and try again'
    canselLabel='Close'
    withTitleExclamation
  />
)

export function ButtonImportSettings() {
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

function DropdownItemWithImport({
  children,
  onClick
}: Pick<ComponentProps, 'children' | 'onClick'>) {
  const handleClick = (ev: Event) => {
    /*
     * Prevent the DropdownMenu from closing after clicking on the item.
     */
    ev.preventDefault()

    onClick()
  }

  return (
    <DropdownMenu.Item onSelect={handleClick}>
      {children}
      Import
      <UploadIcon width='16px' height='16px' label='import settings' />
    </DropdownMenu.Item>
  )
}

DropdownItemWithImport.displayName = 'DropdownItemWithImport'
const DropdownItem = withFileUploader(DropdownItemWithImport)

export const DropdownItemImportSettings = ({ onClose }: DropdownItemProps) => {
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
    onClose()
  }

  const handleCancel = () => {
    handleCancelImport()
    onClose()
  }

  const handleCloseValidation = () => {
    handleCloseValidationAlert()
    onClose()
  }

  return (
    <>
      <DropdownItem accept='.json' setFile={handleImport} />

      {isConfirmAlertOpen && (
        <ConfirmImportAlert open onConfirm={handleConfirm} onCancel={handleCancel} />
      )}

      {isValidationAlertOpen && <ValidationAlert open onCancel={handleCloseValidation} />}
    </>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
