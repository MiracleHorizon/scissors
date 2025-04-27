import { lazy, Suspense } from 'react'
import { Grid, Skeleton } from '@radix-ui/themes'

import { DIRECTION_MODEL, useExtendStore } from '@stores/extend'

const InputSkeleton = () => <Skeleton height='32px' width='100%' />
const AxisSkeleton = () => (
  <>
    <InputSkeleton />
    <InputSkeleton />
  </>
)
const SeparatedSkeleton = () => (
  <>
    <InputSkeleton />
    <InputSkeleton />
    <InputSkeleton />
    <InputSkeleton />
  </>
)

const ExtendDirectionFormNumber = lazy(() =>
  import('./ExtendDirectionFormNumber').then(mod => ({ default: mod.ExtendDirectionFormNumber }))
)
const ExtendDirectionFormAxis = lazy(() =>
  import('./ExtendDirectionFormAxis').then(mod => ({ default: mod.ExtendDirectionFormAxis }))
)
const ExtendDirectionFormSeparated = lazy(() =>
  import('./ExtendDirectionFormSeparated').then(mod => ({
    default: mod.ExtendDirectionFormSeparated
  }))
)

const variants = {
  [DIRECTION_MODEL.NUMBER]: {
    component: ExtendDirectionFormNumber,
    fallback: <InputSkeleton />
  },
  [DIRECTION_MODEL.AXIS]: {
    component: ExtendDirectionFormAxis,
    fallback: <AxisSkeleton />
  },
  [DIRECTION_MODEL.SEPARATED]: {
    component: ExtendDirectionFormSeparated,
    fallback: <SeparatedSkeleton />
  }
}

export const ExtendDirectionForm = () => {
  const directionModel = useExtendStore(state => state.directionModel)
  const { component: Component, fallback } = variants[directionModel]

  return (
    <Grid
      asChild
      columns={directionModel === DIRECTION_MODEL.NUMBER ? '1' : '2'}
      align='center'
      gap='2'
      width='100%'
    >
      <form>
        <Suspense fallback={fallback}>
          <Component />
        </Suspense>
      </form>
    </Grid>
  )
}
