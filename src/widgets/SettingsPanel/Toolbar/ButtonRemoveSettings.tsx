'use client'

import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'
import { ButtonDelete } from '@ui/ButtonDelete'

export function ButtonRemoveSettings() {
  const { handleRemove } = useRemoveSettings()

  return <ButtonDelete tooltipContent='Remove All Settings' onClick={handleRemove} />
}
