import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsTable/DocsTableRow'

export function ValueRow() {
  return (
    <DocsTableRow
      label='value'
      description={<Text as='p'>Produce the negative of the image.</Text>}
      defaultValue='disabled'
    />
  )
}
