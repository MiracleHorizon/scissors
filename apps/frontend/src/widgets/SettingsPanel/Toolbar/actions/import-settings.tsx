import dynamic from 'next/dynamic'
import type { FC } from 'react'

import { UploadIcon } from '@scissors/react-icons/UploadIcon'

import { ToolbarMobileMenuItem } from '../ToolbarMobileMenu'
import { type ComponentProps, withFileUploader } from '@hoc/withFileUploader'
import { ButtonUpload } from '@ui/ButtonUpload'
import { useTabsStore } from '@stores/tabs'
import { useImportSettings } from '@stores/hooks/useImportSettings'

const ConfirmAlert = dynamic(
  () => import('@components/alerts/ConfirmAlert').then(mod => mod.ConfirmAlert),
  {
    ssr: false
  }
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
    maxWidth='390px'
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

const ItemWithImport: FC<ComponentProps> = ({
  children,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  isDragOver: _isDragOver,
  ...props
}) => (
  <ToolbarMobileMenuItem
    label='Import'
    icon={<UploadIcon width='20px' height='20px' label='import settings' />}
    {...props}
  >
    {children}
  </ToolbarMobileMenuItem>
)

ItemWithImport.displayName = 'ItemWithImport'
const MobileItem = withFileUploader(ItemWithImport)

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
      <MobileItem accept='.json' setFile={handleImport} />

      {isConfirmAlertOpen && (
        <ConfirmImportAlert open onConfirm={handleConfirm} onCancel={handleCancel} />
      )}

      {isValidationAlertOpen && <ValidationAlert open onCancel={handleCloseValidation} />}
    </>
  )
}

interface ItemProps {
  onClick?: VoidFunction
}
