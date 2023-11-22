'use client'

import { useCallback } from 'react'

import { ResizeSelect } from '../ResizeSelect'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_FIT, ResizeFit } from '@libs/Sharp'

const data = [
  {
    label: 'Fit',
    value: Object.values(ResizeFit)
  }
]

export function SelectResizeFit() {
  const fit = useResizeStore(state => state.extra?.fit)
  const setFit = useResizeStore(state => state.setFit)

  const handleSetFit = useCallback((value: ResizeFit) => setFit(value), [setFit])

  return (
    <ResizeSelect
      value={fit ?? DEFAULT_RESIZE_FIT}
      defaultValue={DEFAULT_RESIZE_FIT}
      data={data}
      onValueChange={handleSetFit}
    />
  )
}
