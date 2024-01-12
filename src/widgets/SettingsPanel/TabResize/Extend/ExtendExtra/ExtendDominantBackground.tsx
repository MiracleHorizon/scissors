import { CheckboxDominantBackground } from '@components/CheckboxDominantBackground'
import { useExtendStore } from '@stores/extend'
import { ExtendWith } from '@server/Sharp'

export function ExtendDominantBackground() {
  const extendWith = useExtendStore(state => state.extendWith)
  const withDominantBackground = useExtendStore(state => state.withDominantBackground)
  const toggleDominantBackground = useExtendStore(state => state.toggleDominantBackground)

  const handleToggleDominantBackground = () => toggleDominantBackground()

  if (extendWith !== ExtendWith.BACKGROUND) {
    return null
  }

  return (
    <CheckboxDominantBackground
      checked={withDominantBackground}
      onClick={handleToggleDominantBackground}
    />
  )
}
