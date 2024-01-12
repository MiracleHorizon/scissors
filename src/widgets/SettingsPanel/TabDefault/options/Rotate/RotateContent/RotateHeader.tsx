import { RotateCounterClockwiseIcon } from '@ui/icons/RotateCounterClockwiseIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'
import { useRotateStore } from '@stores/rotate'
import { DocsHash, Route } from '@lib/router'

export function RotateHeader() {
  const angle = useRotateStore(state => state.angle)

  return (
    <OptionSectionHeader
      href={Route.DOCS + DocsHash.ROTATE}
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
