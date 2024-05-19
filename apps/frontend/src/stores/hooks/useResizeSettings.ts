import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import { useExtractStore } from '@stores/extract'
import { useTrimStore } from '@stores/trim'
import { useTabResizeStore } from 'src/widgets/settings-panel/tab-resize'
import type { ResizeSettings } from '@scissors/sharp'

export function useResizeSettings(): ResizeSettings {
  const queue = useTabResizeStore(state => state.getQueue())
  const resize = useResizeStore(state => state.getResizeOptions())
  const extend = useExtendStore(state => state.getExtendOptions())
  const extract = useExtractStore(state => state.getExtractRegion())
  const trim = useTrimStore(state => state.getTrimOptions())

  return {
    queue,
    resize,
    extend,
    extract,
    trim
  }
}
