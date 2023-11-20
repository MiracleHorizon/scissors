'use client'

import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveGamma() {
  const removeGamma = useConvertStore(state => state.removeGamma)

  const handleRemoveGamma = useCallback(() => removeGamma(), [removeGamma])

  return (
    <Tooltip content='Remove gamma'>
      <ButtonDelete onClick={handleRemoveGamma} />
    </Tooltip>
  )
}
