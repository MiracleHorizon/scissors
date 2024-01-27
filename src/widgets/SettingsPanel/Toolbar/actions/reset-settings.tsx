import { DropdownMenu } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { ConfirmSettingsResetAlert } from '@components/alerts/ConfirmSettingsResetAlert'
import { ResetIcon } from '@ui/icons/ResetIcon'
import { ButtonReset } from '@ui/ButtonReset'
import { useResetSettings } from '@stores/hooks/useResetSettings'

function WithConfirmAlert({ children, onCancel, onConfirm }: WithConfirmAlertProps) {
  const { handleReset } = useResetSettings()

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
    handleReset()
  }

  return (
    <ConfirmSettingsResetAlert onCancel={onCancel} onConfirm={handleConfirm}>
      {children}
    </ConfirmSettingsResetAlert>
  )
}

type WithConfirmAlertProps = Pick<
  ComponentPropsWithoutRef<typeof ConfirmSettingsResetAlert>,
  'children' | 'onCancel'
> & {
  onConfirm?: VoidFunction
}

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
    <WithConfirmAlert onConfirm={onClose} onCancel={onClose}>
      <DropdownMenu.Item color='red' onSelect={handleClick}>
        Reset <ResetIcon width='16px' height='16px' />
      </DropdownMenu.Item>
    </WithConfirmAlert>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
