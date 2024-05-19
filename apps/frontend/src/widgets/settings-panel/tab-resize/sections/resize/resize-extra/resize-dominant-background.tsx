import { CheckboxDominantBackground } from '@widgets/settings-panel/checkbox-dominant-background'
import { useResizeStore } from '@stores/resize'

export function ResizeDominantBackground() {
  const withDominantBackground = useResizeStore(state => state.withDominantBackground)
  const toggleDominantBackground = useResizeStore(state => state.toggleDominantBackground)

  const handleToggleDominantBackground = () => toggleDominantBackground()

  return (
    <CheckboxDominantBackground
      checked={withDominantBackground}
      onClick={handleToggleDominantBackground}
    />
  )
}
