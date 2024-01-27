import { DropdownMenu } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { ResetIcon } from '@ui/icons/ResetIcon'
import { ButtonReset } from '@ui/ButtonReset'
import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { useResetSettings } from '@stores/hooks/useResetSettings'

function WithConfirmAlert({ children, onConfirm }: WithConfirmAlertProps) {
  const { handleReset } = useResetSettings()

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
    handleReset()
  }

  return (
    <ConfirmAlert
      title='Confirm Reseting'
      description='Are you sure? All settings will be reset to default values!'
      onConfirm={handleConfirm}
    >
      {children}
    </ConfirmAlert>
  )
}

type WithConfirmAlertProps = PropsWithChildren<{
  onConfirm?: VoidFunction
}>

export const ButtonSettingsReset = () => (
  <WithConfirmAlert>
    <ButtonReset tooltipContent='Reset All Settings' />
  </WithConfirmAlert>
)

export function DropdownItemResetSettings({ onClose }: DropdownItemProps) {
  const handleClick = (ev: Event) => {
    /*
     * Prevent the DropdownMenu from closing after clicking on the item.
     */
    ev.preventDefault()
  }

  return (
    <WithConfirmAlert onConfirm={onClose}>
      <DropdownMenu.Item color='red' onSelect={handleClick}>
        Reset <ResetIcon width='16px' height='16px' />
      </DropdownMenu.Item>
    </WithConfirmAlert>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
