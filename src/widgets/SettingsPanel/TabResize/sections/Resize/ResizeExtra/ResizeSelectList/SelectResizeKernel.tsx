import { useCallback } from 'react'

import { OptionSelect } from '@components/OptionSelect'
import { useResizeStore } from '@stores/resize'
import { DEFAULT_RESIZE_KERNEL, RESIZE_KERNEL, type ResizeKernel } from '@server/sharp'

const data = [
  {
    value: Object.values(RESIZE_KERNEL)
  }
]

export function SelectResizeKernel() {
  const kernel = useResizeStore(state => state.kernel)
  const setKernel = useResizeStore(state => state.setKernel)

  const handleSetKernel = useCallback((value: ResizeKernel) => setKernel(value), [setKernel])

  return (
    <OptionSelect
      label='Kernel'
      value={kernel ?? DEFAULT_RESIZE_KERNEL}
      defaultValue={DEFAULT_RESIZE_KERNEL}
      data={data}
      onValueChange={handleSetKernel}
    />
  )
}
