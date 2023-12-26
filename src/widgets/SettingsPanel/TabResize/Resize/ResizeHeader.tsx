import { DimensionsIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@widgets/SettingsPanel/OptionSectionHeader'
import { ButtonResetResize } from './ButtonResetResize'
import { DocsHash, Route } from '@lib/router'

export function ResizeHeader() {
  return (
    <OptionSectionHeader
      title='Resize'
      href={Route.DOCS + DocsHash.RESIZE}
      icon={<DimensionsIcon width='18px' height='18px' />}
    >
      <ButtonResetResize />
    </OptionSectionHeader>
  )
}
