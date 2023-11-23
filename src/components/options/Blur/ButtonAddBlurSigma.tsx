import { useCallback } from 'react'
import { Button } from '@radix-ui/themes'

import { useConvertStore } from '@stores/convert'

export function ButtonAddBlurSigma(props: Props) {
  const addBlurSigma = useConvertStore(state => state.addBlurSigma)

  const handleAddBlurSigma = useCallback(() => addBlurSigma(), [addBlurSigma])

  return (
    <Button size='2' onClick={handleAddBlurSigma} {...props}>
      Add blur sigma
    </Button>
  )
}

interface Props {
  disabled: boolean
}
