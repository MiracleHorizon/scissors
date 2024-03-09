import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResizeReset } from './ButtonResizeReset'
import { DOCS_HASH_RESIZE, PATH_DOCS } from '@site/paths'

export const ResizeHeader = () => (
  <OptionSectionHeader
    title='Resize'
    href={PATH_DOCS + DOCS_HASH_RESIZE}
    icon={<DimensionsIcon width='18px' height='18px' label='resize' />}
  >
    <ButtonResizeReset />
  </OptionSectionHeader>
)
