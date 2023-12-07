'use client'

import { Button, Tooltip } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'

import { useRemoveSettings } from '@stores/hooks/useRemoveSettings'

const iconStyle = {
  marginTop: '1px'
}

export function ButtonRemoveSettings() {
  const { handleRemove } = useRemoveSettings()

  return (
    <Tooltip delayDuration={900} content='Remove all settings'>
      <Button size='2' variant='outline' onClick={handleRemove}>
        Remove
        <TrashIcon width='20px' height='20px' style={iconStyle} />
      </Button>
    </Tooltip>
  )
}
