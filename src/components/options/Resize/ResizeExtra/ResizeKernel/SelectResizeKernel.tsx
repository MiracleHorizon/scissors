'use client'

import { useCallback } from 'react'

import { ResizeSelect } from '../ResizeSelect'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_KERNEL, ResizeKernel } from '@libs/Sharp'

const data = [
  {
    label: 'Kernel',
    value: Object.values(ResizeKernel)
  }
]

export function SelectResizeKernel() {
  const kernel = useResizeStore(state => state.extra?.kernel)
  const setKernel = useResizeStore(state => state.setKernel)

  const handleSetKernel = useCallback((value: ResizeKernel) => setKernel(value), [setKernel])

  return (
    <ResizeSelect
      value={kernel ?? DEFAULT_RESIZE_KERNEL}
      defaultValue={DEFAULT_RESIZE_KERNEL}
      data={data}
      onValueChange={handleSetKernel}
    />
  )
}
