import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import { useTabResizeStore } from '@stores/tab-resize'
import type { ResizeSettings } from '@server/Sharp'

export function useResizeSettings(): ResizeSettings {
  const queue = useTabResizeStore(state => state.getQueue())
  const resize = useResizeStore(state => state.getResizeOptions())
  const extend = useExtendStore(state => state.getExtendOptions())

  return {
    queue,
    resize,
    extend
  }
}
