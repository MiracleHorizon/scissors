import { RotateCounterClockwiseIcon } from '@scissors/react-icons/RotateCounterClockwiseIcon'
import { DEFAULT_ROTATE_ANGLE } from '@scissors/sharp'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetRotate } from './button-reset-rotate'
import { ButtonRemoveRotate } from './button-remove-rotate'
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
