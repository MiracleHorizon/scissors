import { CheckboxDominantBackground } from '@widgets/settings-panel/checkbox-dominant-background'
import { useRotateStore } from '@stores/rotate'

export function RotateDominantBackground() {
  const withDominantBackground = useRotateStore(state => state.withDominantBackground)
  const toggleDominantBackground = useRotateStore(state => state.toggleDominantBackground)

  const handleToggleDominantBackground = () => toggleDominantBackground()

  return (
    <CheckboxDominantBackground
      checked={withDominantBackground}
      onClick={handleToggleDominantBackground}
    />
  )
}
