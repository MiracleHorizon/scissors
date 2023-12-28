import { DimensionsIcon } from '@radix-ui/react-icons'

import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResizeReset } from './ButtonResizeReset'
import { DocsHash, Route } from '@lib/router'

export function ResizeHeader() {
  return (
    <OptionSectionHeader
      title='Resize'
      href={Route.DOCS + DocsHash.RESIZE}
      icon={<DimensionsIcon width='18px' height='18px' />}
    >
      <ButtonResizeReset />
    </OptionSectionHeader>
  )
}
