import { RotateCounterClockwiseIcon } from '@ui/icons/RotateCounterClockwiseIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { useRotateStore } from '@stores/rotate'
import { DOCS_HASH, ROUTE } from '@lib/router'
import { DEFAULT_ROTATE_ANGLE } from '@server/sharp'

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
      href={ROUTE.DOCS + DOCS_HASH.ROTATE}
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
