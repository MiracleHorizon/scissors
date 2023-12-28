'use client'

import { useCallback } from 'react'

import { ButtonReset } from '@ui/ButtonReset'
import { useExtendStore } from '@stores/extend'
import type { ClassNameProps } from '@app-types/ClassNameProps'

export function ButtonExtendReset(props: ClassNameProps) {
  const resetExtend = useExtendStore(state => state.reset)

  const handleResetExtend = useCallback(() => resetExtend(), [resetExtend])

  return (
    <ButtonReset
      {...props}
      variant='outline'
      radius='large'
      tooltipContent='Reset Extending'
      onClick={handleResetExtend}
    />
  )
}
