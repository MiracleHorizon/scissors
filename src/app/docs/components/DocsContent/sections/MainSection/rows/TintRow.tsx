import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function TintRow() {
  return (
    <DocsTableRow
      label='tint'
      description={
        <Text as='p'>
          Tint the image using the provided chroma while preserving the image luminance.
          <br />
          An alpha channel may be present and will be unchanged by the operation.
        </Text>
      }
    />
  )
}
