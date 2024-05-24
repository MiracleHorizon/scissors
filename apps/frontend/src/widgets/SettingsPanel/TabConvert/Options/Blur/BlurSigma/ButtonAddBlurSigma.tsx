import { useCallback } from 'react'

import { BlurIcon } from '@scissors/react-icons/BlurIcon'
import { LockClosedIcon } from '@scissors/react-icons/LockClosedIcon'

import { ButtonAddOption } from '@widgets/SettingsPanel/ButtonAddOption'
import { useBlurStore } from '@stores/blur'

export const ButtonAddBlurSigma=(props: Props) =>{
  const add = useBlurStore(state => state.addSigma)
  const handleAddSigma = useCallback(() => add(), [add])

  return (
    <ButtonAddOption
      label='Add Sigma'
      leadIcon={!props.disabled && <BlurIcon width={18} height={18} label='add blur sigma' />}
      onClick={handleAddSigma}
      endIcon={props.disabled && <LockClosedIcon label='blur sigma locked' />}
      {...props}
    />
  )
}

interface Props {
  disabled: boolean
}
