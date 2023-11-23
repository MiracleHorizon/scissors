import { useConvertStore } from '@stores/convert'
import { useResizeStore } from '@stores/resize'
import { useTintStore } from '@stores/tint'
import type { ConvertSettings } from '@libs/Sharp'

export function useConvertSettings(): ConvertSettings {
  const convertSettings = useConvertStore(state => state.getConvertSettings())
  const resize = useResizeStore(state => state.getResizeOptions())
  const tint = useTintStore(state => state.color)

  return {
    ...convertSettings,
    resize,
    tint
  }
}
