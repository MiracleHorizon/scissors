import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'

export function PositionsRow() {
  return (
    <DocsTableRow
      label='value'
      description={
        <Text as='p'>
          A single pixel value to expand the image on all sides or values on the axis (x, y) or
          values for each side.
        </Text>
      }
    />
  )
}
