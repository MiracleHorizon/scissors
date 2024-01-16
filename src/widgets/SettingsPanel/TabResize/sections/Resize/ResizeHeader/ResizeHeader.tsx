import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResizeReset } from './ButtonResizeReset'
import { DocsHash, Route } from '@lib/router'

export const ResizeHeader = () => (
  <OptionSectionHeader
    title='Resize'
    href={Route.DOCS + DocsHash.RESIZE}
    icon={<DimensionsIcon width='18px' height='18px' label='resize' />}
  >
    <ButtonResizeReset />
  </OptionSectionHeader>
)
