'use client'

import { ConfirmAlert } from '@components/alerts/ConfirmAlert'
import { ButtonReset } from '@ui/ButtonReset'
import { useResetSettings } from '@stores/hooks/useResetSettings'

export function ButtonSettingsReset() {
  const { handleReset } = useResetSettings()

  return (
    <ConfirmAlert
      title='Confirm reset of all settings'
      description='All settings will be reset to default values'
      onConfirm={handleReset}
    >
      <ButtonReset tooltipContent='Reset All Settings' onClick={handleReset} />
    </ConfirmAlert>
  )
}
