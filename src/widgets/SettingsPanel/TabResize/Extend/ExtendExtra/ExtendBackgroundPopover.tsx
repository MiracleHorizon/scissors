'use client'

import { ColorPicker } from '@ui/ColorPicker'
import { useExtendStore } from '@stores/extend'
import { ExtendWith } from '@server/Sharp'

export function ExtendBackgroundPopover() {
  const extendBackground = useExtendStore(state => state.background)
  const extendWith = useExtendStore(state => state.extendWith)

  const setExtendBackground = useExtendStore(state => state.setBackground)

  if (extendWith !== ExtendWith.BACKGROUND) {
    return null
  }

  return (
    <ColorPicker
      color={extendBackground as string}
      setColor={setExtendBackground}
      triggerLabel='Background'
      triggerLabelSize='2'
    />
  )
}
