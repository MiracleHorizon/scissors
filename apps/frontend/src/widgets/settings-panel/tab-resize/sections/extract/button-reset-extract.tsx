import { useCallback } from 'react'

import { ButtonReset } from '@ui/button-reset'
import { useExtractStore } from '@stores/extract'

export function ButtonResetExtract() {
  const reset = useExtractStore(state => state.reset)

  const handleReset = useCallback(() => reset(), [reset])

  return (
    <ButtonReset
      tooltipContent='Reset Extracting'
      variant='outline'
      radius='large'
      onClick={handleReset}
    />
  )
}
