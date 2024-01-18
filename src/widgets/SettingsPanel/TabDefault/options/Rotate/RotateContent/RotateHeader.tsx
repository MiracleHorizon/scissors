import { RotateCounterClockwiseIcon } from '@ui/icons/RotateCounterClockwiseIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { useRotateStore } from '@stores/rotate'
import { DOCS_HASH, ROUTE } from '@lib/router'

export function RotateHeader() {
  const angle = useRotateStore(state => state.angle)

  return (
    <OptionSectionHeader
      href={ROUTE.DOCS + DOCS_HASH.ROTATE}
      title={angle ? `Rotate: ${angle}°` : 'Rotate'}
      icon={<RotateCounterClockwiseIcon width='18px' height='18px' label='rotation' />}
    >
      <>
        <ButtonResetRotate />
        <ButtonRemoveRotate />
      </>
    </OptionSectionHeader>
  )
}
