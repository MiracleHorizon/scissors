import { DropdownMenu } from '@radix-ui/themes'
import type { ComponentPropsWithoutRef } from 'react'

import { ConfirmSettingsRemoveAlert } from '@components/alerts/ConfirmSettingsRemoveAlert'
import { TrashIcon } from '@ui/icons/TrashIcon'
import { ButtonDelete } from '@ui/ButtonDelete'
import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

function WithConfirmAlert({ children, onCancel, onConfirm }: WithConfirmAlertProps) {
  const { handleRemove } = useRemoveSettings()

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
    handleRemove()
  }

  return (
    <ConfirmSettingsRemoveAlert onCancel={onCancel} onConfirm={handleConfirm}>
      {children}
    </ConfirmSettingsRemoveAlert>
  )
}

type WithConfirmAlertProps = Pick<
  ComponentPropsWithoutRef<typeof ConfirmSettingsRemoveAlert>,
  'children' | 'onCancel'
> & {
  onConfirm?: VoidFunction
}

export const ButtonSettingsRemove = () => (
  <WithConfirmAlert>
    <ButtonDelete tooltipContent='Remove All Settings' />
  </WithConfirmAlert>
)

export function DropdownItemRemoveSettings({ onClose }: DropdownItemProps) {
  const handleClick = (ev: Event) => {
    /*
     * Prevent the DropdownMenu from closing after clicking on the item.
     */
    ev.preventDefault()
  }

  return (
    <WithConfirmAlert onConfirm={onClose}>
      <DropdownMenu.Item color='red' onSelect={handleClick}>
        Delete <TrashIcon width='17px' height='17px' />
      </DropdownMenu.Item>
    </WithConfirmAlert>
  )
}

interface DropdownItemProps {
  onClose: VoidFunction
}
