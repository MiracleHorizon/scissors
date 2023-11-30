import { DimensionsIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonRemoveResize } from './ButtonRemoveResize'
import { ButtonResetResize } from './ButtonResetResize'

export function ResizeHeader() {
  return (
    <OptionSectionHeader title='Resize' icon={<DimensionsIcon width='18px' height='18px' />}>
      <>
        <ButtonResetResize />
        <ButtonRemoveResize />
      </>
    </OptionSectionHeader>
  )
}
