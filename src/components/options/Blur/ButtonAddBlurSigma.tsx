'use client'

import { useCallback } from 'react'
import { LockClosedIcon } from '@radix-ui/react-icons'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useConvertStore } from '@stores/convert'

export function ButtonAddBlurSigma(props: Props) {
  const addBlurSigma = useConvertStore(state => state.addBlurSigma)

  const handleAddBlurSigma = useCallback(() => addBlurSigma(), [addBlurSigma])

  return (
    <ButtonAddOption
      title='Add blur sigma'
      onClick={handleAddBlurSigma}
      endIcon={props.disabled && <LockClosedIcon />}
      {...props}
    />
  )
}

interface Props {
  disabled: boolean
}
