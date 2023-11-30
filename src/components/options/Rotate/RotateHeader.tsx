import { RotateCounterClockwiseIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResetRotate } from './ButtonResetRotate'
import { ButtonRemoveRotate } from './ButtonRemoveRotate'

export function RotateHeader() {
  return (
    <OptionSectionHeader
      title='Rotate'
      icon={<RotateCounterClockwiseIcon width='18px' height='18px' />}
    >
      <>
        <ButtonResetRotate />
        <ButtonRemoveRotate />
      </>
    </OptionSectionHeader>
  )
}
