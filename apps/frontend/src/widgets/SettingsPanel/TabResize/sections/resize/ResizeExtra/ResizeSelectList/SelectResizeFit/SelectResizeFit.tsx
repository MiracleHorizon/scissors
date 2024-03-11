import { useCallback } from 'react'

import { OptionSelect, type OptionSelectData } from '@components/OptionSelect'
import { ResizeFitExamplesPopover } from './ResizeFitExamplesPopover'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_FIT, RESIZE_FIT, type ResizeFit } from '@server/sharp'

const data: OptionSelectData<ResizeFit> = [
  {
    value: Object.values(RESIZE_FIT)
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
