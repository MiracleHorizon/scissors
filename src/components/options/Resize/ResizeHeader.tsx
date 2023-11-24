import { DimensionsIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonRemoveResize } from './ButtonRemoveResize'

export function ResizeHeader() {
  return (
    <OptionSectionHeader title='Resize' icon={<DimensionsIcon width='18px' height='18px' />}>
      <ButtonRemoveResize />
    </OptionSectionHeader>
  )
}
