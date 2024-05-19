import { DimensionsIcon } from '@scissors/react-icons/DimensionsIcon'

import { OptionSectionHeader } from '@widgets/settings-panel/option-section-header'
import { ButtonResetResize } from './button-reset-resize'
import { DOCS_ANCHOR_RESIZE, PATH_DOCS } from '@site/paths'

export const ResizeHeader = () => (
  <OptionSectionHeader
    title='Resize'
    href={PATH_DOCS + DOCS_ANCHOR_RESIZE}
    icon={<DimensionsIcon width='18px' height='18px' label='resize' />}
  >
    <ButtonResetResize />
  </OptionSectionHeader>
)
