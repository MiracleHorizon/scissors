import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function NegateAlphaRow() {
  return (
    <DocsTableRow
      label='Negate alpha'
      description={<Text as='p'>Alpha - whether to negate any alpha channel.</Text>}
      defaultValue='Disabled'
    />
  )
}
