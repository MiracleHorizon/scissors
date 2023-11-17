import { useCallback } from 'react'
import { Tooltip } from '@radix-ui/themes'

import { ButtonDelete } from '@ui/ButtonDelete'
import { useConvertStore } from '@stores/convert'

export function ButtonRemoveBlurSigma({ disabled }: Props) {
  const removeBlurSigma = useConvertStore(state => state.removeBlurSigma)

  const handleRemoveBlurSigma = useCallback(() => removeBlurSigma(), [removeBlurSigma])

  const isTooltipOpen = () => {
    if (!disabled) return

    return false
  }

  return (
    <Tooltip open={isTooltipOpen()} content='Remove blur sigma'>
      <ButtonDelete disabled={disabled} onClick={handleRemoveBlurSigma} />
    </Tooltip>
  )
}

interface Props {
  disabled: boolean
}
