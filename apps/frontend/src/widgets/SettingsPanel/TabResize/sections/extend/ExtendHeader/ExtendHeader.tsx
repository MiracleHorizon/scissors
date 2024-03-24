import { MoveIcon } from '@ui/icons/MoveIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ExtendToolbar } from './ExtendToolbar'
import { DOCS_ANCHOR_EXTEND, PATH_DOCS } from '@site/paths'

export const ExtendHeader = () => (
  <OptionSectionHeader
    title='Extend'
    href={PATH_DOCS + DOCS_ANCHOR_EXTEND}
    icon={<MoveIcon width='18px' height='18px' label='extend' />}
  >
    <ExtendToolbar />
  </OptionSectionHeader>
)
