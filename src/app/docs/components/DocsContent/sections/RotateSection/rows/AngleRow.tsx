import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_ROTATE_ANGLE } from '@server/Sharp'

export function AngleRow() {
  return (
    <DocsTableRow
      label='angle'
      description={<Text as='p'>Rotates the image to a specified angle.</Text>}
      defaultValue={`${DEFAULT_ROTATE_ANGLE}°`}
    />
  )
}
