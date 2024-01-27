import { DropdownMenu } from '@radix-ui/themes'
import type { PropsWithChildren } from 'react'

import { TrashIcon } from '@ui/icons/TrashIcon'
import { ButtonDelete } from '@ui/ButtonDelete'
import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

function WithConfirmAlert({ children, onConfirm }: WithConfirmAlertProps) {
  const { handleRemove } = useRemoveSettings()

  const handleConfirm = () => {
    if (onConfirm) onConfirm()
    handleRemove()
  }

  return (
    <ConfirmAlert
      title='Confirm Removing'
      description='Are you sure? All settings will be removed!'
      onConfirm={handleConfirm}
    >
      {children}
    </ConfirmAlert>
  )
}

type WithConfirmAlertProps = PropsWithChildren<{
  onConfirm?: VoidFunction
}>

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
