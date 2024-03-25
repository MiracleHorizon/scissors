import { useCallback } from 'react'

import { DEFAULT_RESIZE_FIT, RESIZE_FIT, type ResizeFit } from '@scissors/sharp'

import { OptionSelect, type OptionSelectData } from '@components/OptionSelect'
import { ResizeFitExamplesPopover } from './ResizeFitExamplesPopover'
import { useResizeStore } from '@stores/resize'

const data: OptionSelectData<ResizeFit> = [
  {
    value: Object.values(RESIZE_FIT)
  }
] as const

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
