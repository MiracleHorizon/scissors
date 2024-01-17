import { CheckboxDominantBackground } from '@components/CheckboxDominantBackground'
import { useExtendStore } from '@stores/extend'
import { EXTEND_WITH } from '@server/sharp'

export function ExtendDominantBackground() {
  const extendWith = useExtendStore(state => state.extendWith)
  const withDominantBackground = useExtendStore(state => state.withDominantBackground)
  const toggleDominantBackground = useExtendStore(state => state.toggleDominantBackground)

  const handleToggleDominantBackground = () => toggleDominantBackground()

  if (extendWith !== EXTEND_WITH.BACKGROUND) {
    return null
  }

  return (
    <CheckboxDominantBackground
      checked={withDominantBackground}
      onClick={handleToggleDominantBackground}
    />
  )
}
