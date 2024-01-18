import { MoveIcon } from '@ui/icons/MoveIcon'
import { OptionSectionHeader } from '@components/OptionSectionHeader'
import { ExtendToolbar } from './ExtendToolbar'
import { DOCS_HASH, ROUTE } from '@lib/router'

export const ExtendHeader = () => (
  <OptionSectionHeader
    title='Extend'
    href={ROUTE.DOCS + DOCS_HASH.EXTEND}
    icon={<MoveIcon width='18px' height='18px' label='extend' />}
  >
    <ExtendToolbar />
  </OptionSectionHeader>
)
