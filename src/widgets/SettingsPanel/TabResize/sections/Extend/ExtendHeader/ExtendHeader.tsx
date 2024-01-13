import { MoveIcon } from '@ui/icons/MoveIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ExtendToolbar } from './ExtendToolbar'
import { DocsHash, Route } from '@lib/router'

export const ExtendHeader = () => (
  <OptionSectionHeader
    title='Extend'
    href={Route.DOCS + DocsHash.EXTEND}
    icon={<MoveIcon width='18px' height='18px' label='extend' />}
  >
    <ExtendToolbar />
  </OptionSectionHeader>
)
