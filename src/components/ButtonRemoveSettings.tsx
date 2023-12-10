'use client'

import { IconButton, Tooltip } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'

import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

const iconStyle = {
  marginTop: '1px'
}

export function ButtonRemoveSettings() {
  const { handleRemove } = useRemoveSettings()

  return (
    <Tooltip delayDuration={900} content='Remove all settings'>
      <IconButton size='2' onClick={handleRemove}>
        <TrashIcon width='20px' height='20px' style={iconStyle} />
      </IconButton>
    </Tooltip>
  )
}
