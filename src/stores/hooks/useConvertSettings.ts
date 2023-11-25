import { useConvertStore } from '@stores/convert'
import { useResizeStore } from '@stores/resize'
import { useTintStore } from '@stores/tint'
import { useModulateStore } from '@stores/modulate'
import { useFormatStore } from '@stores/format'
import type { ConvertSettings } from '@libs/Sharp'

export function useConvertSettings(): ConvertSettings {
  const convertSettings = useConvertStore(state => state.getConvertSettings())
  const resize = useResizeStore(state => state.getResizeOptions())
  const tint = useTintStore(state => state.color)
  const modulate = useModulateStore(state => state.getModulateOptions())
  const format = useFormatStore(state => state.getFormatOptions())

  return {
    ...convertSettings,
    resize,
    tint,
    modulate,
    format
  }
}
