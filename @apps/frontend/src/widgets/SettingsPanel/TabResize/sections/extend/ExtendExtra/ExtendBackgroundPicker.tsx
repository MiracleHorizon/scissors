import { EXTEND_WITH } from '@scissors/sharp'

import { ColorField } from '@ui/ColorField'
import { useExtendStore } from '@stores/extend'

export const ExtendBackgroundPicker = () => {
  const extendBackground = useExtendStore(state => state.background)
  const withDominantBackground = useExtendStore(state => state.withDominantBackground)
  const extendWith = useExtendStore(state => state.extendWith)

  const setExtendBackground = useExtendStore(state => state.setBackground)

  if (!extendBackground || extendWith !== EXTEND_WITH.BACKGROUND) {
    return null
  }

  return (
    <ColorField
      label='Background'
      value={extendBackground}
      disabled={withDominantBackground}
      onValueChange={setExtendBackground}
    />
  )
}
