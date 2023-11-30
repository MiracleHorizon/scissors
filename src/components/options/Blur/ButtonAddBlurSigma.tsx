'use client'

import { useCallback } from 'react'
import { LockClosedIcon } from '@radix-ui/react-icons'

import { BlurIcon } from '@ui/icons'
import { ButtonAddOption } from '@components/ButtonAddOption'
import { useBlurStore } from '@stores/blur'

export function ButtonAddBlurSigma(props: Props) {
  const addSigma = useBlurStore(state => state.addSigma)

  const handleAddSigma = useCallback(() => addSigma(), [addSigma])

  return (
    <ButtonAddOption
      title='Add blur sigma'
      leadIcon={!props.disabled && <BlurIcon width={18} height={18} />}
      onClick={handleAddSigma}
      endIcon={props.disabled && <LockClosedIcon />}
      {...props}
    />
  )
}

interface Props {
  disabled: boolean
}
