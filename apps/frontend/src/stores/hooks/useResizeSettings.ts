import { useResizeStore } from '@stores/resize'
import { useExtendStore } from '@stores/extend'
import { useExtractStore } from '@stores/extract'
import { useTrimStore } from '@stores/trim'
import { useOutputStore } from '@stores/output'
import { useTabResizeStore } from '@widgets/SettingsPanel/TabResize'
import type { ResizeSettings } from '@scissors/sharp'

export const useResizeSettings = (): ResizeSettings => {
  const queue = useTabResizeStore(state => state.getQueue())
  const resize = useResizeStore(state => state.getResizeOptions())
  const extend = useExtendStore(state => state.getExtendOptions())
  const extract = useExtractStore(state => state.getExtractRegion())
  const trim = useTrimStore(state => state.getTrimOptions())
  const outputFormat = useOutputStore(state => state.getOutputFormat())

  return {
    queue,
    resize,
    extend,
    extract,
    trim,
    outputFormat
  }
}
