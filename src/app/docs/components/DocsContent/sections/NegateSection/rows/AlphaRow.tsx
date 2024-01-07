import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function AlphaRow() {
  return (
    <DocsTableRow
      label='alpha'
      description={<Text as='p'>Alpha - whether to negate any alpha channel.</Text>}
      defaultValue='disabled'
    />
  )
}
