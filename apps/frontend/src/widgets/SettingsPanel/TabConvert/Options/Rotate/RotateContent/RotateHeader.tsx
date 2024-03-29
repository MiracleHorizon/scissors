import { DEFAULT_ROTATE_ANGLE } from '@scissors/sharp'

import { RotateCounterClockwiseIcon } from '@ui/icons/RotateCounterClockwiseIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { useRotateStore } from '@stores/rotate'
import { DOCS_ANCHOR_ROTATE, PATH_DOCS } from '@site/paths'

export function RotateHeader() {
  const angle = useRotateStore(state => {
    const value = state.angle

    if (value === null) {
      return DEFAULT_ROTATE_ANGLE
    }

    return value
  })

  return (
    <OptionSectionHeader
      href={PATH_DOCS + DOCS_ANCHOR_ROTATE}
      title={`Rotate: ${angle}°`}
      icon={<RotateCounterClockwiseIcon width='18px' height='18px' label='rotation' />}
    >
      <>
        <ButtonResetRotate />
        <ButtonRemoveRotate />
      </>
    </OptionSectionHeader>
  )
}
