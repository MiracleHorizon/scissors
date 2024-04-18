import { DEFAULT_ROTATE_ANGLE } from '@scissors/sharp'
import { RotateCounterClockwiseIcon } from '@scissors/react-icons/RotateCounterClockwiseIcon'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { useRotateStore } from '@stores/rotate'
import { DOCS_ANCHOR_ROTATE, PATH_DOCS } from '@site/paths'

export function RotateHeader() {
  const angle = useRotateStore(state => state.angle) ?? DEFAULT_ROTATE_ANGLE

  return (
    <OptionSectionHeader
      href={PATH_DOCS + DOCS_ANCHOR_ROTATE}
      title={`Rotation: ${angle}°`}
      icon={<RotateCounterClockwiseIcon width='18px' height='18px' label='rotation' />}
    >
      <>
        <ButtonResetRotate />
        <ButtonRemoveRotate />
      </>
    </OptionSectionHeader>
  )
}
