import { EXTEND_WITH } from '@scissors/sharp'

import { CheckboxDominantBackground } from '@components/CheckboxDominantBackground'
import { useExtendStore } from '@stores/extend'

export const ExtendDominantBackground=()=> {
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
