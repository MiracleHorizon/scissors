import { CheckboxDominantBackground } from '@components/CheckboxDominantBackground'
import { useRotateStore } from '@stores/rotate'

export const RotateDominantBackground = () => {
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
