import { DimensionsIcon } from '@ui/icons/DimensionsIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ButtonResizeReset } from './ButtonResizeReset'
import { DOCS_HASH, ROUTE } from '@lib/router'

export const ResizeHeader = () => (
  <OptionSectionHeader
    title='Resize'
    href={ROUTE.DOCS + DOCS_HASH.RESIZE}
    icon={<DimensionsIcon width='18px' height='18px' label='resize' />}
  >
    <ButtonResizeReset />
  </OptionSectionHeader>
)
