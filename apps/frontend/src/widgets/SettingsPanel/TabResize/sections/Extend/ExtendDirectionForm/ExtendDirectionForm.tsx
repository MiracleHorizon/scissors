import { useMemo } from 'react'
import { Grid } from '@radix-ui/themes'

import { ExtendDirectionFormNumber } from './ExtendDirectionFormNumber'
import { ExtendDirectionFormAxis } from './ExtendDirectionFormAxis'
import { ExtendDirectionFormSeparated } from './ExtendDirectionFormSeparated'
import { DIRECTION_MODEL, useExtendStore } from '@stores/extend'

const variants = {
  [DIRECTION_MODEL.NUMBER]: ExtendDirectionFormNumber,
  [DIRECTION_MODEL.AXIS]: ExtendDirectionFormAxis,
  [DIRECTION_MODEL.SEPARATED]: ExtendDirectionFormSeparated
}

// TODO: Dynamic imports?
export function ExtendDirectionForm() {
  const directionModel = useExtendStore(state => state.directionModel)

  const Component = useMemo(() => variants[directionModel], [directionModel])

  return (
    <Grid
      asChild
      columns={directionModel === DIRECTION_MODEL.NUMBER ? '1' : '2'}
      align='center'
      gap='2'
      width='100%'
    >
      <form>
        <Component />
      </form>
    </Grid>
  )
}
