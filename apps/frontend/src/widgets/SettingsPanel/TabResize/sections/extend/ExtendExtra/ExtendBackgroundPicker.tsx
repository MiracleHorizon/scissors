import { EXTEND_WITH } from '@scissors/sharp'

import { ColorPicker } from '@ui/ColorPicker'
import { useExtendStore } from '@stores/extend'

export function ExtendBackgroundPicker() {
  const extendBackground = useExtendStore(state => state.background)
  const withDominantBackground = useExtendStore(state => state.withDominantBackground)
  const extendWith = useExtendStore(state => state.extendWith)

  const setExtendBackground = useExtendStore(state => state.setBackground)

  if (!extendBackground || extendWith !== EXTEND_WITH.BACKGROUND) {
    return null
  }

  return (
    <ColorPicker
      color={extendBackground}
      setColor={setExtendBackground}
      disabled={withDominantBackground}
      triggerLabel='Background'
      triggerLabelSize='2'
    />
  )
}
