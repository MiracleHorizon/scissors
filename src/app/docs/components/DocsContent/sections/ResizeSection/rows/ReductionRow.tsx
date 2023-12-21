import { Text } from '@radix-ui/themes'

import { DocsTableRow } from '../../../DocsSection/DocsTable/DocsTableRow'
import { DEFAULT_WITHOUT_REDUCTION } from '@libs/Sharp'

export function ReductionRow() {
  return (
    <DocsTableRow
      label='Reduction'
      description={
        <Text as='p'>
          Do not scale down if the width or height are already greater than the target dimensions.
          <br />
          This may still result in a crop to reach the target dimensions.
        </Text>
      }
      defaultValue={DEFAULT_WITHOUT_REDUCTION ? 'Enabled' : 'Disabled'}
    />
  )
}
