'use client'

import { useMemo } from 'react'
import { Grid } from '@radix-ui/themes'

import { ExtendDirectionsFormNumber } from './ExtendDirectionsFormNumber'
import { ExtendDirectionsFormAxis } from './ExtendDirectionsFormAxis'
import { ExtendDirectionsFormSeparated } from './ExtendDirectionsFormSeparated'
import { InputMode, useExtendStore } from '@stores/extend'

const variants = {
  [InputMode.NUMBER]: ExtendDirectionsFormNumber,
  [InputMode.AXIS]: ExtendDirectionsFormAxis,
  [InputMode.SEPARATED]: ExtendDirectionsFormSeparated
}

export function ExtendDirectionsForm() {
  const inputMode = useExtendStore(state => state.inputMode)
  const Component = useMemo(() => variants[inputMode], [inputMode])

  return (
    <Grid
      asChild
      columns={inputMode === InputMode.NUMBER ? '1' : '2'}
      align='center'
      gap='2'
      width='100%'
    >
      <form>{<Component />}</form>
    </Grid>
  )
}
