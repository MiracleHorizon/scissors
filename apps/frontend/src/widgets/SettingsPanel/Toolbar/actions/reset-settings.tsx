import { type ComponentPropsWithoutRef, useCallback } from 'react'
import { DropdownMenu } from '@radix-ui/themes'

import { ConfirmSettingsResetAlert } from '@components/alerts/ConfirmSettingsResetAlert'
import { ResetIcon } from '@ui/icons/ResetIcon'
import { ButtonReset } from '@ui/ButtonReset'
import { useResetSettings } from '@stores/hooks/useResetSettings'
import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

function WithConfirmAlert({ children, onCancel, onConfirm }: WithConfirmAlertProps) {
  const { handleReset } = useResetSettings()
  const { handleRemove } = useRemoveSettings()

  const handleConfirm = useCallback(
    (removeAll: boolean) => {
      if (onConfirm) onConfirm()
      handleReset()
      if (removeAll) handleRemove()
    },
    [onConfirm, handleReset, handleRemove]
  )

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
        Reset <ResetIcon width='18px' height='18px' />
      </DropdownMenu.Item>
    </WithConfirmAlert>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
