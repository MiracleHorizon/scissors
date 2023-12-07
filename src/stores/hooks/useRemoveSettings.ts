import { useCallback } from 'react'

import { useResizeStore } from '@stores/resize'
import { useRotateStore } from '@stores/rotate'
import { useModulateStore } from '@stores/modulate'
import { useGammaStore } from '@stores/gamma'
import { useTintStore } from '@stores/tint'
import { useNormaliseStore } from '@stores/normalise'

export function useRemoveSettings() {
  const removeResize = useResizeStore(state => state.remove)
  const removeRotate = useRotateStore(state => state.remove)
  const removeModulate = useModulateStore(state => state.remove)
  const removeGamma = useGammaStore(state => state.remove)
  const removeTint = useTintStore(state => state.remove)
  const removeNormalise = useNormaliseStore(state => state.remove)

  const handleRemove = useCallback(() => {
    removeResize()
    removeRotate()
    removeModulate()
    removeGamma()
    removeTint()
    removeNormalise()
  }, [removeResize, removeRotate, removeModulate, removeGamma, removeTint, removeNormalise])

  return { handleRemove }
}
