import dynamic from 'next/dynamic'
import { Grid, Skeleton } from '@radix-ui/themes'

import { DIRECTION_MODEL, useExtendStore } from '@stores/extend'

const InputSkeleton = () => <Skeleton height='32px' width='100%' />

const ExtendDirectionFormNumber = dynamic(
  () => import('./ExtendDirectionFormNumber').then(mod => mod.ExtendDirectionFormNumber),
  {
    ssr: false,
    loading: () => <InputSkeleton />
  }
)
const ExtendDirectionFormAxis = dynamic(
  () => import('./ExtendDirectionFormAxis').then(mod => mod.ExtendDirectionFormAxis),
  {
    ssr: false,
    loading: () => (
      <>
        <InputSkeleton />
        <InputSkeleton />
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
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
        <InputSkeleton />
      </>
    )
  }
)

const variants = {
  [DIRECTION_MODEL.NUMBER]: ExtendDirectionFormNumber,
  [DIRECTION_MODEL.AXIS]: ExtendDirectionFormAxis,
  [DIRECTION_MODEL.SEPARATED]: ExtendDirectionFormSeparated
}

export const ExtendDirectionForm=()=> {
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
