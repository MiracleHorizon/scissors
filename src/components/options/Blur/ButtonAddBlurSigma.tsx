'use client'

import { useCallback } from 'react'
import { LockClosedIcon } from '@radix-ui/react-icons'

import { ButtonAddOption } from '@components/ButtonAddOption'
import { useBlurStore } from '@stores/blur'

export function ButtonAddBlurSigma(props: Props) {
  const addSigma = useBlurStore(state => state.addSigma)

  const handleAddSigma = useCallback(() => addSigma(), [addSigma])

  return (
    <ButtonAddOption
      title='Add blur sigma'
      onClick={handleAddSigma}
      endIcon={props.disabled && <LockClosedIcon />}
      {...props}
    />
  )
}

interface Props {
  disabled: boolean
}
