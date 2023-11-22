import { useConvertStore } from '@stores/convert'
import { useResizeStore } from '@stores/resize'
import type { ConvertSettings } from '@libs/Sharp'

export function useConvertSettings(): ConvertSettings {
  const convertSettings = useConvertStore(state => state.getConvertSettings())
  const resize = useResizeStore(state => state.getResizeOptions())

  return {
    ...convertSettings,
    resize
  }
}
