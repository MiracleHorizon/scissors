import { Text } from '@radix-ui/themes'
import { DEFAULT_WITHOUT_REDUCTION } from '@scissors/sharp'

import { DocsTableRow } from '../../../DocsTable/DocsTableRow'

export const ReductionRow = () => (
  <DocsTableRow
    label='reduction'
    description={
      <Text as='p'>
        Do not scale down if the width or height are already greater than the target dimensions.
        <br />
        This may still result in a crop to reach the target dimensions.
      </Text>
    }
    defaultValue={DEFAULT_WITHOUT_REDUCTION ? 'enabled' : 'disabled'}
  />
)
