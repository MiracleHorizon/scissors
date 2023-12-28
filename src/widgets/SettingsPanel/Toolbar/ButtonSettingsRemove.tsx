'use client'

import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { ButtonDelete } from '@ui/ButtonDelete'
import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

export function ButtonSettingsRemove() {
  const { handleRemove } = useRemoveSettings()

  return (
    <ConfirmAlert
      title='Confirm removing of all settings'
      description='All settings will be removed'
      onConfirm={handleRemove}
    >
      <ButtonDelete tooltipContent='Remove All Settings' />
    </ConfirmAlert>
  )
}
