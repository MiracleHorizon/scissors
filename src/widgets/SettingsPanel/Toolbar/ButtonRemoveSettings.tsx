'use client'

import { Tooltip } from '@radix-ui/themes'

import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'
import { ButtonDelete } from '@ui/ButtonDelete.tsx'

export function ButtonRemoveSettings() {
  const { handleRemove } = useRemoveSettings()

  return (
    <Tooltip delayDuration={900} content='Remove all settings'>
      <ButtonDelete onClick={handleRemove} />
    </Tooltip>
  )
}
