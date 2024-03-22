import dynamic from 'next/dynamic'
import { Grid } from '@radix-ui/themes'

import { ExtendDirectionFormInputSkeleton } from './skeletons'
import { DIRECTION_MODEL, useExtendStore } from '@stores/extend'

const ExtendDirectionFormNumber = dynamic(
  () => import('./ExtendDirectionFormNumber').then(mod => mod.ExtendDirectionFormNumber),
  {
    ssr: false,
    loading: () => <ExtendDirectionFormInputSkeleton />
  }
)
const ExtendDirectionFormAxis = dynamic(
  () => import('./ExtendDirectionFormAxis').then(mod => mod.ExtendDirectionFormAxis),
  {
    ssr: false,
    loading: () => (
      <>
        <ExtendDirectionFormInputSkeleton />
        <ExtendDirectionFormInputSkeleton />
      </>
    )
  }
)
const ExtendDirectionFormSeparated = dynamic(
  () => import('./ExtendDirectionFormSeparated').then(mod => mod.ExtendDirectionFormSeparated),
  {
    ssr: false,
    loading: () => (
      <>
        <ExtendDirectionFormInputSkeleton />
        <ExtendDirectionFormInputSkeleton />
        <ExtendDirectionFormInputSkeleton />
        <ExtendDirectionFormInputSkeleton />
      </>
    )
  }
)

const variants = {
  [DIRECTION_MODEL.NUMBER]: ExtendDirectionFormNumber,
  [DIRECTION_MODEL.AXIS]: ExtendDirectionFormAxis,
  [DIRECTION_MODEL.SEPARATED]: ExtendDirectionFormSeparated
}

export function ExtendDirectionForm() {
  const directionModel = useExtendStore(state => state.directionModel)
  const Component = variants[directionModel]

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
