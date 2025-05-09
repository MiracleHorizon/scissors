import { useCallback } from 'react'

import { DEFAULT_RESIZE_KERNEL, RESIZE_KERNEL, type ResizeKernel } from '@scissors/sharp'

import { Select, type SelectData } from '@lib/ui/Select'
import { useResizeStore } from '@stores/resize'

const data: SelectData = [
  {
    value: Object.values(RESIZE_KERNEL)
  }
] as const

export const SelectResizeKernel = () => {
  const kernel = useResizeStore(state => state.kernel)
  const setKernel = useResizeStore(state => state.setKernel)

  const handleSetKernel = useCallback((value: ResizeKernel) => setKernel(value), [setKernel])

  return (
    <Select
      label='Kernel'
      data={data}
      value={kernel ?? DEFAULT_RESIZE_KERNEL}
      defaultValue={DEFAULT_RESIZE_KERNEL}
      triggerCySelector='sl-resize-kernel-trigger'
      contentCySelector='sl-resize-kernel-content'
      onValueChange={handleSetKernel}
    />
  )
}
