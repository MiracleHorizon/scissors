import dynamic from 'next/dynamic'
import { useCallback } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { ButtonInfoSkeleton } from '@ui/skeletons/ButtonInfoSkeleton'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_FIT, ResizeFit } from '@server/Sharp'

const ResizeFitExamplesPopover = dynamic(
  () => import('./ResizeFitExamplesPopover').then(mod => mod.ResizeFitExamplesPopover),
  {
    ssr: false,
    loading: () => <ButtonInfoSkeleton variant='minimal' radius='full' withoutMargin />
  }
)

const data = [
  {
    value: Object.values(ResizeFit)
  }
]

export function SelectResizeFit() {
  const fit = useResizeStore(state => state.fit)
  const setFit = useResizeStore(state => state.setFit)

  const handleSetFit = useCallback((value: ResizeFit) => setFit(value), [setFit])

  return (
    <OptionSelect
      label='Fit'
      value={fit ?? DEFAULT_RESIZE_FIT}
      defaultValue={DEFAULT_RESIZE_FIT}
      data={data}
      DetailsComponent={<ResizeFitExamplesPopover />}
      onValueChange={handleSetFit}
    />
  )
}
