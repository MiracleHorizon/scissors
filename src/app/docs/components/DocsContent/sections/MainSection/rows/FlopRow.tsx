import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function FlopRow() {
  return (
    <DocsTableRow
      label='Flop'
      description={<Text as='p'>Mirror the image horizontally (left-right) about the y-axis.</Text>}
      defaultValue='Disabled'
    />
  )
}
