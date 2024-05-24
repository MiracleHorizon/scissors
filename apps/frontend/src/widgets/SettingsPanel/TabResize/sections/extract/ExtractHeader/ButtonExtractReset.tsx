import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useExtractStore } from '@stores/extract'

export const ButtonExtractReset = () => {
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
