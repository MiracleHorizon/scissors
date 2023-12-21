import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function GrayscaleRow() {
  return (
    <DocsTableRow
      label='Grayscale'
      description={
        <Text as='p'>
          Convert to 8-bit grayscale; 256 shades of gray.
          <br />
          An alpha channel may be present, and will be unchanged by the operation.
        </Text>
      }
      defaultValue='Disabled'
    />
  )
}
