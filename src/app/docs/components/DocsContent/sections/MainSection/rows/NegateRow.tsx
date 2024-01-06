import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function NegateRow() {
  return (
    <DocsTableRow
      label='negate'
      description={<Text as='p'>Produce the negative of the image.</Text>}
      defaultValue='disabled'
    />
  )
}
