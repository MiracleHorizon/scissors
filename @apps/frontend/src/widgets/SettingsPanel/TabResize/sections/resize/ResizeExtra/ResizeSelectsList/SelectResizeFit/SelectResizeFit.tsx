import { useCallback } from 'react'

import { DEFAULT_RESIZE_FIT, RESIZE_FIT, type ResizeFit } from '@scissors/sharp'

import { Select, type SelectData } from '@lib/ui/Select'
import { ResizeFitExamplesPopover } from './ResizeFitExamplesPopover'
import { useResizeStore } from '@stores/resize'

const data: SelectData = [
  {
    value: Object.values(RESIZE_FIT)
  }
] as const

export const SelectResizeFit = () => {
  const fit = useResizeStore(state => state.fit)
  const setFit = useResizeStore(state => state.setFit)

  const handleSetFit = useCallback((value: ResizeFit) => setFit(value), [setFit])

  return (
    <Select
      label='Fit'
      value={fit ?? DEFAULT_RESIZE_FIT}
      defaultValue={DEFAULT_RESIZE_FIT}
      data={data}
      DetailsComponent={<ResizeFitExamplesPopover />}
      triggerCySelector='sl-resize-fit-trigger'
      contentCySelector='sl-resize-fit-content'
      onValueChange={handleSetFit}
    />
  )
}
