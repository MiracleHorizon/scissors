import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import type { ResizeSettings } from '@server/Sharp'

export function useResizeSettings(): ResizeSettings {
  const resize = useResizeStore(state => state.getResizeOptions())
  const extend = useExtendStore(state => state.getExtendOptions())

  return {
    resize,
    extend
  }
}
